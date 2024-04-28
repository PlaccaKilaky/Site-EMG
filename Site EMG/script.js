document.addEventListener("DOMContentLoaded", function() {
    // Récupération des éléments DOM pour le carrousel
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    let carousel = document.querySelector('.carousel');
    let slider = carousel.querySelector('.carousel .list');
    let thumbnailBorder = document.querySelector('.carousel .thumbnail');
    let thumbnailItems = thumbnailBorder.querySelectorAll('.item');
    let timeDisplay = document.querySelector('.carousel .time');
  
    // Initialisation des variables de configuration pour le carrousel
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;
  
    // Initialisation du carrousel
    thumbnailBorder.appendChild(thumbnailItems[0]);
  
    // Gestion de l'événement clic sur le bouton "Suivant"
    nextButton.addEventListener('click', function() {
      showSlider('next');
    });
  
    // Gestion de l'événement clic sur le bouton "Précédent"
    prevButton.addEventListener('click', function() {
      showSlider('prev');
    });
  
    // Fonction pour afficher les diapositives du carrousel
    function showSlider(type) {
      let sliderItems = slider.querySelectorAll('.carousel .list .item');
      let thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');
  
      if (type === 'next') {
        slider.appendChild(sliderItems[0]);
        thumbnailBorder.appendChild(thumbnailItems[0]);
        carousel.classList.add('next');
      } else {
        slider.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailBorder.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carousel.classList.add('prev');
      }
  
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(function() {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, timeRunning);
  
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(function() {
        nextButton.click();
      }, timeAutoNext);
    }
  
    // Fonction pour afficher les diapositives du carrousel automatiquement
    function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000); // Changer d'image toutes les 2 secondes
    }
  
    showSlides(); // Démarrer le carrousel au chargement de la page
  });
  