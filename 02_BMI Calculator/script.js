// const form = document.querySelector('form')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results')
//     if (height === ''||height < 0 || isNaN(height)) {
//          const text =results.appendChild(document.createTextNode(`height value is not proper ${height}`))
//         document.body.appendChild(text)
//     } else if (weight === ''||weight < 0 || isNaN(weight)) {
//         const text =results.appendChild(document.createTextNode(`weight value is not proper ${weight}`))
//        document.body.appendChild(text)
//    } else {
//         const bmi =(weight/((height*height)/10000)).toFixed(2)
//         const text =results.appendChild(document.createTextNode(`${bmi}`))
//        document.body.appendChild(text)
//     }
// })
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<=18.6){
        results.innerHTML = `<span> ${bmi} you are underweight <span>`;
    }
    else if(bmi>=24.9){
        results.innerHTML = `<span> ${bmi} you are overweight <span>`;
    }
    else{
        results.innerHTML = `<span> ${bmi} you are normal <span>`;
    }
    
  }
});
