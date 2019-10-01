"use strict";
(function () {
	var routerApp = angular.module("routerApp", ["ngAnimate", "ui.router", "anim-in-out", "angular-loading-bar"]).config(["cfpLoadingBarProvider", function (cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeSpinner = false
	}]).run(["$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams
	}]);
	routerApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.rule(function ($injector, $location) {
			var path = $location.path();
			var hasTrailingSlash = path[path.length - 1] === "/";
			if (hasTrailingSlash) {
				var newPath = path.substr(0, path.length - 1);
				return newPath
			}
		});
		$urlRouterProvider.otherwise("/404");
		$stateProvider.state("index", {
			url: "/",
			templateUrl: "partials/home.html",
			data: {
				pageTitle: "ProjectBeta 2019"
			},
			onEnter: function onEnter() {
				uiContainer.style.justifyContent = "flex-start"
			}
		}).state("404", {
			url: "/404",
			templateUrl: "partials/404.html",
			data: {
				pageTitle: "404 \xB7 ProjectBeta 2019"
			}
		}).state("leaderboard", {
			url: "/leaderboard",
			templateUrl: "partials/leaderboard.html",
			data: {
				pageTitle: "leaderboard \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("betatest", {
			url: "/betatest",
			templateUrl: "partials/betatest.html",
			data: {
				pageTitle: "BetaTest \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("home", {
			url: "/home",
			templateUrl: "partials/home.html",
			data: {
				pageTitle: "ProjectBeta 2019"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "flex-start"
			}
		}).state("about", {
			url: "/about",
			templateUrl: "partials/about.html",
			data: {
				pageTitle: "About \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("contact", {
			url: "/contact",
			templateUrl: "partials/contact.html",
			data: {
				pageTitle: "Contact \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa", {
			url: "/baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa",
			templateUrl: "partials/baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa.html",
			data: {
				pageTitle: "baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("team", {
			url: "/team",
			templateUrl: "partials/team.html",
			data: {
				pageTitle: "Team \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("history", {
			url: "/history",
			templateUrl: "partials/history.html",
			data: {
				pageTitle: "History \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("alumni", {
			url: "/alumni",
			templateUrl: "partials/alumni.html",
			data: {
				pageTitle: "Alumni \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("apply", {
			url: "/apply",
			templateUrl: "partials/apply.html",
			data: {
				pageTitle: "Apply \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		}).state("events", {
			url: "/events",
			templateUrl: "partials/events.html",
			data: {
				pageTitle: "Events \xB7 ProjectBeta"
			},
			onEnter: function onEnter() {
				if (isMobile) {
					setTimeout(sidebarClose, 100)
				}
				mainEl.scroll(0, 0);
				uiContainer.style.justifyContent = "space-between"
			}
		});
		$locationProvider.html5Mode(true)
	})
})();
"use strict";
particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 160,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#e26767"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			}
		},
		"opacity": {
			"value": 1,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0,
				"sync": false
			}
		},
		"size": {
			"value": 2,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 4,
				"size_min": 0.3,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#e26767",
			"opacity": 0.6,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 600
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "bubble"
			},
			"onclick": {
				"enable": false,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 250,
				"size": 0,
				"duration": 2,
				"opacity": 0,
				"speed": 3
			},
			"repulse": {
				"distance": 400,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
"use strict";

function _toConsumableArray(arr) {
	return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
}

function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(iter) {
	if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter)
}

function _arrayWithoutHoles(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i]
		}
		return arr2
	}
}
window.addEventListener("load", function () {
	console.log("check");
	var tabs = document.querySelectorAll("#stage1 .tabs .tab");
	var requestForm = document.querySelector("#request-form");
	var confirmForm = document.querySelector("#confirm-form");
	var toggleDisplay = function toggleDisplay() {
		requestForm.classList.toggle("nodisplay");
		confirmForm.classList.toggle("nodisplay");
		[].concat(_toConsumableArray(tabs)).map(function (el) {
			el.classList.toggle("active");
			el.classList.toggle("inactive")
		})
	};
	[].concat(_toConsumableArray(tabs)).map(function (el) {
		el.addEventListener("click", function () {
			if (el.classList.contains("inactive")) {
				toggleDisplay()
			} else {}
		})
	})
});
"use strict";
var eventsButton = document.querySelector("#files li:nth-child(4)");
eventsButton.addEventListener("click", openCloseFiles("events"));

function openCloseFiles(target) {
	return function () {
		var triDiv = document.querySelector("#" + target + "Triangle");
		var level2 = document.querySelectorAll(".level2." + target);
		if (triDiv.classList.contains("closed")) {
			triDiv.classList.remove("closed");
			triDiv.classList.add("open");
			for (var i = 0; i < level2.length; i++) {
				level2[i].classList.remove("nodisplay")
			}
		} else {
			triDiv.classList.remove("open");
			triDiv.classList.add("closed");
			for (var i = 0; i < level2.length; i++) {
				level2[i].classList.add("nodisplay")
			}
		}
	}
};
var buttons = document.querySelectorAll(".subject");
var buttonsTexts = document.querySelectorAll(".subject p");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", openCloseTabs(i))
}

function openCloseTabs(i) {
	return function () {
		var target = buttonsTexts[i].innerHTML;
		var triDiv = document.querySelector("#" + target + "Triangle");
		var container = document.querySelector("#" + target);
		if (triDiv.classList.contains("closed")) {
			triDiv.classList.remove("closed");
			triDiv.classList.add("open");
			container.classList.remove("nodisplay")
		} else {
			triDiv.classList.remove("open");
			triDiv.classList.add("closed");
			container.classList.add("nodisplay")
		}
	}
}

function countdown() {
	var end = new Date("2019-10-04T08:30:00+05:30");
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;
	var daysElement = document.querySelector(".days p");
	var hoursElement = document.querySelector(".hours p");
	var minutesElement = document.querySelector(".minutes p");
	var secondsElement = document.querySelector(".seconds p");

	function showRemaining() {
		var now = new Date;
		var distance = end - now;
		if (distance < 0) {
			clearInterval(timer);
			return
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor(distance % _day / _hour);
		var minutes = Math.floor(distance % _hour / _minute);
		var seconds = Math.floor(distance % _minute / _second);
		days < 10 ? daysElement.innerHTML = "0" + days : daysElement.innerHTML = days;
		hours < 10 ? hoursElement.innerHTML = "0" + hours : hoursElement.innerHTML = hours;
		minutes < 10 ? minutesElement.innerHTML = "0" + minutes : minutesElement.innerHTML = minutes;
		seconds < 10 ? secondsElement.innerHTML = "0" + seconds : secondsElement.innerHTML = seconds
	}
	timer = setInterval(showRemaining, 1000)
}
countdown();
var html = document.documentElement;
var sidebar = document.querySelector("section.sidebar");
var mainEl = document.querySelector("section.main");
var uiContainer = document.querySelector("#ui-view");
var hamburger = document.querySelector("#hamburger");
var cross = document.querySelector("#cross");
var isMobile = getComputedStyle(html).maxWidth === "800px" ? true : false;
if (isMobile) {
	sidebar.classList.remove("open");
	sidebar.classList.add("closed");
	mainEl.style.marginLeft = "50px";
	hamburger.classList.remove("nodisplay");
	cross.classList.add("nodisplay")
}

function sidebarOpen() {
	if (sidebar.classList.contains("closed")) {
		sidebar.classList.remove("closed");
		sidebar.classList.add("open");
		mainEl.style.marginLeft = "250px";
		hamburger.classList.add("nodisplay");
		cross.classList.remove("nodisplay");
		if (isMobile) {
			mainEl.style.marginLeft = "0px";
			mainEl.style.left = "250px"
		}
	}
}

function sidebarClose() {
	if (sidebar.classList.contains("open")) {
		sidebar.classList.remove("open");
		sidebar.classList.add("closed");
		mainEl.style.marginLeft = "50px";
		hamburger.classList.remove("nodisplay");
		cross.classList.add("nodisplay");
		if (isMobile) {
			mainEl.style.marginLeft = "50px";
			mainEl.style.left = "0px"
		}
	}
}
hamburger.addEventListener("click", sidebarOpen);
cross.addEventListener("click", sidebarClose);
"use strict";
(function () {
	'use strict';
	var module = angular.module("hj.animInOut", ["ngAnimate"]);
	angular.module("anim-in-out", ["hj.animInOut"]);
	module.animation(".anim-in-out", ["$rootScope", "$timeout", "$window", function ($rootScope, $timeout, $window) {
		return {
			enter: function enter(element, done) {
				var sync = $rootScope.$eval(angular.element(element).attr("data-anim-sync")) !== undefined ? $rootScope.$eval(angular.element(element).attr("data-anim-sync")) : false,
					speed = angular.element(element).attr("data-anim-speed") !== undefined ? $rootScope.$eval(angular.element(element).attr("data-anim-speed")) : 1000,
					inSpeed = angular.element(element).attr("data-anim-in-speed") !== undefined ? $rootScope.$eval(angular.element(element).attr("data-anim-in-speed")) : speed,
					outSpeed = angular.element(element).attr("data-anim-out-speed") !== undefined ? $rootScope.$eval(angular.element(element).attr("data-anim-out-speed")) : speed;
				try {
					var observer = new MutationObserver(function (mutations) {
						observer.disconnect();
						$window.requestAnimationFrame(function () {
							$timeout(done, sync ? 0 : outSpeed)
						})
					});
					observer.observe(element[0], {
						attributes: true,
						childList: false,
						characterData: false
					})
				} catch (e) {
					$timeout(done, Math.max(100, sync ? 0 : outSpeed))
				}
				angular.element(element).addClass("anim-in-setup");
				return function (cancelled) {
					angular.element(element).removeClass("anim-in-setup");
					angular.element(element).addClass("anim-in");
					if (!cancelled) {
						$timeout(function () {
							$rootScope.$broadcast("animEnd", element, inSpeed);
							angular.element(element).removeClass("anim-in")
						}, inSpeed)
					}
				}
			},
			leave: function leave(element, done) {
				var speed = angular.element(element).attr("data-anim-speed") !== undefined ? $rootScope.$eval(angular.element(element).attr("data-anim-speed")) : 1000,
					outSpeed = angular.element(element).attr("data-anim-out-speed") !== undefined ? $rootScope.$eval(angular.element(element).attr("data-anim-out-speed")) : speed;
				$rootScope.$broadcast("animStart", element, outSpeed);
				try {
					var observer = new MutationObserver(function (mutations) {
						observer.disconnect();
						$window.requestAnimationFrame(function () {
							angular.element(element).removeClass("anim-out-setup");
							angular.element(element).addClass("anim-out");
							$timeout(done, outSpeed)
						})
					});
					observer.observe(element[0], {
						attributes: true,
						childList: false,
						characterData: false
					})
				} catch (e) {
					angular.element(element).removeClass("anim-out-setup");
					angular.element(element).addClass("anim-out");
					$timeout(done, Math.max(100, outSpeed))
				}
				angular.element(element).addClass("anim-out-setup")
			}
		}
	}])
})();
"use strict";
(function (F, t, W) {
	'use strict';

	function ua(a, b, c) {
		if (!a) throw ngMinErr("areq", b || "?", c || "required");
		return a
	}

	function va(a, b) {
		if (!a && !b) return "";
		if (!a) return b;
		if (!b) return a;
		X(a) && (a = a.join(" "));
		X(b) && (b = b.join(" "));
		return a + " " + b
	}

	function Ea(a) {
		var b = {};
		a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
		return b
	}

	function ba(a, b, c) {
		var d = "";
		a = X(a) ? a : a && U(a) && a.length ? a.split(/\s+/) : [];
		u(a, function (a, s) {
			a && 0 < a.length && (d += 0 < s ? " " : "", d += c ? b + a : a + b)
		});
		return d
	}

	function Fa(a) {
		if (a instanceof G) switch (a.length) {
			case 0:
				return [];
			case 1:
				if (1 === a[0].nodeType) return a;
				break;
			default:
				return G(ka(a));
		}
		if (1 === a.nodeType) return G(a)
	}

	function ka(a) {
		if (!a[0]) return a;
		for (var b = 0; b < a.length; b++) {
			var c = a[b];
			if (1 == c.nodeType) return c
		}
	}

	function Ga(a, b, c) {
		u(b, function (b) {
			a.addClass(b, c)
		})
	}

	function Ha(a, b, c) {
		u(b, function (b) {
			a.removeClass(b, c)
		})
	}

	function ha(a) {
		return function (b, c) {
			c.addClass && (Ga(a, b, c.addClass), c.addClass = null);
			c.removeClass && (Ha(a, b, c.removeClass), c.removeClass = null)
		}
	}

	function ia(a) {
		a = a || {};
		if (!a.$$prepared) {
			var b = a.domOperation || H;
			a.domOperation = function () {
				a.$$domOperationFired = !0;
				b();
				b = H
			};
			a.$$prepared = !0
		}
		return a
	}

	function ca(a, b) {
		wa(a, b);
		xa(a, b)
	}

	function wa(a, b) {
		b.from && (a.css(b.from), b.from = null)
	}

	function xa(a, b) {
		b.to && (a.css(b.to), b.to = null)
	}

	function R(a, b, c) {
		var d = (b.addClass || "") + " " + (c.addClass || ""),
			e = (b.removeClass || "") + " " + (c.removeClass || "");
		a = Ia(a.attr("class"), d, e);
		ya(b, c);
		b.addClass = a.addClass ? a.addClass : null;
		b.removeClass = a.removeClass ? a.removeClass : null;
		return b
	}

	function Ia(a, b, c) {
		function d(a) {
			U(a) && (a = a.split(" "));
			var b = {};
			u(a, function (a) {
				a.length && (b[a] = !0)
			});
			return b
		}
		var e = {};
		a = d(a);
		b = d(b);
		u(b, function (a, b) {
			e[b] = 1
		});
		c = d(c);
		u(c, function (a, b) {
			e[b] = 1 === e[b] ? null : -1
		});
		var s = {
			addClass: "",
			removeClass: ""
		};
		u(e, function (b, c) {
			var d, e;
			1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]);
			e && (s[d].length && (s[d] += " "), s[d] += c)
		});
		return s
	}

	function A(a) {
		return a instanceof t.element ? a[0] : a
	}

	function za(a, b, c) {
		var d = Object.create(null),
			e = a.getComputedStyle(b) || {};
		u(c, function (a, b) {
			var c = e[a];
			if (c) {
				var l = c.charAt(0);
				if ("-" === l || "+" === l || 0 <= l) c = Ja(c);
				0 === c && (c = null);
				d[b] = c
			}
		});
		return d
	}

	function Ja(a) {
		var b = 0;
		a = a.split(/\s*,\s*/);
		u(a, function (a) {
			"s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
			a = parseFloat(a) || 0;
			b = b ? Math.max(a, b) : a
		});
		return b
	}

	function la(a) {
		return 0 === a || null != a
	}

	function Aa(a, b) {
		var c = O,
			d = a + "s";
		b ? c += "Duration" : d += " linear all";
		return [c, d]
	}

	function ja(a, b) {
		var c = b ? "-" + b + "s" : "";
		da(a, [ea, c]);
		return [ea, c]
	}

	function ma(a, b) {
		var c = b ? "paused" : "",
			d = V + "PlayState";
		da(a, [d, c]);
		return [d, c]
	}

	function da(a, b) {
		a.style[b[0]] = b[1]
	}

	function Ba() {
		var a = Object.create(null);
		return {
			flush: function flush() {
				a = Object.create(null)
			},
			count: function count(b) {
				return (b = a[b]) ? b.total : 0
			},
			get: function get(b) {
				return (b = a[b]) && b.value
			},
			put: function put(b, c) {
				a[b] ? a[b].total++ : a[b] = {
					total: 1,
					value: c
				}
			}
		}
	}
	var H = t.noop,
		ya = t.extend,
		G = t.element,
		u = t.forEach,
		X = t.isArray,
		U = t.isString,
		na = t.isObject,
		Ka = t.isUndefined,
		La = t.isDefined,
		Ca = t.isFunction,
		oa = t.isElement,
		O, pa, V, qa;
	F.ontransitionend === W && F.onwebkittransitionend !== W ? (O = "WebkitTransition", pa = "webkitTransitionEnd transitionend") : (O = "transition", pa = "transitionend");
	F.onanimationend === W && F.onwebkitanimationend !== W ? (V = "WebkitAnimation", qa = "webkitAnimationEnd animationend") : (V = "animation", qa = "animationend");
	var ra = V + "Delay",
		sa = V + "Duration",
		ea = O + "Delay";
	F = O + "Duration";
	var Ma = {
			transitionDuration: F,
			transitionDelay: ea,
			transitionProperty: O + "Property",
			animationDuration: sa,
			animationDelay: ra,
			animationIterationCount: V + "IterationCount"
		},
		Na = {
			transitionDuration: F,
			transitionDelay: ea,
			animationDuration: sa,
			animationDelay: ra
		};
	t.module("ngAnimate", []).directive("ngAnimateChildren", [function () {
		return function (a, b, c) {
			a = c.ngAnimateChildren;
			t.isString(a) && 0 === a.length ? b.data("$$ngAnimateChildren", !0) : c.$observe("ngAnimateChildren", function (a) {
				b.data("$$ngAnimateChildren", "on" === a || "true" === a)
			})
		}
	}]).factory("$$rAFMutex", ["$$rAF", function (a) {
		return function () {
			var b = !1;
			a(function () {
				b = !0
			});
			return function (c) {
				b ? c() : a(c)
			}
		}
	}]).factory("$$rAFScheduler", ["$$rAF", function (a) {
		function b(a) {
			d.push([].concat(a));
			c()
		}

		function c() {
			if (d.length) {
				for (var b = [], n = 0; n < d.length; n++) {
					var g = d[n];
					g.shift()();
					g.length && b.push(g)
				}
				d = b;
				e || a(function () {
					e || c()
				})
			}
		}
		var d = [],
			e;
		b.waitUntilQuiet = function (b) {
			e && e();
			e = a(function () {
				e = null;
				b();
				c()
			})
		};
		return b
	}]).factory("$$AnimateRunner", ["$q", "$$rAFMutex", function (a, b) {
		function c(a) {
			this.setHost(a);
			this._doneCallbacks = [];
			this._runInAnimationFrame = b();
			this._state = 0
		}
		c.chain = function (a, b) {
			function c() {
				if (n === a.length) b(!0);
				else a[n](function (a) {
					!1 === a ? b(!1) : (n++, c())
				})
			}
			var n = 0;
			c()
		};
		c.all = function (a, b) {
			function c(s) {
				g = g && s;
				++n === a.length && b(g)
			}
			var n = 0,
				g = !0;
			u(a, function (a) {
				a.done(c)
			})
		};
		c.prototype = {
			setHost: function setHost(a) {
				this.host = a || {}
			},
			done: function done(a) {
				2 === this._state ? a() : this._doneCallbacks.push(a)
			},
			progress: H,
			getPromise: function getPromise() {
				if (!this.promise) {
					var b = this;
					this.promise = a(function (a, c) {
						b.done(function (b) {
							!1 === b ? c() : a()
						})
					})
				}
				return this.promise
			},
			then: function then(a, b) {
				return this.getPromise().then(a, b)
			},
			"catch": function _catch(a) {
				return this.getPromise()["catch"](a)
			},
			"finally": function _finally(a) {
				return this.getPromise()["finally"](a)
			},
			pause: function pause() {
				this.host.pause && this.host.pause()
			},
			resume: function resume() {
				this.host.resume && this.host.resume()
			},
			end: function end() {
				this.host.end && this.host.end();
				this._resolve(!0)
			},
			cancel: function cancel() {
				this.host.cancel && this.host.cancel();
				this._resolve(!1)
			},
			complete: function complete(a) {
				var b = this;
				0 === b._state && (b._state = 1, b._runInAnimationFrame(function () {
					b._resolve(a)
				}))
			},
			_resolve: function _resolve(a) {
				2 !== this._state && (u(this._doneCallbacks, function (b) {
					b(a)
				}), this._doneCallbacks.length = 0, this._state = 2)
			}
		};
		return c
	}]).provider("$$animateQueue", ["$animateProvider", function (a) {
		function b(a, b, c, g) {
			return d[a].some(function (a) {
				return a(b, c, g)
			})
		}

		function c(a, b) {
			a = a || {};
			var c = 0 < (a.addClass || "").length,
				d = 0 < (a.removeClass || "").length;
			return b ? c && d : c || d
		}
		var d = this.rules = {
			skip: [],
			cancel: [],
			join: []
		};
		d.join.push(function (a, b, d) {
			return !b.structural && c(b.options)
		});
		d.skip.push(function (a, b, d) {
			return !b.structural && !c(b.options)
		});
		d.skip.push(function (a, b, c) {
			return "leave" == c.event && b.structural
		});
		d.skip.push(function (a, b, c) {
			return c.structural && !b.structural
		});
		d.cancel.push(function (a, b, c) {
			return c.structural && b.structural
		});
		d.cancel.push(function (a, b, c) {
			return 2 === c.state && b.structural
		});
		d.cancel.push(function (a, b, c) {
			a = b.options;
			c = c.options;
			return a.addClass && a.addClass === c.removeClass || a.removeClass && a.removeClass === c.addClass
		});
		this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", function (d, s, n, g, l, D, z, Z, I) {
			function w(a, b) {
				var c = A(a),
					f = [],
					d = m[b];
				d && u(d, function (a) {
					a.node.contains(c) && f.push(a.callback)
				});
				return f
			}

			function B(a, b, c, f) {
				d(function () {
					u(w(b, a), function (a) {
						a(b, c, f)
					})
				})
			}

			function r(a, S, p) {
				function d(b, c, f, p) {
					B(c, a, f, p);
					b.progress(c, f, p)
				}

				function k(b) {
					Da(a, p);
					ca(a, p);
					p.domOperation();
					m.complete(!b)
				}
				var P, E;
				if (a = Fa(a)) P = A(a), E = a.parent();
				p = ia(p);
				var m = new z;
				if (!P) return k(), m;
				X(p.addClass) && (p.addClass = p.addClass.join(" "));
				X(p.removeClass) && (p.removeClass = p.removeClass.join(" "));
				p.from && !na(p.from) && (p.from = null);
				p.to && !na(p.to) && (p.to = null);
				var e = [P.className, p.addClass, p.removeClass].join(" ");
				if (!v(e)) return k(), m;
				var M = 0 <= ["enter", "move", "leave"].indexOf(S),
					g = !x || L.get(P),
					e = !g && h.get(P) || {},
					l = !!e.state;
				g || l && 1 == e.state || (g = !ta(a, E, S));
				if (g) return k(), m;
				M && K(a);
				g = {
					structural: M,
					element: a,
					event: S,
					close: k,
					options: p,
					runner: m
				};
				if (l) {
					if (b("skip", a, g, e)) {
						if (2 === e.state) return k(), m;
						R(a, e.options, p);
						return e.runner
					}
					if (b("cancel", a, g, e)) 2 === e.state ? e.runner.end() : e.structural ? e.close() : R(a, g.options, e.options);
					else if (b("join", a, g, e))
						if (2 === e.state) R(a, p, {});
						else return S = g.event = e.event, p = R(a, e.options, g.options), m
				} else R(a, p, {});
				(l = g.structural) || (l = "animate" === g.event && 0 < Object.keys(g.options.to || {}).length || c(g.options));
				if (!l) return k(), C(a), m;
				M && f(E);
				var r = (e.counter || 0) + 1;
				g.counter = r;
				ga(a, 1, g);
				s.$$postDigest(function () {
					var b = h.get(P),
						v = !b,
						b = b || {},
						e = a.parent() || [],
						E = 0 < e.length && ("animate" === b.event || b.structural || c(b.options));
					if (v || b.counter !== r || !E) {
						v && (Da(a, p), ca(a, p));
						if (v || M && b.event !== S) p.domOperation(), m.end();
						E || C(a)
					} else S = !b.structural && c(b.options, !0) ? "setClass" : b.event, b.structural && f(e), ga(a, 2), b = D(a, S, b.options), b.done(function (b) {
						k(!b);
						(b = h.get(P)) && b.counter === r && C(A(a));
						d(m, S, "close", {})
					}), m.setHost(b), d(m, S, "start", {})
				});
				return m
			}

			function K(a) {
				a = A(a).querySelectorAll("[data-ng-animate]");
				u(a, function (a) {
					var b = parseInt(a.getAttribute("data-ng-animate")),
						c = h.get(a);
					switch (b) {
						case 2:
							c.runner.end();
						case 1:
							c && h.remove(a);
					}
				})
			}

			function C(a) {
				a = A(a);
				a.removeAttribute("data-ng-animate");
				h.remove(a)
			}

			function E(a, b) {
				return A(a) === A(b)
			}

			function f(a) {
				a = A(a);
				do {
					if (!a || 1 !== a.nodeType) break;
					var b = h.get(a);
					if (b) {
						var f = a;
						!b.structural && c(b.options) && (2 === b.state && b.runner.end(), C(f))
					}
					a = a.parentNode
				} while (1)
			}

			function ta(a, b, c) {
				var f = c = !1,
					d = !1,
					v;
				for ((a = a.data("$ngAnimatePin")) && (b = a); b && b.length;) {
					f || (f = E(b, n));
					a = b[0];
					if (1 !== a.nodeType) break;
					var e = h.get(a) || {};
					d || (d = e.structural || L.get(a));
					if (Ka(v) || !0 === v) a = b.data("$$ngAnimateChildren"), La(a) && (v = a);
					if (d && !1 === v) break;
					f || (f = E(b, n), f || (a = b.data("$ngAnimatePin")) && (b = a));
					c || (c = E(b, k));
					b = b.parent()
				}
				return (!d || v) && f && c
			}

			function ga(a, b, c) {
				c = c || {};
				c.state = b;
				a = A(a);
				a.setAttribute("data-ng-animate", b);
				c = (b = h.get(a)) ? ya(b, c) : c;
				h.put(a, c)
			}
			var h = new l,
				L = new l,
				x = null,
				M = s.$watch(function () {
					return 0 === Z.totalPendingRequests
				}, function (a) {
					a && (M(), s.$$postDigest(function () {
						s.$$postDigest(function () {
							null === x && (x = !0)
						})
					}))
				}),
				k = G(g[0].body),
				m = {},
				P = a.classNameFilter(),
				v = P ? function (a) {
					return P.test(a)
				} : function () {
					return !0
				},
				Da = ha(I);
			return {
				on: function on(a, b, c) {
					b = ka(b);
					m[a] = m[a] || [];
					m[a].push({
						node: b,
						callback: c
					})
				},
				off: function off(a, b, c) {
					function f(a, b, c) {
						var d = ka(b);
						return a.filter(function (a) {
							return !(a.node === d && (!c || a.callback === c))
						})
					}
					var d = m[a];
					d && (m[a] = 1 === arguments.length ? null : f(d, b, c))
				},
				pin: function pin(a, b) {
					ua(oa(a), "element", "not an element");
					ua(oa(b), "parentElement", "not an element");
					a.data("$ngAnimatePin", b)
				},
				push: function push(a, b, c, f) {
					c = c || {};
					c.domOperation = f;
					return r(a, b, c)
				},
				enabled: function enabled(a, b) {
					var c = arguments.length;
					if (0 === c) b = !!x;
					else if (oa(a)) {
						var f = A(a),
							d = L.get(f);
						1 === c ? b = !d : (b = !!b) ? d && L.remove(f) : L.put(f, !0)
					} else b = x = !!a;
					return b
				}
			}
		}]
	}]).provider("$$animation", ["$animateProvider", function (a) {
		function b(a) {
			return a.data("$$animationRunner")
		}
		var c = this.drivers = [];
		this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$rAFScheduler", function (a, e, s, n, g) {
			var l = [],
				D = ha(a),
				z = 0,
				Z = 0,
				I = [];
			return function (w, B, r) {
				function K(a) {
					a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
					var b = [];
					u(a, function (a) {
						var c = a.getAttribute("ng-animate-ref");
						c && c.length && b.push(a)
					});
					return b
				}

				function C(a) {
					var b = [],
						c = {};
					u(a, function (a, f) {
						var d = A(a.element),
							e = 0 <= ["enter", "move"].indexOf(a.event),
							d = a.structural ? K(d) : [];
						if (d.length) {
							var h = e ? "to" : "from";
							u(d, function (a) {
								var b = a.getAttribute("ng-animate-ref");
								c[b] = c[b] || {};
								c[b][h] = {
									animationID: f,
									element: G(a)
								}
							})
						} else b.push(a)
					});
					var f = {},
						d = {};
					u(c, function (c, e) {
						var h = c.from,
							k = c.to;
						if (h && k) {
							var m = a[h.animationID],
								g = a[k.animationID],
								x = h.animationID.toString();
							if (!d[x]) {
								var B = d[x] = {
									structural: !0,
									beforeStart: function beforeStart() {
										m.beforeStart();
										g.beforeStart()
									},
									close: function close() {
										m.close();
										g.close()
									},
									classes: E(m.classes, g.classes),
									from: m,
									to: g,
									anchors: []
								};
								B.classes.length ? b.push(B) : (b.push(m), b.push(g))
							}
							d[x].anchors.push({
								out: h.element,
								"in": k.element
							})
						} else h = h ? h.animationID : k.animationID, k = h.toString(), f[k] || (f[k] = !0, b.push(a[h]))
					});
					return b
				}

				function E(a, b) {
					a = a.split(" ");
					b = b.split(" ");
					for (var c = [], f = 0; f < a.length; f++) {
						var d = a[f];
						if ("ng-" !== d.substring(0, 3))
							for (var h = 0; h < b.length; h++) {
								if (d === b[h]) {
									c.push(d);
									break
								}
							}
					}
					return c.join(" ")
				}

				function f(a) {
					for (var b = c.length - 1; 0 <= b; b--) {
						var f = c[b];
						if (s.has(f) && (f = s.get(f)(a))) return f
					}
				}

				function ta(a, c) {
					a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c)
				}

				function ga() {
					var a = b(w);
					!a || "leave" === B && r.$$domOperationFired || a.end()
				}

				function h(b) {
					w.off("$destroy", ga);
					w.removeData("$$animationRunner");
					D(w, r);
					ca(w, r);
					r.domOperation();
					k && a.removeClass(w, k);
					w.removeClass("ng-animate");
					x.complete(!b)
				}
				r = ia(r);
				var L = 0 <= ["enter", "move", "leave"].indexOf(B),
					x = new n({
						end: function end() {
							h()
						},
						cancel: function cancel() {
							h(!0)
						}
					});
				if (!c.length) return h(), x;
				w.data("$$animationRunner", x);
				var M = va(w.attr("class"), va(r.addClass, r.removeClass)),
					k = r.tempClasses;
				k && (M += " " + k, r.tempClasses = null);
				var m;
				L || (m = z, z += 1);
				l.push({
					element: w,
					classes: M,
					event: B,
					classBasedIndex: m,
					structural: L,
					options: r,
					beforeStart: function beforeStart() {
						w.addClass("ng-animate");
						k && a.addClass(w, k)
					},
					close: h
				});
				w.on("$destroy", ga);
				if (1 < l.length) return x;
				e.$$postDigest(function () {
					Z = z;
					z = 0;
					I.length = 0;
					var a = [];
					u(l, function (c) {
						b(c.element) && a.push(c)
					});
					l.length = 0;
					u(C(a), function (a) {
						function c() {
							a.beforeStart();
							var d, h = a.close;
							if (b(a.anchors ? a.from.element || a.to.element : a.element)) {
								var k = f(a);
								k && (d = k.start)
							}
							d ? (d = d(), d.done(function (a) {
								h(!a)
							}), ta(a, d)) : h()
						}
						a.structural ? c() : (I.push({
							node: A(a.element),
							fn: c
						}), a.classBasedIndex === Z - 1 && (I = I.sort(function (a, b) {
							return b.node.contains(a.node)
						}).map(function (a) {
							return a.fn
						}), g(I)))
					})
				});
				return x
			}
		}]
	}]).provider("$animateCss", ["$animateProvider", function (a) {
		var b = Ba(),
			c = Ba();
		this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$document", "$sniffer", "$$rAFScheduler", function (a, e, s, n, g, l, D) {
			function z(a, b) {
				var c = a.parentNode;
				return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++r)) + "-" + a.getAttribute("class") + "-" + b
			}

			function Z(g, f, B, l) {
				var h;
				0 < b.count(B) && (h = c.get(B), h || (f = ba(f, "-stagger"), e.addClass(g, f), h = za(a, g, l), h.animationDuration = Math.max(h.animationDuration, 0), h.transitionDuration = Math.max(h.transitionDuration, 0), e.removeClass(g, f), c.put(B, h)));
				return h || {}
			}

			function I(a) {
				C.push(a);
				D.waitUntilQuiet(function () {
					b.flush();
					c.flush();
					for (var a = K.offsetWidth + 1, d = 0; d < C.length; d++) {
						C[d](a)
					}
					C.length = 0
				})
			}

			function w(c, f, e) {
				f = b.get(e);
				f || (f = za(a, c, Ma), "infinite" === f.animationIterationCount && (f.animationIterationCount = 1));
				b.put(e, f);
				c = f;
				e = c.animationDelay;
				f = c.transitionDelay;
				c.maxDelay = e && f ? Math.max(e, f) : e || f;
				c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
				return c
			}
			var B = ha(e),
				r = 0,
				K = A(g).body,
				C = [];
			return function (a, c) {
				function d() {
					h()
				}

				function g() {
					h(!0)
				}

				function h(b) {
					if (!(K || C && D)) {
						K = !0;
						D = !1;
						e.removeClass(a, Y);
						e.removeClass(a, W);
						ma(k, !1);
						ja(k, !1);
						u(m, function (a) {
							k.style[a[0]] = ""
						});
						B(a, c);
						ca(a, c);
						if (c.onDone) c.onDone();
						p && p.complete(!b)
					}
				}

				function L(a) {
					q.blockTransition && ja(k, a);
					q.blockKeyframeAnimation && ma(k, !!a)
				}

				function x() {
					p = new s({
						end: d,
						cancel: g
					});
					h();
					return {
						$$willAnimate: !1,
						start: function start() {
							return p
						},
						end: d
					}
				}

				function M() {
					function b() {
						if (!K) {
							L(!1);
							u(m, function (a) {
								k.style[a[0]] = a[1]
							});
							B(a, c);
							e.addClass(a, W);
							if (q.recalculateTimingStyles) {
								fa = k.className + " " + Y;
								$ = z(k, fa);
								y = w(k, fa, $);
								Q = y.maxDelay;
								H = Math.max(Q, 0);
								J = y.maxDuration;
								if (0 === J) {
									h();
									return
								}
								q.hasTransitions = 0 < y.transitionDuration;
								q.hasAnimations = 0 < y.animationDuration
							}
							if (q.applyTransitionDelay || q.applyAnimationDelay) {
								Q = "boolean" !== typeof c.delay && la(c.delay) ? parseFloat(c.delay) : Q;
								H = Math.max(Q, 0);
								var l;
								q.applyTransitionDelay && (y.transitionDelay = Q, l = [ea, Q + "s"], m.push(l), k.style[l[0]] = l[1]);
								q.applyAnimationDelay && (y.animationDelay = Q, l = [ra, Q + "s"], m.push(l), k.style[l[0]] = l[1])
							}
							F = 1E3 * H;
							G = 1E3 * J;
							if (c.easing) {
								var r = c.easing;
								q.hasTransitions && (l = O + "TimingFunction", m.push([l, r]), k.style[l] = r);
								q.hasAnimations && (l = V + "TimingFunction", m.push([l, r]), k.style[l] = r)
							}
							y.transitionDuration && p.push(pa);
							y.animationDuration && p.push(qa);
							x = Date.now();
							a.on(p.join(" "), g);
							n(d, F + 1.5 * G);
							xa(a, c)
						}
					}

					function d() {
						h()
					}

					function g(a) {
						a.stopPropagation();
						var b = a.originalEvent || a;
						a = b.$manualTimeStamp || b.timeStamp || Date.now();
						b = parseFloat(b.elapsedTime.toFixed(3));
						Math.max(a - x, 0) >= F && b >= J && (C = !0, h())
					}
					if (!K) {
						var x, p = [],
							l = function l(a) {
								if (C) D && a && (D = !1, h());
								else if (D = !a, y.animationDuration)
									if (a = ma(k, D), D) m.push(a);
									else {
										var b = m,
											c = b.indexOf(a);
										0 <= a && b.splice(c, 1)
									}
							},
							r = 0 < U && (y.transitionDuration && 0 === T.transitionDuration || y.animationDuration && 0 === T.animationDuration) && Math.max(T.animationDelay, T.transitionDelay);
						r ? n(b, Math.floor(r * U * 1E3), !1) : b();
						t.resume = function () {
							l(!0)
						};
						t.pause = function () {
							l(!1)
						}
					}
				}
				var k = A(a);
				c = ia(c);
				var m = [],
					r = a.attr("class"),
					v = Ea(c),
					K, D, C, p, t, H, F, J, G;
				if (0 === c.duration || !l.animations && !l.transitions) return x();
				var aa = c.event && X(c.event) ? c.event.join(" ") : c.event,
					R = "",
					N = "";
				aa && c.structural ? R = ba(aa, "ng-", !0) : aa && (R = aa);
				c.addClass && (N += ba(c.addClass, "-add"));
				c.removeClass && (N.length && (N += " "), N += ba(c.removeClass, "-remove"));
				c.applyClassesEarly && N.length && (B(a, c), N = "");
				var Y = [R, N].join(" ").trim(),
					fa = r + " " + Y,
					W = ba(Y, "-active"),
					r = v.to && 0 < Object.keys(v.to).length;
				if (!r && !Y) return x();
				var $, T;
				0 < c.stagger ? (v = parseFloat(c.stagger), T = {
					transitionDelay: v,
					animationDelay: v,
					transitionDuration: 0,
					animationDuration: 0
				}) : ($ = z(k, fa), T = Z(k, Y, $, Na));
				e.addClass(a, Y);
				c.transitionStyle && (v = [O, c.transitionStyle], da(k, v), m.push(v));
				0 <= c.duration && (v = 0 < k.style[O].length, v = Aa(c.duration, v), da(k, v), m.push(v));
				c.keyframeStyle && (v = [V, c.keyframeStyle], da(k, v), m.push(v));
				var U = T ? 0 <= c.staggerIndex ? c.staggerIndex : b.count($) : 0;
				(aa = 0 === U) && ja(k, 9999);
				var y = w(k, fa, $),
					Q = y.maxDelay;
				H = Math.max(Q, 0);
				J = y.maxDuration;
				var q = {};
				q.hasTransitions = 0 < y.transitionDuration;
				q.hasAnimations = 0 < y.animationDuration;
				q.hasTransitionAll = q.hasTransitions && "all" == y.transitionProperty;
				q.applyTransitionDuration = r && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);
				q.applyAnimationDuration = c.duration && q.hasAnimations;
				q.applyTransitionDelay = la(c.delay) && (q.applyTransitionDuration || q.hasTransitions);
				q.applyAnimationDelay = la(c.delay) && q.hasAnimations;
				q.recalculateTimingStyles = 0 < N.length;
				if (q.applyTransitionDuration || q.applyAnimationDuration) J = c.duration ? parseFloat(c.duration) : J, q.applyTransitionDuration && (q.hasTransitions = !0, y.transitionDuration = J, v = 0 < k.style[O + "Property"].length, m.push(Aa(J, v))), q.applyAnimationDuration && (q.hasAnimations = !0, y.animationDuration = J, m.push([sa, J + "s"]));
				if (0 === J && !q.recalculateTimingStyles) return x();
				null == c.duration && 0 < y.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || aa);
				F = 1E3 * H;
				G = 1E3 * J;
				c.skipBlocking || (q.blockTransition = 0 < y.transitionDuration, q.blockKeyframeAnimation = 0 < y.animationDuration && 0 < T.animationDelay && 0 === T.animationDuration);
				wa(a, c);
				q.blockTransition || ja(k, !1);
				L(J);
				return {
					$$willAnimate: !0,
					end: d,
					start: function start() {
						if (!K) return t = {
							end: d,
							cancel: g,
							resume: null,
							pause: null
						}, p = new s(t), I(M), p
					}
				}
			}
		}]
	}]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
		a.drivers.push("$$animateCssDriver");
		this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$document", "$sniffer", function (a, c, d, e, s, n) {
			function g(a) {
				return a.replace(/\bng-\S+\b/g, "")
			}

			function l(a, b) {
				U(a) && (a = a.split(" "));
				U(b) && (b = b.split(" "));
				return a.filter(function (a) {
					return -1 === b.indexOf(a)
				}).join(" ")
			}

			function D(c, e, z) {
				function D(a) {
					var b = {},
						c = A(a).getBoundingClientRect();
					u(["width", "height", "top", "left"], function (a) {
						var d = c[a];
						switch (a) {
							case "top":
								d += I.scrollTop;
								break;
							case "left":
								d += I.scrollLeft;
						}
						b[a] = Math.floor(d) + "px"
					});
					return b
				}

				function s() {
					var c = g(z.attr("class") || ""),
						d = l(c, t),
						c = l(t, c),
						d = a(n, {
							to: D(z),
							addClass: "ng-anchor-in " + d,
							removeClass: "ng-anchor-out " + c,
							delay: !0
						});
					return d.$$willAnimate ? d : null
				}

				function f() {
					n.remove();
					e.removeClass("ng-animate-shim");
					z.removeClass("ng-animate-shim")
				}
				var n = G(A(e).cloneNode(!0)),
					t = g(n.attr("class") || "");
				e.addClass("ng-animate-shim");
				z.addClass("ng-animate-shim");
				n.addClass("ng-anchor");
				w.append(n);
				var h;
				c = function () {
					var c = a(n, {
						addClass: "ng-anchor-out",
						delay: !0,
						from: D(e)
					});
					return c.$$willAnimate ? c : null
				}();
				if (!c && (h = s(), !h)) return f();
				var L = c || h;
				return {
					start: function start() {
						function a() {
							c && c.end()
						}
						var b, c = L.start();
						c.done(function () {
							c = null;
							if (!h && (h = s())) return c = h.start(), c.done(function () {
								c = null;
								f();
								b.complete()
							}), c;
							f();
							b.complete()
						});
						return b = new d({
							end: a,
							cancel: a
						})
					}
				}
			}

			function z(a, b, c, e) {
				var g = t(a),
					f = t(b),
					l = [];
				u(e, function (a) {
					(a = D(c, a.out, a["in"])) && l.push(a)
				});
				if (g || f || 0 !== l.length) return {
					start: function start() {
						function a() {
							u(b, function (a) {
								a.end()
							})
						}
						var b = [];
						g && b.push(g.start());
						f && b.push(f.start());
						u(l, function (a) {
							b.push(a.start())
						});
						var c = new d({
							end: a,
							cancel: a
						});
						d.all(b, function (a) {
							c.complete(a)
						});
						return c
					}
				}
			}

			function t(c) {
				var d = c.element,
					e = c.options || {};
				c.structural ? (e.structural = e.applyClassesEarly = !0, e.event = c.event, "leave" === e.event && (e.onDone = e.domOperation)) : e.event = null;
				c = a(d, e);
				return c.$$willAnimate ? c : null
			}
			if (!n.animations && !n.transitions) return H;
			var I = A(s).body;
			c = A(e);
			var w = G(I.parentNode === c ? I : c);
			return function (a) {
				return a.from && a.to ? z(a.from, a.to, a.classes, a.anchors) : t(a)
			}
		}]
	}]).provider("$$animateJs", ["$animateProvider", function (a) {
		this.$get = ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite", function (b, c, d, e) {
			function s(c) {
				c = X(c) ? c : c.split(" ");
				for (var d = [], e = {}, z = 0; z < c.length; z++) {
					var n = c[z],
						s = a.$$registeredAnimations[n];
					s && !e[n] && (d.push(b.get(s)), e[n] = !0)
				}
				return d
			}
			var n = ha(e);
			return function (a, b, d, e) {
				function t() {
					e.domOperation();
					n(a, e)
				}

				function A(a, b, d, e, f) {
					switch (d) {
						case "animate":
							b = [b, e.from, e.to, f];
							break;
						case "setClass":
							b = [b, r, K, f];
							break;
						case "addClass":
							b = [b, r, f];
							break;
						case "removeClass":
							b = [b, K, f];
							break;
						default:
							b = [b, f];
					}
					b.push(e);
					if (a = a.apply(a, b))
						if (Ca(a.start) && (a = a.start()), a instanceof c) a.done(f);
						else if (Ca(a)) return a;
					return H
				}

				function w(a, b, d, e, f) {
					var m = [];
					u(e, function (e) {
						var g = e[f];
						g && m.push(function () {
							var e, f, m = !1,
								k = function k(a) {
									m || (m = !0, (f || H)(a), e.complete(!a))
								};
							e = new c({
								end: function end() {
									k()
								},
								cancel: function cancel() {
									k(!0)
								}
							});
							f = A(g, a, b, d, function (a) {
								k(!1 === a)
							});
							return e
						})
					});
					return m
				}

				function B(a, b, d, e, f) {
					var m = w(a, b, d, e, f);
					if (0 === m.length) {
						var g, l;
						"beforeSetClass" === f ? (g = w(a, "removeClass", d, e, "beforeRemoveClass"), l = w(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (g = w(a, "removeClass", d, e, "removeClass"), l = w(a, "addClass", d, e, "addClass"));
						g && (m = m.concat(g));
						l && (m = m.concat(l))
					}
					if (0 !== m.length) return function (a) {
						var b = [];
						m.length && u(m, function (a) {
							b.push(a())
						});
						b.length ? c.all(b, a) : a();
						return function (a) {
							u(b, function (b) {
								a ? b.cancel() : b.end()
							})
						}
					}
				}
				3 === arguments.length && na(d) && (e = d, d = null);
				e = ia(e);
				d || (d = a.attr("class") || "", e.addClass && (d += " " + e.addClass), e.removeClass && (d += " " + e.removeClass));
				var r = e.addClass,
					K = e.removeClass,
					C = s(d),
					E, f;
				if (C.length) {
					var F, G;
					"leave" == b ? (G = "leave", F = "afterLeave") : (G = "before" + b.charAt(0).toUpperCase() + b.substr(1), F = b);
					"enter" !== b && "move" !== b && (E = B(a, b, e, C, G));
					f = B(a, b, e, C, F)
				}
				if (E || f) return {
					start: function start() {
						function b(c) {
							n = !0;
							t();
							ca(a, e);
							k.complete(c)
						}
						var d, l = [];
						E && l.push(function (a) {
							d = E(a)
						});
						l.length ? l.push(function (a) {
							t();
							a(!0)
						}) : t();
						f && l.push(function (a) {
							d = f(a)
						});
						var n = !1,
							k = new c({
								end: function end() {
									n || ((d || H)(void 0), b(void 0))
								},
								cancel: function cancel() {
									n || ((d || H)(!0), b(!0))
								}
							});
						c.chain(l, b);
						return k
					}
				}
			}
		}]
	}]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
		a.drivers.push("$$animateJsDriver");
		this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
			function d(c) {
				return a(c.element, c.event, c.classes, c.options)
			}
			return function (a) {
				if (a.from && a.to) {
					var b = d(a.from),
						n = d(a.to);
					if (b || n) return {
						start: function start() {
							function a() {
								return function () {
									u(d, function (a) {
										a.end()
									})
								}
							}
							var d = [];
							b && d.push(b.start());
							n && d.push(n.start());
							c.all(d, function (a) {
								e.complete(a)
							});
							var e = new c({
								end: a(),
								cancel: a()
							});
							return e
						}
					}
				} else return d(a)
			}
		}]
	}])
})(window, window.angular);
"use strict";
! function () {
	"use strict";
	angular.module("angular-loading-bar", ["cfp.loadingBarInterceptor"]), angular.module("chieffancypants.loadingBar", ["cfp.loadingBarInterceptor"]), angular.module("cfp.loadingBarInterceptor", ["cfp.loadingBar"]).config(["$httpProvider", function (a) {
		var b = ["$q", "$cacheFactory", "$timeout", "$rootScope", "$log", "cfpLoadingBar", function (b, c, d, e, f, g) {
			function h() {
				d.cancel(j), g.complete(), l = 0, k = 0
			}

			function i(b) {
				var d, e = c.get("$http"),
					f = a.defaults;
				!b.cache && !f.cache || b.cache === !1 || "GET" !== b.method && "JSONP" !== b.method || (d = angular.isObject(b.cache) ? b.cache : angular.isObject(f.cache) ? f.cache : e);
				var g = void 0 !== d ? void 0 !== d.get(b.url) : !1;
				return void 0 !== b.cached && g !== b.cached ? b.cached : (b.cached = g, g)
			}
			var j, k = 0,
				l = 0,
				m = g.latencyThreshold;
			return {
				request: function request(a) {
					return a.ignoreLoadingBar || i(a) || (e.$broadcast("cfpLoadingBar:loading", {
						url: a.url
					}), 0 === k && (j = d(function () {
						g.start()
					}, m)), k++, g.set(l / k)), a
				},
				response: function response(a) {
					return a && a.config ? (a.config.ignoreLoadingBar || i(a.config) || (l++, e.$broadcast("cfpLoadingBar:loaded", {
						url: a.config.url,
						result: a
					}), l >= k ? h() : g.set(l / k)), a) : (f.error("Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"), a)
				},
				responseError: function responseError(a) {
					return a && a.config ? (a.config.ignoreLoadingBar || i(a.config) || (l++, e.$broadcast("cfpLoadingBar:loaded", {
						url: a.config.url,
						result: a
					}), l >= k ? h() : g.set(l / k)), b.reject(a)) : (f.error("Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"), b.reject(a))
				}
			}
		}];
		a.interceptors.push(b)
	}]), angular.module("cfp.loadingBar", []).provider("cfpLoadingBar", function () {
		this.autoIncrement = !0, this.includeSpinner = !0, this.includeBar = !0, this.latencyThreshold = 100, this.startSize = .02, this.parentSelector = "body", this.spinnerTemplate = "<div id=\"loading-bar-spinner\"><div class=\"spinner-icon\"></div></div>", this.loadingBarTemplate = "<div id=\"loading-bar\"><div class=\"bar\"><div class=\"peg\"></div></div></div>", this.$get = ["$injector", "$document", "$timeout", "$rootScope", function (a, b, c, d) {
			function e() {
				if (k || (k = a.get("$animate")), c.cancel(m), !r) {
					var e = b[0],
						g = e.querySelector ? e.querySelector(n) : b.find(n)[0];
					g || (g = e.getElementsByTagName("body")[0]);
					var h = angular.element(g),
						i = g.lastChild && angular.element(g.lastChild);
					d.$broadcast("cfpLoadingBar:started"), r = !0, v && k.enter(o, h, i), u && k.enter(q, h, o), f(w)
				}
			}

			function f(a) {
				if (r) {
					var b = 100 * a + "%";
					p.css("width", b), s = a, t && (c.cancel(l), l = c(function () {
						g()
					}, 250))
				}
			}

			function g() {
				if (!(h() >= 1)) {
					var a = 0,
						b = h();
					a = b >= 0 && .25 > b ? (3 * Math.random() + 3) / 100 : b >= .25 && .65 > b ? 3 * Math.random() / 100 : b >= .65 && .9 > b ? 2 * Math.random() / 100 : b >= .9 && .99 > b ? .005 : 0;
					var c = h() + a;
					f(c)
				}
			}

			function h() {
				return s
			}

			function i() {
				s = 0, r = !1
			}

			function j() {
				k || (k = a.get("$animate")), d.$broadcast("cfpLoadingBar:completed"), f(1), c.cancel(m), m = c(function () {
					var a = k.leave(o, i);
					a && a.then && a.then(i), k.leave(q)
				}, 500)
			}
			var k, l, m, n = this.parentSelector,
				o = angular.element(this.loadingBarTemplate),
				p = o.find("div").eq(0),
				q = angular.element(this.spinnerTemplate),
				r = !1,
				s = 0,
				t = this.autoIncrement,
				u = this.includeSpinner,
				v = this.includeBar,
				w = this.startSize;
			return {
				start: e,
				set: f,
				status: h,
				inc: g,
				complete: j,
				autoIncrement: this.autoIncrement,
				includeSpinner: this.includeSpinner,
				latencyThreshold: this.latencyThreshold,
				parentSelector: this.parentSelector,
				startSize: this.startSize
			}
		}]
	})
}();
