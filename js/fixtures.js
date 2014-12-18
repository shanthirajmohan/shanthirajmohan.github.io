App.QuizAdapter = DS.FixtureAdapter.extend();
App.AnswerAdapter = DS.FixtureAdapter.extend();

App.Quiz.FIXTURES = [
	{id:1, question:'What did Galileo invent?', answers:[1,2,3,4], correctans:'Thermometer'},
	{id:2, question:'The brightest planet is', answers:[5,6,7,8], correctans:'Venus'},
	{id:3, question:'Which is considered as the biggest port of india?', answers:[9,10,11,12], correctans:'Mumbai'},
	{id:4, question:'The velocity of light was first measured by', answers:[13,14,15,16], correctans:'Romer'},
	{id:5, question:'The largest fresh water lake in india is', answers:[17,18,19,20], correctans:'Kolleru Lake'},
	{id:6, question:'The Number of commands of Air Force are', answers:[21,22,23,24], correctans:'Seven'},
	{id:7, question:'Which animal has the biggest eye -- ten times bigger than a human eye?', answers:[25,26,27,28], correctans:'Giant Squid'},
	{id:8, question:'The gas usually filled in the electric bulb is', answers:[29,30,31,32], correctans:'Nitrogen'},
	{id:9, question:'Light Year is related to', answers:[33,34,35,36], correctans:'Distance'},
	{id:10, question:'The average salinity of sea water is', answers:[37,38,39,40], correctans:'3.5%'}	
	];

App.Answer.FIXTURES = [
	{id:1,option:'Barometer',quiz:1},{id:2,option:'Pendulum clock',quiz:1},{id:3,option:'Microscope',quiz:1},{id:4,option:'Thermometer',quiz:1},
	{id:5,option:'Mars',quiz:2},{id:6,option:'Mercury',quiz:2},{id:7,option:'Neptune',quiz:2},{id:8,option:'Venus',quiz:2},
	{id:9,option:'Kolkata',quiz:3},{id:10,option:'Chochin',quiz:3},{id:11,option:'Chennai',quiz:3},{id:12,option:'Mumbai',quiz:3},
	{id:13,option:'Einstein',quiz:4},{id:14,option:'Newton',quiz:4},{id:15,option:'Romer',quiz:4},{id:16,option:'Galileo',quiz:4},
	{id:17,option:'Pulicat Lake',quiz:5},{id:18,option:'Veeranam Lake',quiz:5},{id:19,option:'Chilka Lake',quiz:5},{id:20,option:'Kolleru Lake',quiz:5},
	{id:21,option:'Five',quiz:6},{id:22,option:'Six',quiz:6},{id:23,option:'Seven',quiz:6},{id:24,option:'Eight',quiz:6},
	{id:25,option:'Giant Squid',quiz:7},{id:26,option:'Whale',quiz:7},{id:27,option:'Mongoose',quiz:7},{id:28,option:'Bush Baby',quiz:7},
	{id:29,option:'Nitrogen',quiz:8},{id:30,option:'Hydrogen',quiz:8},{id:31,option:'Carbon dioxide',quiz:8},{id:32,option:'Oxygen',quiz:8},
	{id:33,option:'Energy',quiz:9},{id:34,option:'Speed',quiz:9},{id:35,option:'Distance',quiz:9},{id:36,option:'Intensity',quiz:9},
	{id:37,option:'2%',quiz:10},{id:38,option:'2.5%',quiz:10},{id:39,option:'3%',quiz:10},{id:40,option:'3.5%',quiz:10}
		
]
