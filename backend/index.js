// backend/index.js
const { Telegraf } = require('telegraf');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to your Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// 2. Setup your Telegram Bot
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`Welcome to ALPHADOGS! 🐶`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🕹️ Play Now", web_app: { url: process.env.FRONTEND_URL } }]
      ]
    }
  });
});

bot.launch();

// 3. Simple API to check if server is alive
app.get('/', (req, res) => res.send("ALPHADOGS Server is Running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));