import { Module } from '@nestjs/common';
import { Cart } from './cart/cart.entity';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { CartItem } from './cart/cart-item.entity';
import { Product } from './cart/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Cart, CartItem, Product],
      synchronize: false,
      //for learning purposes, not for prod
      ssl: {
        rejectUnauthorized: false
      }
    }),
    AuthModule,
    CartModule,
    OrderModule,
  ],

  controllers: [
    AppController,
  ],
  providers: [],
})

export class AppModule { }
