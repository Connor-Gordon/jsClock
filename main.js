function timer(){
	let time = new Date();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	let ampm = ""
	m = (m<10 ? "0":"")+m;
	s = (s<10 ? "0":"")+s;

	if(h>12){
		ampm = "pm"
		h = h-12
	} else {
		ampm = "am"
	}

	if(h == 0){
		h = 12
	}
		h = (h<10 ? "0":"")+h
	document.getElementById('clock').innerHTML = `${h}:${m}:${s}${ampm}`
	setInterval(timer, 1000)
}

timer()