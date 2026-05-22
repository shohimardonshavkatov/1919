import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div style={{maxWidth:1100,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
        <div style={{fontWeight:700}}>Prime Portfolio</div>
        <div style={{color:'var(--muted)'}}>© {new Date().getFullYear()} Alex Mercer — All rights reserved</div>
        <div style={{display:'flex',gap:12}}>
          <a href="#" style={{color:'var(--muted)'}}>Privacy</a>
          <a href="#" style={{color:'var(--muted)'}}>Terms</a>
        </div>
      </div>
    </footer>
  )
}
