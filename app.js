 window.addEventListener('scroll',() =>{
    document.querySelector('.navbar').classList.toggle('window-scroll',window.scrollY>0)
 })

 const menu =document.querySelector(".nav-links");
 const menuBtn =document.querySelector("#open-menu-btn");
 const closeBtn =document.querySelector("#close-menu-btn");
 menuBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'flex':'none';
 })
