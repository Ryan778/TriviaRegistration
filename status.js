let vueObj, savedCreds; 

function init() {
  if (new URLSearchParams(location.search).get('auth')) {
    try {
      let creds = atob(new URLSearchParams(location.search).get('auth')).split('/'); 
      savedCreds = `tid=${creds[0]}&pin=${creds[1]}`; 
      auth(); 
      document.getElementById('login-infobox').innerHTML= `<i class='fas fa-key'></i> Attempting to sign you in...`; 
    } catch (e) {
      document.getElementById('login-infobox').innerHTML= `<i class='fas fa-exclamation-triangle'></i> We were unable to sign you in automatically. Please sign in manually.`; 
      document.getElementById('login-def').style.display = 'block';
      document.getElementById('i_tid').focus(); 
    }
  } else if(localStorage.getItem('tn-creds')) {
    try {
      let creds = atob(localStorage.getItem('tn-creds')).split('|'); 
      document.getElementById('login-infobox').innerHTML= `<i class='fas fa-key'></i> Credentials have been saved for <b>${creds[0]}</b>. If this is you, simply select "Sign In" to continue.`; 
      savedCreds = creds[1]; 
      document.getElementById('login-saved').style.display = 'block';
    } catch (err) {
      localStorage.removeItem('tn-creds'); 
      init(); 
    }
  } else {
    document.getElementById('login-def').style.display = 'block';
    document.getElementById('i_tid').focus(); 
  }
  document.getElementById('login-div').style.display = 'block';
}

function signout() {
  localStorage.removeItem('tn-creds'); 
  location.reload(); 
}

function saveCreds(name, data) {
  localStorage.setItem('tn-creds', btoa(`${name}|${data}`)); 
}

let pending = false; 
async function auth() {
  if (pending) return; 
  let params; 
  if (savedCreds) {params = savedCreds} 
  else {params = `tid=${document.getElementById('i_tid').value.toUpperCase()}&pin=${document.getElementById('i_pin').value}`}
  pending = true; 
  let btn = document.getElementById('btn-signin'); 
  btn.firstChild.innerHTML = `<i class='fas fa-fw fa-circle-notch fa-spin'></i> Sign In`;
  let resp = await fetch(`https://script.google.com/macros/s/AKfycbzGG8iFQVXGeKoHSny1J8oBojgFKJsXh4VzybCrSHnuiabGg4S5zFpu/exec?${params}`, {
    method: 'POST'
  }).then(r => {
    if (!r.ok) return {ok: false, msg: `Error ${r.status}`}; 
    return r.json(); 
  }); 

  // Request finished
  pending = false; 
  btn.firstChild.innerHTML = `<i class='fas fa-fw fa-sign-in-alt'></i> Sign In`;
  if (resp.ok) {
    saveCreds(resp.data.teamName, params); 
    document.getElementById('login-div').style.display = 'none'; 
    document.getElementById('status-div').style.display = 'block';
    vueObj = new Vue({
      el: '#status-div', 
      data: resp.data, 
      methods: {
        showInstructions: (num) => {
          M.Modal.getInstance(document.getElementById('modal-photo')).open(); 
        }, 
        openEditURL: function () {
          window.open(this.editURL, '_blank'); 
        }
      }
    }); 
  } else {
    document.getElementById('login-saved').style.display = 'none';
    document.getElementById('login-def').style.display = 'block';
    document.getElementById('login-infobox').innerHTML = `<i class='fas fa-exclamation-triangle'></i> ${resp.msg}${savedCreds?' Try signing in manually.':''}`;
    document.getElementById('login-infobox').style.backgroundColor = '#ff684341';
  }
}

document.getElementById('btn-signin').onclick = auth; 
document.getElementById('i_pin').onkeypress = function(e) {
  if (e.key === 'Enter') {
    auth(); 
  }
}

window.onload = function() {
  M.AutoInit(); 
  init(); 
}