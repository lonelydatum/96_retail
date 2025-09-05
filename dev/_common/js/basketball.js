import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const READ = {
	t1: 1.3,
	t2: 1.7,
	t3: 2.1,
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

const colors = [
	"e0f0e0", 
	"d3ead3", 
	"c5e3c5", 
	"b8ddb8", 
	"aad7ac", 
	"9cd2a0", 
	"8dcd94", 
	"7fc889", 
	"70c27c",
	"5fbd71",
	"4bb964",
	"35b55a",
	"35b55a",
	"35b55a"
	]


function stag(vh){
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}

function start(barOptions, vh={x:-size.w}){
	
	
	const tl = init()
	
	const fun = barOptions.HEIGHT > barOptions.WIDTH ? animate_bars_horizontal : animate_bars_vertical
	fun(barOptions)
	TweenLite.to(".hero img", {duration:3, ...barOptions.scale})
	// if(universalBanner.size==="300x250"){
	// 	TweenLite.to(".hero img", {duration:3, scale:.55})
	// }else{
	// 	TweenLite.from(".hero img", {duration:3, ...barOptions.scale})
	// }
	
	// return
	
	tl.from('.t1', stag(vh), "+=.4");	
	tl.to(".t1", {duration:.3, opacity:0}, `+=${READ.t1}`)
	

	tl.from('.t2', stag(vh));		
	const listter = [".frame1"]
	
	// if(universalBanner.size!="300x250" && universalBanner.size!="160x600" ){
	// 	// console.log(universalBanner.size);
	// 	listter.push(".logos")
	// }
	
	tl.to(listter, {duration:.3,  opacity:0}, `+=${READ.t2}`)

	tl.to(".frame2", {duration:.3, opacity:1}, "t2")


	if(universalBanner.size==="300x250" || universalBanner.size==="160x600" || universalBanner.size==="300x600"){
		tl.to([".logos"], {duration:.2, opacity:0}, "-=.5");
		tl.from(".t4", {duration:.3, opacity:0});
		tl.from('.t3', stag(vh));
	}else{
		tl.set('.logos', {opacity:0, duration:.1}, "-=.5");	
		tl.from('.t3', stag(vh));	
		tl.to([".t3"], {duration:.3, opacity:0}, `+=${READ.t3}`)
		tl.from(".t4", {duration:.3, opacity:0})
	}
	// else{
	// 	tl.from('.t3', stag(vh));	
	// 	tl.to('.logos', {opacity:0,duration:.3}, "-=1");	
	// 	tl.to([".t3"], {duration:.3, opacity:0}, `+=${READ.t3}`)
	// 	tl.from(".t4", {duration:.3, opacity:0})
	// 	console.log('sldkfjksdlfj');
	// }
	

	
	tl.from([".cta", ".legalBtn"], {duration:.3, opacity:0})

	tl.add(olg())


}


function animate_bars_horizontal(barOptions){
	const {
		TOTAL,
		WIDTH,
		HEIGHT,
		GAP,
	} = barOptions  

	const bars = document.getElementById("bars")

	
	for(let i=0;i<TOTAL;i++){
		const barItem = document.createElement("div")
		const height = HEIGHT-(i * GAP)
		
		TweenLite.set(barItem, {
			transformOrigin:"0% 100%",
			className: `bar bar_${i}`,
			width:WIDTH, 
			height,  
			
			scale: 1, 
			y: HEIGHT-height,
			backgroundColor:`#${colors[i]}`
		})
		
		bars.appendChild(barItem)
	}

	const tl = new TimelineMax()

	tl.from('.bar', {
		scaleY: 0,
		stagger: 0.06
	});
	return tl



}

function animate_bars_vertical(barOptions){
	const {
		TOTAL,
		WIDTH,
		HEIGHT,
		GAP,
	} = barOptions  

	const bars = document.getElementById("bars")
	
	for(let i=0;i<TOTAL;i++){
		const barItem = document.createElement("div")
		TweenLite.set(barItem, {
			className: `bar bar_${i}`,
			height:HEIGHT, 
			width:WIDTH-(i * GAP),  
			y:HEIGHT*i, 
			backgroundColor:`#${colors[i]}`
		})
		
		bars.appendChild(barItem)
	}

	const tl = new TimelineMax()

	tl.from('.bar', {
		width: 0,
		stagger: 0.06
	});
	return tl



}

export {size, init, start, colors}



