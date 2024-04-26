// app/api/token.api.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;

      const response = await fetch('https://your-authentication-server.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const { accessToken, refreshToken } = await response.json();

      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ message: 'Failed to authenticate' });
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}
