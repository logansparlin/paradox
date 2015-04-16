(function(){Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
})

Router.route('/', {
	name: 'home',
	fastRender: true,
	action: function() {
		GAnalytics.pageview('/Home')
		this.render()
	}
})

})();
