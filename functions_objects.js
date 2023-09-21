
//Factory Function - Create object and return the object but properties are same (camelCase notation)

// function createRectangle(length , breadth){
//     return rectangle={
//         length,
//         breadth,

//         draw:function(){
//             console.log("Draw a Rectangle")
//         }
//     };
// }

// let rectangle1 = createRectangle(10,20);
// console.log(rectangle1);

// Constructor function -> pascal notation(PascalNotation  -> first letter should be capital 
// this keyword is used for representing the current object where we work if there is any else it is pointing empty object
    //  function Rectangle(){
    //     this.length=10,
    //     this.breadth=20,
    //     this.draw = function(){
    //         console.log("Drawing Rectangle");
    //     }
    //  };

    //  let object = new Rectangle();
    //  console.log(object);

//for-in loop

// let rectangle={
//     length:10,
//     breadth:20,
//     color:'blue'
// };
// for(let key in rectangle){
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// for-of loop -> it is used only on iterables

// how canw ecahcke the properties are present are present or not in th objectsusing for in loop
// if('color' in rectangle){
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }


// Object CLoning

// 1.Iteration
    //   let src={
    //     a:10,
    //     b:5,
    //     c:7
    //   };
    //   let dest={};
    //   for(let key in src){
    //     dest[key]= src[key];
    //   }
    //   console.log(dest);

//  2.Assign
    // let src={
    //     a:10,
    //     b:5,
    //     c:7
    // };
    // let dest = Object.assign({},src);
    // console.log(dest);

//  3. Spread
    // let src={
    //     a:10,
    //     b:5,
    //     c:7
    // };
    // let dest = {...src};
    // console.log(dest);