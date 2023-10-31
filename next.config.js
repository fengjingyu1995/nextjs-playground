/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LAUNCHDARKLY_SDK_CLIENT: process.env.LAUNCHDARKLY_SDK_CLIENT,
  },
};

module.exports = nextConfig;
