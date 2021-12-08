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

var sda_bc = { //might need to add "james" : [] but dont have to cause chapters are definet numbers
    "h_2_p":[
        //Hebrews
        { "question" : "What does the book of Hebrews essentially consist of a comparison with and a contrast between? " , "answer" : "They symbols by which God presented the plan of salvation to His chosen people in the Old Testament & the reality of Christ’s ministry on behalf of sinner since the cross"},
        { "question" : "What does the experiences of ancient Israel under the typical system set forth? (2 pts)" , "answer" : "As a lesson and warning to Christians"},
        { "question" : "How does Paul seek to develop a more complete understanding and appreciation of the ministry of Christ in heaven above? (2 pts)" , "answer" : "Through the typical system & Israel’s experiences under it"},
        { "question" : "What does Paul seek to develop through the typical system & Israel’s experiences? (2 pts)" , "answer" : "A more complete understanding & appreciation of the ministry of Christ in heaven."},
        { "question" : "What three aspects does Paul compare as he develops this theme in the book of Hebrews? (3 pts) " , "answer" : "The earthly & heavenly sanctuaries and priesthoods"},
        //2 nd peter
        { "question" : "What is the theme of 2nd Peter?" , "answer" : "Pastoral"},
        { "question" : "What does the writer exhort his readers to continue to do? (pts. 2)" , "answer" : "Growth in grace & in spiritual knowledge."},
        { "question" : "Why does the writer exhort the readers to continue in growth in grace and in spiritual knowledge?" , "answer" : "The God’s design in their calling and election might be fulfilled."},
        { "question" : "What does Peter encourage them by in chapter 1 of Peter? (2 pts)" , "answer" : "Reference to his own experience & to the prophetic word "},
        { "question" : "What does Peter warn against in the 2nd chapter of Peter?" , "answer" : "False teachers"},
        //
        { "question" : "What does the discussion in 2 Peter 3 leads to? (2 pts)" , "answer" : "An affirmation of the certainty of the second coming & an exhortation to be ready for that great event."},
        { "question" : "What is the discussion in 2 Peter 3?" , "answer" : "The scoffers’ rejection of the promise of Christ’s return"}
        /*
        //
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        */
    ],
    "j_1_p":[
        //1 peter
        { "question" : "What was Peter’s purpose/theme for writing the 1st Epistle Peter?" , "answer" : "Pastoral"},
        { "question" : "What is the warp into which the woof of his (Peter’s) counsel is woven? (3 pts) " , "answer" : "The peril of persecution, the imminence of the fiery trial and an awareness of the troubled times in which the believers were living."},
        { "question" : "What kind of times were the believer living in? " , "answer" : "The troubled times"},
        { "question" : "What does Peter seek with the persecution and troubled times the believers were faced with? (5 pts)" , "answer" : "To strengthen his readers’ faith, to exhort them to blameless conduct, to exemplary citizenship, to loyal witness for Christ & effective preparation to meet their Lord."},
        { "question" : "Which groups does Peter include specific counsel in his 1st Epistle? (5 pts)" , "answer" : "Servants (ch.2:18), wives (ch.3:1-6), husbands (ch.3:7), elders (ch.5:1-4) & younger members of the church (ch.5:5-9). "},
        //
        { "question" : "What kind of spirit is linked to the firm sense of leadership?" , "answer" : "A tender spirit"},
        { "question" : "What is a tender spirit linked to throughout the 1st Epistle of Peter? " , "answer" : "A firm sense of leadership"},
        { "question" : "What is sanctified by a lofty conception of Christ? (2 pts)" , "answer" : "A tender spirit & a firm sense of leadership"},
        { "question" : "What are they (a tender spirit & a firm sense of leadership) sanctified by? " , "answer" : " A lofty conception of Christ"},
        //{ "question" : "" , "answer" : ""},
        //james
        { "question" : "True / false – the Epistle of James is one of practical Christianity." , "answer" : "True"},
        { "question" : "What does the Epistle of James show because it is described as one of practical Christianity? (2 pts)" , "answer" : "The results or works a genuine, living faith will produce in the life of a disciple."},
        { "question" : "What is emphasised throughout the book of James? (5 pts)" , "answer" : ": The manifestations, effects, or results, of true religion, and those of false religion."},
        { "question" : "What two words describe the style used in the book of James? (2 pts)" , "answer" : "Simple & direct"},
        { "question" : "True/false – the writings in the book of James are arranged in any evident plan." , "answer" : "False – the thoughts are in groups clearly marked from one another."},
        //
        { "question" : "How does James write? (2 pts)" , "answer" : "Freely, out of the fullness of his heart"},
        { "question" : "How does James decide what subjects to write about? " , "answer" : "As they are suggested to his mind."},
        { "question" : "Where can many allusions (references) in the book of James from?" , "answer" : "The Sermon on the Mount"},
        { "question" : "With whose writings does the book of James parallel with? (2 pts)" , "answer" : "Paul & Peter"},
        { "question" : "Give an example of the parallel with the writings of Paul with James." , "answer" : "James 1:22 & Romans 2:13"},
        //
        { "question" : "Give an example of the parallel with the writings of Peter with James." , "answer" : "James 4:7 & 1 Peter5:8-9"}
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


function hebrews_2_peter(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*sda_bc.h_2_p.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    sda_bc.h_2_p[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    sda_bc.h_2_p[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function james_1_peter(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*sda_bc.j_1_p.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    sda_bc.j_1_p[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    sda_bc.j_1_p[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}