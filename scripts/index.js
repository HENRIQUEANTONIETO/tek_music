let playing = false
let currentTrack = 0
let musicPlayer = document.querySelector('#music-player')
let musicImg = document.querySelector('#music-img')
let musicTitle = document.querySelector('#music-title')
let previous = false
let finished = false

let songs = [
    {
        title: "Guns N' Roses",
        song_path: "../musics/Guns_N_Roses.mp3",
        img_path: "../covers/guns.jpg"
    },
    {
        title: "Boate Azul",
        song_path: "../musics/Boate_Azul.mp3",
        img_path: "../covers/boate.jpg"
    },
    {
        title: "Carpinteiro",
        song_path: "../musics/Carpinteiro.mp3",
        img_path: "../covers/carpinteiro.jpg" 
    }
    
]

document.querySelector('.btn-play').addEventListener('click', playMusic)
document.querySelector('.btn-next').addEventListener('click', () => changeSong())
document.querySelector('.btn-previous').addEventListener('click', () => changeSong('previous'))
document.querySelector('#reload button').addEventListener('click', reload)
document.querySelector('#music-player').addEventListener('ended', endTrack)

updatePlayer()

function playMusic(){
    if(!playing){
        document.querySelector('#music-player').play()
        document.querySelector('#icon-play').classList.add('inactive')
        document.querySelector('#icon-pause').classList.remove('inactive')
        titleSlide()
        playing = true
    }
    else{
        musicPlayer.pause()
        document.querySelector('#icon-pause').classList.add('inactive')
        document.querySelector('#icon-play').classList.remove('inactive')
        titleSlide()
        playing = false
    }    
}

function changeSong(previous){
    playing = !playing
    previous ? currentTrack-- : currentTrack++
    updatePlayer()
    document.querySelector('.track').innerHTML = currentTrack + 1 + `/${songs.length}`
    playMusic()
}

function updatePlayer(){
    if(currentTrack >= songs.length || currentTrack < 0){
        currentTrack = 0
    }
    musicPlayer.src = songs[currentTrack].song_path
    musicImg.setAttribute('src', songs[currentTrack].img_path)
    musicTitle.innerHTML = songs[currentTrack].title
    if(finished){
        playMusic()
    }
}

function reload(){
    document.querySelector('#music-player').currentTime = 0
    if(playing){
        document.querySelector('#music-player').play()
    } 
}

function playMusicHTML(){
    if(!playing){
        playMusic()
    }
}

function endTrack(){
    currentTrack++
    finished = true
    playing = false
    updatePlayer()
}

function titleSlide(){
  if (!playing){
    document.querySelector('#music-title').classList.add('slide') 
  }
  else{
    document.querySelector('#music-title').classList.remove('slide')   
  }
}
