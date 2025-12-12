/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so it can be deployed to shared hosting (public_html) via SFTP.
  // This makes `next build` output a fully static site in `out/`.
  output: "export",

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
