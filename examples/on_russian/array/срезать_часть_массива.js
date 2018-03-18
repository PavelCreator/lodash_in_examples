/*Получить всё кроме первого элемента массива*/
_.tail([1, 2, 3]); // => [2, 3]

/*Получить всё кроме последнего элемента массива*/
_.initial([1, 2, 3]); // => [1, 2]



/** Take */
/*Срезать массив по указанную позицию с начала*/
_.take([1, 2, 3]);    // => [1]
_.take([1, 2, 3], 2); // => [1, 2]
_.take([1, 2, 3], 5); // => [1, 2, 3]
_.take([1, 2, 3], 0); // => []

/*Срезать массив по указанную позицию с конца*/
_.takeRight([1, 2, 3]);// => [3]
_.takeRight([1, 2, 3], 2);// => [2, 3]
_.takeRight([1, 2, 3], 5);// => [1, 2, 3]
_.takeRight([1, 2, 3], 0);// => []

/*Срезать массив по условию с начала*/
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
_.takeWhile(users, function(o) { return !o.active; });      // => objects for ['barney', 'fred']
_.takeWhile(users, { 'user': 'barney', 'active': false });  // => objects for ['barney']
_.takeWhile(users, ['active', false]);                      // => objects for ['barney', 'fred']
_.takeWhile(users, 'active');                               // => []

/*Срезать массив по условию с конца*/
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
_.takeRightWhile(users, function(o) { return !o.active; });       // => objects for ['fred', 'pebbles']
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });  // => objects for ['pebbles']
_.takeRightWhile(users, ['active', false]);                       // => objects for ['fred', 'pebbles']
_.takeRightWhile(users, 'active');                                // => []





/** Drop */
/*Срезает от начала часть массива по 2arg (в новый массив)*/
var a = _.drop([1, 2, 3], 0); // => [1, 2, 3]
var a = _.drop([1, 2, 3], 1); // => [2, 3]
var a = _.drop([1, 2, 3]);    // => [2, 3], 2arg == 1 by default
var a = _.drop([1, 2, 3], 2); // => [3]
var a = _.drop([1, 2, 3], 5); // => []

/*Срезает с конца часть массива по 2arg (в новый массив)*/
var a = _.dropRight([1, 2, 3], 0);    // => [1, 2, 3]
var a = _.dropRight([1, 2, 3], 1);    // => [1, 2]
var a = _.dropRight([1, 2, 3]);       // => [1, 2], 2arg == 1 by default
var a = _.dropRight([1, 2, 3], 2);    // => [1]
var a = _.dropRight([1, 2, 3], 5);    // => []

/*Срезаем слева элементы, пока условие не выполнится*/
var users = [
  {u: 'u1', a: false},
  {u: 'u2', a: false},
  {u: 'u3', a: true},
  {u: 'u4', a: false},
  {u: 'u5', a: true}
];
var a = _.dropWhile(users, ['a', false]);         //встретил a = !false - срезал
// [ { u: 'u3', a: true }, { u: 'u4', a: false }, { u: 'u5', a: true } ]
var a = _.dropWhile(users, 'a');                  //встретил a = !true - срезал
// [ { u: 'u1', a: false }, { u: 'u2', a: false }, { u: 'u3', a: true }, { u: 'u4', a: false }, { u: 'u5', a: true } ]
var a = _.dropWhile(users, 'u');                  //встретил u = !true - срезал
// [ ]
var a = _.dropWhile(users, function(o) { return o.a == true; });  //встретил true - срезал
// [ { u: 'u3', a: true }, { u: 'u4', a: false }, { u: 'u5', a: true } ]
var a = _.dropWhile(users, function(o) { return o.a == false; }); //встретил false - срезал
// [ { u: 'u1', a: false }, { u: 'u2', a: false }, { u: 'u3', a: true }, { u: 'u4', a: false }, { u: 'u5', a: true } ]

/*Срезаем справа элементы, пока условие не выполнится*/
var users = [
  {'user': 'barney', 'active': true},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': false}
];
var a = _.dropRightWhile(users, function(o) { return o.active == true; });
// [ { user: 'barney', active: true } ]
var a = _.dropRightWhile(users, function(o) { return o.active == false; });
// [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
var a = _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
var a = _.dropRightWhile(users, ['active', false]);
// [ { user: 'barney', active: true } ]
var a = _.dropRightWhile(users, 'active');
// [ { user: 'barney', active: true }, { user: 'fred', active: false }, { user: 'pebbles', active: false } ]