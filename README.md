# musichack
image to sound app


drop zone
http://www.dropzonejs.com/#usage

color thief
http://lokeshdhakar.com/projects/color-thief/

tone js
https://github.com/TONEnoTONE/Tone.js/


use dropzone to grab an image from the users desktop or the web

use an image hosting api like flickr to upload the image and return the hosted url

dropzone also sends the image to color thief, which gives us an array of color values

front end interface gets changed by the color thief color array

color thief colors get translated into parameters for tone js synth
