mercadopago = require('TEST-106b4090-202f-42cf-8033-054a08e15749');
mercadopago.configure({ access_token: process.env.TEST-5799463110278132-052100-5537e52dfa3faf46ea400fd707483c3f-2332574274 });
module.exports = async (req, res) => {
  try {
    const items = req.body.items.map(i => ({
      title: i.title,
      unit_price: i.price,
      quantity: i.qty,
      currency_id: 'CLP'
    }));
    const preference = await mercadopago.preferences.create({ items });
    res.json({ init_point: preference.body.init_point });
  } catch (e) {
    console.error('API /create_preference error:', e);
    res.status(500).json({ error: e.message });
  }

}

