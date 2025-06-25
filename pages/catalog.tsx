import React, { useState } from 'react';
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from '@/components/ImageModal';

const products = [
  {
    id: 1,
    name: "Захисний костюм",
    description: "Високоякісний захисний костюм для професійного використання.",
    price: 1500,
    images: [
      "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-blue-1",
      "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-blue-2",
    ],
  },
  {
    id: 2,
    name: "Робочі рукавиці",
    description: "Міцні рукавиці для важких робіт.",
    price: 200,
    images: [
      "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-gloves",
    ],
  },
  {
    id: 3,
    name: "Захисна каска",
    description: "Надійна каска для будівельних робіт.",
    price: 500,
    images: [
      "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-helmet",
    ],
  },
];

const Catalog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images, index) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Каталог товарів</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-workwear-800 border border-workwear-700"
          >
            <CardBody>
              <div
                className="relative group cursor-pointer mb-4"
                onClick={() => openModal(product.images, 0)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition">
                  <Icon icon="mdi:magnify" className="text-white text-4xl" />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-white mb-2">{product.name}</h2>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-white mb-4">Ціна: {product.price} грн</p>

              <Button
                as="a"
                href={`/api/order?productId=${product.id}`}
                color="primary"
                className="w-full text-white"
              >
                Замовити
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      {isModalOpen && (
        <ImageModal
          images={currentImages}
          currentIndex={currentIndex}
          onClose={() => setIsModalOpen(false)}
          onNext={() =>
            setCurrentIndex((prev) => (prev + 1) % currentImages.length)
          }
          onPrev={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + currentImages.length) % currentImages.length
            )
          }
        />
      )}
    </div>
  );
};

export default Catalog;