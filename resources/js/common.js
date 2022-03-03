// 메뉴 tab 이벤트
const btnTabModel = document.querySelectorAll(".btn_tab_area button");
const tabModelBox = document.querySelectorAll(".tab_box li");
for(let i=0; i<btnTabModel.length; i++){
    let idx = i;
    btnTabModel[i].addEventListener("click",function(){
        for(let k=0; k<btnTabModel.length; k++){
            btnTabModel[k].classList.remove("on");
            tabModelBox[k].classList.remove("on");
        }
        btnTabModel[idx].classList.add("on");
        tabModelBox[idx].classList.add("on");
    })
};

// swiper
var swiperVideo = document.querySelectorAll(".swiper-container.area02 video");
var swVdArea = document.querySelectorAll(".swiper-container.area02 .swiper-slide");
var mySwiper1 = new Swiper('.img_area .swiper-container.area02', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
    loopedSlides:1,
    centeredSlides : true,
    speed:2000,
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
    },
    on: {
        slideChangeTransitionEnd: function () {
            for(let i=0; i<swVdArea.length; i++){
                if( swVdArea[0].classList.contains("swiper-slide-active") ){
                    swiperVideo[3].pause();
                    swiperVideo[0].play();
                }
                else if( swVdArea[1].classList.contains("swiper-slide-active") ){
                    swiperVideo[0].pause();
                    swiperVideo[1].play();
                }
                else if( swVdArea[2].classList.contains("swiper-slide-active") ){
                    swiperVideo[1].pause();
                    swiperVideo[2].play();
                }
                else if( swVdArea[3].classList.contains("swiper-slide-active") ){
                    swiperVideo[2].pause();
                    swiperVideo[3].play();
                }
            }
        }
    }
});
// var mySwiper3 = new Swiper('.img_area .swiper-container.area01', {
// 	slidesPerView: 1,
//     spaceBetween: 0,
// 	loop: true,
//     loopedSlides:1,
//     centeredSlides : true,
//     speed:2000,
//     autoplay : {
//         delay : 1000,
//         disableOnInteraction : false,
//     },
// });
var mySwiper2 = new Swiper('.img_flow_area .swiper-container', {
	slidesPerView: 3,
    spaceBetween: 36,
	loop: true,
    // loopedSlides:1,
    centeredSlides : false,
    speed:3000,
    autoplay : {
        delay : 0,
        disableOnInteraction : false,
    },
});
const imgFlowArea = document.querySelectorAll(".img_flow_area .swiper-slide");
for (let i=0; i<imgFlowArea.length; i++){
    imgFlowArea[i].addEventListener('mouseover', function(){
        mySwiper2.autoplay.stop();
    });
    imgFlowArea[i].addEventListener('mouseout', function(){
        mySwiper2.autoplay.start();
    });
};
const imgFlowArea2 = document.querySelectorAll(".swiper-container.area02 .swiper-slide");
for (let i=0; i<imgFlowArea2.length; i++){
    imgFlowArea2[i].addEventListener('mouseover', function(){
        mySwiper1.autoplay.stop();
    });
    imgFlowArea2[i].addEventListener('mouseout', function(){
        mySwiper1.autoplay.start();
    });
};

