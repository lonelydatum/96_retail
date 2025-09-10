import {start} from '../../_common/js/common.js'

const w = 143
const h = 217
const x = 9
const y = 199

TweenLite.to(".hero img", {scale:.8, x:-106, y:-108, duration:3, ease:"power4.out"})
 
start({wh:{w, h}, xy:{x, y}})

module.exports = {};