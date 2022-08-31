const keys = document.querySelectorAll(".key")
const audio = document.querySelectorAll("audio")


// keys[0].addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelectorAll('audio')[0].play()

// })


for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelectorAll('audio')[i].play()
    })
}



document.addEventListener('keypress', e => {
   console.log(e.key)
   e.preventDefault()
    switch(e.key.toLowerCase()) {
        case "a": 
        audio[0].play()
        break;
        case "s": 
        document.querySelectorAll('audio')[1].play()
        break; 
        case "d": 
        document.querySelectorAll('audio')[2].play()
        break;  
        case "f": 
        document.querySelectorAll('audio')[3].play()
        break; 
        case "g": 
        document.querySelectorAll('audio')[4].play() 
        break;
        case "h": 
        document.querySelectorAll('audio')[5].play() 
        break;
        case "j": 
        document.querySelectorAll('audio')[6].play() 
        break;
        case "k": 
        document.querySelectorAll('audio')[7].play()
        break;
        case "l": 
        document.querySelectorAll('audio')[8].play()
        break;
    }

})