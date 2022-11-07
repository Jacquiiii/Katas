const checkAir = (samples, threshold) => {
  let dirty = 0;
  let total = 0;
  for (x of samples) {
    if (x === 'clean') {
      total += 1;
    } else if (x === 'dirty') {
      dirty += 1;
      total += 1;
    }
  }
  if ((dirty / total) > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
}




console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  .25
))