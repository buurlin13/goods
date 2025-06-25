import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Hero } from "./components/hero";
import { CategoryShowcase } from "./components/category-showcase";
import { Footer } from "./components/footer";
import ProductDetail from "./pages/product-detail";
import Catalog from "./pages/catalog";
import Contacts from "./pages/contacts";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Головна", href: "/" },
    { name: "Про нас", href: "#about" },
    { name: "Каталог", href: "/catalog" },
    { name: "Послуги", href: "#services" },
    { name: "Контакти", href: "/contacts" },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-workwear-900 text-white">
        <Navbar 
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="xl"
          className="bg-workwear-800/90 backdrop-blur-md"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <Icon icon="lucide:hard-hat" width={32} height={32} className="text-primary" />
              <p className="font-bold text-inherit ml-2">СПЕЦФОРМА</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {menuItems.map((item, index) => (
              <NavbarItem key={`${item.name}-${index}`}>
                <Link color="foreground" href={item.href} className="font-medium">
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          
          <NavbarContent justify="end">
            <NavbarItem>
              <Button 
                as="a" 
                color="primary" 
                href="https://t.me/your_bot_username" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="flat"
                className="text-white"
              >
                Замовити в Telegram
              </Button>
            </NavbarItem>
          </NavbarContent>
          
          <NavbarMenu className="bg-workwear-800/95">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Link
                  color="foreground"
                  className="w-full py-2 text-lg"
                  href={item.href}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div id="catalog" className="py-16 px-4 max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12 text-white">Наші категорії спецодягу</h2>
                  <CategoryShowcase />
                </div>
              </>
            } />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}