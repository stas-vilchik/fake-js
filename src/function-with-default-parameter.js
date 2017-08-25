function fn(param = () => false) {
  param(1);
}

if (false) {
  fn();
} else if (false) {
  fn();
}
