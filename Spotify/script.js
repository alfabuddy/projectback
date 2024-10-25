console.log("Welcome to Spotify");
//Initialize the variables
let  songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')

let songs=[
    {songName:"Salam-e-Ishq", filepath:"songs/1.mp3", CoverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"songs/1.mp3", CoverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"songs/1.mp3", CoverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"songs/1.mp3", CoverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"songs/1.mp3", CoverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"songs/1.mp3", CoverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"songs/1.mp3", CoverPath:"covers/1.jpg"},
]
// audioElement.play();

// Listen to Events 
myProgressBar.addEventListener('timeupdate',()=>)
