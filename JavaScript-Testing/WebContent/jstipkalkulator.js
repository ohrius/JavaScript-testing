/**
 * Script til tipkalkulator.html
 */

const tipPercent = [ {
	text : "30 prosent. Fantastisk",
	value : 0.3
}, {
	text : "20 prosent. Bra",
	value : 0.2
}, {
	text : "15 prosent. God",
	value : 0.15
}, {
	text : "10 prosent. OK",
	value : 0.1
}, {
	text : "5 prosent. Dårlig",
	value : 0.05
}, {
	text : "0 prosent. Fryktelig",
	value : 0
} ];

function addToDropdown() {
	var select = document.getElementById('dropdowntippercent');
	for (var i = 0; i < tipPercent.length; i++) {
		var option = document.createElement('option');
		option.textContent = tipPercent[i].text;
		option.value = tipPercent[i].value;
		select.appendChild(option);
	}
}

function calculateTip() {
	var price = document.getElementById('price').value;
	var tip = document.getElementById('dropdowntippercent').value;
	var amount = document.getElementById('amount').value;

	// input validation
	if (price == 0) {
		alert("Prisen på regningen må være over 0!");
		return;
	}else if(tip==-1){
		alert("Velg en tip prosent!");
		return;
	}else if(amount == 0){
		alert("Antall personer må være over 0!");
		return;
	}
	//Calculate tip
	if(tip>0){
		var totalTip = (price * tip) / amount;
		var output = `${totalTip} kr i tips på hver person. Full pris ${totalTip*amount + (price*1)} kr.`;
	}else{
		var output = `0 kr i tips på hver person. Full pris ${price} kr.`;
	}
	document.getElementById('tipSum').innerHTML = output;
}

// onclick function
function buttonClick() {
	calculateTip();
};
