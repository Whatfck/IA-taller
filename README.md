# IA-taller — NEON VOID

Landing page de videojuego sci-fi generada con Google Stitch, convertida a **Next.js 16** y lista para desplegar en **Vercel**.

## Stitch Project

| Campo    | Valor |
|----------|-------|
| Title    | Minimalist Aesthetic Web Template |
| ID       | `14659197922648773547` |
| Screen   | NEON VOID - Full Experience Landing Page |
| Screen ID| `2be2bc87506e4828b1032acc6e53a7ad` |

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- Fuentes: Space Grotesk · Be Vietnam Pro · Inter (Google Fonts)
- Iconos: Material Symbols Outlined

## Estructura

```
neon-void/        ← app Next.js (carpeta a desplegar)
  src/app/
    page.tsx      ← landing NEON VOID completo
    layout.tsx    ← metadatos SEO + fuentes
    globals.css   ← design tokens + utilidades CSS
index.html        ← versión HTML estática de referencia
```

## Desplegar en Vercel

### Opción 1 — Vercel CLI (recomendado)

```bash
npm i -g vercel
cd neon-void
vercel --prod
```

### Opción 2 — Dashboard de Vercel

1. Sube este repositorio a **GitHub / GitLab / Bitbucket**
2. Entra a [vercel.com/new](https://vercel.com/new)
3. Importa el repositorio
4. En **"Root Directory"** escribe `neon-void`
5. Framework: **Next.js** (detectado automáticamente)
6. Haz clic en **Deploy**

> No se necesitan variables de entorno.

## Desarrollo local

```bash
cd neon-void
npm install
npm run dev
# Abre http://localhost:3000
```