const square = {
  area(num) {
    return num * num;
  },
  perimeter(num) {

    return num * 4;
  }
}

// const square = {
//   area: function (num) {
//       return num * num;
//   },
//   perimeter: function (num) {

//       return num * 4;
//   }
// }



console.log(square.area(6))//36
console.log(square.perimeter(3)) //12