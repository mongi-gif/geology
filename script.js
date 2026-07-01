// =======================
// CARTE
// =======================
document.addEventListener("DOMContentLoaded", function () {
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
    nom: "synclinal perché éocène de Dyr El Kef",
    type: "geologie",
    lat: 36.198,
    lng: 8.727,
    couleur: "red",
 
    url: "https://drive.google.com/file/d/13B__lgAuCyeWWLBnbSm5qsHI62rjniuN/view?usp=sharing"
},

  
{
    nom: "Stratotype K-Pg du Kef",
    type: "geologie",
    lat: 36.153,
    lng: 8.648,
    couleur: "red",
 
    url: "https://drive.google.com/file/d/13srHXLY15B5ANww84mHWlnBysQmzWccJ/view?usp=sharing"
},
{
    nom: "Série triasque du Débadib",
    type: "geologie",
    lat: 36.175,
    lng: 8.583,
    couleur: "red",
 
    url: "https://drive.google.com/file/d/1U8Xa0oAe19KB6up6lUMAzQFsg_iE1OZn/view?usp=sharing"
},
{
    nom: "Grotte spléologique",
    type: "geologie",
    lat: 36.0299,
    lng: 8.321,
    couleur: "red",
  
    url: "https://drive.google.com/file/d/1XI48vuvIVFh9er21EKO03uZO_LbcqOqV/view?usp=sharing"
},
{
    nom: "Niveau à Ammonites de l'Aptien Supérieur",
    type: "geologie",
    lat: 35.990,
    lng: 8.350,
    couleur: "red",
  
    url: "https://drive.google.com/file/d/13qjY9WSQljVTyOCmbYuz7d_NIxCRpHn_/view?usp=sharing"
},
{
    nom: "récif aptien du jeble Slata",
    type: "geologie",
    lat: 35.873,
    lng: 8.470,
    couleur: "red",
  
    url: "https://drive.google.com/file/d/1AupexraKu_yGd5oGDqvwCfXi-C-MqfDc/view?usp=sharing"
},

{
    nom: "Mine de Jerissa",
    type: "minier",
    lat: 35.85,
    lng: 8.63,
    couleur: "blue",
  
    url: "https://drive.google.com/file/d/1LO2kPfHMkvd88d4mDUQsYsHZ2oQrECMa/view?usp=sharing"
},
{
    nom: "Phosphate de Sra Ouertane",
    type: "minier",
    lat: 35.821,
    lng: 8.767,
    couleur: "blue",
 
    url: "https://drive.google.com/file/d/1p8fox3qBTJnIh8c2px_pQ74Z7ltTDI7j/view?usp=sharing"
},

{
    nom: "Bou Jabeur",
    type: "minier",
    lat: 35.737,
    lng: 8.282,
    couleur: "blue",

    url: "https://drive.google.com/file/d/14mVyiJFh2MkW5Cc2nHHhr6nD6JRCOzZ2/view?usp=sharing"
},

{
    nom: "Circuit de la Medina du Kef",
    lat: 36.18196,
    lng: 8.71269,
    type: "historique",
    couleur: "orange",
    
        url: "https://www.siccaveneria.com/tourisme/patrimoine/16d5854d-d83a-11ea-af16-0242ac11000b"

  },
  
  {
    nom: "Sidi Zine",
    lat: 36.125,
    lng: 8.634,
    type: "historique",
    couleur: "orange",
 
    url: "https://tunisiaforall.org/?page_id=2493"

  },
  {
    nom: "Althiburos",
    lat: 35.879,
    lng: 8.786,
    type: "historique",
     couleur: "orange",

        url: "https://www.persee.fr/doc/dha_0755-7256_2021_num_47_1_5065"

  },
  
  {
    nom: "Hammam Mellegue",
    lat: 36.183,
    lng: 8.575,
    type: "historique",
    couleur: "orange",

        url: "https://fr.aroundus.com/p/9636927-hammam-mellegue"

  },
  
  {
    nom: "table de Jughurta",
    lat:35.746,
    lng: 8.378,
    couleur: "orange",
  
        url: "https://whc.unesco.org/fr/listesindicatives/6278/"

  },

  {
    nom: "Elles",
    lat:35.950,
    lng: 9.097,
    type: "historique",
    couleur: "orange",

           url: "https://fr.wikipedia.org/wiki/M%C3%A9galithes_d%27Ell%C3%A8s"

  },
  {
    nom: "Réserve de saddine",
    lat:35.950,
    lng: 9.097,
    type: "naturel",
    couleur: "green",

        url: "https://www.onagri.nat.tn/uploads/divers/atlas/RN_JebelSaddine.pdf"

  },
  {
    nom: "Forêt de Nebeur",
    lat:36.310,
    lng: 8.694,
    type: "naturel",
    couleur: "green",
 
        url: "https://fr.wikipedia.org/wiki/Barrage_Mell%C3%A8gue"

  },
  {
    nom: "Gastronomie chez Chef Fatma",
    lat:36.18097,
    lng: 8.70821,
    type: "gastronomie",
    couleur:"#53EAFD",
 
        url: "https://www.tripadvisor.fr/LocationPhotoDirectLink-g946559-d21312292-i484251395-Chef_Fatma-Le_Kef_Le_Kef_Governorate.html"

  },

  {
    nom: "Chajret oum Chlalig",
    lat:36.16858,
    lng: 8.59243,
    type: "ethno",
    couleur: "maroon",
  
        url: "https://drive.google.com/file/d/1mMeImf0yFeDMPpfSxna01_LdPoyBw-uK/view?usp=sharing"

  },

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
});
