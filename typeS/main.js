console.log("mmg")


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
})

