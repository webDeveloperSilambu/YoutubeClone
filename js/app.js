const videosList = [
    {
        url:"videos/demo.mp4",
        channelImg : "images/lion.jpg",
        title : "Facebook",
        channelName : "Cricket Fan Story",
        hours : "12hours",
        views : "12.900 views"
    },
    {
        url:"videos/name.mp4",
        channelImg : "images/lion.jpg",
        title : "Tweeter",
        channelName : "Cricket Fan Story",
        hours : "1hours",
        views : "1 views"
    }
]

const shortsList = [
    {
        src:"videos/s.mp4",
        title : "Fun with Cricket",
        views : "2k views"
    },
    {
        src:"videos/s.mp4",
        title : "Fun with Cricket",
        views : "2k views"
    }

] 

var videoContainer = document.querySelector(".videoContainer");
var shortContents = document.querySelector(".shortContents")


for(let i=0;i<videosList.length;i++){
    videoContainer.innerHTML += `
        <div class="videoContent">
               <video class="videoTitle" data="${videosList[i].title}" src="${videosList[i].url}" controls></video>
                <div class="videoDes">
                        <img src="${videosList[i].channelImg}" alt="channel">
                        <div class="vDeatil">
                            <h4>${videosList[i].title}</h4>
                            <p>${videosList[i].channelName}</p>
                            <p>${videosList[i].hours} <span>${videosList[i].views}</span></p>
                        </div>
                        <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
                </div>          
            </div>
    `
};

let videoTitle = document.querySelectorAll(".videoTitle");
let inputData = document.getElementById("inputData");
const searchResultContainer = document.querySelector(".search-result")


inputData.oninput = function (e) {
    const value = e.target.value.toLowerCase()

    if(value.length > 0) {
        searchResultContainer.classList.add("active")
    } else {
        searchResultContainer.classList.remove("active")
    }

    const searchResults = videosList.filter(obj => obj.title.toLowerCase().startsWith(value))
    console.log(searchResults)
    if(searchResults.length > 0) {
        searchResultContainer.innerHTML = 
        searchResults.map(obj => `<li>${obj.title} - ${obj.channelName}</li>`).join('')
    } else {
        searchResultContainer.innerHTML = `<h2>No Search results found.</h2>`
    }
}


for(let i=0;i<shortsList.length;i++){
    shortContents.innerHTML += `
        <div class="shortCont">
                    <video src="${shortsList[i].src}" controls></video>
                    <div class="desp">
                        <h4>${shortsList[i].title}</h4>
                        <button><i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </div>
                    <p>${shortsList[i].views}</p>
                </div>
    `
}
let navBtn = document.getElementById("navBtn");
let navContainer = document.querySelector(".navContainer")
let homeContainer = document.querySelector(".homeContainer")


function navOpen(){
    if(navBtn.innerHTML == `<i class="fa-solid fa-bars"></i>`){
        navContainer.style.left = "0%";
        navBtn.innerHTML = "<i>X</i>";
    }
    else{
        navContainer.style.left = "-100%";
        navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
} 


let loader = document.getElementById("preloader")

window.addEventListener('load',()=>{
    loader.style.display = "none"
})

let acContainer = document.querySelector(".acContainer");
let open = false
function settings(){
    if(open == false){
        acContainer.style.display = "block"
        open = true
    }
    else{
        acContainer.style.display = "none"
        open = false
    }
}