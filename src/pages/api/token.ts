// pages/api/token.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;

      // Simulate a POST request to your authentication endpoint
      const authResponse = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!authResponse.ok) {
        throw new Error('Authentication failed');
      }

      const { accessToken, refreshToken } = await authResponse.json();

      // Send tokens back to the client
      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
