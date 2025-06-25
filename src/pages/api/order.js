import { Telegram } from 'telegraf';

const bot = new Telegram(process.env.TELEGRAM_BOT_TOKEN);

export default async function handler(req, res) {
  const { productId } = req.query;
  
  if (!productId) {
    return res.status(400).json({ error: 'Product ID is required' });
  }

  try {
    // Тут ви можете отримати інформацію про продукт з вашої бази даних
    const product = { id: productId, name: 'Тестовий продукт' };

    // Відправка повідомлення в Telegram
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, 
      `Нове замовлення!\nПродукт: ${product.name}\nID: ${product.id}`
    );

    res.status(200).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Error placing order' });
  }
}
