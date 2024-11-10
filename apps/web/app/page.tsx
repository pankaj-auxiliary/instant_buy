"use client";

import { CategoryBar } from "@repo/ui/categoryBar";
import Navbar from "@repo/ui/navbar";
import { ProductCard } from "@repo/ui/productCard";
import Sidebar from "@repo/ui/sidebar";
import React, { useState } from "react";
import { CartSidebar } from "@repo/ui/cartSidebar";

const products = [
  {
    name: "Fresh Organic Bananas",
    price: 2.99,
    weight: "1 bunch (5-7 pieces)",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
    discount: 10,
  },
  {
    name: "Premium Whole Milk",
    price: 3.49,
    weight: "1 gallon",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Fresh Avocados",
    price: 4.99,
    weight: "4 pieces",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800",
    discount: 15,
  },
  {
    name: "Organic Eggs",
    price: 5.99,
    weight: "12 count",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Fresh Strawberries",
    price: 3.99,
    weight: "1 lb",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800",
    discount: 20,
  },
  {
    name: "Whole Grain Bread",
    price: 2.99,
    weight: "1 loaf",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
  },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight: string;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Fresh Organic Bananas",
      price: 2.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800",
      weight: "1 bunch (5-7 pieces)",
    },
    {
      id: 2,
      name: "Premium Whole Milk",
      price: 3.49,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
      weight: "1 gallon",
    },
  ]);

  const updateCartItemQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity === 0) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
      />
      <CategoryBar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Trending Products
          </h2>
          <p className="text-gray-600 mt-1">
            Get your daily needs delivered in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
