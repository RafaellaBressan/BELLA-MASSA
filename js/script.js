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