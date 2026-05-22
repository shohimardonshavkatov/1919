import React, { useState } from 'react'

export default function Contact(){
  const [status,setStatus] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(()=>setStatus('Message sent — I will reply shortly.'),900)
  }

  return (
    <section id="contact" className="section reveal">
      <h2>Contact</h2>
      <div className="contact-grid">
        <form onSubmit={handleSubmit} style={{maxWidth:720}}>
          <div className="form-control">
            <label>Name</label>
            <input className="input" required />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input className="input" type="email" required />
          </div>
          <div className="form-control">
            <label>Message</label>
            <textarea className="input" rows={6} required />
          </div>
          <button className="submit" type="submit">{status || 'Send Message'}</button>
        </form>

        <div style={{padding:18,background:'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',borderRadius:12}}>
          <h3 style={{marginTop:0}}>Let's build together</h3>
          <p style={{color:'var(--muted)'}}>I'm available for full-time and contract roles. Reach out with a brief intro and links to work.</p>
          <div style={{marginTop:18}}>
            <a href="#" className="btn">Email</a>
            <a href="#" className="btn">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
