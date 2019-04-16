let minutes=document.querySelector("#minutes").value;
let seconds=document.querySelector("#seconds").value;
let startButton=document.querySelector("#startbutton");
let timerpara=document.querySelector("#textId");
let audioId=document.querySelector("#audioId");
let stopbutton=document.querySelector("#stop")
stopbutton.style.display="none";

let showtimer=`Minutes ${minutes} Seconds ${seconds}`

startButton.addEventListener('click',function(){
	// console.log(minutes);
	// console.log(seconds);
	
	

	// console.log(showtimer);
	timerpara.textContent=showtimer;

	setInterval(updateTimer,1000);
})
 
function updateTimer(){
if(minutes||seconds){
	if (seconds>0) {
		seconds--;
		if(seconds==0 && minutes!=0)
			{
				minutes--;
				seconds=60;
				
			}
		else if( minutes==0 && seconds==0){
					seconds=0;
					minutes=0;
					stopbutton.style.display="block";
					playAlarm();

			}
	}
	let showtimer=`Minutes ${minutes} Seconds ${seconds}`
	timerpara.textContent=showtimer;
	document.title=showtimer;
	}

}

function playAlarm(){
	if(audioId.paused){
	audioId.play()
}
};
function stopAlarm(){
	if(audioId.play){
		audioId.pause()
		setTimeout(refreshPage(),5000)
	}
}
function refreshPage(){
	window.location.reload()
}
stopbutton.addEventListener('click',stopAlarm);