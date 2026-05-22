import React from 'react'
import { FiSmartphone, FiDatabase, FiGlobe } from 'react-icons/fi'

const services = [
  {icon:<FiSmartphone/>,title:'Frontend Engineering',desc:'Pixel-perfect interfaces, component systems, animation-driven UX.'},
  {icon:<FiDatabase/>,title:'Backend & APIs',desc:'Robust, scalable APIs with observability and performance in mind.'},
  {icon:<FiGlobe/>,title:'Architecture & Strategy',desc:'Technical strategy, architecture reviews, and performance budgets.'}
]

export default function Services(){
  return (
    <section id="services" className="section reveal">
      <h2>Services</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:18}}>
        {services.map(s=> (
          <div className="skill-card tilt" key={s.title} style={{padding:20}}>
            <div style={{fontSize:20}}>{s.icon}</div>
            <div style={{fontWeight:700,marginTop:8}}>{s.title}</div>
            <div style={{color:'var(--muted)',marginTop:8}}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
