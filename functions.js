/*
Dear Code Reader,

Below is the js for my website. It is a hard coded solution. I understand I could've
taken the time to make this dynamic. I'd rather spend my time on other projects. 
*/


/*
Initialization of variables and overlays
*/
var slideIndex = 1;

/*
showSlidesEntangled(slideIndex);
showSlidesOBTWGS(slideIndex);
showSlidesPatientZero(slideIndex);
showSlidesDoorQuest(slideIndex);
showSlidesCryptoCrunchPizzaCo(slideIndex);
showSlidesDimensionDysfunction(slideIndex);
showSlidesCurseoftheLowEffortLake(slideIndex);
showSlidesDalhousieAccessibilityWeekVisualNovel(slideIndex);
showSlidesBoatleRoyale(slideIndex);
showSlidesDalhousieFitnessHallApplication(slideIndex);
*/

/*
Functions used to pass incremented or decremented index to showSlides. 
*/
function plusSlidesOBTWGS(n) {
  showSlidesOBTWGS(slideIndex += n);
}

function plusSlidesEntangled(n) {
  showSlidesEntangled(slideIndex += n);
}

function plusSlidesPatientZero(n) {
  showSlidesPatientZero(slideIndex += n);
}

function plusSlidesDoorQuest(n) {
  showSlidesDoorQuest(slideIndex += n);
}

function plusSlidesCryptoCrunchPizzaCo(n) {
  showSlidesCryptoCrunchPizzaCo(slideIndex += n);
}

function plusSlidesDimensionDysfunction(n) {
  showSlidesDimensionDysfunction(slideIndex += n);
}

function plusSlidesCurseoftheLowEffortLake(n) {
  showSlidesCurseoftheLowEffortLake(slideIndex += n);
}

function plusSlidesDalhousieAccessibilityWeekVisualNovel(n) {
  showSlidesDalhousieAccessibilityWeekVisualNovel(slideIndex += n);
}

function plusSlidesBoatleRoyale(n) {
  showSlidesBoatleRoyale(slideIndex += n);
}

function plusSlidesDalhousieFitnessHallApplication(n) {
  showSlidesDalhousieFitnessHallApplication(slideIndex += n);
}


/*
Functions used to change the pictures on the carousel 
*/

function showSlidesOBTWGS(n) {
  var i;
  var slides = document.getElementsByClassName("OBTWGSPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  console.log("before1");
  console.log(slides.length);
  slides[slideIndex-1].style.display = "block";
}

function showSlidesEntangled(n) {
  var i;
  var slides = document.getElementsByClassName("EntangledPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  console.log("before2");
  console.log(slides.length);
  slides[slideIndex-1].style.display = "block";
}

function showSlidesPatientZero(n) {
  var i;
  var slides = document.getElementsByClassName("PatientZeroPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesDoorQuest(n) {
  var i;
  var slides = document.getElementsByClassName("DoorQuestPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesCryptoCrunchPizzaCo(n) {
  var i;
  var slides = document.getElementsByClassName("CryptoCrunchPizzaCoPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesDimensionDysfunction(n) {
  var i;
  var slides = document.getElementsByClassName("DimensionDysfunctionPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesCurseoftheLowEffortLake(n) {
  var i;
  var slides = document.getElementsByClassName("CurseoftheLowEffortLakePics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesDalhousieAccessibilityWeekVisualNovel(n) {
  var i;
  var slides = document.getElementsByClassName("DalhousieAccessibilityWeekVisualNovelPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesBoatleRoyale(n) {
  var i;
  var slides = document.getElementsByClassName("BoatleRoyalePics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlidesDalhousieFitnessHallApplication(n) {
  var i;
  var slides = document.getElementsByClassName("DalhousieFitnessHallApplicationPics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


/*
Functions used to open the overlay
*/

function openOverlayEntangled() {
    document.getElementById("Entangled").style.display = "block";
}

function openOverlayOBTWGS() {
  document.getElementById("OBTWGS").style.display = "block";
}

function openOverlayPatientZero() {
  document.getElementById("PatientZero").style.display = "block";
}

function openOverlayDoorQuest() {
  document.getElementById("DoorQuest").style.display = "block";
}

function openOverlayCryptoCrunchPizzaCo() {
  document.getElementById("CryptoCrunchPizzaCo").style.display = "block";
}

function openOverlayDimensionDysfunction() {
  document.getElementById("DimensionDysfunction").style.display = "block";
}

function openOverlayCurseoftheLowEffortLake() {
  document.getElementById("CurseoftheLowEffortLake").style.display = "block";
}

function openOverlayDalhousieAccessibilityWeekVisualNovel() {
  document.getElementById("DalhousieAccessibilityWeekVisualNovel").style.display = "block";
}

function openOverlayBoatleRoyale() {
  document.getElementById("BoatleRoyale").style.display = "block";
}

function openOverlayDalhousieFitnessHallApplication() {
  document.getElementById("DalhousieFitnessHallApplication").style.display = "block";
}


/*
Functions used to close the overlay
*/

function closeOverlayEntangled() {
    document.getElementById("Entangled").style.display = "none";
}

function closeOverlayOBTWGS() {
  document.getElementById("OBTWGS").style.display = "none";
}

function closeOverlayPatientZero() {
  document.getElementById("PatientZero").style.display = "none";
}

function closeOverlayDoorQuest() {
  document.getElementById("DoorQuest").style.display = "none";
}

function closeOverlayCryptoCrunchPizzaCo() {
  document.getElementById("CryptoCrunchPizzaCo").style.display = "none";
}

function closeOverlayDimensionDysfunction() {
  document.getElementById("DimensionDysfunction").style.display = "none";
}

function closeOverlayCurseoftheLowEffortLake() {
  document.getElementById("CurseoftheLowEffortLake").style.display = "none";
}

function closeOverlayDalhousieAccessibilityWeekVisualNovel() {
  document.getElementById("DalhousieAccessibilityWeekVisualNovel").style.display = "none";
}

function closeOverlayBoatleRoyale() {
  document.getElementById("BoatleRoyale").style.display = "none";
}

function closeOverlayDalhousieFitnessHallApplication() {
  document.getElementById("DalhousieFitnessHallApplication").style.display = "none";
}
