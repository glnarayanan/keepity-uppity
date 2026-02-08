PRD: Minimalist Soccer Juggler
1. Project Overview
A browser-based, physics-driven "Keepity Uppity" game where the player clicks a soccer ball to keep it from touching the ground. The game is endless, minimalist, and tracks the current session score and an all-time high score.

2. Core Gameplay Mechanics
The Start: The game begins with a soccer ball resting in the center of the bottom of the screen. The first click "kicks" it into the air.

The Physics (Crucial):

Gravity: Constant downward force acting on the ball.

Impulse: Every click applies an upward force.

Directional Logic: The force vector depends on where the user clicks relative to the ball's center:

Click Center-Bottom: Ball goes straight up.

Click Left Side: Ball pops up and to the right.

Click Right Side: Ball pops up and to the left.

Boundary Rules:

Side Walls: The ball should bounce off the left and right edges of the browser window with slight momentum loss (dampening).

The Floor: If the ball touches the bottom edge, the game resets.

3. Functional Requirements
Single-Page App: Build using HTML5 Canvas or a simple Div-based physics approach (CSS/JS).

Scoring System:

Current Score: Increments by 1 for every successful click. Resets to 0 when the ball hits the floor.

High Score: Persists across page refreshes using localStorage.

State Management:

Idle: Ball on the ground, "Click to Start" text displayed.

Active: Ball in motion, score displayed at the top.

Game Over: Brief flash/animation when the ball hits the floor, then return to Idle.

4. UI & Design (Minimalist)
Background: Solid light gray or white (#F0F0F0).

The Ball: A simple circular sprite or a basic 2D soccer ball icon.

Typography: Clean sans-serif font (e.g., Inter or Arial).

Layout: * Score centered at the top.

High Score in a small font in the corner.

No menus, no buttons, no settings.

5. Technical Constraints (For Codex/Claude)
Language: Vanilla JavaScript, HTML5, and CSS. No external libraries (like Phaser or Matter.js) unless specifically requested to keep the file size tiny.

Responsive: The game should play well on both desktop (mouse click) and mobile (tap).

Storage: Use localStorage.getItem('highScore') and localStorage.setItem().
