const show_form =document.querySelector('.btn_show_form');
const member_profil = document.querySelectorAll('.member');

// Dynamisme of member picture
member_profil.forEach(member => {
    member.addEventListener('click',()=>{
        member.classList.toggle('member-info');
    })
});