// Funktionen navSlide
const navSlide =() => {
  // Vi finder HTML-elementerne, der har følgende ID og klasser og gemmer dem i variabler i vores script
  const burger = document.querySelector('#burger'); // Burger-menuen
  const nav = document.querySelector('.nav-links'); // Navigationen
  const navLinks = document.querySelectorAll('.nav-links li'); // Linksene i navigationen
  const anchorlinks = document.querySelectorAll('.nav-links li a') // Anchorlinks under .nav-links li
  
  // Når vi klikker på burgeren skal der udføres følgende funktion
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active'); // Her aktiverer man "nav-active"-klassen på navigationen

      // Udvælger alle links i navigationen og tilføjer en animation
      navLinks.forEach((link, index) => {
          if(link.style.animation){ // Hvis et link har en eksisterende animation, fjernes den
              link.style.animation = '';
          } else { // Hvis et link ikke har en eksisterende animation, tilføjes en ny animation
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`; // Fade-in effekt på tekst

              link.style.animation = `navLinkUnderline 0.5s ease forwards ${index/7+0.7}s`; // Fade-in effekt på underline
          }
      });

      // Lidt ligesom ovenover så udvælger man alle anchorlinks denne gang og tilføjer animation
      anchorlinks.forEach((link, index) => {
        if (link.style.animation) { // Hvis et anchor-tag har en eksisterende animation, fjernes den
            link.style.animation = '';
        } else { // Hvis et anchor-tag ikke har en eksisterende animation, tilføjes en ny animation
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`; // Fade-ind effekt ligesom ovenover
        }
    });

      // Aktiverer "toggle"-klassen på burger-menuen, så den får en animation
      burger.classList.toggle('toggle');
  });
}

// Kører funktionen "navSlide"
navSlide();


// Næste funktion ændrer billede ved hover

// Finder alle HTML elementer med klassen "member-img" og gemmer dem i en variabel. Mouseover og Mouseout fungerer som sagt ved at musen er over et element og udenfor et element
var teamImages = document.getElementsByClassName("member-img");

// "For" (vælger) alle billederne og tilføjer event listeners, så der skiftes mellem to forskellige billeder ved hover (mouseover og mouseout)
for (var i = 0; i < teamImages.length; i++) {
    teamImages[i].addEventListener("mouseover", function() { // Mouseover-event
        changeImage(this, this.src.replace("-1.jpg", "-2.jpg"));
    });
    teamImages[i].addEventListener("mouseout", function() { // Mouseout-event
        changeImage(this, this.src.replace("-2.jpg", "-1.jpg"));
    });
}

// Funktionen "changeImage"
function changeImage(element, newSrc) {
    // Create a new image object
    var img = new Image();

// Når det nye billede er loaded, ændres "src"-attributten på billedet og opacity sættes til 1
    img.onload = function() {
      setTimeout(function() {
        element.src = newSrc;
        element.style.opacity = 1;
      }, 100);
    }

    // Sætter "src" (source) til at være "newSrc" (new Source). Du ændrer kilden.
    img.src = newSrc;

    // Opacity sættes af det aktuelle billede til 0, så det langsomt bliver usynligt og derefter erstattes af det nye billede.
    element.style.opacity = 0;
}


// Slideshow med figcaption (figure caption) som er en tekst ovenover slideshowet

// Vi gemmer alle "dots" i en variabel som en liste
const dots = Array.from(document.querySelectorAll(".dot"));

// Vi sætter slideIndex til at være 1
let slideIndex = 1;

// Funktionen currentSlide kaldes, når brugeren klikker på et af punkterne (dotsene)
function currentSlide(e) {
  if (e.target === dots[0]) showSlides((slideIndex = 1)); // Hvis brugeren klikker på det første punkt, sættes slideIndex til 1
  if (e.target === dots[1]) showSlides((slideIndex = 2)); // Hvis brugeren klikker på det andet punkt, sættes slideIndex til 2 osv osv.
  if (e.target === dots[2]) showSlides((slideIndex = 3)); // 3
  if (e.target === dots[3]) showSlides((slideIndex = 4)); // 4
  if (e.target === dots[4]) showSlides((slideIndex = 5)); // 5
}

// Funktionen showSlides viser det aktuelle slide baseret på slideIndex
function showSlides(n) {

  // Vi gemmer alle slides i en liste
  const slides = Array.from(document.querySelectorAll(".slide"));

  // Hvis slideIndex er større end antallet af slides, sættes slideIndex til 1
  if (n > slides.length) slideIndex = 1;

  // Hvis slideIndex er mindre end 1, sættes slideIndex til det sidste slide
  if (n < 1) slideIndex = slides.length;

  // Vi fjerner "is-active" klassen fra alle slides og punkter
  slides.forEach((slide) => slide.classList.remove("is-active"));
  dots.forEach((dot) => dot.classList.remove("is-active"));

  // Vi tilføjer "is-active" klassen til det aktuelle slide og punkt
  slides[slideIndex - 1].classList.add("is-active");
  dots[slideIndex - 1].classList.add("is-active");

  // Vi henter figcaption (teksten over slides) elementet fra det aktuelle slide og sætter display til "block"
  const figcaption = slides[slideIndex - 1].querySelector("figcaption");
  figcaption.style.display = "block";
}

// Vi kalder showSlides med en initial værdi på 1 (dvs. slide 1)
showSlides(1);

// Vi tilføjer en event listener til hvert punkt, der kalder currentSlide funktionen
dots.forEach((dot) => dot.addEventListener("click", currentSlide));

    

// Nedenstående funktion, videreSend, sender brugeren til en anden side inde fra kontaktformularen når du trykker på "Send" knappen
    function videreSend() {
      window.location.href="contact-sent.html"
    }
