/* Declaración de los imports de CSS plano.

   Next declara "*.module.css" en next/types/global.d.ts, pero no "*.css" a
   secas. TypeScript 5.x ignoraba en silencio los imports de side-effect que no
   resolvía; a partir de TS 7 los reporta como error TS2882, y sin esto fallan
   tanto `import "./globals.css"` en app/layout.tsx como el CSS del TextLoop.

   El patrón "*.module.css" de Next es más específico, así que los CSS modules
   siguen tipándose como hasta ahora. */
declare module "*.css";
