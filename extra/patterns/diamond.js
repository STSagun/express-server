export default function diamond(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
      pattern += " ";
    }

    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  for (let i = n; i >= 1; i--) {
    for (let j = n; j > i; j--) {
      pattern += " ";
    }

    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }

  console.log(pattern);
}
