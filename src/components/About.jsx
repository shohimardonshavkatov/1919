import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function About(){
  const ref = useRef()
  useEffect(()=>{
    const el = ref.current
    gsap.fromTo(el.querySelectorAll('.stat'),{y:18,opacity:0},{y:0,opacity:1,stagger:0.12,duration:0.8})
  },[])

  return (
    <section id="about" className="section reveal">
      <h2>About Me</h2>
      <div className="about-grid" ref={ref}>
        <div className="avatar-frame">
          <div className="avatar">AM</div>
        </div>

        <div>
          <p style={{color:'var(--muted)'}}>I'm a Senior Full Stack Developer specializing in building modern, accessible, and high-performance web applications. My work combines product thinking, strong visual design, and engineering discipline.</p>

          <div className="counters" style={{marginTop:18}}>
            <div className="counter stat">
              <div style={{fontSize:20,fontWeight:700}}>9+</div>
              <div style={{color:'var(--muted)'}}>Years Experience</div>
            </div>
            <div className="counter stat">
              <div style={{fontSize:20,fontWeight:700}}>120+</div>
              <div style={{color:'var(--muted)'}}>Projects Delivered</div>
            </div>
            <div className="counter stat">
              <div style={{fontSize:20,fontWeight:700}}>40</div>
              <div style={{color:'var(--muted)'}}>Companies</div>
            </div>
          </div>

          <div style={{marginTop:18,display:'flex',gap:12}}>
            <button className="btn neon">Download CV</button>
            <button className="btn">Contact</button>
          </div>
        </div>
      </div>
    </section>
  )
}
