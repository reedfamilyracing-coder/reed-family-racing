const menuToggle=document.querySelector(".menu-toggle");const mobileNav=document.querySelector(".mobile-nav");if(menuToggle&&mobileNav){menuToggle.addEventListener("click",()=>{mobileNav.classList.toggle("open")})}const year=document.getElementById("year");if(year){year.textContent=new Date().getFullYear()}const historyItems=[{image:"assets/team/history-1.jpg",title:"Where It Started",description:"Add the first chapter of the Reed Family Racing story here."},{image:"assets/team/history-2.jpg",title:"Karting Years",description:"Add a history moment from the dirt kart years here."},{image:"assets/team/history-3.jpg",title:"Championship Moment",description:"Add a championship or major team milestone here."}];let historyIndex=0;const historyImage=document.getElementById("historyImage");const historyTitle=document.getElementById("historyTitle");const historyDescription=document.getElementById("historyDescription");const prevButton=document.querySelector("[data-history-prev]");const nextButton=document.querySelector("[data-history-next]");function updateHistory(){if(!historyImage||!historyTitle||!historyDescription)return;const item=historyItems[historyIndex];historyImage.src=item.image;historyTitle.textContent=item.title;historyDescription.textContent=item.description}if(prevButton&&nextButton){prevButton.addEventListener("click",()=>{if (historyIndex > 0) {
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

const homeStories = [
  {
    title: "Latest Story One",
    text: "Read the latest update from Reed Family Racing.",
    image: "assets/news/news-1.jpg",
    link: "news.html"
  },
  {
    title: "Latest Story Two",
    text: "Catch up on the second latest story from RFR.",
    image: "assets/news/news-2.jpg",
    link: "news.html"
  },
  {
    title: "Latest Story Three",
    text: "See another recent update from the team.",
    image: "assets/news/news-3.jpg",
    link: "news.html"
  }
];

let homeStoryIndex = 0;

const homeStoryLink = document.getElementById("homeStoryLink");
const homeStoryImage = document.getElementById("homeStoryImage");
const homeStoryTitle = document.getElementById("homeStoryTitle");
const homeStoryText = document.getElementById("homeStoryText");
const homeStoryPrev = document.querySelector("[data-home-story-prev]");
const homeStoryNext = document.querySelector("[data-home-story-next]");

function updateHomeStory() {
  if (!homeStoryLink || !homeStoryImage || !homeStoryTitle || !homeStoryText) return;

  const story = homeStories[homeStoryIndex];
  homeStoryLink.href = story.link;
  homeStoryImage.src = story.image;
  homeStoryTitle.textContent = story.title;
  homeStoryText.textContent = story.text;
}

if (homeStoryPrev && homeStoryNext) {
  homeStoryPrev.addEventListener("click", () => {
    homeStoryIndex = (homeStoryIndex - 1 + homeStories.length) % homeStories.length;
    updateHomeStory();
  });

  homeStoryNext.addEventListener("click", () => {
    homeStoryIndex = (homeStoryIndex + 1) % homeStories.length;
    updateHomeStory();
  });
}
