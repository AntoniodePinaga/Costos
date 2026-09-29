# Cotizador ESPAC (Next.js)

Cotizaciones del **Caballete yesero 450-750** y del **Palet Freestanding**.
Los precios salen de los Excel de la carpeta `excel/` (solapa "Costo Directo").

## Probar en tu computador
Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev        # abre http://localhost:3000
```

## Actualizar precios
Los valores están en `data/products.ts`. Si cambias el Excel, actualiza ahí `lista`, `venta` y `peso`.

## Publicar en GitHub Pages
1. Sube todo el proyecto a un repositorio (incluida la carpeta oculta `.github`).
2. En el repositorio: **Settings > Pages > Source: GitHub Actions**.
3. Cada vez que hagas commit en `main`, el workflow compila y publica en
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Publicar en Vercel (alternativa)
Importa el repositorio en vercel.com. No necesita configuración.
