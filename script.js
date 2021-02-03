// function showInfo(data, tabletop) {
//   document.getElementById('st-ld').style.display = 'none'; 
//   document.getElementById('st-main').style.display = 'initial'; 
//   document.getElementById('st-teams').innerText = data[1]['Signup Statistics'] + ' teams registered'; 
//   // document.getElementById('st-fossil').innerText = data[2]['Signup Statistics'] + ' teams'; 
//   document.getElementById('st-perc').innerText = data[1]['% Capacity']; 
//   setTimeout(() => {
//     document.getElementById('st-pbinner').style.width = data[1]['% Capacity']; 
//   }, 200); 
//   if (parseFloat(data[1]['% Capacity']) !== 100) {
//     document.getElementById('btn').disabled = false; 
//     document.getElementById('btn').innerText = 'Register Your Team!';
//     document.getElementById('btn-lnk').href = 'https://docs.google.com/forms/d/e/1FAIpQLSd8Y2t6MQ-ZkNg_9Zdw5TaUY7776Y9-nghROLjW0I2cKE_rGA/viewform?usp=sf_link'; 
//   } else {
//     document.getElementById('btn').innerText = 'Sorry, we\'re full :(';
//   }
// }

// // window.addEventListener('DOMContentLoaded', init)