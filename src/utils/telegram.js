// Токен бота и ID чата (замените на свои)
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';

export const sendTelegramNotification = async (formData) => {
  const { name, phone, comment, buildingType, floors, capacity } = formData;

  // Формируем красиво оформленное сообщение в формате Markdown
  const message = `
🚨 *НОВАЯ ЗАЯВКА С САЙТА IMO* 🚨

👤 *Имя:* ${name || 'Не указано'}
📞 *Телефон:* ${phone}

🏢 *Детали объекта:*
• *Тип здания:* ${buildingType || 'Не выбран'}
• *Количество этажей:* ${floors || 'Не указано'}
• *Грузоподъемность:* ${capacity ? `${capacity} кг` : 'Не указана'}

💬 *Комментарий:*
${comment || 'Без комментария'}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error);
    return false;
  }
};