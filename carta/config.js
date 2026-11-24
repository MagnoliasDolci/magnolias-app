// Carta digital de Magnolias.
// Los datos de la tienda (WhatsApp, horario, zona, pagos) y los productos se leen EN VIVO del ERP,
// usando el mismo link /exec de ../config.js. Se editan en la hoja: CONFIG (fila 36) y PRODUCTOS (columnas L–P),
// o desde la app ("Sabores y precios" → Carta).
// Esto de abajo solo se usa si el ERP no responde (respaldo).
window.MAGNOLIAS_CARTA = {
  respaldo: 'carta.json',
  notaDelivery: 'El costo del delivery se coordina por WhatsApp.'
};
