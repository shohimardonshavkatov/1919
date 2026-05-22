import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="logo">PF</div>
          <div style={{lineHeight:1}}>
            <div style={{fontWeight:700}}>Prime Portfolio</div>
            <div style={{fontSize:12,color:'var(--muted)'}}>Full Stack Developer</div>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="nav-links" style={{display: open ? 'flex' : 'none'}}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="cta">
            <button className="btn">Hire me</button>
            <button className="btn neon">Download CV</button>
          </div>

          <button className="btn" onClick={()=>setOpen(!open)} aria-label="menu">
            {open ? <FiX/> : <FiMenu/>}
          </button>
        </div>
      </div>
    </nav>
  )
}
