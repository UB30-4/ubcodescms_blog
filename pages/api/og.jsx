import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
const image = fetch(new URL('../../public/logo1.png', import.meta.url)).then((res) =>
  res.arrayBuffer(),
);
 
export default async function handler() {
  const imageData = await image;
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <picture>
          <img tw='w-full h-full' src={imageData} />
        </picture>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}