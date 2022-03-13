//when we scroll to give navbar another position value;
let navEl = document.querySelector(".header nav");
let scrollTopBtn = document.querySelector(".scroll-top");

window.onscroll = function(){
    if (scrollY > 20){
        navEl.classList.add("scroll");
    }else{
        navEl.classList.remove("scroll");
    }
    if (scrollY > 300){
        scrollTopBtn.classList.remove("hide");
    }else{
        scrollTopBtn.classList.add("hide");
    }
}

scrollTopBtn.addEventListener("click",()=>{
    scrollTo({
        behavior:"smooth",
        top:0
    })
})

// when we choost type of items;
let typesBtn = document.querySelectorAll(".items .types > div");
let prosType = document.querySelectorAll(".items .pros");

for (let i =0;i < prosType.length;i++){
    typesBtn[i].addEventListener("click",()=>{
        typesBtn.forEach((el)=>{
            el.classList.remove("active");
        })
        typesBtn[i].classList.add("active");
        prosType.forEach((el)=>{
            el.classList.remove("active")
        })
        prosType[i].classList.add("active");
    })
}

//when we open video;
let muteBtn = document.querySelector(".booking .mute");

muteBtn.onclick = ()=>{
    window.location.href = "https://www.youtube.com/watch?v=tZObOhg4Cz4";
}

//owl carousel;
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})

$('.counter').counterUp(
    {
        delay: 10,
        time: 1000
    }
);