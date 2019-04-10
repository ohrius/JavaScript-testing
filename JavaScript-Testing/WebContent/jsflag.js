/**
 * 
 */

function Flag(name, capital, language, population, currency, anthem){
	this.name = name;
	this.capital = capital;
	this.language = language;
	this.population = population;
	this.currency = currency;
	this.anthem = anthem;
	this.showInfo = function(){
		return `
Land:		${this.name}
Hovedstad:	${this.capital}
Språk:	${this.language}
Befolkning:	${this.population}
Valuta:		${this.currency}
Nasjonalsang:	${this.anthem}`.trim();
	};
}
var countryArr = [];
	countryArr.push(new Flag("Norway", "Oslo", "Norwegian", 5258000, "Norwegian krone (NOK)", "Ja vi elsker"));
	countryArr.push(new Flag("Sweden", "Stockholm", "Swedish", 9995000, "Swedish krona (SEK)", "Du gamla, Du fria"));
	countryArr.push(new Flag("Denmark", "Copenhagen", "Danish", 5749000, "Danish krone (DKK)", "Der er et yndigt land"));
	countryArr.push(new Flag("Finland", "Helsinki", "Finish", 5503000, "Euro (EUR)", "Maamme"));
	countryArr.push(new Flag("Iceland", "Reykjavik", "Icelandic", 338349, "Icelandic króna (ISK)", "Lofsöngur"));

function onCountryinformationLoad(){
	var countryFlag = document.getElementsByClassName("flag");
	var countryFlagInfo = document.getElementsByClassName("flaginfo");
	
	countryFlag[0].addEventListener("mouseover", function(){
		addInfo(countryFlagInfo, 0);
	});
	countryFlag[1].addEventListener("mouseover", function(){
		addInfo(countryFlagInfo, 1);
	});	
	countryFlag[2].addEventListener("mouseover", function(){
		addInfo(countryFlagInfo, 2);
	});	
	countryFlag[3].addEventListener("mouseover", function(){
		addInfo(countryFlagInfo, 3);
	});	
	countryFlag[4].addEventListener("mouseover", function(){
		addInfo(countryFlagInfo, 4);
	});	
	
	countryFlag[0].addEventListener("mouseout", function(){
		removeInfo(countryFlagInfo);
	});
	countryFlag[1].addEventListener("mouseout", function(){
		removeInfo(countryFlagInfo);
	});
	countryFlag[2].addEventListener("mouseout", function(){
		removeInfo(countryFlagInfo);
	});
	countryFlag[3].addEventListener("mouseout", function(){
		removeInfo(countryFlagInfo);
	});
	countryFlag[4].addEventListener("mouseout", function(){
		removeInfo(countryFlagInfo);
	});
};



function addInfo(flagInfo, x){
	flagInfo[0].innerHTML = countryArr[x].name;
	flagInfo[1].innerHTML = countryArr[x].capital;
	flagInfo[2].innerHTML = countryArr[x].language;
	flagInfo[3].innerHTML = countryArr[x].population;
	flagInfo[4].innerHTML = countryArr[x].currency;
	flagInfo[5].innerHTML = countryArr[x].anthem;
};

function removeInfo(flagInfo){
	flagInfo[0].innerHTML = "";
	flagInfo[1].innerHTML = "";
	flagInfo[2].innerHTML = "";
	flagInfo[3].innerHTML = "";
	flagInfo[4].innerHTML = "";
	flagInfo[5].innerHTML = "";
};

