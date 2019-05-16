//Header action when scroll
$(function () {
    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() == 0) {
            $('header').removeClass('header-hide');
        }
        else {
            $('header').addClass('header-hide');
        }
    });
});

const inputSearch = document.querySelector('.search-controls input');
const inputCancelButton = document.querySelector('.cancel');
const inputSearchButton = document.querySelector('.search-controls .search');

function inputSearchAction() {
    if (inputSearch.value) {
        inputSearch.style.display = 'inline-block';
        inputCancelButton.style.display = 'inline-block';
    }
    else {
        inputSearch.style.display = '';
        inputCancelButton.style.display = '';
    }
};

inputSearch.addEventListener('input', inputSearchAction);

function inputCancelButtonAction() {
    inputSearch.value = '';
    inputSearchAction();
}

inputCancelButton.addEventListener('click', inputCancelButtonAction);

//FIRST SCREEN ACTIONS

function videoAction() {
    const buttonIcon = $('#main-video-control');
    let mainVideo = $('.slide-video-content').get(0);
    const button = $('.slide-button');
    if (buttonIcon.attr('class').indexOf('fa-play') != -1) {
        button.addClass('slide-button-pause');
        buttonIcon.removeClass('fa-play');
        buttonIcon.addClass('fa-pause');
        mainVideo.play();
    }
    else {
        button.removeClass('slide-button-pause');
        buttonIcon.removeClass('fa-pause');
        buttonIcon.addClass('fa-play');
        mainVideo.pause();
    }
}

function videoEnded() {
    const buttonIcon = $('#main-video-control');
    const button = $('.slide-button');
    button.removeClass('slide-button-pause');
    buttonIcon.removeClass('fa-pause');
    buttonIcon.addClass('fa-play');
}


// Play video button action
document.querySelector('.slide-button').addEventListener('click', videoAction);
document.querySelector('.slide-video-content').addEventListener('ended', videoEnded);


//Some data for first screen
const slides = [
    { id: 1, name: 'Derek Anderson', job: 'BRITISH COMEDIAN', video: 'video/video_1.mp4', poster: 'video/poster_1.jpg', title: 'ENQUIRE ABOUT DEREK' },
    { id: 2, name: 'Derek Anderson2', job: 'BRITISH COMEDIAN2', video: 'video/video_2.mp4', poster: 'video/poster_2.jpg', title: 'ENQUIRE ABOUT DEREK2' },
    { id: 3, name: 'Derek Anderson3', job: 'BRITISH COMEDIAN3', video: 'video/video_3.mp4', poster: 'video/poster_3.jpg', title: 'ENQUIRE ABOUT DEREK3' },
    { id: 4, name: 'Derek Anderson4', job: 'BRITISH COMEDIAN4', video: 'video/video_4.mp4', poster: 'video/poster_4.jpg', title: 'ENQUIRE ABOUT DEREK4' }
];


let currentSlide = 0;

//Arrows for landscape screen orientation
const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');

//Left number controls
const slideControls = document.querySelectorAll(".slider-controls .slider-page");

//Arrows for portrait screen orientation
const ArrowPortraitElements = document.querySelectorAll('.slider-arrows-portrait .fas');

function prepareFirstScreenInfo(slideNum) {
    document.querySelector('#main-video-control').classList.remove('fa-pause');
    document.querySelector('#main-video-control').classList.add('fa-play');
    document.querySelector('h1').innerText = slides[slideNum].name;
    document.querySelector('.person-job').innerText = slides[slideNum].job;
    document.querySelector('.slide-video-content').src = slides[slideNum].video;
    document.querySelector('.slide-video-content').poster = slides[slideNum].poster;
    document.querySelector('.slide-title').innerText = slides[slideNum].title;
}

function arrowDisable(leftArrow, rightArrow) {
    if (currentSlide <= 0) {
        leftArrow.classList.add('disabled');
    }
    else {
        leftArrow.classList.remove('disabled');
    }
    if (currentSlide >= 3) {
        rightArrow.classList.add('disabled');
    }
    else {
        rightArrow.classList.remove('disabled');
    }
}

