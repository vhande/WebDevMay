var keys = document.querySelectorAll(".key")

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

    switch(e.key) {
        case "a": 
        document.querySelectorAll('audio')[0].play()
        case "s": 
        document.querySelectorAll('audio')[1].play() 
        case "d": 
        document.querySelectorAll('audio')[2].play()  
        case "g": 
        document.querySelectorAll('audio')[3].play() 
        case "h": 
        document.querySelectorAll('audio')[4].play() 
        case "j": 
        document.querySelectorAll('audio')[5].play() 
        case "l": 
        document.querySelectorAll('audio')[6].play() 
    }
    
        console.log("Hello" ,e.key)

})