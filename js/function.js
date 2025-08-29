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

let copyCount =0;

const parentDiv = document.querySelector(".parent_div");
const countDisplay = document.getElementById("copy-count");
parentDiv.querySelectorAll(":scope > div").forEach(card => {
    const copyBtn = card.querySelector("button:nth-of-type(2)");
    const numberEL = card.querySelector("h2");

    copyBtn.addEventListener("click", async () => {
        const number = numberEL.innerText.trim();
        try{
           if(navigator.clipboard){
             await navigator.clipboard.writeText(number);
           }else{
            const textArea = document.createElement("textarea");
            textArea.value = number;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
           }
           
            copyBtn.innerText = "Copied";
            setTimeout(() =>{
                copyBtn.innerHTML ='<i class="fa-solid fa-copy"></i> copy';

            }, 1000);
              copyCount++
              if(countDisplay){
                countDisplay.innerText = copyCount;
              }
        } catch{ 
            alert("Copy korte parlam na");
        }
    });
});


 const historys ={
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

const historyList = document.getElementById("call-history-list");

const addHistory = (serviceName) => {
    const item = document.createElement("div");
    item.className ="p-2 border-b text-bold text-gray-600";
    const now = new Date();
    const time = now.toLocaleString();
    item.textContent = `${serviceName} - ${time}`;
    historyList.prepend(item);
};

Object.keys(historys).forEach(id =>{
    const btn = document.getElementById(id);
    if(btn){
        btn.addEventListener("click", () => {
            addHistory(historys[id]);
        });
    }
});

document.querySelector(".right_div button").addEventListener("click", () => {
    historyList.innerHTML="";
});