'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

// To fix the missing default icon in Leaflet + Next.js
const LeafletIconFix = dynamic(async () => {
  const L = await import('leaflet');
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
  return () => null;
}, { ssr: false });

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '500px'
}

const center: [number, number] = [27.6943993, 85.3373173]

function MapPin() {
  return (
    <div style={containerStyle}>
      <LeafletIconFix />
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            <div>
              <h3>{'Divine Light Global Pathway'}</h3>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default React.memo(MapPin)