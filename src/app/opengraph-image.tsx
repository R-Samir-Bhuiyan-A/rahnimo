import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Rahnimo Design Studio';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    position: 'relative'
                }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    opacity: 0.2
                }}></div>

                <h1 style={{
                    fontSize: 90,
                    background: '#224099',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 900,
                    margin: 0,
                    letterSpacing: -2
                }}>
                    RAHNIMO
                </h1>

                <p style={{
                    fontSize: 32,
                    color: '#64748b',
                    marginTop: 20
                }}>
                    THE ARCHITECTURE OF IMAGINATION
                </p>
            </div>
        ),
        {
            ...size,
        }
    );
}
