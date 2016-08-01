(function(app) {
    app.AppComponent =
    	ng.core.Component({
    	selector: 'my-app',
    	template: '<h1>Hello from Jaymin</h1><p>Angular 2 using JS</p>'
    	})
    	.Class({
	    	constructor: function() {}
    	});
})(window.app || (window.app = {}));