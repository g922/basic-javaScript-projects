const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.id);
    
    operation = e.target.id;
    switch (operation) {
      case 'grey':
        document.body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        document.body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        document.body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        document.body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});

// or by using if else statement

// console.log("gourav")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });

