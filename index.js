const infoMember = document.querySelectorAll('.formImage');//la selection de tout les membres de la plateforme
const navBar = document.querySelector('.toggle_bars');
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
navBar.addEventListener('click',()=>{
    nav.classList.toggle('show');//l'insertion d'une class au click
    header.classList.toggle('show');//l'insertion d'une class au click
})
 infoMember.forEach(member=>{
    member.addEventListener('click',()=>{
        member.classList.toggle("infoMember"); //l'insertion d'une class inforMamber au click
     })
})