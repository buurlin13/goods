import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contacts" className="bg-workwear-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Icon icon="lucide:hard-hat" width={32} height={32} className="text-primary" />
              <p className="font-bold text-inherit ml-2">СПЕЦФОРМА</p>
            </div>
            <p className="text-gray-300 mb-4">
              Виробництво та продаж якісного спецодягу для різних галузей з 2005 року.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-gray-300 hover:text-primary w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-gray-300 hover:text-primary w-5 h-5" />
              </Link>
              <Link href="#" aria-label="VK">
                <Icon icon="logos:vk" className="text-gray-300 hover:text-primary w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Telegram">
                <Icon icon="logos:telegram" className="text-gray-300 hover:text-primary w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Каталог</h3>
            <ul className="space-y-2">
              {["Будівельний одяг", "Медичний одяг", "Одяг для громадського харчування", "Захисні костюми", "Корпоративний одяг"].map((item) => (
                <li key={item}>
                  <Link href="#" color="foreground" className="text-gray-300 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Компанія</h3>
            <ul className="space-y-2">
              {["Про нас", "Наші клієнти", "Виробництво", "Доставка", "Оплата"].map((item) => (
                <li key={item}>
                  <Link href="#" color="foreground" className="text-gray-300 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:map-pin" className="text-primary mt-1 w-5 h-5" />
                <span className="text-gray-300">м. Київ, вул. Промислова, буд. 14, корп. 3</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary w-5 h-5" />
                <Link href="tel:+380441234567" color="foreground" className="text-gray-300 hover:text-primary">
                  +38 (044) 123-45-67
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary w-5 h-5" />
                <Link href="mailto:info@specforma.ua" color="foreground" className="text-gray-300 hover:text-primary">
                  info@specforma.ua
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:clock" className="text-primary w-5 h-5" />
                <span className="text-gray-300">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-6 bg-workwear-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} СПЕЦФОРМА. Всі права захищені.
          </p>
          <div className="flex gap-4">
            <Link href="#" color="foreground" className="text-sm text-gray-400 hover:text-primary">
              Політика конфіденційності
            </Link>
            <Link href="#" color="foreground" className="text-sm text-gray-400 hover:text-primary">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};