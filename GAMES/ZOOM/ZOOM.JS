let Name = document.getElementById("Name")
let Speed = document.getElementById("Speed")
let Description = document.getElementById("Desc")
let wat = 0


function Next() {
    wat = wat + 1
}
function Back() {
    wat = wat - 1
}

setInterval(function Check() {
    if (wat < 0) {
        wat = 0
    }
} , 20)

setInterval(function Start() {
    if (wat === 0) {
        Name.innerText = "SNAIL"
        Speed.innerText = "0.05 kmp/h (0.03 mp/h)"
        Description.innerText = "Although they're rather small, snails are commonly associated with slow. Ohhh the dignity. In reality, they are rather quick for their circumstances!"
        document.getElementById("Image").src = "ZOOM Imgs/SNAIL.jpg"
    }
    
    if (wat === 1) {
        Name.innerText = "SLOTH"
        Speed.innerText = "0.24 kmp/h (0.15 mp/h)"
        Description.innerText = "Another creature associated with slow, BUT they are more than 4x faster than snails! Ahh yes, accomplishments."
        document.getElementById("Image").src = "ZOOM Imgs/SLOTH.jpg"
    }
    if (wat === 2) {
        Name.innerText = "TURTLE"
        Speed.innerText = "4.8 kmp/h (3 mp/h)"
        Description.innerText = "Turtles are, you guessed it, another creature associated with slow. However, in water they are much quicker than on land! Also, this is their top speed (when running). Wait, is that.. MorE THaN 100 TiMEs FAstEr ThAN SNaliS!"
        document.getElementById("Image").src = "ZOOM Imgs/TURTLE.jpg"
    }

    if (wat === 3) {
        Name.innerText = "HUMAN WALKING SPEED"
        Speed.innerText = "4.8 kmp/h (3 mp/h)"
        Description.innerText = "WAIT A SECOND, WE'RE AS SLOW AS TURTLES??!??!"
        document.getElementById("Image").src = "ZOOM Imgs/HUMAN.jpg"
    }
  } , 10 )