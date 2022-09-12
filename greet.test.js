const greet = require('./greet');

// this test checks to see if the greet function has been defined
test('should be defined', ()=> {
    expect(greet).toBeDefined();
});

// this test checks to see if the greet function outputs the desired greeting
test('given Elizabeth as name', ()=> {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth!');
});

// this test checks the greet function when name in null
test('given null as name', () => {
    expect(greet(null)).toBe('Hello, there!');
});

// this test checks the greet function when name is uppercase
test('given uppercase name', () => {
    expect(greet('GREG')).toBe('HELLO, GREG!');
});

// this test checks the greet function when 2 names are passed
test('given two names', () =>{
    expect(greet(['Bob','Mary'])).toBe('Hello, Bob, Mary!');
});

// this test checks the greet funtion when several names are paased
test('given multiple names', () => {
    expect(greet(['Bob','Mary','Joe','Anna','Mike'])).toBe("Hello, Bob, Mary, Joe, Anna, Mike!");
});
