import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const roles = ['Full-Stack Developer', 'React Specialist', 'UI/UX Engineer', 'Performance Optimizer']

export default function Hero(){
  const [text,setText]=useState('')

  useEffect(()=>{
    let i=0; let forward=true; let tIndex=0
    const interval = setInterval(()=>{
      const full = roles[tIndex]
      if(forward){
        i++
        setText(full.slice(0,i))
        if(i===full.length){forward=false;setTimeout(()=>{forward=false},300)}
      } else {
        i--
        setText(full.slice(0,i))
        if(i===0){forward=true;tIndex=(tIndex+1)%roles.length}
      }
    },90)
    return ()=>clearInterval(interval)
  },[])

  return (
    <section className="hero">
      <div className="particles">
        <div className="circle c1" style={{animation:'float 12s ease-in-out infinite'}} />
        <div className="circle c2" style={{animation:'float 10s ease-in-out infinite',opacity:0.9}} />
      </div>

      <div className="hero-grid">
        <div className="hero-left">
          <div className="eyebrow">Design-forward · Performance-driven</div>
          <motion.h1 className="hero-title" initial={{y:24,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>
            I'm Alex Mercer — Crafting delightful web experiences
          </motion.h1>
          <div className="typing">{text}<span style={{color:'var(--neon-blue)'}}>|</span></div>
          <p className="hero-intro">I build premium web products with pixel-perfect UI, fast performance and delightful animations. Currently open for senior roles and consulting.</p>

          <div style={{marginTop:18,display:'flex',gap:12}}>
            <motion.button whileHover={{scale:1.03}} className="btn neon">Get in touch <FiArrowRight style={{marginLeft:8}}/></motion.button>
            <motion.button whileHover={{scale:1.03}} className="btn">See my work</motion.button>
          </div>

          <div style={{marginTop:18,display:'flex',gap:12,alignItems:'center'}}>
            <a href="#" style={{color:'var(--muted)',textDecoration:'none'}}>Twitter</a>
            <a href="#" style={{color:'var(--muted)',textDecoration:'none'}}>LinkedIn</a>
            <a href="#" style={{color:'var(--muted)',textDecoration:'none'}}>GitHub</a>
          </div>
        </div>

        <div>
          <div className="hero-card tilt">
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:700}}>Project Highlights</div>
                <div style={{color:'var(--muted)',fontSize:13}}>2024 · UI</div>
              </div>
              <div style={{height:160,borderRadius:12,background:'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(0,245,255,0.08))',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--muted)',fontSize:14}}>Featured Work</div>
              <div style={{display:'flex',gap:10,justifyContent:'space-between',alignItems:'center'}}>
                <div style={{display:'flex',gap:8,alignItems:'center'}}>
                  <div style={{width:10,height:10,borderRadius:2,background:'var(--neon-blue)'}} />
                  <div style={{fontSize:13,color:'var(--muted)'}}>React · Framer Motion</div>
                </div>
                <div style={{display:'flex',gap:8}}>
                  <button className="btn">Live</button>
                  <button className="btn">Code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
