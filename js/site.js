const menuToggle=document.querySelector(".menu-toggle");const mobileNav=document.querySelector(".mobile-nav");if(menuToggle&&mobileNav){menuToggle.addEventListener("click",()=>{mobileNav.classList.toggle("open")})}const year=document.getElementById("year");if(year){year.textContent=new Date().getFullYear()}const 
  
  historyItems=[{image:"assets/team/history-1.jpg",title:"2020",description:"In 2020 we started Reed Family Racing with our son TW being our first driver."},
                {image:"assets/team/history-2.jpg",title:"2021",description:"In 2021 Reed Family Racing found Victory Lane for the first time by winning at Dawgwood Speedway."},
                {image:"assets/team/history-3.jpeg",title:"2022",description:"2022 was our breakout year. TW Reed scored 11 wins for our team including 4 consecutive wins and 6 wins out of his first 10 races."},
                {image:"assets/team/history-4.jpeg",title:"2023",description: "RFR added Logan Conner as a second driver in 2023. Logan in his rookie season picked up multiple wins including the final race at Sugar Limb Speedway."},
                {image:"assets/team/history-5.jpeg",title:"2024",description: "In 2024 RFR became a championship organization as TW Reed earned the coveted track championship at Dawgwood Speedway."},
                {image:"assets/team/history-6.jpg",title: "2025",description: "2025 was a transition year for RFR as the team made the move from dirt to asphalt moving from karts to INEX Bandoleros."}];

let historyIndex=0;const historyImage=document.getElementById("historyImage");const historyTitle=document.getElementById("historyTitle");const historyDescription=document.getElementById("historyDescription");const prevButton=document.querySelector("[data-history-prev]");const nextButton=document.querySelector("[data-history-next]");function updateHistory(){if(!historyImage||!historyTitle||!historyDescription)return;const item=historyItems[historyIndex];historyImage.src=item.image;historyTitle.textContent=item.title;historyDescription.textContent=item.description}if(prevButton&&nextButton){prevButton.addEventListener("click",()=>{if (historyIndex > 0) {
  historyIndex--;
  updateHistory();}});nextButton.addEventListener("click",()=>{if (historyIndex < historyItems.length - 1) {
  historyIndex++;
  updateHistory();
}})}

const teamPhotos = [
  "assets/team/team-1.jpg",
  "assets/team/team-2.jpg",
  "assets/team/team-3.jpg",
  "assets/team/team-4.jpg"
];

let teamPhotoIndex = 0;
const teamPhoto = document.getElementById("teamPhoto");
const teamPrevButton = document.querySelector("[data-team-prev]");
const teamNextButton = document.querySelector("[data-team-next]");

function updateTeamPhoto() {
  if (!teamPhoto) return;
  teamPhoto.src = teamPhotos[teamPhotoIndex];
}

if (teamPrevButton && teamNextButton) {
  teamPrevButton.addEventListener("click", () => {
    teamPhotoIndex = (teamPhotoIndex - 1 + teamPhotos.length) % teamPhotos.length;
    updateTeamPhoto();
  });

  teamNextButton.addEventListener("click", () => {
    teamPhotoIndex = (teamPhotoIndex + 1) % teamPhotos.length;
    updateTeamPhoto();
  });
}

let homeStoryIndex = 0;

const homeStoryTrack = document.getElementById("homeStoryTrack");
const homeStorySlides = document.querySelectorAll(".home-story-slide");
const homeStoryPrev = document.querySelector("[data-home-story-prev]");
const homeStoryNext = document.querySelector("[data-home-story-next]");

function updateHomeStorySlider() {
  if (!homeStoryTrack || homeStorySlides.length === 0) return;

  homeStoryTrack.style.transform = `translateX(-${homeStoryIndex * 100}%)`;
}

function showPreviousHomeStory() {
  if (homeStorySlides.length === 0) return;

  homeStoryIndex =
    (homeStoryIndex - 1 + homeStorySlides.length) % homeStorySlides.length;

  updateHomeStorySlider();
}

function showNextHomeStory() {
  if (homeStorySlides.length === 0) return;

  homeStoryIndex =
    (homeStoryIndex + 1) % homeStorySlides.length;

  updateHomeStorySlider();
}

if (homeStoryPrev) {
  homeStoryPrev.addEventListener("click", showPreviousHomeStory);
}

if (homeStoryNext) {
  homeStoryNext.addEventListener("click", showNextHomeStory);
}

/* Auto-scroll homepage stories every 6 seconds */
if (homeStoryTrack && homeStorySlides.length > 1) {
  setInterval(showNextHomeStory, 6000);
}

updateHomeStorySlider();

if (homeStoryPrev) {
  homeStoryPrev.addEventListener("click", showPreviousHomeStory);
}

if (homeStoryNext) {
  homeStoryNext.addEventListener("click", showNextHomeStory);
}

/* Auto-scroll homepage stories every 6 seconds */
if (homeStoryLink) {
  setInterval(showNextHomeStory, 6000);
}

updateHomeStory();
