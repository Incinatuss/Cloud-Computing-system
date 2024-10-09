import express from 'express';

export function createServer() {
  const app = express();

  app.get('/feature/:code', (req, res) => {
    const { code } = req.params;
    res.json({ code, enabled: true });
  });

  return app;
}