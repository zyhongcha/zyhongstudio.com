import colors from "@const/colors";

const colorNames = Object.keys(colors);

function randomizedColor(range = 5, next = false) {
  const random = Math.floor(Math.random() * range);
  let color = colorNames[random];
  if (next && random !== colorNames.length - 1) {
    color = colorNames[random + 1];
  }
  return color;
}

export default randomizedColor;
