import { NextApiRequest, NextApiResponse } from 'next';

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => unknown;

const getHealth: NextApiHandler = async (_, res) => {
  res.json({ message: 'The site is online!' });
};

export default getHealth;
