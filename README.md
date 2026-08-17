# NickPro

Static React/Vite website for NickPro.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## cPanel / aaPanel deployment

1. Run `npm run build`.
2. Upload the contents of `dist/` to the site document root, usually `public_html/`.
3. Make sure `.htaccess` is included in the upload. It enables direct links such as `/about`, `/services`, `/gallery`, and `/contact` to load the React app correctly.
4. If the site is deployed inside a subfolder instead of the domain root, update the Vite base path before building.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production build.
- `npm run preview` previews the built site locally.
- `npm run lint` runs ESLint.
