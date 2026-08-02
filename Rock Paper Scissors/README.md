# Rock Paper Scissors

A classic Rock-Paper-Scissors game against the computer, with live score tracking.

## Features
- Play Rock, Paper, or Scissors against a randomized computer opponent
- Tracks wins, losses, and ties across rounds
- Clear win/lose/tie messaging after each round
- Reset scores button

## How to Run
1. Opens in any browser — no installation or server needed
2. Click one of the three choice buttons to play a round

## How It Works
- The computer's move is chosen with `Math.random()` across the three options.
- A `BEATS` lookup object defines the win relationships (e.g. `rock` beats `scissors`), so the outcome is determined with a simple lookup instead of a long if/else chain.
- Scores are tracked in a `scores` object (`player`, `cpu`, `tie`) and re-rendered to the screen after every round.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Google Fonts (Poppins)

## Key Concepts Practiced
- Game logic and win-condition rules
- Conditional rendering based on game state
- Randomization (`Math.random()`)

## Possible Improvements
- Best-of-N match mode (e.g. first to 5 wins)
- Round history log
- Animated "throw" sequence before revealing choices
- Add Rock-Paper-Scissors-Lizard-Spock variant

## Known Limitations
- Computer moves are fully random — no difficulty levels or pattern learning
