#Layer 1 - building application, node:20 with more features - easier build, doesn't influence the final image size
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set NODE_ENV to production for the build
ENV NODE_ENV=production

# Build the NestJS application
RUN npm run build

# Layer 2 - copying only necessary parts, which reduces final image size; using alpine version of node
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist


# Expose the port the app runs on
EXPOSE 4000

# Start the NestJS application
CMD ["node", "dist/main"]
