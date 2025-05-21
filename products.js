const fetch = require('node-fetch');
module.exports = async (req, res) => {
  try {
    const sellerId = process.env.5151462662405621;
    const token = process.env.TG-682d33123e3d520001a2ace7-2332574274;
    const url = `https://api.mercadolibre.com/sites/MLC/search?seller_id=${5151462662405621}`;
    const response = await fetch(url, { headers: { Authorization: `Bearer ${TG-682d33123e3d520001a2ace7-2332574274}` } });
    if (!response.ok) throw new Error('Error al obtener productos');
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (err) {
    console.error('API /products error:', err);
    res.status(500).json({ error: err.message });
  }
}
;
// This code fetches products from the Mercado Libre API using a seller ID and token.


