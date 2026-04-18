// create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData(); // boolean[]

// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output what we drew to the console
outputImage();

/**
 * Draws the outline of a rectangle on the image starting at the specified top-left coordinate.
 *
 * Draws the rectangle's border (top, bottom, left, right). Pixels outside the image bounds are ignored.
 *
 * @param x - X coordinate of the rectangle's top-left corner
 * @param y - Y coordinate of the rectangle's top-left corner
 * @param width - Rectangle width in pixels
 * @param height - Rectangle height in pixels
 */
function drawRectangle(
  x: number,
  y: number,
  width: number,
  height: number
) {
  // top
  drawHorizontalLine(x, y, width);
  // bottom
  drawHorizontalLine(x, y + height - 1, width);
  // left
  drawVerticalLine(x, y, height);
  // right
  drawVerticalLine(x + width - 1, y, height);
}


/**
 * Sets the pixel at the given coordinates to "on" when the coordinates lie inside the image.
 *
 * If (x, y) is outside the image bounds, the function does nothing.
 *
 * @param x - Horizontal coordinate (0 is the leftmost column)
 * @param y - Vertical coordinate (0 is the topmost row)
 */
function drawDot(
  x: number,
  y: number
) {
  if (isPointInImage(x, y)) {
    imageData[y * imageWidth + x] = true;
  }
}

/**
 * Draws a horizontal line of "on" pixels starting at (x, y).
 *
 * @param x - X coordinate of the line's starting pixel
 * @param y - Y coordinate of the line's row
 * @param length - Number of pixels to draw to the right from the start
 */
function drawHorizontalLine(
  x: number,
  y: number,
  length: number
) {
  for (let i = 0; i < length; i++) {
    drawDot(x + i, y);
  }
}

/**
 * Draws a vertical line of pixels starting at (x, y) and extending downward for `length` pixels.
 *
 * @param x - The x-coordinate of the line's starting pixel
 * @param y - The y-coordinate of the line's starting pixel
 * @param length - Number of pixels to draw downward from the starting pixel
 */
function drawVerticalLine(
  x: number,
  y: number,
  length: number
) {
  for (let i = 0; i < length; i++) {
    drawDot(x, y + i);
  }
}

/**
 * Determine whether a given pixel coordinate lies inside the image bounds.
 *
 * @param x - Horizontal pixel coordinate (0‑based)
 * @param y - Vertical pixel coordinate (0‑based)
 * @returns `true` if `0 <= x < imageWidth` and `0 <= y < imageHeight`, `false` otherwise.
 */
function isPointInImage(x: number, y: number) {
  return Number.isInteger(x) && Number.isInteger(y) && x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

/**
 * Render the current image buffer as ASCII text and print it to the console.
 *
 * @param onChar - Character used for pixels that are on
 * @param offChar - Character used for pixels that are off
 */
function outputImage(onChar = "X", offChar = " ") {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    if (i > 0 && i % imageWidth === 0) {
      text += "\n"; // new line
    }

    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 *
 * The pixel values are stored in rows
 * (row-major order) where the index of a
 * pixel in the array can be found via:
 *
 *     index = y * imageWidth + x
 *
 * `x` is the horizontal position in the image
 * and `y` is the vertical position from the top
 * left corner.
 *
 * Note: This function has a return type annotation
 * of `boolean[]`. That means it's an array of
 * booleans. We'll learn more about this in a
 * future module.
 */
function createImageData(): boolean[] {
  // create array of size `length` containing `false` values
  const length = imageWidth * imageHeight;
  return new Array(length).fill(false);
}