var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');
var url = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Debussy_-_Pour_les_accords.flac"
var player = AV.Player.fromURL(url);

playBtn.addEventListener('click', function() {
  player.play()
})

pauseBtn.addEventListener('click', function() {
  player.pause()
})