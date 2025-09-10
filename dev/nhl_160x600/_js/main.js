import {start} from '../../_common/js/common.js'

const w = 143
const h = 217
const x = 9
const y = 199
 
start({wh:{w, h}, xy:{x, y}})
TweenLite.to(".hero img", {scale:.75, x:-82, y:-57 , duration:3, ease:"power4.out"})
module.exports = {};

