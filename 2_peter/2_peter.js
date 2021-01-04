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

var book = { //might need to add "james" : [] but dont have to cause chapters are definet numbers
    "c#":[
        /*
        //
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        */
    ]
        

}


function book_c1(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*book.c1.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    book.c1[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    book.c1[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}