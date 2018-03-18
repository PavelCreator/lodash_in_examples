/** Index */
/*Поиск индекса элемента, 3arg указывает позицию начала поиска*/
_.indexOf([1, 2, 1, 2], 2);    // => 1
_.indexOf([1, 2, 1, 2], 2, 2); // => 3, поиск с элемента 2

/*Поиск индекса элемента с конца, 3arg указывает позицию начала поиска*/
_.lastIndexOf([1, 2, 1, 2], 2);     // => 3
_.lastIndexOf([1, 2, 1, 2], 2, 2);  // => 1, поиск с элемента 2

/*Работает как find, но отдаёт индекс*/
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
_.findIndex(users, function(o) { return o.user == 'barney'; }); // => 0
_.findIndex(users, { 'user': 'fred', 'active': false });        // => 1
_.findIndex(users, ['active', false]);                          // => 0
_.findIndex(users, 'active');                                   // => 2

/*Работает как find, но отдаёт индекс последнего элемента, соотвествующего условию*/
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
_.findLastIndex(users, ['active', false]);                            // => 2
_.findLastIndex(users, 'active');                                     // => 0



/** Binary index */
/*Бинарный поиск индекса элемента, большего указанного в Arg2*/
_.sortedIndex([30, 50], 40) //1
_.sortedIndex([30, 50], 20) //0

/*Бинарный поиск индекса элемента, равного Arg2*/
_.sortedIndexOf([4, 5, 5, 5, 6], 5); // => 1

/*Бинарный поиск индекса элемента, равного Arg2, с конца*/
_.sortedLastIndex([4, 5, 5, 5, 6], 5); // => 4
/*Бинарный поиск индекса элемента, равного Arg2, с конца, со сдвигом в 1*/
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5); // => 3

/*Бинарный поиск индекса элемента, удовлетворяющего функции Arg2*/
var objects = [{ 'x': 4 }, { 'x': 5 }];
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }) // => 0
_.sortedIndexBy(objects, { 'x': 5 }, function(o) { return o.x; }) // => 1

/*Бинарный поиск индекса элемента, удовлетворяющего функции Arg2, с конца*/
var objects = [{ 'x': 4 }, { 'x': 5 }];
_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }); // => 1
_.sortedLastIndexBy(objects, { 'x': 5 }, function(o) { return o.x; }); // => 0
_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'); // => 1


