import React from 'react'

export default function IPList({ ips }) {
  return (
    <div style={{ margin: '24px 0', padding: 16, border: '1px solid #eee' }}>
      <h3>Registered IPs</h3>
      {ips.length === 0 && <div>No IPs registered yet.</div>}
      {ips.map((ip, idx) => (
        <div key={idx} style={{ marginBottom: 12 }}>
          <b>{ip.title}</b>
          <div>{ip.description}</div>
          <div style={{ fontSize: 12, color: 'gray' }}>
            Owner: {ip.owner} | Date: {ip.date}
          </div>
        </div>
      ))}
    </div>
  )
}
