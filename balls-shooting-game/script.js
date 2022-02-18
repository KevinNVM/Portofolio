// button for shop

var btnshop1 = document.querySelector("#btn1")
var btnshop2 = document.querySelector("#btn2")
var btnshop3 = document.querySelector("#btn3")
var btnshop4 = document.querySelector("#btn4")
var btnshop5 = document.querySelector("#btn5")
var btnshop6 = document.querySelector("#btn6")

var shopname1 = document.querySelector("#shopname1")
var shopname2 = document.querySelector("#shopname2")
var shopname3 = document.querySelector("#shopname3")
var shopname4 = document.querySelector("#shopname4")
var shopname5 = document.querySelector("#shopname5")
var shopname6 = document.querySelector("#shopname6")


// 

console.log(gsap)
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var smallEnemies = 7
var projSpeed = 2
let trail = 0.5
var spawnInterval = 1500
var playerColor = "darkred"
var projColor = "lightblue"
var enemySpeed = 1
var particleSize = 8

const scoreEl = document.querySelector("#scoreEl")
const hScoreEl = document.getElementById('highscoreEl')
var startBtn = document.getElementById('btnStart')
var modalEl = document.getElementById('modalEl')
var bigScoreEl = document.getElementById('bigScoreEl')


var score = 0;
var highscore

var moneyEl = document.querySelector('#money')
var money

canvas.width = innerWidth
canvas.height = innerHeight


class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.rect(this.x - 7, this.y - 7, 15, 15)
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {

        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.rect(this.x -5, this.y - 5, 10, 10)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y

    }
}

class Enemy {
    constructor(x, y, radius, color, velocity) {

        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y

    }
}

const friction = -0.005
class Particle {
    constructor(x, y, radius, color, velocity) {

        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }

    draw() {
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
        c.restore()
    }

    update() {
        this.draw()
        this.velocity.x += friction
        this.velocity.y += friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}

class Particle2 {
    constructor(x, y, radius, color, velocity) {

        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }

    draw() {
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.rect(this.x, this.y, particleSize + 2, particleSize + 2)
        c.fillStyle = this.color
        c.fill()
        c.restore()
    }

    update() {
        this.draw()
        this.velocity.x += friction
        this.velocity.y += friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

let player = new Player(x, y, 12, playerColor) 
let projectiles = []
let enemies = []
let particles = []
let particles2 = []

function init() {
 player = new Player(x, y, 12, playerColor) 
 projectiles = []
 enemies = []
 particles2 = []
 particles = []
 score = 0
 scoreEl.innerHTML = score
 bigScoreEl.innerHTML = score
}

function spawnEnemies(){
     setInterval(() => {
        const radius = Math.random() * (30-4) + smallEnemies
        let x
        let y


        if (Math.random() < 0.5 ) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
        y = Math.random() *  canvas.height
        // y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
    } else {
        x = Math.random() * canvas.width
        // y = Math.random() *  canvas.height
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
    }
        const color = `hsl(${Math.random() *  360}, 50%, 50%)`

    const angle = Math.atan2(canvas.height /2 - y,canvas.width /2 - x )

    const velocity = {
        x: Math.cos(angle) * enemySpeed ,
        y: Math.sin(angle) * enemySpeed
    }

      enemies.push(new Enemy(x, y, radius, color, velocity))
        console.log(enemies)

     }, spawnInterval)
}

let animationId 

function animate() {
    animationId = requestAnimationFrame(animate)
    c.fillStyle = `rgba(
    0
    , 0
    , 0
    , ${trail})`
    c.fillRect(0,0, canvas.width, canvas.height)
    player.draw()
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0)  {
            particles.splice(index, 1)
        }else {
        particle.update()
    }
    })
    particles2.forEach((particle2, index) => {
        if (particle2.alpha <= 0)  {
            particles2.splice(index, 1)
        }else {
        particle2.update()
    }
    })



    projectiles.forEach((projectile, index) => {
        projectile.update()

        // remove from screen
        if (projectile.x + projectile.radius < 0 ||
             projectile.x - projectile.radius > canvas.width ||
              projectile.y + projectile.radius < 0 ||
               projectile.y - projectile.radius > canvas.height) {
                   console.log(projectiles)
            setTimeout(() => {
             projectiles.splice(index, 1)  
             }, 0) 
        }
    })

    enemies.forEach((enemy, index) => {
      enemy.update()

        // game end
      const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
      if (dist - enemy.radius - player.radius < 1) {
        cancelAnimationFrame(animationId)
        modalEl.style.display = 'flex'
        bigScoreEl.innerText = score
        hScoreEl.innerHTML = score
       
    }
      projectiles.forEach((projectile, projectilesindex) => {
        const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

        // objects touch
        if (dist - enemy.radius - projectile.radius < 1) {
            var highscore = localStorage.getItem("highscore");
            

            //create explosions
            for (let i = 0; i < enemy.radius * 2; i++) {
                particles.push(new Particle(projectile.x, projectile.y, Math.random() * particleSize , enemy.color, {x:(Math.random() - 0.5) * Math.random() * 5 , y: (Math.random() - 0.5) * Math.random() * 5 }))
            }

            for (let i = 0; i < enemy.radius * 2; i++) {
                particles2.push(new Particle2(projectile.x, projectile.y, Math.random() * 2 , enemy.color, {x:(Math.random() - 0.5) * Math.random() * 5 , y: (Math.random() - 0.5) * Math.random() * 5 }))
            }
            
            if (enemy.radius - 10 > 10) {
                //scoring
                score += 5
                if(highscore !== null){
                    if (score > highscore) {
                        localStorage.setItem("highscore", score);  
                        hScoreEl.innerHTML = localStorage.highscore    
                    }
                }
                else{
                    localStorage.setItem("highscore", score);
                    hScoreEl.innerHTML = localStorage.highscore 
                }

            
            scoreEl.innerText = score
                gsap.to(enemy, { 
                    radius: enemy.radius - 10
                })
                setTimeout(() => {
                 projectiles.splice(projectilesindex, 1)  
                 }, 0)
            } else {
                //scoring
                score += 10
                if(highscore !== null){
                    if (score > highscore) {
                        localStorage.setItem("highscore", score);      
                    }
                }
                else{
                    localStorage.setItem("highscore", score);
                }

            
            scoreEl.innerText = score
            setTimeout(() => {
               enemies.splice(index, 1)
            projectiles.splice(projectilesindex, 1)  
            }, 0) }
           
        }
      })
    })
}

