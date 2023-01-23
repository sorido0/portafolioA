let position = window.pageYOffset;
// console.log(position);


const navUI = document.querySelector("nav");

window.addEventListener("scroll", function(){

    const positionActual = window.pageYOffset;
   
    //console.log(position);
    //console.log(scrollY)
   

    if ( positionActual >=  position ) {
       // console.log("hola");
        navUI.style.display = "none";
    } else {
        // console.log("hola");
        navUI.style.display = "flex";
        navUI.classList.add += "animate__backInDown";

    } 

    position = positionActual;

    console.log(navUI.className);

    //return position;
});