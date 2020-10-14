window.onload=function(){
    document.querySelectorAll('.section__image-icon').forEach(item => {
        item.addEventListener('click', event => {
          item.parentNode.classList.toggle("section__image-closed");
        })
      })
}