// generating the random color values 

// we will be using asynchronous apprach to solve the fuction


const randomColor = function(){
    const hex ="0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6 ; i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }  
    return color
}
let setIntevalId;
const startColorChanging = function(){
if (!setIntevalId) {
    setIntevalId = setInterval(changebgcolor,1000)

}
  function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
}
const stopColorChanging = function(){
 clearInterval(setIntevalId);
 setIntevalId =null;
 document.body.style.backgroundColor = "white"
}
document.querySelector('#start').addEventListener('click',startColorChanging)
document.querySelector('#stop').addEventListener('click',stopColorChanging)