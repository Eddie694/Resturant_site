var swiper = new Swiper(".home-swiper", {
  grabCursor: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-swiper", {
  grabCursor: true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
  food.onclick = () =>{
      previewContainer.style.display="flex";
      let name = food.getAttribute('data-name');
      previewBox.forEach(preview=>{
        let target = preview.getAttribute('data-target');
        if (name == target){
          preview.classList.add('active');
        }
      });
    }
  });


let closePreview = previewContainer.querySelector('#close-preview');
closePreview.addEventListener('click', () => {
  previewContainer.style.display = 'none';
  previewBoxes.forEach(previewBox => {
    previewBox.classList.remove('active');
  });
});



