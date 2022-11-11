var video;

// loading

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.loop = false;
	video.autoplay = false;
});

// click play

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	
 });

// click pause

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause");
	video.pause();
});

// click slower

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;

});

// click faster

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Go Faster");
	video.playbackRate /= 0.9;

});

// click skip

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip");
	if (video.currentTime == video.duration){
		video.currentTime = 0;
}
	video.currentTime += 10;
});

// click mute

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmuted");
	}
});

// adjusting volume

document.querySelector("#slider").oninput = function() {
	console.log("Volume adjusted");
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	video.volume = document.querySelector("#slider").value / 100;

};

// ye olde style

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Olde style");
	video.classList.add("oldSchool");
});

// original style

document.querySelector("#orig").addEventListener("click", function () {
	console.log("Back to original style")
	video.classList.remove("oldSchool");
});
