const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(str => {
    const splitStr = str.split(" ")
    const newStr = splitStr.map(word => {return word.charAt(0).toUpperCase() + word.slice(1)})
    return newStr.join(' ')
  })
}
titleCased();

console.log(tutorials)
console.log(titleCased())












  // for(i=0; i < tutorials.length; i++) {
    //const arr = []  
       
      //console.log(tutorials[i].split(" ").length)
  //}
 //}

//console.log(titleCased(tutorials))


  //return element[0].charAt(0).toUpperCase() + element.substring(1).toLowerCase()}
//)

// const titleCased = (tutTitle => {
//   return tutTitle.charAt(0).toUpperCase() + tutTitle.substring(1).toLowerCase();
// })

// console.log(titleCased)



// function titleCased(questions) {
//   for (const of )
//   return tutorials.map 
// }