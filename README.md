# custom_selec_box
(TuT)


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