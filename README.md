# Lazyflix
### Skip Netflix Show Intros Automatically

Using Javascript, keep on watching your show without pesky intro interruptions. 

Paste script below into your browser's console just before hitting play and wait for the magic to happen.

```javascript

var checkForSkip = setInterval(function(){ 

try {
  var playBtn = document.querySelectorAll(".PlayerControlsNeo__button-control-row")[0].children[0]
    
  if (playBtn.className.indexOf('button-nfplayerPlay') > -1) {
    var skipBtn = document.querySelectorAll(".skip-credits")[0].children[0];
    skipBtn.click();
  }

  } catch(ex) {
  
  }
}, 5000);

```
