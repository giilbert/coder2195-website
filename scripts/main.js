async function checkip() {
  // ban anyone from entering while developing
  function text(url) {
    return fetch(url).then(res => res.text());
  }
  
// i'll export this to github
  
  text("https://www.cloudflare.com/cdn-cgi/trace").then(data => {
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    let ip = data.match(ipRegex)[0];
    ip = ip.toString();

    // ban if IP doesnt match
    if (ip !== "74.71.211.152") {
      alert("It's private! Coder2195 is developing!");
      window.close();
    }
  });
} w

async function setup() {
  //hide certain elements
  $("#snap").css("display", "none") ;
  $("#python").css("display", "none");
  $("#other").css("display", "none");
  //show certain elements
  $("#audcontrol").css("display", "block");
  $("#home").css("display", "block");
  $("#bar").css("display", "block");
}

/*!lang: english (en), chinese (ch), french (fr), spanish (sp) 
 portuguese (pt), dutch (nl), german (de), arabic (ar)
 russian (ru), korean (ko), japanese (jp), hindi (hi), greek (el)
*/

const langdata = {
  head: {
    title: {
      en: "Coder2195's Website",
      ch: "Coder2195的网站",
      fr: "Site Web de Coder2195",
      sp: "Sitio web de Coder2195",
      pt: "Site do Coder2195",
      nl: "De website van Coder2195",
      de: "Die Website von Coder2195",
      ar: "موقع ويب Coder2195",
      ru: "Сайт Coder2195",
      ko: "Coder2195의 웹 사이트",
      jp: "Coder2195のウェブサイト",
      hi: "Coder2195 की वेबसाइट",
      el: "Ιστοσελίδα του Coder2195"
    }
  },
  home: {
    "null-for-copying": {
      en: "",
      ch: "",
      fr: "",
      sp: "",
      pt: "",
      nl: "",
      de: "",
      ar: "",
      ru: "",
      ko: "",
      jp: "",
      hi: "",
      el: ""
    }
  },
  titles: {
    welcome: {
      en: "Welcome to my website!",
      ch: "欢迎来到我的网站",
      fr: "Bienvenue sur mon site web!",
      sp: "¡Bienvenidos a mi sitio web!",
      pt: "Bem-vindo ao meu site!",
      nl: "Welkom op mijn website!",
      de: "Willkommen auf meiner Website!",
      ar: "مرحبا بكم في موقع الويب الخاص بي!",
      ru: "Добро пожаловать на мой сайт!",
      ko: "내 웹 사이트에 오신 것을 환영합니다!",
      jp: "私のウェブサイトへようこそ!",
      hi: "मेरी वेबसाइट पर स्वागत है!",
      el: "Καλώς ήλθατε στον ιστότοπό μου!"
    },
    snap: {
      en: "My Snap Games",
      ch: "我 Snap 的游戏",
      fr: "Mes Jeux Snap",
      sp: "Mis Juegos Snap",
      pt: "Meus Jogos Snap",
      nl: "My Snap-spellen",
      de: "Meine Snap Spiele",
      ar: "ألعابي Snap",
      ru: "Мои игры Snap",
      ko: "내 Snap 게임",
      jp: "私の Snap ゲーム",
      hi: "मेरे Snap खेल",
      el: "Τα Snap παιχνίδια μου"
    },
    python: {
      en: "My Python Games",
      ch: "我 Python 的游戏",
      fr: "Mes Jeux Python",
      sp: "Mis Juegos Python",
      pt: "Meus Jogos Python",
      nl: "My Python-spellen",
      de: "Meine Python Spiele",
      ar: "ألعابي Python",
      ru: "Мои игры Python",
      ko: "내 Python 게임",
      jp: "私の Python ゲーム",
      hi: "मेरे Python खेल",
      el: "Τα Python παιχνίδια μου"
    }
  }
};

function changelang(currentlang) {
  document.title = langdata["head"]["title"][currentlang];
  //change title!
  $("hometitle").text(langdata["titles"]["welcome"][currentlang]);
  //change "welcome to my site" to their language
}

window.onload = () => {
  checkip();
  setup();
};
