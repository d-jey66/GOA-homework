"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SamsungWebsite() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Galaxy S24 Ultra',
      category: 'Smartphones',
      icon: '📱',
      description: 'Experience the pinnacle of mobile innovation with AI-powered features and stunning photography.',
      features: ['200MP Camera', 'S Pen Included', 'Titanium Frame']
    },
    {
      id: 2,
      name: 'Neo QLED 8K TV',
      category: 'Televisions',
      icon: '📺',
      description: 'Immerse yourself in breathtaking 8K resolution with Quantum HDR technology.',
      features: ['8K AI Upscaling', 'Object Tracking Sound', 'Smart Hub']
    },
    {
      id: 3,
      name: 'Galaxy Watch6',
      category: 'Wearables',
      icon: '⌚',
      description: 'Track your health and fitness with advanced sensors and personalized insights.',
      features: ['Sleep Coaching', 'Heart Rate Monitor', '40+ hour battery']
    },
    {
      id: 4,
      name: 'Galaxy Book4',
      category: 'Laptops',
      icon: '💻',
      description: 'Power through your day with Intel Core Ultra processors and seamless connectivity.',
      features: ['Intel Core Ultra', 'Dynamic AMOLED 2X', 'All-day battery']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white tracking-tight">SAMSUNG</h1>
            <nav className="hidden md:flex gap-6">
              <a href="#products" className="text-white/80 hover:text-white transition">Products</a>
              <a href="#about" className="text-white/80 hover:text-white transition">About</a>
              <a href="#support" className="text-white/80 hover:text-white transition">Support</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Innovation That<br />Inspires The World
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Discover cutting-edge technology that transforms everyday experiences into extraordinary moments.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
          Explore Products →
        </Button>
      </section>

      <section id="products" className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            return (
              <Card 
                key={product.id}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 duration-300"
                onClick={() => setActiveProduct(product.id === activeProduct ? null : product.id)}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                    {product.icon}
                  </div>
                  <CardTitle className="text-white">{product.name}</CardTitle>
                  <CardDescription className="text-white/60">{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-sm mb-4">{product.description}</p>
                  {activeProduct === product.id && (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                        Learn More
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-3xl text-white">About Samsung</CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                Samsung Electronics is a global leader in technology, opening new possibilities for people everywhere. 
                Through relentless innovation and discovery, we are transforming the worlds of TVs, smartphones, 
                wearable devices, tablets, and more.
              </p>
              <p>
                We bring together world-class engineers and designers to create products that inspire and empower 
                billions of people across the globe. Our commitment to sustainability and social responsibility 
                drives us to build a better future for all.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 backdrop-blur-sm bg-black/20 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-white/60">
            <p>&copy; 2024 Samsung Electronics. All rights reserved.</p>
            <p className="text-sm mt-2">This is a demo website created for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}