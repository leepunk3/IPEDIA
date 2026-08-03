import express from 'express';
import serverless from 'serverless-http';
import { handleGdocContent } from '../../src/api/gdoc';

const app = express();

app.use(express.json());

// Routes
app.post('/api/gdoc/content', handleGdocContent);
app.post('/.netlify/functions/api/gdoc/content', handleGdocContent);
app.post('/gdoc/content', handleGdocContent);
app.post('*', handleGdocContent);

export const handler = serverless(app);

