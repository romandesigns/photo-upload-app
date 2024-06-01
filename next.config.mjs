/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.daisyui.com"],
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
};

export default nextConfig;
