//Pop this into the console of your browser before pressing play on your favorite Netflix show.

var checkForSkip = setInterval(function(){ 

try {
  var playBtn = document.querySelectorAll(".PlayerControlsNeo__button-control-row")[0].children[0]
    
  if (playBtn.className.indexOf('button-nfplayerPlay') > -1) {
    var skipBtn = document.querySelectorAll(".skip-credits")[0].children[0];
    skipBtn.click();
  }

  } catch(ex) {
    //It's OK. The browser will be fine.
  }
}, 5000);
