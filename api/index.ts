import { VercelRequest, VercelResponse } from '@vercel/node';

// Import the built server
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // In production, import the built server
  if (process.env.NODE_ENV === 'production') {
    const { default: app } = await import('../dist/index.js');
    return app(req, res);
  }
  
  // In development, use the source
  const { default: app } = await import('../server/index');
  return app(req, res);
}