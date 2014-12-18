App.Router.map(function() {
	this.route("index", { path: "/" });
    	this.resource('quiz', { path: '/qts/:qt_no' });
	this.route("result", {path : "/result"});
});
