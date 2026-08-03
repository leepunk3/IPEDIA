import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { handleGdocContent } from './src/api/gdoc';

const app = express();
const PORT = 3000;

app.use(express.json());

// Google Doc Content Parser API Endpoint
app.post('/api/gdoc/content', handleGdocContent);

// Vite middleware & Production static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
