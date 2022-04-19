# custom_selec_box (TuT)

A custom select box

## Table of contents
- [Overview](#overview)   
  - [Links](#links)
  - [Built with](#built-with) 

## Overview

What did i get from this ?

the difference between width 100% and width 100vw...

"vw" as unit will make everything in the website (including size and heights ? ) to display proportionaly to the device screen width regardless of it's resolution.(good for mobile and screen)
si we set style body { margin: 0 } then width 100vw = width 100% to element child to body

but.. but... the issue with what above is that it can create horizontal scroolbar, so to avoid that we use max-width = 100%
        so we add   { 
                        width : 100vw
                        height : 100vh
                        max-width : 100%
                    }
        we add the latter to what is suppose to be our background


Learn about the CSS style 
    visibility: hidden;

    it seems better than my use of opacity 0 with gave me a lot of pointer events issue where i needed to put at "none" everytime

### Links


- Solution URL : [code](https://github.com/EtnoPolino/custom_selec_box.git)
- Live Site URL : [demo](https://etnopolino.github.io/custom_selec_box/)


### Built with

- html5 
- css
- a bit of js

didnt bother add for the media query










What did i get from this ?

the difference between width 100% and width 100vw...

"vw" as unit will make everything in the website (including size and heights ? ) to display proportionaly to the device screen width regardless of it's resolution.(good for mobile and screen)
si we set style body { margin: 0 } then width 100vw = width 100% to element child to body

but.. but... the issue with what above is that it can create horizontal scroolbar, so to avoid that we use max-width = 100%
        so we add   { 
                        width : 100vw
                        height : 100vh
                        max-width : 100%
                    }
        we add the latter to what is suppose to be our background


Learn about the CSS style 
    visibility: hidden;

    it seems better than my use of opacity 0 with gave me a lot of pointer events issue where i needed to put at "none" everytime