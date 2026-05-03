module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY nao configurada.' });

  try {
    const { systemPrompt, userContent } = req.body;
    let imageBase64 = null, imageMime = 'image/jpeg', userText = '';

    for (const part of userContent) {
      if (part.type === 'image') { imageBase64 = part.source.data; imageMime = part.source.media_type || 'image/jpeg'; }
      if (part.type === 'text') userText = part.text;
    }

    const parts = [];
    if (imageBase64) parts.push({ inline_data: { mime_type: imageMime, data: imageBase64 } });
    parts.push({ text: systemPrompt + '\n\n' + userText });

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ role: 'user', parts }], generationConfig: { temperature: 0.1, maxOutputTokens: 1500 } })
    });

    if (!response.ok) return res.status(response.status).json({ error: await response.text() });

    const data = await response.json();
    return res.status(200).json({ text: data.candidates?.[0]?.content?.parts?.[0]?.text || '' });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
