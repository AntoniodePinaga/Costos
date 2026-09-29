// Exportación estática: genera la carpeta /out, lista para GitHub Pages.
// En GitHub Pages el sitio vive en /NOMBRE-DEL-REPO, por eso el basePath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
