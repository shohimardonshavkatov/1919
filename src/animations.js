import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScrollAnimations(){
  gsap.utils.toArray('.reveal').forEach(el=>{
    gsap.fromTo(el,{y:28,autoAlpha:0},{y:0,autoAlpha:1,duration:0.9,delay:0.05, ease:'power3.out',
      scrollTrigger:{trigger:el, start:'top 85%'}})
  })

  gsap.fromTo('.hero-title',{y:24,autoAlpha:0},{y:0,autoAlpha:1,duration:1.2,ease:'power3.out'})
}
