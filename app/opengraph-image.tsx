import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'The Base Trading — Global Trading & Industrial Supply Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const logoData = `data:image/png;base64,${readFileSync(join(process.cwd(), 'public', 'logo.png')).toString('base64')}`

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B0F14',
          color: '#E8ECEF',
          padding: 72,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(233,236,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(233,236,234,0.05) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <img src={logoData} alt="" width={186} height={46} style={{ marginRight: 18 }} />
          <div style={{ fontSize: 24, letterSpacing: 5, fontWeight: 700 }}>THE BASE TRADING</div>
        </div>
        <div style={{ position: 'relative', fontSize: 20, color: '#9AA6B0', letterSpacing: 3, textTransform: 'uppercase' }}>
          MACHINERY · INDUSTRIAL EQUIPMENT · GENERATORS · ELECTRICAL
        </div>
      </div>
    ),
    { ...size }
  )
}
