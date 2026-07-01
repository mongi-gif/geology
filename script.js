
// ================= MAP =================
var map = L.map('map').setView([36.17, 8.70], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// ================= LAYERS =================
var geologie = L.layerGroup().addTo(map);
var minier = L.layerGroup().addTo(map);
var historique = L.layerGroup().addTo(map);
var naturel = L.layerGroup().addTo(map);
var ethno = L.layerGroup().addTo(map);
var gastronomie = L.layerGroup().addTo(map);

// ================= DATA =================
const sites = [

{
    nom: "synclinal perché éocène de Dyr El Kef",
    type: "geologie",
    lat: 36.198,
    lng: 8.727,
    couleur: "red",
    description:`Le synclinal perché de Dyr El Kef est une curiosité géologique majeure du Nord-Ouest de la Tunisie.
    Il correspond à plateau qui culmine à environ 1 084 mètres d'altitude.
    Géologique, il s'agit d'une gouttière synclinale plissée dont la concavité est orientée vers le haut. 
    L'érosion a dégagé les contours, laissant la structure en relief par rapport aux vallées environnantes. 
    On parle alors de synclinal perché`,
    images:[
        "./images/Eddyr.jpg"
    ],
    url: "https://drive.google.com/file/d/13B__lgAuCyeWWLBnbSm5qsHI62rjniuN/view?usp=sharing"
},

  
{
    nom: "Stratotype K-Pg du Kef",
    type: "geologie",
    lat: 36.153,
    lng: 8.648,
    couleur: "red",
    description: `Le site d’El Kef, situé dans le gouvernorat du El Kef, est mondialement connu pour abriter le stratotype de référence internationale (GSSP) de la limite Crétacé–Paléogène (anciennement limite K–T). Ce site géologique exceptionnel marque l’une des plus grandes crises biologiques de l’histoire de la Terre : l’extinction massive survenue il y a environ 66 millions d’années, qui a entraîné la disparition 
    des dinosaures et de nombreuses espèces marines et terrestres.` ,
    images:[
        "./images/kt.png"
    ],
    url: "https://drive.google.com/file/d/13srHXLY15B5ANww84mHWlnBysQmzWccJ/view?usp=sharing"
},
{
    nom: "Série triasque du Débadib",
    type: "geologie",
    lat: 36.175,
    lng: 8.583,
    couleur: "red",
     /*description: `Les ophites du Trias sont des roches magmatiques basiques (souvent des dolérites ou basaltes altérés) 
    associées aux formations évaporitiques triasiques.` ,
     images:[
        "./images/ophite.jpg"
    ],*/
    url: "https://drive.google.com/file/d/1U8Xa0oAe19KB6up6lUMAzQFsg_iE1OZn/view?usp=sharing"
},
{
    nom: "Grotte spléologique",
    type: "geologie",
    lat: 36.0299,
    lng: 8.321,
    couleur: "red",
    description: `La grotte du Jebel Harraba présente un karst interne riche en concrétions calcaires, dominé par 
    des stalactites (pendantes) et des stalagmites (montantes).
    Ces formations, appelées spéléothèmes, résultent de la précipitation 
    du carbonate de calcium (CaCO₃) à partir des eaux d’infiltration chargées en bicarbonates.` ,
     images:[
        "./images/grotte.png"
    ],
    url: "https://drive.google.com/file/d/1XI48vuvIVFh9er21EKO03uZO_LbcqOqV/view?usp=sharing"
},
{
    nom: "Niveau à Ammonites de l'Aptien Supérieur",
    type: "geologie",
    lat: 35.990,
    lng: 8.350,
    couleur: "red",
    /*description: `Les ammonites sont des animaux marins fossiles appartenant au groupe des céphalopodes, comme les poulpes et les calmars actuels.
    Elles vivaient dans les océans entre environ 400 millions et 66 millions d’années.Les ammonites du Kef représentent parmi les derniers représentants 
    de ce groupe avant son extinction définitive il y a environ 66 millions d'années.` ,
     images:[
        "./images/ammonite.jpg"
    ],*/
    url: "https://drive.google.com/file/d/13qjY9WSQljVTyOCmbYuz7d_NIxCRpHn_/view?usp=sharing"
},
{
    nom: "récif aptien du jeble Slata",
    type: "geologie",
    lat: 35.873,
    lng: 8.470,
    couleur: "red",
    description: `Le Jebel Slata est un édifice diapirique triasique autour 
    duquel se sont développés des dépôts carbonatés récifaux à l’Aptien.` ,
     images:[
        "./images/slata.jpg"
    ],
    url: "https://drive.google.com/file/d/1AupexraKu_yGd5oGDqvwCfXi-C-MqfDc/view?usp=sharing"
},

{
    nom: "Mine de Jerissa",
    type: "minier",
    lat: 35.85,
    lng: 8.63,
    couleur: "blue",
    description: `La Mine de Jerissa est le plus important gisement de minerai de fer 
    de Tunisie et l'une des plus anciennes exploitations minières du pays. 
    Elle est située à environ 54 km au sud de Le Kef, 
    dans le massif du Djebel Jerissa, au sein de l'Atlas tunisien` ,
     images:[
        "./images/galerie.png"
    ],
    url: "https://drive.google.com/file/d/1LO2kPfHMkvd88d4mDUQsYsHZ2oQrECMa/view?usp=sharing"
},
{
    nom: "Phosphate de Sra Ouertane",
    type: "minier",
    lat: 35.821,
    lng: 8.767,
    couleur: "blue",
    /*description: `Le phosphate de Sra Ouertane est l’un des plus grands projets phosphatiers de Tunisie, encore non exploité 
    mais très stratégique pour l’avenir du pays.
    Le phosphate de Sra Ouertane est l’un des plus grands projets phosphatiers de Tunisie, encore peu exploité mais 
    très stratégique pour l’avenir du pays.` ,
     images:[
        "./images/sra.jpg"
    ],*/
    url: "https://drive.google.com/file/d/1p8fox3qBTJnIh8c2px_pQ74Z7ltTDI7j/view?usp=sharing"
},

{
    nom: "Bou Jabeur",
    type: "minier",
    lat: 35.737,
    lng: 8.282,
    couleur: "blue",
    /*description:`Le site de Bou Jabeur constitue l'un des plus importants 
    gisements polymétalliques de Tunisie. Il est connu pour ses 
    minéralisations en plomb, zinc, barytine et fluorine encaissées 
    dans les calcaires récifaux aptiens du Nord-Ouest tunisien. 
    Le gisement a fait l'objet d'une exploitation industrielle 
    durant une grande partie du XXᵉ siècle et représente 
    aujourd'hui un témoin remarquable du patrimoine minier tunisien.` ,
     images:[
        "./images/boujaber.jpg"
    ],*/
    url: "https://drive.google.com/file/d/14mVyiJFh2MkW5Cc2nHHhr6nD6JRCOzZ2/view?usp=sharing"
},

{
    nom: "Circuit de la Medina du Kef",
    lat: 36.18196,
    lng: 8.71269,
    type: "historique",
    couleur: "orange",
    /*description: `Le circuit touristique de la Médina du Kef est un itinéraire 
    culturel balisé qui traverse la vieille ville du nord-est au sud-ouest. 
    Il met en lumière un patrimoine plurimillénaire et multireligieux exceptionnel, hérité ` ,
   
    images: [
      
         "./images/kasbah.jpg",
         "./images/boumakhlouf.jpg",
         "./images/Basilique.jpg"
       ], */

        url: "https://www.siccaveneria.com/tourisme/patrimoine/16d5854d-d83a-11ea-af16-0242ac11000b"

  },
  
  {
    nom: "Sidi Zine",
    lat: 36.125,
    lng: 8.634,
    type: "historique",
    couleur: "orange",
    /*description: `Le site de Sidi Zine (ou Sidi Zin), situé à environ 10 kilomètres 
    au sud-ouest d'El Kef en Tunisie, est le site préhistorique le plus important du pays. 
    Il témoigne d'une présence humaine exceptionnelle remontant à plus de 300 000 ans ` ,
   
    images: [

       "./images/sidi_zine.jpg"

    ],*/
    url: "https://tunisiaforall.org/?page_id=2493"

  },
  {
    nom: "Althiburos",
    lat: 35.879,
    lng: 8.786,
    type: "historique",
     couleur: "orange",
    /*description: `Althiburos (ou Medeina) est une ancienne cité numide puis 
    romaine située en Tunisie, dans le gouvernorat du Kef, au cœur 
    de la délégation de Dahmani. Idéalement placée sur la grande voie 
    romaine reliant Carthage à Théveste (actuelle Tébessa en Algérie), 
    elle constitue aujourd'hui un site archéologique majeur et préservé du nord-ouest tunisien. ` ,
   
    images: [

    "./images/althiburos.jpg", 
      
    ], */
        url: "https://www.persee.fr/doc/dha_0755-7256_2021_num_47_1_5065"

  },
  
  {
    nom: "Hammam Mellegue",
    lat: 36.183,
    lng: 8.575,
    type: "historique",
    couleur: "orange",
   /* description: `<p>Hammam Mellegue est une station thermale et 
    un site archéologique d'origine romaine situé dans 
    le gouvernorat du Kef, en Tunisie, à environ 12 à 15 kilomètres 
    à l'ouest/sud-est de la ville du Kef. Ce lieu fascinant combine une importance 
    historique majeure, des vertus thérapeutiques reconnues et une curiosité 
    géologique unique au monde. Les bassins d'origine romaine sont 
    exceptionnellement bien conservés et continuent d'être alimentés 
    en eau thermale, fonctionnant encore aujourd'hui comme un 
    bain maure traditionnel pour les curistes et les familles.</p>` ,
   
    images: [
       "./images/Hammam Mellgue.png",    
    ],*/
        url: "https://fr.aroundus.com/p/9636927-hammam-mellegue"

  },
  
  {
    nom: "table de Jughurta",
    lat:35.746,
    lng: 8.378,
    couleur: "orange",
    /*description: `La Table de Jugurtha est une montagne tabulaire (ou mesa) 
    spectaculaire située dans le Nord-Ouest de la Tunisie, sur le 
    territoire de la municipalité de Kalaat Senan (gouvernorat du Kef). 
    Culminant à 1 271 mètres d'altitude et s'étendant sur plus de 80 hectares, ce site exceptionnel allie une structure géologique rare à un passé historique mythique lié à la résistance numide face à l'Empire romain. Elle figure sur la 
    liste indicative du patrimoine mondial de l'UNESCO depuis 2017.`,
    images: [
   "./images/table_jugh.jpg",       
    ],*/

        url: "https://whc.unesco.org/fr/listesindicatives/6278/"

  },

  {
    nom: "Elles",
    lat:35.950,
    lng: 9.097,
    type: "historique",
    couleur: "orange",
    description: `Elles est une localité rurale du Nord-Ouest tunisien, 
    située, à environ 16 km au sud du Sers. Le site est connu pour son riche patrimoine 
    archéologique, préhistorique et géologique. le site est célèbre pour ses dolmens mégalithiques     
    numides, parmi les ensembles funéraires les plus remarquables de Tunisie.`,

    images: [
      
         "./images/dolmen_elles.jpg"
       ],*/
           url: "https://fr.wikipedia.org/wiki/M%C3%A9galithes_d%27Ell%C3%A8s"

  },
  {
    nom: "Réserve de saddine",
    lat:35.950,
    lng: 9.097,
    type: "naturel",
    couleur: "green",
    /*description: `La Réserve naturelle de Saddine est l'une des plus importantes 
    aires protégées du Nord-Ouest tunisien. Elle est située dans le gouvernorat 
    du Le Kef, entre les régions de Sakiet Sidi Youssef et du Haut Tell tunisien. 
    Elle couvre environ 2 610 hectares et a été créée comme réserve naturelle en 2009 
    avant d'être inscrite sur la liste des zones humides d'importance internationale de 
    la Convention Ramsar en 2015.`,

    images: [
   "./images/reserve_saddine.jpg",     
    ],*/
        url: "https://www.onagri.nat.tn/uploads/divers/atlas/RN_JebelSaddine.pdf"

  },
  {
    nom: "Forêt de Nebeur",
    lat:36.310,
    lng: 8.694,
    type: "naturel",
    couleur: "green",
    /*description: `La forêt de Nebeur, située au nord-ouest du gouvernorat du Kef en 
    Tunisie, est un massif forestier exceptionnel qui s'étend sur plus de 4 600
     hectares. Elle se caractérise par ses paysages montagneux 
    verdoyants et sa proximité immédiate avec l'Oued et le barrage de Mellègue.`,

    images: [
     "./images/barrage_mellegue.jpg",   
    ],*/
        url: "https://fr.wikipedia.org/wiki/Barrage_Mell%C3%A8gue"

  },
  {
    nom: "Gastronomie chez Chef Fatma",
    lat:36.18097,
    lng: 8.70821,
    type: "gastronomie",
    couleur:"#53EAFD",
   /* description: `Le patrimoine gastronomique du Kef se distingue en Tunisie par son originalité, 
    marquée par d’audacieux mélanges sucrés-salés, l'usage généreux des herbes
     de montagne (notamment le romarin) et des traditions paysannes ancestrales.
     Gouttez les spécialités cullinaires phares (Borzgane, Knef, Malfouf, Rfissa, cousous..)`,

    images: [
    "./images/borzgane.jpg", 
    ],*/
        url: "https://www.tripadvisor.fr/LocationPhotoDirectLink-g946559-d21312292-i484251395-Chef_Fatma-Le_Kef_Le_Kef_Governorate.html"

  },

  {
    nom: "Chajret oum Chlalig",
    lat:36.16858,
    lng: 8.59243,
    type: "ethno",
    couleur: "maroon",
   /* description: `Chagret Oum Chlalig (شجرة أم الشلالق), également appelée l'arbre à rubans, 
    est un arbre historique, ulturel et mystique remarquable situé dans la région du Kef en Tunisie.)`,

    images: [
   "./images/oum_chlalig.jpg",
      
    ],*/
        url: "https://drive.google.com/file/d/1mMeImf0yFeDMPpfSxna01_LdPoyBw-uK/view?usp=sharing"

  },

];

// ================= POPUP =================
function createPopup(site){

    let imagesHTML = "";

    if(site.images && site.images.length > 0){
        site.images.forEach(img => {
            imagesHTML += `
            <img src="${img}" style="width:100%;margin-bottom:5px;border-radius:8px;">
            `;
        });
    }

    return `
    <div style="width:220px">

        <h3>${site.nom}</h3>

        <div style="max-height:150px;overflow:auto;">
            ${imagesHTML}
        </div>

        <p style="font-size:13px;">
            ${site.description || ""}
        </p>

        <a href="${site.url}" target="_blank"
           style="display:block;text-align:center;background:#333;color:white;padding:5px;border-radius:5px;">
           Voir fiche
        </a>

    </div>
    `;
}

// ================= ADD MARKERS =================
sites.forEach(site => {

    let marker = L.circleMarker([site.lat, site.lng], {
        radius: 15,
        color: site.couleur,
        fillOpacity: 0.9
    });

    marker.bindPopup(createPopup(site));

    if(site.type === "geologie") marker.addTo(geologie);
    if(site.type === "minier") marker.addTo(minier);
    if(site.type === "historique") marker.addTo(historique);
    if(site.type === "naturel") marker.addTo(naturel);
    if(site.type === "ethno") marker.addTo(ethno);
    if(site.type === "gastronomie") marker.addTo(gastronomie);

});

// ================= FILTER =================
function toggleLayer(layer, btn){
    if(map.hasLayer(layer)){
        map.removeLayer(layer);
        btn.classList.remove("active");
    } else {
        map.addLayer(layer);
        btn.classList.add("active");
    }
}

// ================= LEGEND =================
//var legend = L.control({position: 'bottomright'});

//legend.onAdd = function () {
    //var div = L.DomUtil.create('div', 'legend');
    //div.innerHTML = `
    /*<b>Légende</b><br>
    🟥 Géologie<br>
    🟦 Minier<br>
    🟨 Historique<br>
    🟩 Naturel<br>
    🟫 Ethno<br>
    🟪 Gastronomie
    `;
    return div;
};

legend.addTo(map);*/
