function showAnswer(){
    var e = document.getElementById("answer");
    if(e.style.display == 'none')
    e.style.display = 'block';
    else
    e.style.display = 'none';
}

function logout(){
  firebase.auth().signOut();
}

