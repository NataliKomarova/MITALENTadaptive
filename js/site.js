$(function () {
    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() == 0){
            $('header').removeClass('header-hide');
        }
        else {
            $('header').addClass('header-hide');
        }
    });
});

const slides = [
    { id: 1, name: 'Derek Anderson1', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
    { id: 2, name: 'Derek Anderson2', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
    { id: 3, name: 'Derek Anderson3', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
    { id: 4, name: 'Derek Anderson4', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' }
];

let currentSlide = 0;
const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');



function doSlide(direction) {
    currentSlide += direction;
    document.querySelector('h1').innerText = slides[currentSlide].name;
    // change video
    // change title
    // change job
    // change slider-page
    if (currentSlide <= 0) {
        leftArrowElement.classList.add('disabled');
    } else {
        leftArrowElement.classList.remove('disabled');
    }

    if (currentSlide >= 3) {
        rightArrowElement.classList.add('disabled');
    } else {
        rightArrowElement.classList.remove('disabled');
    }
}

leftArrowElement.addEventListener( 'click', function() {doSlide(-1)});
rightArrowElement.addEventListener( 'click', function() {doSlide(1)});

const mockData = [{ "id": 1, "name": "Вася", "job": "QA", "photo": "https://cdn-03.independent.ie/style/celebrity/celebrity-news/article37866116.ece/097c2/AUTOCROP/w620/ipanews_cbc3aeeb-0628-4b80-8370-0cd43cbc3929_1" }, { "id": 2, "name": "Петя", "job": "Developer", "photo": "https://pmctvline2.files.wordpress.com/2018/10/game-of-thrones-peter-dinklage-tyrion-death-season-8-interview.jpg?w=620" }, { "id": 3, "name": "Вова", "job": "Senior Developer", "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcaeIWOmi62oncorhSKDzoBPIA7mF1QWUqgnFXKRTbaGHAsp8fUA" }, { "id": 4, "name": "Арчибальд", "job": "QA Lead", "photo": "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/05/game-of-thrones-season-1-recap.jpg?itok=ZwQDxPFR" }, { "id": 5, "name": "Клава", "job": "PM", "photo": "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/873/files/2019/04/game-of-thrones-character-poster.jpg" }, { "id": 6, "name": "Дуся", "job": "DM", "photo": "https://pmcvariety.files.wordpress.com/2017/12/game-of-thrones-sansa.jpg?w=1000&h=563&crop=1" }, { "id": 7, "name": "Саманта", "job": "BA", "photo": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lena-headey-cersei-lannister-game-of-thrones-season-8-1553173898.jpg?resize=480:*" }, { "id": 8, "name": "Ядвига", "job": "Junior QA", "photo": "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/8/episodes/69/ep69-gamerevealed-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg" }, { "id": 9, "name": "Акакий", "job": "DevOps", "photo": "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_450,q_80,w_800/v1389040063/wired_alfie-allen-on-game-of-thrones.jpg" }, { "id": 10, "name": "Нестор", "job": "DB Expert", "photo": "" }, { "id": 11, "name": "Потап", "job": "Solutions Architect", "photo": "" }, { "id": 12, "name": "Платон", "job": "DB Expert", "photo": "" }, { "id": 13, "name": "Ефросинья", "job": "Frontend Developer", "photo": "" }, { "id": 14, "name": "Джонатан", "job": "Backend Developer", "photo": "" }, { "id": 15, "name": "Грег", "job": "Грег", "photo": "" }];

//XMLHttpRequest example

// let xhr = new XMLHttpRequest();

// xhr.open('GET','https://jsonplaceholder.typicode.com/users','true');

// xhr.send();

// xhr.onreadystatechange = function(){
//     if (this.readyState != 4) return;

//     console.log(JSON.parse(this.responseText));
//     // if (this.status != 200){
//     //     alert('ошибка' + (this.status ? this.statusText : 'запрос не удался'));
//     //     return;
//     // }
// }

//Promise

function httpGet(url){
    return new Promise(function(resolve, reject){

        let xhr = new XMLHttpRequest();

        xhr.open('GET',url,'true');

        xhr.onload = function(){
            if (this.status == 200){
                resolve(this.response);
            }
            else{
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

httpGet('https://jsonplaceholder.typicode.com/users').then(response => {
    if(response && response.length){
        //console.log(JSON.parse(response));
        //renderGallery(mockData);
    }
}, errors => {
    console.log(errors);
});

function renderGallery(data) {
    for (let item of data) {
        $('.photo-block').append(`
            <div class="photo" style="background-image: url('${item.photo}');">
                <div class="item-inner">
                    <a href="#" class="round-button"></a>
                    <div class="item-info">
                        <div class="person-name">${item.name}</div>
                        <div class="person-job">${item.job}</div>
                    </div>
                </div>
            </div>
        `);
    }
}

let prevPhotoSlide = 0;
const photoPageElements = [].slice.call(document.querySelectorAll(".photo-carousel .photo-page"));

//console.log(photoPageElements);

function doPhotoSlide(controlNumber) {
        //console.log(controlNumber);
        let direction = controlNumber*4;
        const backgroundPhotos = document.querySelectorAll('.photo-carousel .photo');
        const itemInnerNames =  document.querySelectorAll('.photo-carousel .person-name');
        const itemInnerJobs = document.querySelectorAll('.photo-carousel .person-job');
    for(let i= 0; i< 4; i++){
        //console.log(direction+i);
        if(mockData[i+direction]){
            backgroundPhotos[i].style.display = "";
            backgroundPhotos[i].classList.remove('fade');
            backgroundPhotos[i].classList.add('fade');
            backgroundPhotos[i].style.backgroundImage = "url("+mockData[i+direction].photo+")";
            itemInnerNames[i].innerText = mockData[i+direction].name;
            itemInnerJobs[i].innerText = mockData[i+direction].job;
        }
        else{
            backgroundPhotos[i].style.display = "none";
        }

    }
    photoPageElements[prevPhotoSlide].classList.remove('active');
    photoPageElements[controlNumber].classList.add('active');
    prevPhotoSlide = controlNumber;
}

photoPageElements.forEach(function (element, i) {
        element.addEventListener('click', function() {doPhotoSlide(i)})
    });
