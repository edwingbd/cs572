// Spread Operator 
const course = { 
    courseName: 'Modern Web Applications', 
    technologies: ['Node', 'NoSQL', 'Angular'] }; 
const gainedKnowledge = ['MongoDB', 'Typescript',...course.technologies]; 
const gainedKnowledge2 = [...course.technologies,'MongoDB', 'Typescript']; 
console.log(course.technologies );
console.log(gainedKnowledge);
console.log(gainedKnowledge2);
// Rest Operator 
// const family = ['George', 'Angel', 'Mada', 'Asaad', 'Mike']; 
// const [father, mother, ... children] = family; 
// function sum(x,y, ... more){
//     var total = x + y; 
//     if(more.length){ // "more" is array of all extra passed params 
//         more.forEach( (extra)=> total += extra )
//         {
//             console.log(total); 
//         }
// } 
// sum(4,5,6); // 15 