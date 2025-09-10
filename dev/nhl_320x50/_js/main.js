

import {init, size, colors, stag, READ, olg} from '../../_common/js/common.js'


function startHor(vh={x:-size.w}){
	const tl = init()
		 
	tl.from('.t0', stag(vh), "+=.2");	
	tl.to(".t0", {duration:.3, opacity:0}, `+=1.6`)

	tl.from('.t1', stag(vh), "+=.2");	
	tl.to([".t1", ".logo_small", ".bars"], {duration:.3, opacity:0}, `+=1.9`)
	

	

	tl.add("f2")
	tl.from(['.t2'], stag(vh), "f2");		
	tl.from( [".playsmart", ".olg"], {duration:.3, opacity:0}, "f2")
	
	 
	

	tl.to([".t2", ".olg"], {duration:.3, opacity:0}, "+=2")
	tl.from('.t3', stag(vh));
	
	
	
	

	
	tl.from([".cta", '.logo', ".legalBtn"], {duration:.3, opacity:0})

	tl.add(olg())


}

startHor({y:50})

module.exports = {};

