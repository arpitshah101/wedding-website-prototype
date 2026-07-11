import type { APIRoute } from 'astro';
import path from 'node:path';
import { readFile } from 'node:fs/promises';

const faviconSrc = path.resolve('src/images/wedding-website-logo.svg');

export const GET: APIRoute = async () => {
  const svg = await readFile(faviconSrc);

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};
