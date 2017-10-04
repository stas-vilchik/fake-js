import A from 'a';
A + 1;
console.log('A is not used!');
A + 1;

function fn(param = () => true) {
  param(1);
  param(2);
  param(3);
  param(4);
  param(5);
  param(6);
  param(7);
  param(8);
  param(9);
  param(10);
  param(11);
  param(12);
}
