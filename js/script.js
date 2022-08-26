var type = new Typed('.typing-text',{
    strings : ['Embedded Software Developer', 'Front End Developer','Freelancer','Embedded Software Developer'],
    typeSpeed: 120,
    loop: true
    
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));