function showAnswer(){
    var e = document.getElementById("answer");
    var w=document.getElementById("show");
    
    if(e.style.display == 'none'){
        e.style.display = 'block';
        w.innerHTML ="Hide Answer";
    }else{
        e.style.display = 'none';
        w.innerHTML ="Show Answer";
    }
}

var james = { "c1" : [
{ "question":"Who was James? (James1:1; 2 pts)" , "answer":"A bondservant of God and of the Lord Jesus Christ" }, 
{ "question":"Whom was James sending the letter to? (James1:1)" , "answer":"To the 12 tribes which were scattered abroad" }, 
{ "question":"Where were the 12 tribes? (James1:1)" , "answer":"Scattered abroad" },
{ "question" : "" , "answer" : ""} 
]}


function james_c1(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*james.c1.length);
    document.getElementById("number").innerHTML = i+1;
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    james.c1[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    james.c1[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
}