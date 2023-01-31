import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../lib/auth';
import prisma from '../../lib/prisma';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const playlistsCount = await prisma.playlist.count({
      where: { userId: user.id },
    });
    res.json({ ...user, playlistsCount });
  }
);
