import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ImageModal from '@/components/ImageModal'; // импорт через alias

const products = [
  {
    id: 1,
    name: "Захисний костюм",
    description: "Високоякісний захисний костюм для професійного використання. Забезпечує максимальний захист та комфорт під час роботи.",
    price: 1500,
    colors: [
      { name: 'Синій', value: 'blue' },
      { name: 'Зелений', value: 'green' },
    ],
    images: {
      blue: [
        "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-blue-1",
        "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-blue-2",
        "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-blue-3",
      ],
      green: [
        "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-green-1",
        "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-green-2",
        "https://img.heroui.chat/image/clothing?w=600&h=400&u=workwear-green-3",
      ],
    },
  },
  // можешь добавить другие товары
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const fetchedProduct = products.find(p => p.id === parseInt(id, 10));
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setSelectedColor(fetchedProduct.colors[0].value);
    }
  }, [id]);

  if (!product) {
    return <div className="text-white text-center">Завантаження...</div>;
  }

  const images = product.images[selectedColor];

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="bg-workwear-800 border border-workwear-700">
        <CardBody>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center space-x-4 mb-6">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-workwear-800 focus:ring-primary ${
                    selectedColor === color.value ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color.value)}
                  aria-label={`Вибрати колір ${color.name}`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition">
                    <Icon icon="mdi:magnify" className="text-white text-4xl" />
                  </div>
                </div>
              ))}
            </div>

            <h1 className="text-2xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-white mb-6">Ціна: {product.price} грн</p>

            <Button
              color="primary"
              size="lg"
              className="w-full"
              endContent={<Icon icon="logos:telegram" />}
              as="a"
              href="https://t.me/your_telegram_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Замовити через Telegram
            </Button>
          </motion.div>
        </CardBody>
      </Card>

      {isModalOpen && (
        <ImageModal
          images={images}
          currentIndex={modalImageIndex}
          onClose={() => setIsModalOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default ProductDetail;
