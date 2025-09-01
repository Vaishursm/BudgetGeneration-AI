// Fix: Replaced non-resolving `vite/client` reference with a minimal declaration
// to support CSS imports, which are used in `main.tsx`.
declare module '*.css';
