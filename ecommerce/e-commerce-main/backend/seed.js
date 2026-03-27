import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./src/models/Product.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const sampleProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 199.99,
    category: "Electronics",
    stock: 50,
    image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    status: "active"
  },
  {
    name: "Smart Fitness Watch",
    description: "Track your health and fitness with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    price: 299.99,
    category: "Electronics",
    stock: 30,
    image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    status: "active"
  },
  {
    name: "Ergonomic Office Chair",
    description: "Comfortable and adjustable office chair with lumbar support and breathable mesh material. Ideal for long work sessions.",
    price: 349.99,
    category: "Furniture",
    stock: 20,
    image_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    status: "active"
  },
  {
    name: "Organic Cotton T-Shirt",
    description: "Soft and sustainable organic cotton t-shirt available in multiple colors. Comfortable fit for everyday wear.",
    price: 29.99,
    category: "Clothing",
    stock: 100,
    image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    status: "active"
  },
  {
    name: "Stainless Steel Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Eco-friendly and durable.",
    price: 39.99,
    category: "Sports & Outdoors",
    stock: 75,
    image_url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    status: "active"
  },
  {
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator lights.",
    price: 49.99,
    category: "Electronics",
    stock: 60,
    image_url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
    status: "active"
  },
  {
    name: "Yoga Mat",
    description: "Non-slip yoga mat made from natural rubber with excellent grip and cushioning. Perfect for yoga, pilates, and exercise.",
    price: 59.99,
    category: "Sports & Outdoors",
    stock: 40,
    image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
    status: "active"
  },
  {
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe and brew strength control. Makes up to 12 cups of delicious coffee.",
    price: 129.99,
    category: "Home & Kitchen",
    stock: 25,
    image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    status: "active"
  },
  {
    name: "Leather Wallet",
    description: "Genuine leather wallet with RFID blocking technology and multiple card slots. Slim design fits easily in your pocket.",
    price: 79.99,
    category: "Accessories",
    stock: 45,
    image_url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    status: "active"
  },
  {
    name: "LED Desk Lamp",
    description: "Adjustable LED desk lamp with touch controls and multiple brightness levels. Energy-efficient and eye-friendly lighting.",
    price: 89.99,
    category: "Home & Kitchen",
    stock: 35,
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    status: "active"
  },
  {
    name: "Running Shoes",
    description: "Lightweight running shoes with advanced cushioning and breathable mesh upper. Designed for comfort and performance.",
    price: 149.99,
    category: "Sports & Outdoors",
    stock: 55,
    image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    status: "active"
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures and home use.",
    price: 79.99,
    category: "Electronics",
    stock: 40,
    image_url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    status: "active"
  }
];

const seedProducts = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log("Connected to database");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`Successfully seeded ${products.length} products`);

    // Log the inserted products with their IDs
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - ID: ${product._id}`);
    });

    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedProducts();