const masseges ={
    "call-btn-1": "Calling National Emergency Service 999...",
    "call-btn-2": "Calling Police Emergency Survice 999...",
    "call-btn-3": "Calling FireSurvice 999...",
    "call-btn-4": "Calling Ambulance Emergency Survice 1994-999999...",
    "call-btn-5": "Calling Women and Child Helpline Emergency Survice 109...",
    "call-btn-6": "emargencey",
    "call-btn-7": "emargency",
    "call-btn-8": "Brac NGO Loan Survices 16445...",
   "call-btn-9": "Railway Emergency Teket Survice 163..."
}

let coin = 100
const percall =20 
 const coinDesplay =document.getElementById("coin");

Object.keys(masseges).forEach(id =>{
    document.getElementById(id).addEventListener("click", function(){
       
        if(coin >= percall){
            coin-=percall;
            coinDesplay.innerText =coin;
            alert(masseges[id]);
        }else{
            alert("No Enough coins! For Calling");
        }
    });
});


let count =0
const loveButtons = document.querySelectorAll(".btn-love");
loveButtons.forEach(btn =>{
    btn.addEventListener("click", function(){
        count++;
        document.getElementById("love-count").innerText =count;
    });
});
