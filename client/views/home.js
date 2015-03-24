// Template.home.rendered = function() {
	// var width = window.innerWidth,
	// 	height = window.innerHeight,
	// 	cw = width / 2,
	// 	ch = height / 2;

	// 	console.log("width: " + width + " height: " + height)
	// $('body').mousemove(function(e){
	//     var amountMovedX = (-(e.pageX) / 60 - cw);
	//     var amountMovedY = (-(e.pageY) / 60 - ch / 5);
	//     console.log(e.pageX)
	//     $('h1').css('left', amountMovedX + 'px, ' + amountMovedY + 'px, 0)');
	// });
// }

Template.home.rendered = function() {
	var eventTime= moment('2015-04-22').unix(); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
	var currentTime = moment().unix(); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
	var diffTime = eventTime - currentTime;
	var duration = moment.duration(diffTime*1000, 'milliseconds');
	var interval = 1000;

	setInterval(function(){
	  duration = moment.duration(duration - interval, 'milliseconds');
	    // $('.countdown').text(duration.days() + ":" + duration.hours() + ":" + duration.minutes())
	    Session.set('daysLeft', duration.days())
	    Session.set('hoursLeft', duration.hours())
	    Session.set('minutesLeft', duration.minutes())
	    Session.set('secondsLeft', duration.seconds() + 1)
	}, interval);
};

Template.home.helpers({
	days: function() {
		return Session.get('daysLeft')
	},
	hours: function() {
		return Session.get('hoursLeft')
	},
	minutes: function() {
		return Session.get('minutesLeft')
	},
	seconds: function() {
		return Session.get('secondsLeft')
	}
})