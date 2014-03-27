var MainRouter = Backbone.Router.extend({
	routes:{
		'':'index'
	},
	index:function(){
		app.header.setTitle('popmyday');

		app.content.slideInFromRight(new HomeVC());
	}
});

