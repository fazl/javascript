### NOTES
Discovered Meld, a diff/merge tool that works nicely with Git on Windows.
Much easier on the eyes than vimdiff side-by-side output (and a lot quicker to exit than using :q twice in the vimdiff!).
Wow, and git diff --word-diff=color removes the need for side by side, plus is fast to show!

### TODOs 
- [x] 12/4/2020 clean up title on the page
- [x] 12/4/2020 On game won, highlight  winning line. 
    - [ ] ~~Ideally: draw line through the tiles.~~
    - [x] Easier: just apply a different style to the three tiles.
- [x] 13/4/2020 (done: 15/4/2020) evolve tictactoe into 'tile puzzle'
    - [x] Generalise from 3x3 to NxN
        - [x] Must dynamically build table on some button click..
        - [x] Must attach click handler closure to each new button..
        - [x] Also recalculate winning line configs on resize
- [x] 16/4/2020 (almost too easy!) Idea: change style on winning line, with transition to new colour ?
- [ ] 18/4/2020 unit tests e.g. for line-generator func
- [x] 15/4/2020 (done: 19/4) Convert to a Sliding Tile Puzzle         
    - [x] one button represents empty cell, others must carry a label (e.g. 1,2,3..)
- [ ] 19/4/2020 Randomize puzzle at start
- [ ] 19/4/2020 Allow sliding more than one tile with one click..
- [ ] 18/4/2020 Conways game of life - using some kind of timer event in javascript??

