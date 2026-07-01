// =======================
// CARTE
// =======================

const map = L.map('map').setView([36.17, 8.70], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// =======================
// COUCHES
// =======================

const geologie = L.layerGroup().addTo(map);
const minier = L.layerGroup().addTo(map);
const historique = L.layerGroup().addTo(map);
const naturel = L.layerGroup().addTo(map);
const ethno = L.layerGroup().addTo(map);
const gastronomie = L.layerGroup().addTo(map);

// =======================
// DONNEES
// =======================

const sites = [

{
    nom:"Synclinal perché de Dyr El Kef",
    type:"geologie",
    lat:36.198,
    lng:8.727,
    couleur:"red",
    url:"https://drive.google.com/file/d/13B__lgAuCyeWWLBnbSm5qsHI62rjniuN/view"
},

{
    nom:"Mine de Jerissa",
    type:"minier",
    lat:35.85,
    lng:8.63,
    couleur:"blue",
    url:"https://drive.google.com/file/d/1LO2kPfHMkvd88d4mDUQsYsHZ2oQrECMa/view"
},

{
    nom:"Circuit Médina du Kef",
    type:"historique",
    lat:36.18196,
    lng:8.71269,
    couleur:"orange",
    url:"https://www.siccaveneria.com/"
}

];

// =======================
// POPUP
// =======================

function popup(site){

return `
<b>${site.nom}</b>

<br><br>

<a class="popup-btn"
href="${site.url}"
target="_blank">

Voir la fiche

</a>
`;

}

// =======================
// AJOUT DES SITES
// =======================

sites.forEach(site=>{

const marker=L.circleMarker(

[site.lat,site.lng],

{

radius:10,

color:site.couleur,

fillColor:site.couleur,

fillOpacity:0.9,

weight:2

}

);

marker.bindPopup(popup(site));

switch(site.type){

case "geologie":
marker.addTo(geologie);
break;

case "minier":
marker.addTo(minier);
break;

case "historique":
marker.addTo(historique);
break;

case "naturel":
marker.addTo(naturel);
break;

case "ethno":
marker.addTo(ethno);
break;

case "gastronomie":
marker.addTo(gastronomie);
break;

}

});

// =======================
// MENU
// =======================

const sidebar=document.getElementById("sidebar");

document.getElementById("menuButton").onclick=()=>{

sidebar.classList.add("open");

}

document.getElementById("closeSidebar").onclick=()=>{

sidebar.classList.remove("open");

}

// =======================
// FILTRES
// =======================

function filtre(id,layer){

const c=document.getElementById(id);

c.addEventListener("change",function(){

if(this.checked){

map.addLayer(layer);

}

else{

map.removeLayer(layer);

}

});

}

filtre("geo",geologie);

filtre("mine",minier);

filtre("hist",historique);

filtre("nature",naturel);

filtre("ethno",ethno);

filtre("gastro",gastronomie);
