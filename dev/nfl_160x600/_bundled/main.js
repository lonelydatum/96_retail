(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _proline = require("./proline");

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = size.w;
var h = size.h;

var READ = {
	t1: 1,
	t2: 2
};

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

function stag(vh) {
	console.log(vh);
	return _extends({ duration: .3, opacity: 0, stagger: .1 }, vh);
}

function start(hero) {
	var vh = arguments.length <= 1 || arguments[1] === undefined ? { x: -size.w } : arguments[1];

	var tl = init();

	TweenLite.from(".hero img", { scale: .5, duration: 3 });

	tl.from('.t1', stag(vh), "+=.2");
	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + READ.t1);

	tl.from('.t2', stag(vh));
	var listter = [".frame1"];

	tl.to(listter, { duration: .3, opacity: 0 }, "+=" + READ.t2);

	tl.to(".frame2", { duration: .3, opacity: 1 }, "t2");
	tl.from('.logo', { duration: .3, opacity: 0 });
	tl.from('.t3', stag(vh));

	tl.from([".cta", ".legalBtn", ".playsmart"], { duration: .3, opacity: 0 });

	tl.add((0, _proline.olg)());
}

function startHor() {
	var vh = arguments.length <= 0 || arguments[0] === undefined ? { x: -size.w } : arguments[0];

	var tl = init();

	tl.from('.t1', stag(vh), "+=.2");
	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + READ.t1);

	tl.from('.t2', stag(vh));
	var listter = [".frame1"];

	tl.to(listter, { duration: .3, opacity: 0 }, "+=" + READ.t2);

	tl.to(".frame2", { duration: .3, opacity: 1 }, "t2");
	tl.from('.t3', stag(vh));

	tl.from([".cta", '.logo', ".legalBtn", ".playsmart"], { duration: .3, opacity: 0 });

	tl.add((0, _proline.olg)());
}

exports.size = size;
exports.init = init;
exports.start = start;
exports.stag = stag;
exports.READ = READ;
exports.olg = _proline.olg;
exports.startHor = startHor;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var barOptions = {
	TOTAL: 12,
	WIDTH: 132,
	HEIGHT: 15,
	GAP: 10,
	hero: .9
};

(0, _commonJsCommonJs.start)(barOptions);

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
