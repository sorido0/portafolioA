console.log("Hola, para alguna sugerencia e informacion, a mi correo esta en la parte de contacto, gracias por su visita")

const about = document.querySelector(".aboutDiv");
//console.log(about);


// const moviviendo = () => {
//   const position = window.pageYOffset;
//   if (position > 0) {
//     navUI.classList.add("navScroll");
//   } else {
//     navUI.classList.remove("navScroll");
//   }
// };

// moviviendo();

// window.addEventListener("scroll", moviviendo);


const blogger = document.getElementById("Blog").addEventListener("click", function(){
  Swal.fire(
    {  
      icon: 'info',
      title: 'Aviso',
      text: 'Aun estamos en contrucción de este espacio, pronto estará disponible',
      showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    }
  )
})


const aboutNO = document.getElementById("checkMenu").addEventListener("click", function(){

  if(about.style.display === "none"){
    about.style.display = "block";
  }else{
    about.style.display = "none";
  }
   
})




Swal.fire(
  {  
    icon: 'info',
    title: 'Aviso Importante',
    text: 'Esta pagina esta en construccion, para ofrecerle una mejor experiencia',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  }
)


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    Swal.fire(
  {  
    icon: 'info',
    title: 'Aviso Importante',
    text: 'Aun estamos trabajando en esta pagina, para ofrecerle una mejor experiencia',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  }
)
});





