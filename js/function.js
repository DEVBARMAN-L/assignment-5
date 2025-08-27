const masseges ={
    "call-btn-1": "Emargency calling",
    "call-btn-2": "Police calling",
    "call-btn-3": "fireservice",
    "call-btn-4": "ambulence",
    "call-btn-5": "emargency",
    "call-btn-6": "emargencey",
    "call-btn-7": "emargency",
    "call-btn-8": "brac",
    "call-btn-9": "railway"
}

let coin = 100
const percall =20 
 const coinDesplay =document.getElementById("coin");

Object.keys(masseges).forEach(id =>{
    document.getElementById(id).addEventListener("click", function(){
       
        if(coin >= percall){
            coin-=percall;
            coinDesplay.textContent =coin;
            alert(masseges[id]);
        }else{
            alert("No Enough coins!");
        }
    });
});


