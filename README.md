check more calculator pictures online
                                                        
                                                        
                 ________________________________________________
                |_____________________________________________ __|
                | |input1                                      | |
                |_|input2______________________________________|_|
                | |                                              |
                | |                                              |
                | |  x pow(y)    sqrt(x)         OFF        ON   |
                | |                                              |
                | |                                              |
                | |     7           8             9          /   |
                | |                                              |
                | |                                              |
                | |     4           5             6          x   |
                | |                                              |
                | |                                              |
                | |     1           2             3          -   |
                | |                                              |
                | |                                              |
                | |     0           .             =          +   |
                | |                                              |
                |_|______________________________________________|                                      


#html
    -div calculator - container div
    -div calc screen is input type text
    -div buttons filled with buttons created from JS
    
#css
    -outter div: centered(check minesweeper css for ideas)margin 0 auto
    -to align everything in center inside text-align : center
    -buttons styled radius shadow
    -buttons background same colour as button content once turned on the button content turns white


#js
    -create buttons in js with for loop from an array with all the values(1-9, +,- etc..)
        + addeventlisteners(click) at this point as well
        + when clicked add that value to input 
            +check edge cases (no ** /*, use switcher x = !x )
    -function for on/off (off - all buttons inactive. )
    -functions for each mathematical operator
    -functions to send values to input

    ---consider 2 input screens
        1. for the mathematical task at hand
        2. for current sum(instead of waiting for = click display current sum at each click)
        3. when = is clicked move the sum from input 2 to input 1 and let it be used in further calculations

Cycle
    1. Turn on
    2. Click number
    3. Click math operator
    4. Repeat 2. and 3.