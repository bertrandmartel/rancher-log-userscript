# Rancher log userscript

A small JS userscript used to enlarge the log view on Rancher server & makes it scale to the window size

Tested on Rancher server v1.6.13

## Before

![log_actual](https://user-images.githubusercontent.com/5183022/34428867-48e0f906-ec51-11e7-97a8-a89eb929883b.png)

## After

![log_enlarge](https://user-images.githubusercontent.com/5183022/34428820-c9f75018-ec50-11e7-8171-ec84ca63e81f.png)

## Usage

copy/paste `userscript.js` in your favorite userscript plugin [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) or [greasemonkey](https://addons.mozilla.org/fr/firefox/addon/greasemonkey/), edit this line with the correct rancher host : 

    // @include      /^https?:\/\/your.rancher.host/.*$/

## License

    The MIT License (MIT) Copyright (c) 2017 Bertrand Martel