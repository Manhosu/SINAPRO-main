import { VercelRequest, VercelResponse } from '@vercel/node';

let app: any = null;

// Import the built server
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!app) {
    // In production, import the built server
    if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
      const { default: expressApp } = await import('../dist/index.js');
      app = expressApp;
    } else {
      // In development, use the source
      const { default: expressApp } = await import('../server/index');
      app = expressApp;
    }
  }
  
  return app(req, res);
}