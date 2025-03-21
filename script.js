function display(){
    document.querySelector('h1').innerText="Hi, Good evening to everyone"
}
setTimeout(display, 4000);

let change;
function randomColor(){
    const hex="123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color= color+hex[Math.floor(Math.random()*16)]
    }
    return color;
}

document.querySelector('#start').addEventListener('click',()=>{
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();

    }
    change=setInterval(changeBgColor, 1000);

})
document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(change);
})