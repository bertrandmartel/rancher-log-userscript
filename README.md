# Rancher log userscript

A small JS userscript used to enlarge the log view on Rancher server & makes it scale to the window size

## Before

![log_actual](https://user-images.githubusercontent.com/5183022/34419268-22580926-ec03-11e7-9104-78443ff5fcc6.png)

## After

![log_enlarge](https://user-images.githubusercontent.com/5183022/34419270-226c6c90-ec03-11e7-977d-38f59ab47da5.png)

## Usage

copy/paste `userscript.js` in your favorite userscript plugin [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) or [greasemonkey](https://addons.mozilla.org/fr/firefox/addon/greasemonkey/), edit this line with the correct rancher host : 

    // @include      /^https?:\/\/your.rancher.host/.*$/

## License

    The MIT License (MIT) Copyright (c) 2017 Bertrand Martel