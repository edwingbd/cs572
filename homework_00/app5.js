
//destructurin Arrays
const details = ['edwin','bernal',123,3.4];
//console.log(nombre);// in this poing generate a error
const [nombre,apellido,cc,gpa] = details;
//cc=789; // you can't do this with a const but if you use let is possible
console.log('nombre ='+nombre);
console.log('details ='+details);
console.log('gpa ='+gpa );
console.log('cc ='+cc );

// Destructuring Object 
var text=  'Destructuring Object ';
const settings = { width: 300, color: 'black' } ;
//const settings = { height: 300, fontSize: 456 } ;
console.log(text+"settings.color:"+settings.color); 
const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings;
console.log(text+"width:"+width);
console.log(text+"height:"+height); 
console.log(text+"color:"+color); 
console.log(text+"fontSize:"+fontSize);
// Swap variables
var text=  'Swap variables ';
var color1 = 'Green'; 
var color2 = 'red'; 
console.log(text+"color1:"+color1); 
console.log(text+"color2:"+color2);
[color1, color2] = [color2, color1];
console.log(text+"color1:"+color1); 
console.log(text+"color2:"+color2);
// Object Destructuring with variable renaming & default values 
var text="Destructuring with variable renaming & default values ";
const { weight: w = 400, height: h = 500, color: c='negro' } = settings;
console.log(text+"w:"+w); 
console.log(text+"h:"+h);
console.log(text+"c:"+c);
