let slides = document.querySelectorAll('.slidecontainer');
let index=0;
function next(){
    slides[index].ClassList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].ClassList.add('active');
}
function prev (){
    slides[index].ClassList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].ClassList.add('active');
}

setInterval (next,5000);