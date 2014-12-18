App.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('quiz');
	}
});
App.QuizRoute = Ember.Route.extend({
	model: function(params) {
		var uname = this.controllerFor('index').get('uname');
		if(!uname){
			this.transitionTo('index');	
		}else{
			return this.store.find('quiz', params.qt_no);
		}
	}
});
App.ResultRoute = Ember.Route.extend({
	model : function() {
		var uname = this.controllerFor('index').get('uname');
		if(!uname){
			this.transitionTo('index');	
		}else{
			var _score = this.controllerFor('index').get('score');
			return {score:_score};
		}
			
	/*	var self = this;	
		var _score = 0;
		//var score='';
		var ans = this.store.all('quiz');
		ans.toArray().forEach(function(value, index){
			var correctAns = value.get('correctans');
			var resp = self.store.find('response', value.id);
			resp.then(function(res) {
				var selAns = resp.get('selectedAns');
				if(correctAns == selAns) {
					_score++;
				}
				if(index==(ans.toArray().length-1)) {
					console.log("return this score"+_score);
					{score:_score};
				}
			});
		});
		return {score:_score}; */
		}
});
