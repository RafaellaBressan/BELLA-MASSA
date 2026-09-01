document.querySelectorAll("a[href^='#']").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const id=link.getAttribute("href");

const section=document.querySelector(id);

if(section){

section.scrollIntoView({
behavior:"smooth"
})

}

})

})

const modal=document.getElementById("modal");

const modalImg=document.getElementById("modalImg");

document.querySelectorAll(".lightbox").forEach(img=>{

img.onclick=()=>{

modal.style.display="flex";

modalImg.src=img.src;

}

})

document.querySelector(".close").onclick=()=>{

modal.style.display="none";

}

modal.onclick=e=>{

if(e.target===modal){

modal.style.display="none";

}

}