// scroll event
const scrollVideo = document.querySelector(".scroll_video");
const scrollFrame = document.querySelector(".scroll_frame");
const scrollTab = document.querySelector(".btn_tab_area");
const scrollFrameStop = document.querySelector(".tab_box");
const scrollImg01 = document.querySelectorAll(".img_first");
const scrollImg02 = document.querySelectorAll(".img_second");
if( window.pageYOffset <= 10 ){
    scrollFrame.classList.add("hidden");
} else {
    scrollFrame.classList.remove("hidden");
}
window.addEventListener("scroll",function(){
    let scrollPx = scrollVideo.offsetTop + window.pageYOffset;
    let scorllFramePx = scrollFrameStop.getBoundingClientRect().top + window.pageYOffset - (scrollFrameStop.offsetHeight/2);

    if( window.pageYOffset > 150 ){
        scrollVideo.classList.add("hidden");
    } else {
        scrollVideo.classList.remove("hidden");
    }
    if( window.pageYOffset <= 10 ){
        scrollFrame.classList.add("hidden");
    } else {
        scrollFrame.classList.remove("hidden");
    }
    
    // if( scorllFramePx <= window.pageYOffset + 130 ){
    //     scrollFrame.style.top = scorllFramePx - 130 + "px";
    //     scrollFrame.classList.add("hidden");
    // } else {
    //     scrollFrame.style.top = scrollPx + "px";
    //     scrollFrame.classList.remove("hidden");
    // }

    // 스크롤 내릴때
    if( scorllFramePx <= window.pageYOffset + 121 - 170 ){
        scrollFrame.style.top = scorllFramePx - 121 + "px";
        scrollVideo.classList.remove("hidden");
        scrollFrame.classList.add("hidden");
        for(let i=0; i<scrollImg01.length; i++){
            scrollImg01[i].classList.remove("on");
            scrollTab.classList.add("on");
        }
        for(let i=0; i<scrollImg02.length; i++){
            scrollImg02[i].classList.add("on");
        }
    } else if( window.pageYOffset > 170 ) {
        scrollFrame.style.top = scrollPx - 170 + "px";
        scrollFrame.classList.remove("hidden");
        scrollVideo.classList.add("hidden");
        for(let i=0; i<scrollImg01.length; i++){
            scrollImg01[i].classList.add("on");
            scrollTab.classList.remove("on");
            imgTools1[1].classList.remove("on");
            imgTools1[2].classList.remove("on");
            imgTools1[0].classList.add("on");
            imgThum1[1].classList.remove("on");
            imgThum1[2].classList.remove("on");
            imgThum1[0].classList.add("on");
            btnTools1[1].classList.remove("on");
            btnTools1[2].classList.remove("on");
            btnTools1[0].classList.add("on");

            imgTools2[1].classList.remove("on");
            imgTools2[2].classList.remove("on");
            imgTools2[3].classList.remove("on");
            imgTools2[4].classList.remove("on");
            imgTools2[0].classList.add("on");
            imgThum2[1].classList.remove("on");
            imgThum2[2].classList.remove("on");
            imgThum2[3].classList.remove("on");
            imgThum2[4].classList.remove("on");
            imgThum2[0].classList.add("on");
            btnTools2[1].classList.remove("on");
            btnTools2[2].classList.remove("on");
            btnTools2[3].classList.remove("on");
            btnTools2[4].classList.remove("on");
            btnTools2[0].classList.add("on");

            imgTools3[1].classList.remove("on");
            imgTools3[2].classList.remove("on");
            imgTools3[0].classList.add("on");
            imgThum3[1].classList.remove("on");
            imgThum3[2].classList.remove("on");
            imgThum3[0].classList.add("on");
            btnTools3[1].classList.remove("on");
            btnTools3[2].classList.remove("on");
            btnTools3[0].classList.add("on");

            imgTools4[1].classList.remove("on");
            imgTools4[2].classList.remove("on");
            imgTools4[3].classList.remove("on");
            imgTools4[0].classList.add("on");
            imgThum4[1].classList.remove("on");
            imgThum4[2].classList.remove("on");
            imgThum4[3].classList.remove("on");
            imgThum4[0].classList.add("on");
            btnTools4[1].classList.remove("on");
            btnTools4[2].classList.remove("on");
            btnTools4[3].classList.remove("on");
            btnTools4[0].classList.add("on");
        }
        for(let i=0; i<scrollImg02.length; i++){
            scrollImg02[i].classList.remove("on");
        }
    }
})
var scrStn = document.querySelectorAll('.scroll_stn');
var stnBg = document.querySelectorAll('.stn_bg_bk');
var scrStnY,scrStnUp,scrStnDown,scrStnUp2,scrStnDown2;
window.addEventListener('scroll',function(){
    for(var i=0; i<scrStn.length; i++){
        scrStnY = (scrStn[i].getBoundingClientRect().top + window.pageYOffset) - window.innerHeight;
        scrStnUp = scrStnY + (window.innerHeight/2.5) <= window.pageYOffset;
        scrStnDown = scrStnY <= window.pageYOffset;
        scrStnUp2 = scrStnY + (window.innerHeight) + (scrStnY/6) + window.innerHeight <= window.pageYOffset;
        scrStnDown2 = scrStnY + window.innerHeight <= window.pageYOffset;
        
        if( scrStnUp ){
            scrStn[i].classList.add('active');
            for(let i=0; i<stnBg.length; i++){
                stnBg[i].classList.add('active');
            }
            if( scrStnUp2 ){
                scrStn[i].classList.remove('active');
                for(let i=0; i<stnBg.length; i++){
                    stnBg[i].classList.remove('active');
                }
            }
        }
        else if( scrStnDown ){
            scrStn[i].classList.remove('active');
            for(let i=0; i<stnBg.length; i++){
                stnBg[i].classList.remove('active');
            }
            if( scrStnDown2 ){
                scrStn[i].classList.add('active');
                for(let i=0; i<stnBg.length; i++){
                    stnBg[i].classList.add('active');
                }
            }
        }
    }
})
var scrCon = document.querySelectorAll('.scroll_con');
var scrConY,scrConUp,scrConDown;
window.addEventListener('scroll',function(){
    for(var i=0; i<scrCon.length; i++){
        scrConY = (scrCon[i].getBoundingClientRect().top + window.pageYOffset) - window.innerHeight;
        scrConUp = scrConY + (window.innerHeight/2 - window.innerHeight/4) <= window.pageYOffset;
        scrConDown = scrConY <= window.pageYOffset;
        if( scrConUp ){
            scrCon[i].classList.add('active');
        } //scroll fadein event
        else if( scrConDown ){
            scrCon[i].classList.remove('active');
        } //scroll fadeout event
    }
})
var scrollDevice = document.querySelector('.device_list');
var scrollAni = document.querySelectorAll(".ani");
var scrAniY,scrAniUp,scrAniDown;
window.addEventListener('scroll',function(){
    scrAniY = (scrollDevice.getBoundingClientRect().top + window.pageYOffset) - window.innerHeight;
    scrAniUp = scrAniY + (window.innerHeight/2 - window.innerHeight/4) <= window.pageYOffset;
    scrAniDown = scrAniY <= window.pageYOffset;
    if( scrAniUp ){
        for(var i=0; i<scrollAni.length; i++){
            scrollAni[i].classList.add('on');
        }
    } //scroll fadein event
    else if( scrAniDown ){
        for(var i=0; i<scrollAni.length; i++){
            scrollAni[i].classList.remove('on');
        }
    } //scroll fadeout event
})

