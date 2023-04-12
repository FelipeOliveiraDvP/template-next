import { NextApiRequest, NextApiResponse } from 'next';
import { Settings } from '@/contexts/Settings/types';

type NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => unknown;

const getSettings: NextApiHandler = async (_, res) => {
  res.json({
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    defaultSrc: process.env.NEXT_PUBLIC_DEFAULT_SRC,
    imageSrc: process.env.NEXT_PUBLIC_IMAGE_SRC,
  } as Settings);
};

export default getSettings;
