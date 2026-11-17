# Magnolias · App de registro

App instalable (PWA) para el celular de **Magnolias · Repostería artesanal**. Abre en pantalla completa, con el ícono de la marca, la app de registro diario conectada al ERP en Google Sheets.

- La página solo muestra la app: **no guarda datos**. Todo se lee y se escribe en vivo en la hoja "MAGNOLIAs · ERP + App".
- La app pide un **PIN de 4 dígitos** (una vez por celular). Sin el PIN no se puede leer ni registrar nada.
- Para ver o cambiar el PIN: en la hoja, menú **MAGNOLIAs → Ver / cambiar PIN de la app**.

## Configuración (una sola línea)
En `config.js`, pegar el link de la implementación de Apps Script (termina en `/exec`):
```js
window.MAGNOLIAS_APP_URL = 'https://script.google.com/macros/s/XXXXXXXX/exec';
```
Para editarlo desde GitHub: abrir `config.js` → lápiz ✏️ → pegar → **Commit changes**. En 1 o 2 minutos la app ya usa el link nuevo.

## Publicación (GitHub Pages)
Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
Dirección: `https://<usuario>.github.io/magnolias-app/`

## Atajos
- `…/magnolias-app/?modo=venta`
- `…/magnolias-app/?modo=produccion`
- `…/magnolias-app/?modo=cierre`
- `…/magnolias-app/?modo=sabores`

En Android, si mantienes presionado el ícono aparecen Venta, Producción y Cierre.

## Archivos
| Archivo | Para qué |
|---|---|
| `index.html` | Pantalla de carga con el isotipo y la app en pantalla completa |
| `config.js` | El link `/exec` de la app (lo único que se edita) |
| `manifest.webmanifest` | Nombre, colores e íconos para instalarla |
| `sw.js` | Guarda la pantalla de carga para que abra rápido (no guarda datos) |
| `iconos/` | Íconos con el isotipo de la marca |

Desarrollado por Sebastián Rangel · Analista de Negocios.
