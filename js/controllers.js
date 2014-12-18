App.IndexController = Ember.ArrayController.extend( {

	actions: {
		startquiz: function() {
			this.set('uname', this.get('username'));
			this.set('score', 0);
			this.transitionToRoute('/qts/1');
		}
	}
});
App.QuizController = Ember.ObjectController.extend({
	needs: ['index'],
	actions:{
		next: function(param) {
			var id = param.id;
			var ans = $('input[name=answer]:checked').val();
			this.addResponse(id, ans);
			this.navigate(id);
		},
		previous: function() {
			this.navigate(-1);
		}
	},
	addResponse: function(id, ans) {
		var indexController = this.get('controllers.index');
		var _cAns = this.store.find('quiz', id);
		_cAns.then(function(res) {
			var correctAns = res.get('correctans');
			if(ans == correctAns) {
				var _score = indexController.get('score')+1;
				indexController.set('score', _score);
			}
				
		});
		/*var record = this.store.push('response', { id:id, qId : id, selectedAns : ans});*/
	},
	navigate: function(qNo) {
		var qCount = this.store.all('quiz').toArray().length;
		var nextQuesNo=parseInt(qNo)+1;
		if(nextQuesNo>=0 && nextQuesNo<=qCount) {
			this.transitionToRoute('/qts/'+nextQuesNo);
		}else if(nextQuesNo>qCount){
			this.transitionToRoute('/result');
		}
	}
});
App.ResultController = Ember.ObjectController.extend({
});
