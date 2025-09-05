import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const READ = {
	t1: 1,
	t2: 2,	
}

function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}
 

function stag(vh){
	console.log(vh);
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}

function start(hero, vh={x:-size.w}){
	
	
	const tl = init()
	
	 
	TweenLite.from(".hero img", {scale:.5, duration:3})
	
	
	
	tl.from('.t1', stag(vh), "+=.2");	
	tl.to(".t1", {duration:.3, opacity:0}, `+=${READ.t1}`)
	

	tl.from('.t2', stag(vh));		
	const listter = [".frame1"]
	
	 
	tl.to(listter, {duration:.3,  opacity:0}, `+=${READ.t2}`)

	tl.to(".frame2", {duration:.3, opacity:1}, "t2")
	tl.from('.logo', {duration:.3, opacity:0});	
	tl.from('.t3', stag(vh));
	
	

	
	tl.from([".cta", ".legalBtn", ".playsmart"], {duration:.3, opacity:0})

	tl.add(olg())


}



function startHor(vh={x:-size.w}){
	const tl = init()
		 
	tl.from('.t1', stag(vh), "+=.2");	
	tl.to(".t1", {duration:.3, opacity:0}, `+=${READ.t1}`)
	

	tl.from('.t2', stag(vh));		
	const listter = [".frame1"]
	
	 
	tl.to(listter, {duration:.3,  opacity:0}, `+=${READ.t2}`)

	tl.to(".frame2", {duration:.3, opacity:1}, "t2")
	tl.from('.t3', stag(vh));
	
	
	
	

	
	tl.from([".cta", '.logo', ".legalBtn", ".playsmart"], {duration:.3, opacity:0})

	tl.add(olg())


}
  

export {size, init, start, stag, READ, olg, startHor}



