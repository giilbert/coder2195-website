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
    //it is coder2195!
  } else {
    alert('It\'s private! Coder2195 is developing!')
    window.close()
    }
  });
}
window.onload = checkip()
