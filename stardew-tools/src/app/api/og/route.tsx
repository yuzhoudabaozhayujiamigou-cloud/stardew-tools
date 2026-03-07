// app/api/og/route.tsx
// Dynamic OG Image Generation for stardewprofit.com
// Usage: /api/og?title=Your+Title&type=blog

import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || 'StardewProfit';
    const type = searchParams.get('type') || 'default'; // blog, calculator, guide
    const subtitle = searchParams.get('subtitle') || 'Stardew Valley Profit Calculator & Guides';

    // Background colors based on type
    const backgrounds = {
      default: 'linear-gradient(135deg, #9ecf77 0%, #6ea84f 100%)',
      blog: 'linear-gradient(135deg, #f3e5bf 0%, #d4c5a0 100%)',
      calculator: 'linear-gradient(135deg, #5c8a3e 0%, #4e7a32 100%)',
      guide: 'linear-gradient(135deg, #b8e8ff 0%, #98ca73 100%)',
    };

    const background = backgrounds[type as keyof typeof backgrounds] || backgrounds.default;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: background,
            padding: '60px 80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Decorative pattern overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.15,
              backgroundImage: 'radial-gradient(circle at 12% 20%, rgba(255,255,255,0.4) 0 4%, transparent 5%), radial-gradient(circle at 78% 15%, rgba(255,255,255,0.3) 0 3%, transparent 4%)',
            }}
          />

          {/* Content container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(243, 229, 191, 0.95)',
              borderRadius: '30px',
              border: '6px solid rgba(124, 77, 46, 0.8)',
              padding: '60px',
              boxShadow: '0 20px 60px rgba(56, 41, 23, 0.4)',
              maxWidth: '1000px',
              position: 'relative',
            }}
          >
            {/* Icon/Emoji */}
            <div
              style={{
                fontSize: '80px',
                marginBottom: '20px',
              }}
            >
              {type === 'calculator' ? '🧮' : type === 'blog' ? '📘' : '🌾'}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#4a321e',
                textAlign: 'center',
                lineHeight: 1.2,
                marginBottom: '20px',
                maxWidth: '900px',
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '32px',
                color: '#5f4228',
                textAlign: 'center',
                opacity: 0.9,
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </div>

            {/* Brand */}
            <div
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '40px',
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#6f4b2a',
                opacity: 0.8,
              }}
            >
              stardewprofit.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error('OG Image generation error:', e.message);
    return new Response('Failed to generate image', { status: 500 });
  }
}
