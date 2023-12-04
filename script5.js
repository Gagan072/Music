console.log("Welcome to Brigade");

//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('songs5/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs5=[
    {songName:"Ebb", filePath:"songs5/1.mp3", coverPath:"coverpage.png"},
    {songName:"Aether", filePath:"songs5/2.mp3", coverPath:"coverpage.png"},
    {songName:"Dead Wrong", filePath:"songs5/3.mp3", coverPath:"coverpage.png"},
    {songName:"Cool Revenge", filePath:"songs5/4.mp3 - Jeremy Blake.mp3", coverPath:"coverpage.png"},
    {songName:"City Walk", filePath:"songs5/5.mp3", coverPath:"coverpage.png"},
    {songName:"Underground Acadamy", filePath:"songs5/6.mp3", coverPath:"coverpage.png"},
    {songName:"Gully Dream", filePath:"songs5/7.mp3", coverPath:"coverpage.png"},
    {songName:"Rains Of Meghalays", filePath:"songs5/8.mp3", coverPath:"coverpage.png"},
    {songName:"Savoir", filePath:"songs5/9.mp3", coverPath:"coverpage.png"},


]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs5[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs5[i].songName;

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
        audioElement.src=`songs5/${songIndex+1}.mp3`;
        masterSongName.innerText=songs5[songIndex].songName;
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
    audioElement.src=`songs5/${songIndex+1}.mp3`;
    masterSongName.innerText=songs5[songIndex].songName;
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
    audioElement.src=`songs5/${songIndex+1}.mp3`;
    masterSongName.innerText=songs5[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
   