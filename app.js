// assignment # 2
// QUESTION 1
// function f(a)
// {
//     return (function(b){
// return(a+b)
//     })
// }
// let fun = f(5);
// console.log(fun(5))
// let f = (;
// })
// console.log(f(5))
//QUESTION 2
// let arr= [];
// function addNum(n)
// {
// arr.push(n);
// }
// console.log(arr)


// function search()
// {
//     return (function(n)
//     {
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]==n)
//     {
// document.write(n," is found at index ",i);
//     }
// }
//     })
// }

// addNum(34);
// addNum(44);
// addNum(4);
// addNum(234);
// addNum(334);
// m = search();
// m(34)
//QUESTION # 3

    // function addParagraph(text) {
    //     var newParagraph = document.createElement('p');
        
    //     newParagraph.textContent = text;
        
    //     var body = document.getElementsByTagName('body')[0];
        
    //     body.appendChild(newParagraph);
    //   }
// //QUESTION 4
//    function addListItem(text) {
//         var newParagraph = document.createElement('li');
        
//         newParagraph.textContent = text;
        
//         var body = document.getElementsByTagName('ul')[0];
        
//         body.appendChild(newParagraph);
// //       }
// QUESTION 5
// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   var myElement = document.getElementById('my-element');
//QUESTION 6
// function saveObjectToLocalStorage(key, obj) {
  
//     var objStr = JSON.stringify(obj);
    
//     localStorage.setItem(key, objStr);
//   }
//   var myObj = { name: 'syed huzaifa ali', age: 20 };
//   saveObjectToLocalStorage('my-key', myObj);
// var objStr = localStorage.getItem('my-key');
// var myObj = JSON.parse(objStr);
//QUESTION 7
// function getObjectFromLocalStorage(key) {
//     // retrieve the JSON string from localStorage using the specified key
//     var objStr = localStorage.getItem(key);
    
//     // parse the JSON string into an object and return it
//     return JSON.parse(objStr);
//   }
//   var myObj = getObjectFromLocalStorage('my-key');
// console.log(myObj);
//ANSWER 8
// function saveObjectPropertiesToLocalStorage(obj) {
//     for (var prop in obj) {
//       if (obj.hasOwnProperty(prop)) {
//         localStorage.setItem(prop, obj[prop]);
//       }
//     }
    
    
//     var newObj = {};
    
    
//     for (var i = 0; i < localStorage.length; i++) {
//       var key = localStorage.key(i);
//       var value = localStorage.getItem(key);
      
      
//       newObj[key] = value;
//     }
    
    
//     return newObj;
//   }
//   var myObj = { name: 'SYED HUZAIFA ALI', age: 18 };
//   var newObj = saveObjectPropertiesToLocalStorage(myObj);
//   console.log(newObj)
    
for (var i = 1; i <= 50; i++) {
    if(i%2==0)
    {
        document.write(i,"even number<br>");
    }
    else
    document.write(i,"odd number<br>");
    
  }
  