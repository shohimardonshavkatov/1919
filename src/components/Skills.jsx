import React from 'react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

const skillData = [
  {category:'Frontend', items:[{name:'React',icon:<FaReact/>,level:95},{name:'HTML/CSS',level:98},{name:'Framer Motion',level:90}]},
  {category:'Backend', items:[{name:'Node.js',icon:<FaNodeJs/>,level:88},{name:'Express',level:85}]},
  {category:'Database', items:[{name:'Postgres',icon:<FaDatabase/>,level:86},{name:'Redis',level:72}]},
  {category:'Tools', items:[{name:'Vite',level:90},{name:'GSAP',level:86},{name:'Webpack',level:78}]}
]

export default function Skills(){
  return (
    <section id="skills" className="section reveal">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillData.map(s=> (
          <div className="skill-card tilt" key={s.category}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontWeight:700}}>{s.category}</div>
              <div style={{color:'var(--muted)'}}>Expert</div>
            </div>
            <div style={{marginTop:12}}>
              {s.items.map(it=> (
                <div key={it.name} style={{marginBottom:12}}>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{display:'flex',gap:8,alignItems:'center'}}>{it.icon}{it.name}</div>
                    <div style={{color:'var(--muted)'}}>{it.level}%</div>
                  </div>
                  <div className="progress"><i style={{width:`${it.level}%`}} /></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
