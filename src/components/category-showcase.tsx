import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Будівельний одяг",
    image: "https://img.heroui.chat/image/clothing?w=400&h=300&u=construction",
    description: "Міцний та комфортний одяг для будівельних робіт",
  },
  {
    id: 2,
    name: "Медичний одяг",
    image: "https://img.heroui.chat/image/clothing?w=400&h=300&u=medical",
    description: "Професійний одяг для медичного персоналу",
  },
  {
    id: 3,
    name: "Одяг для громадського харчування",
    image: "https://img.heroui.chat/image/clothing?w=400&h=300&u=restaurant",
    description: "Спеціалізований одяг для працівників громадського харчування",
  },
  {
    id: 4,
    name: "Захисні костюми",
    image: "https://img.heroui.chat/image/clothing?w=400&h=300&u=protective",
    description: "Костюми з підвищеним захистом для небезпечних умов праці",
  },
  {
    id: 5,
    name: "Корпоративний одяг",
    image: "https://img.heroui.chat/image/clothing?w=400&h=300&u=corporate",
    description: "Брендований одяг для вашої компанії",
  },
  {
    id: 6,
    name: "Сезонний спецодяг",
    image: "https://img.heroui.chat/image/clothing?w=400&h=300&u=seasonal",
    description: "Одяг для різних погодних умов та сезонів",
  },
];

export const CategoryShowcase = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link to={`/product/${category.id}`} className="block">
            <Card className="overflow-visible bg-workwear-800 border border-workwear-700 hover:bg-workwear-700 transition-colors" isPressable>
              <CardBody className="p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <Button 
                    color="primary" 
                    variant="flat" 
                    size="sm" 
                    endContent={<Icon icon="lucide:arrow-right" />}
                    className="w-full text-white"
                  >
                    Детальніше
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};