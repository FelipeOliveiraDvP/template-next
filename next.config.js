/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self' ${process.env.NEXT_PUBLIC_DEFAULT_SRC};
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  img-src 'self' data: ${process.env.NEXT_PUBLIC_IMAGE_SRC};
  font-src 'self' fonts.gstatic.com;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_SRC],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
