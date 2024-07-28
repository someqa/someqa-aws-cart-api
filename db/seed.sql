-- Create tables
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL
);

CREATE TABLE carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  status VARCHAR(8) NOT NULL CHECK (status IN ('OPEN', 'ORDERED'))
);

CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id UUID REFERENCES carts(id),
  product_id UUID REFERENCES products(id),
  count INTEGER NOT NULL
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  cart_id UUID REFERENCES carts(id),
  payment JSON NOT NULL,
  delivery JSON NOT NULL,
  comments TEXT,
  status VARCHAR(20) NOT NULL,
  total NUMERIC NOT NULL
);

-- Insert data into products
INSERT INTO products (title, description, price) VALUES
  ('Product 1', 'Description for Product 1', 10.00),
  ('Product 2', 'Description for Product 2', 20.00),
  ('Product 3', 'Description for Product 3', 30.00),
  ('Product 4', 'Description for Product 4', 40.00);

-- Insert data into carts
INSERT INTO carts (user_id, created_at, updated_at, status) VALUES
  ('11111111-1111-1111-1111-111111111111', NOW(), NOW(), 'OPEN'),
  ('22222222-2222-2222-2222-222222222222', NOW(), NOW(), 'ORDERED');

-- Insert data into cart_items
INSERT INTO cart_items (cart_id, product_id, count) VALUES
  ((SELECT id FROM carts WHERE user_id = '11111111-1111-1111-1111-111111111111'), (SELECT id FROM products WHERE title = 'Product 3'), 2),
  ((SELECT id FROM carts WHERE user_id = '22222222-2222-2222-2222-222222222222'), (SELECT id FROM products WHERE title = 'Product 4'), 1),
  ((SELECT id FROM carts WHERE user_id = '22222222-2222-2222-2222-222222222222'), (SELECT id FROM products WHERE title = 'Product 3'), 3);

 