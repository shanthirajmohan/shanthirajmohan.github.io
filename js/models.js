App.Quiz = DS.Model.extend({
	question : DS.attr('string'),
	correctans : DS.attr('string'),
	answers : DS.hasMany('answer',{async:true})
});

App.Answer = DS.Model.extend({
	option : DS.attr('string'),
	quiz: DS.belongsTo('quiz')
});

/*App.Response = DS.Model.extend({
	qId : DS.attr('number'),
	selectedAns : DS.attr('string')
});

App.Response.FIXTURES = [
	{id:1, qId:1, selectedAns:'Test'}
];*/

