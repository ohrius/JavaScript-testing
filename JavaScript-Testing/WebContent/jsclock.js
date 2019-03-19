/**
 * 
 */
function currentTime() {
	var today = new Date();
	var month = today.toLocaleString('en-us', { month: 'long' });
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	var output = `${month}.${today.getDate()} ${h}:${m}:${s}`;
	document.getElementById('txt').innerHTML = output;
	var t = setTimeout(currentTime, 500);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i // Adds a zero in front if seconds or minutes are lower than
					// 10.
	}
	return i;
}