var scrollVdo = document.querySelector('.vdo_area');
var scrollVdoLeft = document.querySelector(".vdo_left_area");
var scrollVdoRight = document.querySelector(".vdo_right_area");
var scrVdoY,scrVdoUp,scrVdoDown;
window.addEventListener('scroll',function(){
    scrVdoY = (scrollVdo.getBoundingClientRect().top + window.pageYOffset) - window.innerHeight;
    scrVdoUp = scrVdoY + (window.innerHeight/2) <= window.pageYOffset;
    scrVdoDown = scrVdoY <= window.pageYOffset;
    if( scrVdoUp ){
        scrollVdoLeft.classList.remove('on');
        scrollVdoRight.classList.remove('on');
    } //scroll fadein event
    else if( scrVdoDown ){
        scrollVdoLeft.classList.add('on');
        scrollVdoRight.classList.add('on');
    } //scroll fadeout event
})

// tools tab event
const btnTools1 = document.querySelectorAll(".tab_box li .btn_human");
const btnTools2 = document.querySelectorAll(".tab_box li .btn_clothes");
const btnTools3 = document.querySelectorAll(".tab_box li .btn_color");
const btnTools4 = document.querySelectorAll(".tab_box li .btn_pose");
const imgTools1 = document.querySelectorAll(".tab_box li .human");
const imgTools2 = document.querySelectorAll(".tab_box li .clothes");
const imgTools3 = document.querySelectorAll(".tab_box li .clo_color");
const imgTools4 = document.querySelectorAll(".tab_box li .pose");
const imgThum1 = document.querySelectorAll(".tab_box li .human_thum.thum01");
const imgThum2 = document.querySelectorAll(".tab_box li .human_thum.thum02");
const imgThum3 = document.querySelectorAll(".tab_box li .human_thum.thum03");
const imgThum4 = document.querySelectorAll(".tab_box li .human_thum.thum04");
function toolsEvent(BTN,IMG,THUM){
    for(let i=0; i<BTN.length; i++){
        let idx = i;
        BTN[idx].addEventListener("click",function(){
            for(let k=0; k<BTN.length; k++){
                BTN[k].classList.remove("on");
                IMG[k].classList.remove("on");
                THUM[k].classList.remove("on");
            }
            BTN[idx].classList.add("on");
            IMG[idx].classList.add("on");
            THUM[idx].classList.add("on");
        })
    }
}
toolsEvent(btnTools1,imgTools1,imgThum1);
toolsEvent(btnTools2,imgTools2,imgThum2);
toolsEvent(btnTools3,imgTools3,imgThum3);
toolsEvent(btnTools4,imgTools4,imgThum4);

// load
const loadArea = document.querySelector(".visual .cont_small");
window.addEventListener("load",function(){
    loadArea.classList.add("on");
})

//devide img fadein fadeout event
$(function(){
    var interval = 3000; 
    $('.imgs').each(function(){
        var container = $(this);
        function switchImg(){
            var imgs = container.find('img');
            var first = imgs.eq(0);
            var second = imgs.eq(1);
            first.fadeOut(2000).appendTo(container);
            second.fadeIn(2000);
        }
        setInterval(switchImg, interval);
    });
});


v = document.getElementById("2x_video");
v.playbackRate = 1.5;