function start() {
    alert('start')
}

addEventListener('click', (event) => {
    
    setTimeout( () => {
      
    
        console.log(projectiles)
            const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width /2 )
            console.log(angle)
        
            const velocity = {
                x: Math.cos(angle) * projSpeed,
                y: Math.sin(angle) * projSpeed
            }
             projectiles.push(new Projectile(
                 canvas.width / 2, canvas.height / 2, 5, projColor, velocity
             ))
            },100)

})




startBtn.addEventListener('click', () => {
    
    init()
    animate()
    spawnEnemies()
    modalEl.style.display = 'none'
    calculate()
    hScoreEl.innerHTML = localStorage.highscore
    
} )




function loadLastHScore() {
    hScoreEl.innerHTML = localStorage.highscore
    moneyEl.innerHTML = localStorage.money
    localStorage.money = 10000
}

function resetHScore() {
    localStorage.setItem('highscore', 0)
    window.location.reload()
}

// difficulty 


function game_settings_difficulty_set_dirtez() {
    smallEnemies = 10
    projSpeed = 3
    trail = 0.5
    spawnInterval = 5000
    playerColor = "green"
    projColor = "lightgreen"
    enemySpeed = 0.2

}
function game_settings_difficulty_set_normal() {
    smallEnemies = 7
    projSpeed = 3
    trail = 0.1
    spawnInterval = 2000
    playerColor = "white"
    projColor = "white"
    enemySpeed = 1

}
function game_settings_difficulty_set_hard() {
    smallEnemies = 5
    projSpeed = 3
    trail = 0.5
    spawnInterval = 1500
    playerColor = "darkred"
    projColor = "red"
    enemySpeed = 1

}
function game_settings_difficulty_set_asian() {
    smallEnemies = 3
    projSpeed = 4
    trail = 0.5
    spawnInterval = 450
    playerColor = "gray"
    projColor = "red"
    enemySpeed = 3

}
function game_settings_difficulty_set_godlystoopidbruhwhydoyoudodistomemanstop() {
    smallEnemies = 1
    projSpeed = 10
    trail = 0.001
    spawnInterval = 12000
    playerColor = "pink"
    projColor = "pink"
    enemySpeed = 5

}


