var chest = document.getElementById("chest");
var lecturn = document.getElementById("lecturn");
var sword = document.getElementById("sword");
var MainImg = document.getElementById("MainImg");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var locatie = "kluis";
var flintcount = 0;
var PortalCheck = 0;
var SwordCheck = 0;
var HoglinCheck = 0;

if(locatie == "kluis"){
	button1.addEventListener("click", NaarNetherRoom);
}

if(locatie == "kluis"){
	button2.addEventListener("click", VulCodeIn);
}

if(locatie == "kluis"){
	button3.addEventListener("click", NaarBieb);
}

function NaarBieb(){
	MainImg.src = "images/bieb.png";
	locatie = "bieb";
	button1.innerText = "Ga naar de kluis";
	DisplayNone(2);
	DisplayNone(3);
	lecturn.style.display = "block";
	chest.style.display = "block";

		button1.addEventListener("click", NaarKluis);
		lecturn.addEventListener("click", OpenLecturn);
		chest.addEventListener("click", OpenChest);
		button2.removeEventListener("click", VulCodeIn);
};

function NaarKluis(){
	MainImg.src = "images/kluis.png";
	locatie = "kluis";
	button1.innerText = "Ga naar de Nether Room";
	button2.innerText = "Voer code in";
	button3.innerText = "Ga naar de bieb";
	lecturn.style.display = "none";
	chest.style.display = "none";
	DisplayBlock(1);
	DisplayBlock(2);
	DisplayBlock(3);

		button1.removeEventListener("click", NaarKluis);
		button3.removeEventListener("click", NaarKluis);
		button2.addEventListener("click", VulCodeIn);
		button2.removeEventListener("click", PortalAan);
		button3.addEventListener("click", NaarBieb);
		button1.addEventListener("click", NaarNetherRoom);
		button2.removeEventListener("click", NaarNether);
}

function NaarNetherRoom(){
	if(PortalCheck == 0){
		MainImg.src = "images/NetherRoom.png";
		button2.innerText = "Zet portal aan";
		button2.addEventListener("click", PortalAan);
	}

	else{
		MainImg.src = "images/NetherRoomAan.png";
		button2.innerText = "Ga in de portal";
		button2.addEventListener("click", NaarNether);

	}
	button3.innerText = "Ga naar kluis";
	locatie = "NetherRoom";

		button3.addEventListener("click", NaarKluis);
		button2.removeEventListener("click", VulCodeIn);
		button2.removeEventListener("click", NaarNetherRoom);
		button2.removeEventListener("click", NaarNetherRoom2);
		DisplayNone(1);
}

function OpenLecturn(){
	MainImg.src = "images/lecturnopen.png";
	button1.innerText = "sluit";
	lecturn.style.display = "none";
	chest.style.display = "none";

		button1.addEventListener("click", SluitBieb);
}

function SluitBieb(){
	MainImg.src = "images/bieb.png";
	button1.innerText = "Ga naar de kluis";
	lecturn.style.display = "block";
	chest.style.display = "block";
	DisplayNone(2);
	DisplayNone(3);

		button1.removeEventListener("click", SluitBieb);
		button2.removeEventListener("click", PakFlint);	
		button1.addEventListener("click", NaarKluis);
}

function OpenChest(){
	if(flintcount == 0){
		MainImg.src = "images/biebchest.png";
		lecturn.style.display = "none";
		chest.style.display = "none";
		button1.innerText = "sluit";
		button2.innerText = "Pak flint and steel";
		DisplayBlock(2);

			button1.addEventListener("click", SluitBieb);
			button2.addEventListener("click", PakFlint);
	}

	else{
		MainImg.src = "images/biebchest2.png";
		lecturn.style.display = "none";
		chest.style.display = "none";
		button1.innerText = "sluit";

			button1.addEventListener("click", SluitBieb);
	}
}

function VulCodeIn(){
	code = prompt ("Wat is de juiste combinatie");

	if(code == "36"){
		MainImg.src = "images/KluisOpen.png";
		DisplayNone(1);
		DisplayNone(3);
		button2.innerText = "Ga naar diamond";
		button2.removeEventListener("click", VulCodeIn);
		button2.addEventListener("click", NaarDiamond);
	}

	else{
		alert ("combinatie is incorrect");
	}
}
function NaarDiamond(){
	MainImg.src = "images/Diamond.png";
	button2.innerText = "Pak diamond";
	button2.removeEventListener("click", NaarDiamond);
	button2.addEventListener("click", PakDiamond);
}

