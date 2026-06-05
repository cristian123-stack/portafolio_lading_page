# Cristian Muñoz — Portfolio

Portfolio personal desarrollado con **React + Vite**.

## Instalación local

```bash
npm install
npm run dev
```

## Despliegue en Vercel (recomendado)

1. Sube esta carpeta a un repositorio de GitHub
2. Entra a [vercel.com](https://vercel.com) → **New Project**
3. Importa tu repositorio
4. Framework: **Vite** (lo detecta automático)
5. Click en **Deploy** ✅

## Despliegue en GitHub Pages

1. Instala el plugin:
```bash
npm install --save-dev gh-pages
```

2. En `vite.config.js`, cambia `base`:
```js
base: '/nombre-de-tu-repo/',
```

3. Agrega en `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Ejecuta:
```bash
npm run deploy
```

## Estructura

```
src/
  components/
    Navbar.jsx       — Navegación fija
    Hero.jsx         — Sección principal
    About.jsx        — Sobre mí + datos de contacto
    Skills.jsx       — Stack técnico
    Experience.jsx   — Experiencia laboral
    Projects.jsx     — Repos de GitHub (API live)
    Education.jsx    — Formación académica
    Contact.jsx      — Sección de contacto
    Footer.jsx       — Pie de página
  App.jsx
  main.jsx
  index.css
```

La sección **Proyectos** carga tus repositorios en tiempo real desde la API pública de GitHub.
