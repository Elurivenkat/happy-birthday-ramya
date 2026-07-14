// Loading Screen

window.onload = function(){

    setTimeout(function(){

        document.getElementById("loading").style.display="none";

        document.getElementById("main").style.display="block";

    },3000);

};



// Open Heart Button

document.getElementById("startBtn").addEventListener("click",function(){

    document.querySelector(".letter").scrollIntoView({
        behavior:"smooth"
    });

});




// Floating Hearts

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.animationDuration=(Math.random()*3+3)+"s";

    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },6000);

}


setInterval(createHeart,300);





// Image Slideshow

let images=document.querySelectorAll(".photo img");

let current=0;


function slideShow(){

    images.forEach(img=>{

        img.style.display="none";

    });


    images[current].style.display="block";


    current++;


    if(current>=images.length){

        current=0;

    }

}


slideShow();

setInterval(slideShow,3000);





// Fireworks Animation


const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


let particles=[];


function createFirework(){

    let x=Math.random()*canvas.width;

    let y=Math.random()*canvas.height/2;


    for(let i=0;i<40;i++){

        particles.push({

            x:x,

            y:y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            life:100

        });

    }

}



function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    particles.forEach((p,index)=>{

        ctx.fillStyle="white";

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fill();


        p.x+=p.dx;

        p.y+=p.dy;

        p.life--;


        if(p.life<=0){

            particles.splice(index,1);

        }

    });


    requestAnimationFrame(animateFireworks);

}


setInterval(createFirework,1500);

animateFireworks();




// Resize Fix

window.onresize=function(){

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

};