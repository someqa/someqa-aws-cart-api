CREATE TABLE IF NOT EXISTS carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  status VARCHAR(8) NOT NULL CHECK (status IN ('OPEN', 'ORDERED'))
);

CREATE TABLE IF NOT EXISTS cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id UUID REFERENCES carts(id),
  product_id UUID NOT NULL,
  count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  cart_id UUID REFERENCES carts(id),
  payment JSON NOT NULL,
  delivery JSON NOT NULL,
  comments TEXT,
  status VARCHAR(20) NOT NULL,
  total NUMERIC NOT NULL
);

-- Insert test data into carts table
INSERT INTO carts (user_id, created_at, updated_at, status) VALUES
  ('11111111-1111-1111-1111-111111111111', NOW(), NOW(), 'OPEN'),
  ('22222222-2222-2222-2222-222222222222', NOW(), NOW(), 'ORDERED');

-- Insert test data into cart_items table
INSERT INTO cart_items (cart_id, product_id, count) VALUES
  ((SELECT id FROM carts WHERE user_id = '11111111-1111-1111-1111-111111111111'), '33333333-3333-3333-3333-333333333333', 2),
  ((SELECT id FROM carts WHERE user_id = '22222222-2222-2222-2222-222222222222'), '44444444-4444-4444-4444-444444444444', 1),
  ((SELECT id FROM carts WHERE user_id = '22222222-2222-2222-2222-222222222222'), '33333333-3333-3333-3333-333333333333', 3);
