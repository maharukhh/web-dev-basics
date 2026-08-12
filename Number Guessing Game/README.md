# Number Guessing Game

A "guess the number" game where the app picks a random number between 1 and 100 and gives hot/cold feedback until you find it.

## Features
- Random target number between 1 and 100 each game
- "Hot" feedback when your guess is within 5 of the target, "cold" otherwise
- Tracks number of attempts per game
- Tracks your best (fewest-attempts) score across games
- Guess history shown as color-coded chips
- New Game button to reset and try again


## How It Works
- On load (and on New Game), a target number is picked with `Math.floor(Math.random() * 100) + 1`.
- Each guess is compared to the target: exact match ends the game, a difference of 5 or less triggers "hot" feedback, anything further triggers "cold" feedback along with a higher/lower hint.
- The best score is only updated when the current game's attempt count is lower than the previous best (or if there is no previous best yet).
- Guess history chips are appended to an array and re-rendered after each guess, color-coded by how close that guess was.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Google Fonts (Fredoka)

## Key Concepts Practiced
- State management (attempts, target number, game-over flag)
- User feedback loops
- Conditional logic based on numeric distance

## Possible Improvements
- Adjustable difficulty (different number ranges or a limited number of guesses)
- Save best score across browser sessions with `localStorage`
- Add a visual progress bar showing "hotter/colder" trend over recent guesses

## Known Limitations
- Best score only persists for the current browser session (not saved between visits)
