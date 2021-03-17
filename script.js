const pavadinimas = 'Find. Connect. Enjoy.';
const antraste = 'new way to meet people';

const title = document.createElement('div');
title.textContent = pavadinimas;
title.className = 'pavadinimas';

const subtitle = document.createElement('div');
subtitle.textContent = antraste;
subtitle.className = 'antraste';

const container = document.getElementById('container');
container.appendChild(title);
container.appendChild(subtitle);

const korteliuBlokas = document.createElement('div');
korteliuBlokas.className = 'korteliu-blokas';
container.appendChild(korteliuBlokas);

const korteles = [
    {
        nuotrauka: './flex-box1/profile-images/17.jpg',
        vardas: 'Sammy M Stoll',
        adresas: 'Wellsville, New York(NY), 14895',
        apie: 'Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic.'
    },
    {
        nuotrauka: './flex-box1/profile-images/46.jpg',
        vardas: 'James C Young',
        adresas: '2597 Meadowbrook Mall Road',
        apie: 'Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.'
    },
    {
        nuotrauka: './flex-box1/profile-images/16.jpg',
        vardas: 'Deanna I Martin',
        adresas: 'Worthington, Ohio(OH), 43085',
        apie: 'Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer.'
    },
    {
        nuotrauka: './flex-box1/profile-images/55.jpg',
        vardas: 'Bruce K Collins',
        adresas: 'Westhampton Beach, New York(NY), 11978',
        apie: 'Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.'
    },
    {
        nuotrauka: './flex-box1/profile-images/34.jpg',
        vardas: 'Claudette G Hann',
        adresas: 'Philadelphia, Pennsylvania(PA), 19108',
        apie: 'Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert.'
    },
    {
        nuotrauka: './flex-box1/profile-images/51.jpg',
        vardas: 'Robert Langdon',
        adresas: '5 Eagle Way. AL10 8RD',
        apie: 'Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic.'
    },
    {
        nuotrauka: './flex-box1/profile-images/21.jpg',
        vardas: 'Amber C Pantoja',
        adresas: 'Nashville, Tennessee(TN), 37209',
        apie: 'Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.'
    },
    {
        nuotrauka: './flex-box1/profile-images/23.jpg',
        vardas: 'Adriana E Hubert',
        adresas: 'Burlington, North Carolina(NC), 27215',
        apie: 'Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker.'
    }
];

const sukurtiKortele = function (info) {
    const kortele = document.createElement('div');
    kortele.className = 'kortele';

    const img = document.createElement('img');
    img.className = 'nuotrauka';
    img.src = info.nuotrauka;
    img.alt = info.vardas;
    kortele.appendChild(img);

    const name = document.createElement('div');
    name.textContent = info.vardas;
    name.className = 'name';
    kortele.appendChild(name);

    const adresas = document.createElement('div');
    adresas.className = 'address';
    const adresoIconele = document.createElement('i');
    const adresoTekstas = document.createElement('span');
    adresoTekstas.textContent = info.adresas;
    adresoIconele.className = 'fas fa-map-marker-alt maps';
    adresas.appendChild(adresoIconele);
    adresas.appendChild(adresoTekstas);
    kortele.appendChild(adresas);

    const apie = document.createElement('div');
    apie.textContent = info.apie;
    apie.className = 'about';
    kortele.appendChild(apie);

    const connect = document.createElement('div');
    connect.textContent = 'Get Connected';
    connect.className = 'connect';
    kortele.appendChild(connect);


    const socialNetworks = document.createElement('div');
    const fb = document.createElement('i');
    fb.className = 'fab fa-facebook-f icon';
    socialNetworks.appendChild(fb);
    const twitter = document.createElement('i');
    twitter.className = 'fab fa-twitter icon';
    socialNetworks.appendChild(twitter);
    const google = document.createElement('i');
    google.className = 'fab fa-google icon';
    socialNetworks.appendChild(google);
    const instagram = document.createElement('i');
    instagram.className = 'fab fa-instagram icon';
    socialNetworks.appendChild(instagram);
    kortele.appendChild(socialNetworks);

    korteliuBlokas.appendChild(kortele);
};

korteles.forEach(sukurtiKortele);
