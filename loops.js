function forLoop( array ) {
  for (let i = 0; i < 25; i++ ) {
    if ( array[i] === 1 ) {
      array.push( "I am 1 strange loop." );
    } else {
      array.push( "I am ${i} strange loops." );
    }
  }
  return array;
}

function whileLoop( n ) {
  while ( n > 0 ) {
    n -= 1;
    console.log( n );
  }
  return 'done';
}
