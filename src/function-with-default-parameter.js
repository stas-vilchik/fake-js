function fn(param = () => true) {
  param(1);
}

if (true) {
  fn();
}
