const persona = {nombre:'edw',apellido:'ber',edad:34};
//function statement
// function prueba (){
//     console.log(`la persona se llama ${persona.nombre}` );
// }
//prueba();

//Functiomn expresion
// const funEb=function(){console.log(`Functiomn expla persona se llama ${persona.nombre}` );}
// funEb();

//Function ARROW
// const funArrow = ()=>console.log(`funArrow la persona se llama ${persona.nombre}`);
// funArrow();

//function arrow con parametros y destructuracion
// const funArrowPara = (cosa)=>{
//     const {nombre,apellido} = cosa;
//     console.log(`funArrow la persona se llama ${nombre} ${apellido}`);
// }
// funArrowPara(persona);

// destructuro el objecto y llamo el arow
const funArrowPara = ({nombre,apellido})=>console.log(`funArrow la persona se llama ${nombre} ${apellido}`);
funArrowPara(persona);