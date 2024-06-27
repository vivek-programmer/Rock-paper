let userscore = 0 ;
let comscore = 0 ;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const com = document.querySelector("#com-score")
const gencomchoise = () =>{
    const arr = ["rock" ,"paper","scissior"];
    const index = Math.floor(Math.random()*3);
    return arr[index];
}
const draw = () => {
    
    msg.innerText="draw play again!";
    msg.style.backgroundColor = "black";
};
const showwinner = (userwin,userchoise,comchoise)=> {
    if (userwin){
        userscore++;
        user.innerText=userscore;
        msg.innerText=`you win! your ${userchoise} beats ${comchoise}`;
        msg.style.backgroundColor = "green";
    } else {
        comscore++;
        com.innerText=comscore;
        msg.innerText= `you loose! ${comchoise} beats your ${userchoise}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoise) => {
    const comchoise = gencomchoise();
    if (userchoise===comchoise){
        draw();
    } else{
        let userwin = true;
        if(userchoise==="rock") {
            userwin = comchoise === "paper" ?false:true;
        } else if (userchoise==="paper"){
            userwin= comchoise==="scissior" ?false:true;
        } else {
            userwin= comchoise==="rock" ? false:true;
        }
        showwinner(userwin ,userchoise,comchoise);
    }
};
choises.forEach((choise) => {
    const userchoise = choise.getAttribute("id");
    choise.addEventListener("click" , () => {
       playgame( userchoise);
    })
})