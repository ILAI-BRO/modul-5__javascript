const x = undefined;

if (typeof x == 'number') {
  
  console.log(x + ' - это number')
  
} else if (typeof x == 'string') {
  console.log(x + ' - это string')
} else if (typeof x == 'boolean') {
  console.log(x + ' - это Boolean')
} else {
  console.log('Тип x не определён')
}