function openNav() {
    calculate()
    document.getElementById("mySidepanel").style.width = "98vh";
    
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  function calculate() {
    if (score >= 5) {
        var lastmoney = parseInt(localStorage.money)
        money = Math.floor(score / 5)
        score = 0
        localStorage.setItem('money', parseInt(lastmoney + money))
        moneyEl.innerHTML = localStorage.money
        console.log('log') }
  }

// shop


var counter  = 0
var counter1  = 0
var counter2  = 0
var counter3  = 0
var counter4  = 0
var counter5  = 0
var price20 = 20
var price50 = 50
var price100 = 100
var price200 = 200
var price10000 = 10000


function shopid1() {
    
    var money1
    
    
    parseInt(money1 = localStorage.getItem('money'))
    if (money1 >= price50) {
        counter ++
        // limit buttton click
        if (counter > 5) {
            btnshop1.className += " disabled"
            btnshop1.innerHTML += price
        } else {
            projSpeed ++
            var moneyAfter = parseInt(money1 - price50)
            price50 += 45
            btnshop1.innerHTML = "$" + price50 + " | Buy!"
            localStorage.setItem('money', moneyAfter)
            moneyEl.innerHTML = localStorage.money 
            alert ('pembelian sukses')
            
        }


        
    } else {
        alert('uang tidak cukup')
    }
}

function shopid2() {
    
    var money1
    
    
    parseInt(money1 = localStorage.getItem('money'))
    if (money1 >= price20) {
        counter1 ++
        // limit buttton click
        if (counter1 >= 4) {
            btnshop2.className += " disabled"
            btnshop2.innerHTML += price20
        } else {
            trail = trail - 0.1
            var moneyAfter = parseInt(money1 - price20)
            price20 += 25
            btnshop2.innerHTML = "$" + price20 + " | Buy!"
            localStorage.setItem('money', moneyAfter)
            moneyEl.innerHTML = localStorage.money 
            alert ('pembelian sukses')
            
        } 


        
    } else {
        alert('uang tidak cukup')
    }
}

function shopid3() {
    
    var money1
    
    parseInt(money1 = localStorage.getItem('money'))
    if (money1 >= price100) {
        counter2 ++
        // limit buttton click
        if (counter2 > 3) {
            btnshop3.className += " disabled"
            btnshop3.innerHTML += price100
        } else {
            particleSize = particleSize + 1.5
            var moneyAfter = parseInt(money1 - price100)
            price100 += 200
            btnshop3.innerHTML = "$" + price100 + " | Buy!"
            localStorage.setItem('money', moneyAfter)
            moneyEl.innerHTML = localStorage.money 
            alert ('pembelian sukses')
            
        }


        
    } else {
        alert('uang tidak cukup')
    }
}

function shopid4() {
    
    var money1
    
    parseInt(money1 = localStorage.getItem('money'))
    if (money1 >= price10000) {
        counter3++
        btnshop6.className += " disabled"
        // limit buttton click
        if (counter3 > 1) {
            
            btnshop6.innerHTML += price10000
        } else {
            
            
            tripleShot()
            var moneyAfter = parseInt(money1 - price10000)
            price10000 += 200000
            localStorage.setItem('money', moneyAfter)
            moneyEl.innerHTML = localStorage.money 
            alert ('pembelian sukses')
            
        }


        
    } else {
        alert('uang tidak cukup')
    }
}

function tripleShot() {
    addEventListener('click', (event) => {
    


   
    setTimeout(() => {
        for (let i = 0; i < 1; i++) {
            console.log(projectiles)
    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width /2 )
    console.log(angle)

    const velocity = {
        x: Math.cos(angle) * projSpeed,
        y: Math.sin(angle) * projSpeed
    
    }



     projectiles.push(new Projectile(
         canvas.width / 2, canvas.height / 2, 5, projColor, velocity
     ))
            
        }
        
        setTimeout(() => {
            for (let i = 0; i < 1; i++) {
                console.log(projectiles)
        const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width /2 )
        console.log(angle)
    
        const velocity = {
            x: Math.cos(angle) * projSpeed,
            y: Math.sin(angle) * projSpeed
        }
         projectiles.push(new Projectile(
             canvas.width / 2, canvas.height / 2, 5, projColor, velocity
         ))
                
            }
        },120)

    }, 100)


    console.log(projectiles)
    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width /2 )
    console.log(angle)

    const velocity = {
        x: Math.cos(angle) * projSpeed,
        y: Math.sin(angle) * projSpeed
    }
     projectiles.push(new Projectile(
         canvas.width / 2, canvas.height / 2, 5, projColor, velocity
     ))  })
}