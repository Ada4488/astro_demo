// @ts-check
import { defineConfig } from 'astro/config';
import { securityHeaders } from './security-headers.js';

// https://astro.build/config
export default defineConfig({
  integrations: [securityHeaders()],
  server: {
    headers: {
      // Security headers
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'nonce-<randomNonce>'; style-src 'self' 'nonce-<randomNonce>'; img-src 'self' data: https:;",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Explicitly disable camera, microphone, and geolocation permissions for enhanced security
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    }
  }
});