import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
// import { NEXT_PUBLIC_URL } from './config'; // <-- BU SATIRI SİLDİK, ARTIK GEREK YOK

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'TEST BAŞARILI', // <-- Değişikliği burada tutuyoruz
    },
    {
      action: 'tx',
      label: 'Send Base Sepolia',
      target: `https://deneme-frame.vercel.app/api/tx`, // <-- ELLE YAZDIK
      postUrl: `https://deneme-frame.vercel.app/api/tx-success`, // <-- ELLE YAZDIK
    },
  ],
  image: {
    src: `https://deneme-frame.vercel.app/park-3.png`, // <-- ELLE YAZDIK
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `https://deneme-frame.vercel.app/api/frame`, // <-- ELLE YAZDIK
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`https://deneme-frame.vercel.app/park-1.png`], // <-- ELLE YAZDIK
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
