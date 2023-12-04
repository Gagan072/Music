console.log("Welcome to Brigade");

//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('songs6/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs6=[
    {songName:"Country Lines", filePath:"songs6/1.mp3", coverPath:"coverpage.png"},
    {songName:"Vaquero Perdido", filePath:"songs6/2.mp3", coverPath:"coverpage.png"},
    {songName:"To Loom Is To Love", filePath:"songs6/3.mp3", coverPath:"coverpage.png"},
    {songName:"Floating Home", filePath:"songs6/4.mp3 - Jeremy Blake.mp3", coverPath:"coverpage.png"},
    {songName:"Beautiful Girl", filePath:"songs6/5.mp3", coverPath:"coverpage.png"},
    {songName:"Love You ", filePath:"songs6/6.mp3", coverPath:"coverpage.png"},
    {songName:"Music Box", filePath:"songs6/7.mp3", coverPath:"coverpage.png"},
    {songName:"Shine On", filePath:"songs6/8.mp3", coverPath:"coverpage.png"},
    {songName:"Blue Dream", filePath:"songs6/9.mp3", coverPath:"coverpage.png"},


]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs6[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs6[i].songName;

})

// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');  
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }  
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs6/${songIndex+1}.mp3`;
        masterSongName.innerText=songs6[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs6/${songIndex+1}.mp3`;
    masterSongName.innerText=songs6[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs6/${songIndex+1}.mp3`;
    masterSongName.innerText=songs6[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
   