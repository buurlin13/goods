import React from 'react';
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Контакти</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-workwear-800 border border-workwear-700">
            <CardBody>
              <h2 className="text-xl font-semibold text-white mb-4">Наші контакти</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Icon icon="lucide:map-pin" className="text-primary w-5 h-5" />
                  <span className="text-gray-300">м. Київ, вул. Промислова, буд. 14, корп. 3</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="lucide:phone" className="text-primary w-5 h-5" />
                  <a href="tel:+380441234567" className="text-gray-300 hover:text-primary">+38 (044) 123-45-67</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="lucide:mail" className="text-primary w-5 h-5" />
                  <a href="mailto:info@specforma.ua" className="text-gray-300 hover:text-primary">info@specforma.ua</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="lucide:clock" className="text-primary w-5 h-5" />
                  <span className="text-gray-300">Пн-Пт: 9:00 - 18:00</span>
                </li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-workwear-800 border border-workwear-700">
            <CardBody>
              <h2 className="text-xl font-semibold text-white mb-4">Напишіть нам</h2>
              <form className="space-y-4">
                <Input 
                  label="Ім'я" 
                  placeholder="Введіть ваше ім'я" 
                  className="bg-workwear-700 text-white"
                />
                <Input 
                  label="Email" 
                  placeholder="Введіть ваш email" 
                  type="email" 
                  className="bg-workwear-700 text-white"
                />
                <Textarea 
                  label="Повідомлення" 
                  placeholder="Введіть ваше повідомлення" 
                  className="bg-workwear-700 text-white"
                />
                <Button color="primary" className="w-full">
                  Надіслати
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;