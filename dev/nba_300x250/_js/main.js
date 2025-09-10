import {start} from '../../_common/js/common.js'

const w = 277
const h = 103
const x = 11
const y = 81
 
start({wh:{w, h}, xy:{x, y}})
TweenLite.to(".hero img", {scale:.8, x:-118, y:-51, duration:3, ease:"power4.out"})
module.exports = {};