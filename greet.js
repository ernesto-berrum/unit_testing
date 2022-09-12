let greet = (name) =>{

    if (name == null){
        let name = 'there';
        console.log(`Hello, ${name}!`);
        return (`Hello, ${name}!`);
    }
    else if (name.constructor == Array ){
        name = name.toString();
        name = name.replace(/,/g,', ');
        console.log(`Hello, ${name}!`);
        return (`Hello, ${name}!`);
    }
    else if (name == name.toUpperCase()){
        console.log(`HELLO, ${name}!`);
        return (`HELLO, ${name}!`);
    }
    else{
        console.log(`Hello, ${name}!`);
        return (`Hello, ${name}!`);
    }

}
let name = ['Elizabeth','Bob'];
greet(name);

module.exports = greet;