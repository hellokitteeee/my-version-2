function mycountdown(){
    //countdown code
    let totalsecs = 60
    let mymins = 1
    let mysecs = 0
    let mytime = document.getElementById("thetime")

    let timer = setInterval(decreasetime, 1000)
    
    function decreasetime(){
        if(totalsecs==60){
            mymins = 1
        }else{
            mymins = 0
        }
        

        //formatting
        if (mymins<10){
            mymins = "0" + mymins
        }
        if (mysecs<10){
            mysecs = "0" + mysecs
        }

        //putting the info onto the actaul html thingy
        let clock = mymins + ":" + mysecs
        mytime.innerText = clock
        totalsecs = totalsecs - 1
        mysecs = totalsecs
        
        //stops timer
        if (totalsecs==0){
            clearInterval(timer)
            document.getElementById("title").innerHTML = "<h1>...</h1><br><h1>TIMES UP!!</h1>"
            mytime.innerText = "00:00"
        }
        
        //changes timer to red when it gets lows
        if (totalsecs <=10){
            mytime.color = rgb(230, 83, 127)
        }
    }
}

let mynumcount = document.getElementById("countdownoverlay")
setTimeout(function(){
    mynumcount.innerText = "2"
},1000)
setTimeout(function(){
    mynumcount.innerText = "1"
},2000)
setTimeout(function(){
    mynumcount.innerText = "GO!"
},3000)


setTimeout(function(){
    document.getElementById("countdownoverlay").style.display = "none";
    mycountdown()
}, 3500)

setTimeout(function(){
    window.location.href = "results.html"
},63500)

