// Security headers middleware for Astro
export function securityHeaders() {
  return {
    name: 'security-headers',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        injectRoute({
          pattern: '/',
          entryPoint: 'middleware',
          prerender: false,
        });
      },
    },
  };
}

// Example middleware implementation
export async function middleware({ request, locals }) {
  return new Response(null, {
    status: 200,
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  });
}