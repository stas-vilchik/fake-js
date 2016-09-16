function Every (object, fn) {
  var a = true;
  var b;
  for (key in object)
    a = fn(object[key]) && a;
  if (!a) alert("not every!");
  b = 0;
  return true
}
