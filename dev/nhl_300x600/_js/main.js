import {start} from '../../_common/js/common.js'

const w = 553/2
const h = 492/2
const x = 22/2
const y = 292/2
 
start({wh:{w, h}, xy:{x, y}})
TweenLite.to(".hero img", {scale:.68, x:-152, y:-121, duration:3, ease:"power4.out"})
module.exports = {};

