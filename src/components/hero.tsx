import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-workwear-800 to-workwear-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Якісний спецодяг для вашого бізнесу
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Виробництво та продаж професійного робочого одягу будь-якої складності з індивідуальним підходом до кожного клієнта.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button 
                color="primary" 
                size="lg" 
                className="font-medium"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Дивитись каталог
              </Button>
              <Button 
                variant="bordered" 
                color="primary" 
                size="lg" 
                className="font-medium"
              >
                Дізнатися більше
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-workwear-700 overflow-hidden">
                    <img 
                      src={`https://img.heroui.chat/image/avatar?w=40&h=40&u=${i}`} 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} icon="lucide:star" className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-300">Понад 500+ задоволених клієнтів</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://img.heroui.chat/image/clothing?w=600&h=450&u=workwear-hero" 
                alt="Робочий одяг" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-workwear-700 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Icon icon="lucide:check-circle" className="text-primary-300 w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-white">Сертифікована продукція</p>
                  <p className="text-sm text-gray-300">ДСТУ та ISO стандарти</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { icon: "lucide:shield-check", title: "Гарантія якості", description: "Контроль на всіх етапах" },
          { icon: "lucide:truck", title: "Швидка доставка", description: "По всій Україні" },
          { icon: "lucide:settings", title: "Індивідуальне пошиття", description: "За вашими вимогами" },
          { icon: "lucide:badge-check", title: "Сертифікація", description: "Відповідність стандартам" },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-primary/20 p-3 rounded-full">
              <Icon icon={feature.icon} className="text-primary-300 w-6 h-6" />
            </div>
            <h3 className="font-semibold text-white">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};