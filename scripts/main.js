const {Howl, Howler} = require('howler')
..
function checkip(){
//ban anyone from entering while developing
  function text(url) {
    return fetch(url).then(res => res.text());
  }

  text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  ip = ip.toString()
  if (ip == "74.71.211.152"){
    //It is Coder2195! Don't ban him!
  } else {
    alert('It\'s private! Coder2195 is developing!')
    window.close()
    //BAN!
    }
  });
}

function setup(){
  //hide certain elements
  $('#snap').css("display", "none")
  $('#python').css("display", "none")
  $('#other').css("display", "none")
  //show certain elements
  $('#audcontrol').css("display", "block")
  $('#home').css("display", "block")
  $('#bar').css("display", "block")
}

window.onload = checkip(); setup();

var musicnew Howl({
  src: '../snd/calm.mp3',
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});

""