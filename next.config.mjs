/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [50, 75, 80],
    remotePatterns: [
      new URL(
        'https://wepjtbqgjlimfxzbdvrq.supabase.co/storage/v1/object/public/**'
      ),
    ],
  },
};

export default nextConfig;
