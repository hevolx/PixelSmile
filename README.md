# PixelSmile

A TypeScript learning project that renders pixel art — a smiling face — to the console.

## Motivation

This is a CodeCademy exercise where a half-implemented program was provided with bugs and missing functions. The goal is to leverage TypeScript's type system to fix errors and implement the missing drawing functions, ultimately producing a pixel art smiley face in the terminal.

## Screenshots

```
XXXXXXXXXXXXXXXXXXXX
X                  X
X      X     X     X
X                  X
X  X            X  X
X  XXXXXXXXXXXX  X X
X                  X
XXXXXXXXXXXXXXXXXXXX
```

## Tech/framework used

**Built with**
- [TypeScript](https://www.typescriptlang.org/) 6.x
- Node.js

## Features

- Draw individual pixels with `drawDot`
- Draw horizontal and vertical lines
- Draw rectangles
- Render a 20×8 pixel art image to the console
- Easily extendable to draw custom pictures

## Installation

```bash
npm install
```

## How to use?

Compile and run:

```bash
npx tsc && node src/index.js
```

To draw your own picture, edit `src/index.ts` and use the drawing functions:

```ts
drawDot(x, y);
drawHorizontalLine(x, y, length);
drawVerticalLine(x, y, length);
drawRectangle(x, y, width, height);
```

## Credits

Project structure and description provided by [CodeCademy](https://www.codecademy.com/).