function PakDiamond(){
	alert ("gefeliciteerd je hebt de kluis geopend en de diamond te pakken");
}
function PortalAan(){
	if(flintcount == 0){
		MainImg.src = "images/NetherRoom.png";
	}

	else if(flintcount == 1){
		PortalCheck++;
		MainImg.src = "images/NetherRoomAan.png";
		button2.innerText = "Ga in de portal";
		button2.removeEventListener("click", PortalAan);

		button2.addEventListener("click", NaarNether);
	}

	else if(PortalCheck >= 1 && flintcount >= 1){
		button2.addEventListener("click", NaarNether);
	}

	else{
		button2.addEventListener("click", NaarNether);
	}
}

function NaarNether(){
	if(SwordCheck == 0){
		MainImg.src = "images/PortalKamer.png";
		sword.style.display = "block";
	}
	else{
		MainImg.src = "images/PortalRoomZwaard.png";
	}
		button3.innerText = "Ga naar buiten";
		button2.innerText = "Ga terug naar de Nether Room";
		DisplayNone(1);
		DisplayBlock(2);
		DisplayBlock(3);
		button3.removeEventListener("click", NaarKluis);
		button3.addEventListener("click", NaarNetherBuiten);
		sword.addEventListener("click", PakZwaard);
		button3.removeEventListener("click", NaarBieb);
		button1.removeEventListener("click", NaarNetherRoom);
		button3.removeEventListener("click", KillHoglin);
		button2.addEventListener("click", NaarNetherRoom2);
		button2.removeEventListener("click", PakBoek);
}

function NaarNetherRoom2(){
	MainImg.src = "images/NetherRoomAan.png";
	sword.style.display = "none";
	DisplayBlock(1);

	button1.innerText = "Ga naar Bedroom";
	button2.innerText = "Ga in de portal";
	button3.innerText = "Ga naar de kluis";

	button3.removeEventListener("click", NaarNetherBuiten);
	button3.addEventListener("click", NaarKluis);
	button2.removeEventListener("click", NaarNether);
	button2.removeEventListener("click", NaarNetherRoom2);
	button1.removeEventListener("click", NaarNether);
	button2.addEventListener("click", NaarNether);
	DisplayNone(1);
}

function PakZwaard(){
	SwordCheck++;
	MainImg.src = "images/PortalRoomZwaard.png";
	sword.style.display = "none";
}

function NaarNetherBuiten(){
	if(HoglinCheck == 0){
		MainImg.src = "images/HoglinFight.png";
		chest.style.display = "none";
		lecturn.style.display = "none";
		sword.style.display = "none";
		DisplayBlock(1);
		DisplayNone(2);

		if(SwordCheck == 0){
			DisplayNone(3);
		}

		button1.innerText = "Vlugt terug naar de Portal Room";
		button3.innerText = "Kill hem met je zwaard";

		button1.removeEventListener("click", NaarNetherRoom2);
		button1.removeEventListener("click", NaarNetherRoom);
		button3.addEventListener("click", KillHoglin);
		button1.addEventListener("click", NaarNether);
	}

	else{
		KillHoglin();
		DisplayBlock(1);
	}
}

function PakFlint(){
	flintcount++;
	MainImg.src = "images/biebchest2.png";
	DisplayNone(2);
}

function KillHoglin(){
	MainImg.src = "images/HoglinKilled.png";
	HoglinCheck++;
	DisplayBlock(2);
	DisplayNone(3);
	button1.innerText = "Ga terug naar de Portal Room";

	button2.innerText = "Pak boek";
	button2.removeEventListener("click", NaarNether);
	button2.addEventListener("click", PakBoek);
}

function PakBoek(){
	MainImg.src = "images/NetherBoek.png";
	DisplayNone(2);
	button1.innerText = "Ga naar Portal Room";
	button2.removeEventListener("click", NaarNetherRoom2);
	button2.removeEventListener("click", NaarNetherRoom);
	button1.removeEventListener("click", NaarNetherRoom2);
	button1.removeEventListener("click", NaarNetherRoom);
	button1.addEventListener("click", NaarNether);
	DisplayBlock(1);
}

function DisplayNone(getal){
	if(getal == "1"){
		button1.style.display = "none";
	}

	else if(getal == "2"){
		button2.style.display = "none";
	}

	else{
		button3.style.display = "none";
	}
}

function DisplayBlock(getal){
	if(getal == "1"){
		button1.style.display = "inline-block";
	}

	else if(getal == "2"){
		button2.style.display = "inline-block";
	}

	else{
		button3.style.display = "inline-block";
	}
}