function makeActivePageControl(element, activeNum) {
    element.forEach(function (element) { element.classList.remove('active') });
    element[activeNum].classList.add('active');
}

function doSlide(direction) {
    currentSlide += direction;
    prepareFirstScreenInfo(currentSlide);
    arrowDisable(leftArrowElement, rightArrowElement);
    arrowDisable(ArrowPortraitElements[0], ArrowPortraitElements[1]);
    makeActivePageControl(slideControls, currentSlide);
    videoEnded();
}

leftArrowElement.addEventListener('click', function () { doSlide(-1) });
rightArrowElement.addEventListener('click', function () { doSlide(1) });
ArrowPortraitElements[0].addEventListener('click', function () { doSlide(-1) });
ArrowPortraitElements[1].addEventListener('click', function () { doSlide(1) });

function doSlideByNum(slideNum) {
    currentSlide = slideNum;
    prepareFirstScreenInfo(currentSlide);
    arrowDisable(leftArrowElement, rightArrowElement);
    makeActivePageControl(slideControls, currentSlide);
    videoEnded();
}


slideControls.forEach(function (element, i) {
    element.addEventListener('click', function () { doSlideByNum(i) })
});

//Some data for carousels

const mockData = [{ "id": 1, "name": "Вася", "job": "QA", "photo": "https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1" }, { "id": 2, "name": "Петя", "job": "Developer", "photo": "https://pmctvline2.files.wordpress.com/2018/10/game-of-thrones-peter-dinklage-tyrion-death-season-8-interview.jpg?w=620" }, { "id": 3, "name": "Вова", "job": "Senior Developer", "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaeIWOmi62oncorhSKDzoBPIA7mF1QWUqgnFXKRTbaGHAsp8fUA" }, { "id": 4, "name": "Арчибальд", "job": "QA Lead", "photo": "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/05/game-of-thrones-season-1-recap.jpg?itok=ZwQDxPFR" }, { "id": 5, "name": "Клава", "job": "PM", "photo": "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/873/files/2019/04/game-of-thrones-character-poster.jpg" }, { "id": 6, "name": "Дуся", "job": "DM", "photo": "https://pmcvariety.files.wordpress.com/2017/12/game-of-thrones-sansa.jpg?w=1000&h=563&crop=1" }, { "id": 7, "name": "Саманта", "job": "BA", "photo": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lena-headey-cersei-lannister-game-of-thrones-season-8-1553173898.jpg?resize=480:*" }, { "id": 8, "name": "Ядвига", "job": "Junior QA", "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/8/episodes/69/ep69-gamerevealed-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg" }, { "id": 9, "name": "Акакий", "job": "DevOps", "photo": "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_450,q_80,w_800/v1389040063/wired_alfie-allen-on-game-of-thrones.jpg" }, { "id": 10, "name": "Нестор", "job": "DB Expert", "photo": "https://kor.ill.in.ua/m/610x385/2031772.jpg" }, { "id": 11, "name": "Потап", "job": "Solutions Architect", "photo": "https://vignette.wikia.nocookie.net/gameofthrones/images/9/94/804_Ghost_Profile.png/revision/latest/scale-to-width-down/338?cb=20190506030424" }, { "id": 12, "name": "Платон", "job": "DB Expert", "photo": "https://cdn.maximonline.ru/08/4c/23/084c235db5d0d0dc05c3168d89c30865/665x374_1_6c90704c7d93e73a7b220326b1e3f4f3@674x379_0xac120005_18077754021529114221.jpg" }, { "id": 13, "name": "Ефросинья", "job": "Frontend Developer", "photo": "https://cdnimg.rg.ru/i/gallery/a310d529/1_220c7ba8.jpg" }, { "id": 14, "name": "Джонатан", "job": "Backend Developer", "photo": "https://s14.stc.all.kpcdn.net/share/i/12/7983901/inx960x640.jpg" }, { "id": 15, "name": "Грег", "job": "Грег", "photo": "https://vignette.wikia.nocookie.net/warrior/images/4/4d/Jorah-mormont-01-683x1024.jpg/revision/latest?cb=20160221123449&path-prefix=ru" }];

//Try promise

function httpGet(url) {
    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, 'true');

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            }
            else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

httpGet('https://jsonplaceholder.typicode.com/users').then(response => {
    if (response && response.length) {
        //console.log(JSON.parse(response));
        //renderGallery(mockData);
        //createPhotoCarousel(mockData); //for forth screen
    }
}, errors => {
    console.log(errors);
});


//SECOND SCREEN ACTIONS

//Create new HTML-element
function makeElement(tagType, className, innerText) {
    let newElement = document.createElement(tagType);
    newElement.className = className;
    if (innerText) {
        newElement.textContent = innerText;
    }
    return newElement;
}

function photoCarouselAction(currentPhoto, prevPhoto, photoNum, photoWidth, carouselBlock, screenPosition, photosMassiveLength) {
    if (currentPhoto < prevPhoto) {
        // left shift
        for (let i = 0; i < (prevPhoto - currentPhoto); i++) {
            screenPosition = Math.min(screenPosition + photoWidth * photoNum, 0);
        }
        carouselBlock.style.marginLeft = screenPosition + 'px';
    }
    else if (currentPhoto > prevPhoto) {
        // rigt shift
        for (let i = 0; i < (currentPhoto - prevPhoto); i++) {
            screenPosition = Math.max(screenPosition - photoWidth * photoNum, -photoWidth * photosMassiveLength - photoNum);
        }
        carouselBlock.style.marginLeft = screenPosition + 'px';
    };

    return screenPosition;
}

function toggleTab(tabNum) {
    for (let item of $(".about-person-content")) {
        item.style.display = "none";
    }
    $(tabs).removeClass("active");
    $('#' + $(tabs[tabNum]).data("id"))[0].style.display = "block";
    $(tabs[tabNum]).addClass("active");
}

function photoAction(currentPhoto) {
    let photoBlock = document.querySelector('.slider-content-block');
    let photosForCarousel = document.querySelectorAll('.photo-slider-content');
    let width = photosForCarousel[0].getBoundingClientRect().width;
    secondScreenPosition = photoCarouselAction(currentPhoto, prevSecondScreenPhoto, 1, width, photoBlock, secondScreenPosition, photosForCarousel.length);
    makeActivePageControl(secondScreenPageElements, currentPhoto)
    prevSecondScreenPhoto = currentPhoto;
}

let secondScreenPosition = 0; // current left shift
let prevSecondScreenPhoto = 0;

function photoActionListener(currentPhoto) {
    console.log(currentPhoto);
    photoAction(currentPhoto)
    toggleTab(currentPhoto);
}

const secondScreenPageElements = document.querySelectorAll(".photo-slider-control .photo-page");
secondScreenPageElements.forEach(function (element, i) {
    element.addEventListener('click', function () { photoActionListener(i) })
});

let startMouseXCoordinate = 0;
let endMouseXCoordinate = 0;


function carouselMouseDown(event) {
    if(event.type=="touchstart"){
        startMouseXCoordinate = event.changedTouches[0].pageX;
    }
    else{
        startMouseXCoordinate = event.pageX;
    }
    console.log(startMouseXCoordinate);
}

function carouselMouseUp(event) {
    if(event.type=="touchend"){
        endMouseXCoordinate = event.changedTouches[0].pageX;
    }
    else{
        endMouseXCoordinate = event.pageX;
    }
    console.log(endMouseXCoordinate);
    if (endMouseXCoordinate < startMouseXCoordinate) {
        console.log("right");
        if (prevSecondScreenPhoto >= 0 && prevSecondScreenPhoto < 3) {
            photoActionListener(prevSecondScreenPhoto + 1);
        }
    }
    if (endMouseXCoordinate > startMouseXCoordinate) {
        console.log("left");
        if (prevSecondScreenPhoto > 0 && prevSecondScreenPhoto <= 3) {
            photoActionListener(prevSecondScreenPhoto - 1);
        }
    }

    startMouseXCoordinate = 0;
    endMouseXCoordinate = 0;

    console.log(endMouseXCoordinate);
}

const secondScreenBlockElements = document.querySelector(".photo-slider-control-block");
secondScreenBlockElements.addEventListener('mousedown', carouselMouseDown);
secondScreenBlockElements.addEventListener('mouseup', carouselMouseUp);
secondScreenBlockElements.addEventListener('touchstart', carouselMouseDown);
secondScreenBlockElements.addEventListener('touchend', carouselMouseUp);


function createSecondScreenPhotoCarousel(data) {
    const photoCarousel = document.querySelector(".slider-content-block");
    for (let item of data) {
        let divPhoto = makeElement('div', 'photo-slider-content');
        divPhoto.style.backgroundImage = "url(" + item.photo + ")";
        photoCarousel.appendChild(divPhoto);
    }
}

createSecondScreenPhotoCarousel(mockData.slice(0, 4));

let tabs = document.querySelectorAll('.about-person-page');

tabs.forEach(function (element, i) {
    element.addEventListener('click', function () { photoActionListener(i) })
});

$(".about-person-page.active").click();


//FORTH SCREEN ACTIONS

let forthScreenPosition = 0; // current left shift
let prevForthScreenPhotoBlock = 0;

function carouselAction(currentPhotoBlock) {
    let photoBlock = document.querySelectorAll('.photo-carousel .photo-block');
    if (window.innerHeight > window.innerWidth) {
        let photosForCarousel = photoBlock[1].querySelectorAll('.photo');
        let width = photosForCarousel[0].getBoundingClientRect().width;
        let curScreenPosition = forthScreenPosition
        forthScreenPosition = photoCarouselAction(currentPhotoBlock, prevForthScreenPhotoBlock, 2, width, photoBlock[1], curScreenPosition, photosForCarousel.length);
        photoCarouselAction(currentPhotoBlock, prevForthScreenPhotoBlock, 2, width, photoBlock[2], curScreenPosition, photosForCarousel.length);
    }
    else {
        let photosForCarousel = document.querySelectorAll('.photo-block .photo');
        let width = photosForCarousel[0].getBoundingClientRect().width;
        forthScreenPosition = photoCarouselAction(currentPhotoBlock, prevForthScreenPhotoBlock, 4, width, photoBlock[0], forthScreenPosition, photosForCarousel.length);
    }
    makeActivePageControl(photoPageElements, currentPhotoBlock)
    prevForthScreenPhotoBlock = currentPhotoBlock;
}

const photoPageElements = document.querySelectorAll(".photo-carousel .photo-page");
photoPageElements.forEach(function (element, i) {
    element.addEventListener('click', function () { carouselAction(i) })
});

let startMouseXCoordinateForth = 0;
let endMouseXCoordinateForth = 0;


function forthScreenCarouselMouseDown(event) {
    if(event.type=="touchstart"){
        startMouseXCoordinateForth = event.changedTouches[0].pageX;
    }
    else{
        startMouseXCoordinateForth = event.pageX;
    }
    console.log(startMouseXCoordinateForth);
}

function forthScreenCarouselMouseUp(event) {
    if(event.type=="touchend"){
        endMouseXCoordinateForth = event.changedTouches[0].pageX;
    }
    else {
        endMouseXCoordinateForth = event.pageX;
    }
    console.log(endMouseXCoordinateForth);
    if (endMouseXCoordinateForth < startMouseXCoordinateForth) {
        console.log("right");
        if (prevForthScreenPhotoBlock >= 0 && prevForthScreenPhotoBlock < 3) {
            carouselAction(prevForthScreenPhotoBlock + 1);
        }
    }
    else {
        console.log("left");
        if (prevForthScreenPhotoBlock > 0 && prevForthScreenPhotoBlock <= 3) {
            carouselAction(prevForthScreenPhotoBlock - 1);
        }
    }

    startMouseXCoordinateForth = 0;
    endMouseXCoordinateForth = 0;

    console.log(endMouseXCoordinate);
}

const forthScreenBlockElements = document.querySelector(".photo-carousel");
forthScreenBlockElements.addEventListener('mousedown', forthScreenCarouselMouseDown);
forthScreenBlockElements.addEventListener('mouseup', forthScreenCarouselMouseUp);
forthScreenBlockElements.addEventListener('touchstart', forthScreenCarouselMouseDown);
forthScreenBlockElements.addEventListener('touchend', forthScreenCarouselMouseUp);

function createPhotoBlock(dataForCarousel) {
    let photoBlock = makeElement('div', 'photo-block');;
    for (let item of dataForCarousel) {
        let divPhoto = makeElement('div', 'photo');
        let divItemInner = makeElement('div', 'item-inner');
        let roundButton = makeElement('button', 'round-button');
        let iconForButton = makeElement('i', 'fas fa-arrow-up');
        let divItemInfo = makeElement('div', 'item-info');
        let divPersonName = makeElement('div', 'person-name poppins-regular', item.name);
        let divPersonJob = makeElement('div', 'person-job nunito-extrabold', item.job);

        divItemInfo.appendChild(divPersonName);
        divItemInfo.appendChild(divPersonJob);
        roundButton.appendChild(iconForButton);
        divItemInner.appendChild(roundButton);
        divItemInner.appendChild(divItemInfo);
        divPhoto.appendChild(divItemInner);

        divPhoto.style.backgroundImage = "url(" + item.photo + ")";

        photoBlock.appendChild(divPhoto);
    }
    return photoBlock;
}

function createPhotoCarousel(data) {
    if (data.length < 16) {
        for (let i = 0; i < (16 - data.length); i++) {
            data.push(data[i]);
        }
    }
    const photoCarousel = document.querySelector(".photo-carousel");
    const photoControl = document.querySelector(".photo-carousel .photo-pages");
    photoCarousel.insertBefore(createPhotoBlock(data), photoControl);
    photoCarousel.insertBefore(createPhotoBlock(data.slice(0, data.length / 2)), photoControl);
    photoCarousel.insertBefore(createPhotoBlock(data.slice(data.length / 2, 16)), photoControl);
}

createPhotoCarousel(mockData);

//WINDOW EVENTS

window.addEventListener("resize", resizePhoto, false);

function resizePhoto() {
    position = 0;
    const carouselWidth = document.querySelector('.photo-carousel').getBoundingClientRect().width;
    const thirdScreenContainerWidth = document.querySelector('.photo-slider-control').getBoundingClientRect().width;
    const photoBlock = document.querySelectorAll('.photo-carousel .photo-block');
    let photosForCarousel = document.querySelectorAll('.photo-block .photo');
    const thirdScreenPhotos = document.querySelectorAll('.photo-slider-content');
    let devider;
    if (window.innerHeight > window.innerWidth) {
        devider = 2;
        photoBlock[0].style.display = 'none';
        photoBlock[1].style.display = 'block';
        photoBlock[2].style.display = 'block';
        photoBlock[2].style.marginTop = '-4px';
    }
    else {
        devider = 4;
        photoBlock[0].style.display = 'block';
        photoBlock[1].style.display = 'none';
        photoBlock[2].style.display = 'none';
    }
    for (let photo of photosForCarousel) {
        photo.style.width = (carouselWidth / devider) + 'px';
    }

    for (let photo of thirdScreenPhotos) {
        photo.style.width = thirdScreenContainerWidth + 'px';
    }
}

resizePhoto();