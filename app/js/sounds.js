function init() {
	console.log("init");
	// var currentPlayer;

	function initSC(){
		SC.initialize({
			client_id: 'b36e85bf651272bee51fa4c240a25fcd'
		});
  }

	// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276734908&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

	function streamTrack() {
		// SC.stream("/tracks/276734908", {
    //       // onfinish: function() {
    //       //     skipTrack();
    //       //   },
    //       //   onsuspend: function() {
    //       //     // skipTrack();
    //       //   },
    //       //   ondataerror : function(){
		// 			//
    //       //   }
    //     }, function(sound){
    //         // soundManager = sound;
    //         sound.play({
    //         onload: function() {
    //           if (this.readyState == 2) {
    //             console.log("Track failed to load");
    //           }
    //         }
    //       });
		// 		});


		console.log("Try to stream");
		return SC.stream('/tracks/276734908').then(function(player){
			console.log(player);
			// if (currentPlayer) {
	    //   currentPlayer.pause();
	    // }
	    // currentPlayer = player;

			player.play();
	  }).catch(function() {
			console.log(arguments);
		});

		// document.getElementById('pause').addEventListener('click', function(){
	  //   if (currentPlayer) {
	  //     currentPlayer.pause();
	  //   }
	  // });
	  // document.getElementById('play').addEventListener('click', function(){
	  //   if (currentPlayer) {
	  //     currentPlayer.play();
	  //   }
	  // });
	}
	initSC();
	SC.resolve().then(streamTrack);;
}

if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);
else window.onload = init;
