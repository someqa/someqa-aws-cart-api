import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Cart, CartStatuses } from '../cart.entity';
import { CartItem } from '../cart-item.entity';
import { Product } from '../product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemsRepository: Repository<CartItem>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) { }

  async findByUserId(userId: string): Promise<Cart | undefined> {
    return this.cartsRepository.findOne({
      where: { user_id: userId },
      relations: ['items', 'items.product'],
    });
  }

  async createByUserId(userId: string): Promise<Cart> {
    const cart = this.cartsRepository.create({
      id: uuidv4(),
      user_id: userId,
      items: [],
      status: CartStatuses.OPEN,
    });
    return this.cartsRepository.save(cart);
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    let cart = await this.findByUserId(userId);
    if (!cart) {
      cart = await this.createByUserId(userId);
    }
    return cart;
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<Cart> {
    const cart = await this.findOrCreateByUserId(userId);
    const existingItems = await this.cartItemsRepository.find({ where: { cart } });
    await this.cartItemsRepository.remove(existingItems);

    const newItems = [];
    for (const item of items) {
      const product = await this.productsRepository.findOne({ where: { id: item.product.id } });
      if (product) {
        const cartItem = this.cartItemsRepository.create({
          ...item,
          product,
          cart,
        });
        newItems.push(cartItem);
      }
    }
    await this.cartItemsRepository.save(newItems);

    cart.items = newItems;
    return this.cartsRepository.save(cart);
  }

  async removeByUserId(userId: string): Promise<void> {
    const cart = await this.findByUserId(userId);
    if (cart) {
      await this.cartsRepository.remove(cart);
    }
  }
}
