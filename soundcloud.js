function playMusic(myGenre) {  

SC.initialize({
  client_id: '02f6c269172ac9312f9de8ac41324001'
});	
  
 var url = 'https://api.soundcloud.com/tracks.json?client_id=02f6c269172ac9312f9de8ac41324001';
	$.getJSON(url, { genres: myGenre, bpm: { from: 120 } },
  function(tracks) {
    //Pulls 50 songs and then randomly chooses one
      var random = Math.floor(Math.random() * 49);
      var track_url = tracks[random].stream_url;
      //Displays the sound player
      SC.stream(track_url, function(sound) {
        $('#play').click(function(e) {
          e.preventDefault();
          sound.togglePause();

      });
      $('.genre').click(function(e) {
    		e.preventDefault();
	 	sound.destruct();
	 	console.log(myGenre);
        });
    });        
  });
  console.log(myGenre);
}; 
