require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.GROQ_API_KEY;

app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.use(express.static(path.join(__dirname)));

app.post('/api/ai-plan', async (req, res) => {
  if (!API_KEY) return res.status(500).json({ error: 'Missing API key. Set GROQ_API_KEY in your .env file.' });
  try {
    // Convert from Anthropic request format to Groq (OpenAI-compatible) format
    const { messages, max_tokens } = req.body;
    const groqBody = {
      model: 'llama-3.3-70b-versatile',
      messages: messages,
      max_tokens: max_tokens || 1000,
      temperature: 0.7
    };

    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(groqBody)
    });
    const data = await r.json();

    if (!r.ok) {
      console.error('Groq API error:', JSON.stringify(data));
      return res.status(r.status).json({ error: data.error?.message || 'Groq API error' });
    }

    // Map Groq (OpenAI-compatible) response back to Anthropic-style format the frontend expects
    const text = data.choices?.[0]?.message?.content || '';
    res.json({ content: [{ text }] });
  } catch (err) {
    console.error('Proxy error:', err?.message || err);
    res.status(502).json({ error: 'Proxy request failed: ' + (err?.message || String(err)) });
  }
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://localhost:${PORT}`));
