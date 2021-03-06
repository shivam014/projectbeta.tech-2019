
(function(){
	
	var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'anim-in-out', 'angular-loading-bar'])
		.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
			cfpLoadingBarProvider.includeSpinner = false;
		}])
		.run(['$rootScope', '$state', '$stateParams',
			function ($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
		}]);

	routerApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.rule(function($injector, $location) {

			var path = $location.path();
			var hasTrailingSlash = path[path.length-1] === '/';
		
			if(hasTrailingSlash) {
				//if last charcter is a slash, return the same url without the slash  
				var newPath = path.substr(0, path.length - 1); 
				return newPath; 
			} 
		
		});

		$urlRouterProvider.otherwise('/404');

		$stateProvider

			.state('index', {
				url: '/',
				templateUrl: 'partials/home.html',
				data: { pageTitle: 'ProjectBeta 2020' },
				onEnter: function() {
					uiContainer.style.justifyContent = "flex-start";
				}
			})

			.state('404', {
				url: '/404',
				templateUrl: 'partials/404.html',
				data: { pageTitle: '404 \u00B7 ProjectBeta 2020' }
			})
		
			.state('leaderboard', {
				url: '/leaderboard',
				templateUrl: 'partials/leaderboard.html',
				data: { pageTitle: 'leaderboard \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('betatest', {
				url: '/betatest',
				templateUrl: 'partials/betatest.html',
				data: { pageTitle: 'BetaTest \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('home', {
				url: '/home',
				templateUrl: 'partials/home.html',
				data: { pageTitle: 'ProjectBeta 2020' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "flex-start";
				}
			})
			.state('baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa', {
				url: '/baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa',
				templateUrl: 'partials/baaabaabbbaaaaaababaaaaaaababaaaaaaababaaaaaaababaaaaaa.html',
				data: { pageTitle: 'ProjectBeta 2020' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "flex-start";
				}
			})

			.state('about', {
				url: '/about',
				templateUrl: 'partials/about.html',
				data: { pageTitle: 'About \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('notifs', {
				url: '/notifs',
				templateUrl: 'partials/notifs.html',
				data: { pageTitle: 'About \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'partials/contact.html',
				data: { pageTitle: 'Contact \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
.state('team2', {
				url: '/team2',
				templateUrl: 'partials/team2.html',
				data: { pageTitle: 'Team \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('team', {
				url: '/team',
				templateUrl: 'partials/team.html',
				data: { pageTitle: 'Team \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})

			.state('history', {
				url: '/history',
				templateUrl: 'partials/history.html',
				data: { pageTitle: 'History \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})

			.state('alumni', {
				url: '/alumni',
				templateUrl: 'partials/alumni.html',
				data: { pageTitle: 'Alumni \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})

			.state('apply', {
				url: '/apply',
				templateUrl: 'partials/apply.html',
				data: { pageTitle: 'Apply \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('rd', {
				url: '/rd',
				templateUrl: 'partials/rd.html',
				data: { pageTitle: 'Apply \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('design', {
				url: '/design',
				templateUrl: 'partials/design.html',
				data: { pageTitle: 'Apply \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('interactive', {
				url: '/interactive',
				templateUrl: 'partials/interactive.html',
				data: { pageTitle: 'Apply \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			})
			.state('events', {
				url: '/events',
				templateUrl: 'partials/events.html',
				data: { pageTitle: 'Events \u00B7 ProjectBeta' },
				onEnter: function() {
					if (isMobile) {
						setTimeout(sidebarClose, 100);
					}
					mainEl.scroll(0,0);
					uiContainer.style.justifyContent = "space-between";
				}
			});
			
		
		$locationProvider.html5Mode(true);
	});
}());
