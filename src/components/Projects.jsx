import React, { useState } from 'react'
import projectsData from '../data/projects'

export default function Projects(){
  const [filter,setFilter] = useState('All')
  const tags = ['All','React','D3','Stripe','WebRTC']
  const filtered = filter==='All' ? projectsData : projectsData.filter(p=> p.tags.includes(filter))

  return (
    <section id="projects" className="section reveal">
      <h2>Selected Projects</h2>
      <div style={{display:'flex',gap:12,marginBottom:18}}>
        {tags.map(t=> (
          <button key={t} className="btn" onClick={()=>setFilter(t)} style={{borderColor: filter===t ? 'rgba(255,255,255,0.06)' : 'transparent'}}>{t}</button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map(p=> (
          <div className="project-card tilt" key={p.id}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontWeight:700}}>{p.title}</div>
              <div style={{color:'var(--muted)'}}>Featured</div>
            </div>
            <p style={{color:'var(--muted)',marginTop:10}}>{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t=> <span className="tag" key={t}>{t}</span>)}
            </div>
            <div style={{display:'flex',gap:8,marginTop:14}}>
              <a className="btn" href={p.demo}>Live Demo</a>
              <a className="btn" href={p.repo}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
