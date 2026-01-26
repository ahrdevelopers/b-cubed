(function() {
    'use strict';


    var startScreen = document.getElementById('bcubed-start-screen');
    var loading = document.getElementById('bcubed-loading');
    var siteLock = document.getElementById('bcubed-site-lock');
    var innerBox = document.querySelector('#bcubed-start-screen>div');
    var progress = document.getElementById('bcubed-loading-progress');


    function resize() {
        var scale = Math.min(window.innerWidth / 600, window.innerHeight / 550, 1);
        innerBox.style.transform = 'scale(' + scale + ', ' + scale + ')';
    }

    window.addEventListener('resize', resize);
    resize();
    var allowedDomain = ["stage.coolmath-games.com","m-stage.coolmath-games.com","www.coolmath-games.com","m.coolmath-games.com", "www.coolmathgames.com","edit.coolmathgames.com","stage.coolmathgames.com","stage-edit.coolmathgames.com","localhost:8080"];
    var currentDomain = document.location.host;
    var parentDomain = "";
    var referrer = document.referrer;
    if (referrer !== "")
    parentDomain = referrer.split('/')[2];
     if (BCubed.loadGame || 
        !((allowedDomain.indexOf(currentDomain) < 0 || (parentDomain!=="" && allowedDomain.indexOf(parentDomain) < 0)))
        ) {
         BCubed.loadGame = true;
         loading.classList.add('bcubed-visible');
     } else
         siteLock.classList.add('bcubed-visible');

    BCubed.loading = {
        'hide': function() {
            window.removeEventListener('resize', resize);
            startScreen.parentNode.removeChild(startScreen);
        },
        'progress': function(percent) {
            progress.style.width = (percent * 100) + '%';
        }
    };

})();
