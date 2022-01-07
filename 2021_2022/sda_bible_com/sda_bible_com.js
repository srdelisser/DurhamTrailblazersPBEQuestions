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
    "king_1":[
        //title
        { "question" : "What was the Hebrew name for the two present books of Kings? " , "answer" : "Melakim"},
        { "question" : "What happened to Kings in the Hebrew Bible at the time of the printed edition of Daniel Bomberg, 1516-17? " , "answer" : "It was divided – into 2 parts"},
        { "question" : "Who also divided the book of Samuel & Kings? " , "answer" : "The Greek translators of the LXX"},
        { "question" : "How were the four books of Samuel and Kings treated as? Be specific." , "answer" : "Parts 1 to 4 of Kingdom"},
        { "question" : "What does the title ‘Kings’ indicate? " , "answer" : "the contents of the books"},
        
        { "question" : "What does the first book of Kings begin with? (2 pts)" , "answer" : "The death of David & the reign of Solomon"},
        { "question" : "What does the book of 1 Kings end with? (2 pts)" , "answer" : "The accession of Jehoram in Judah & Ahaziah in Israel "},
        { "question" : "What does the book of second Kings begin with?" , "answer" : "A continuation of the account of Ahaziah’s reign"},
        { "question" : "What does the book of second Kings closes with? " , "answer" : "The end of the kingdom of Judah "},
    
        
        //theme
        { "question" : "What is not the primary purpose of the books of Kings? " , "answer" : " To present the facts of history for the sake of history"},
        { "question" : "What is the purpose of the books of Kings? (2 pts)" , "answer" : "To show how the experiences of the Hebrews relate to the plans & the purposes of God "},
        { "question" : "What was the object of writing a detailed chronicle of the bald facts of history of the children of Israel?" , "answer" : "To present the lessons of history"},
        { "question" : "What was the motive and the aim of the compiler of the books of Kings? (2 pts)" , "answer" : "Deep religious motive & a very practical aim "},
        { "question" : "Who were the children of Israel? Be specific. " , "answer" : ": The people of God "},
        
        { "question" : "What was the tasks of the children of Israel? (2 pts)" , "answer" : "To fulfill the divine purpose and live out on earth the principles of the kingdom of heaven "},
        { "question" : "What was to be the foundation for national prosperity? " , "answer" : "Righteousness"},
        { "question" : "What could only end in ruin? Be specific. " , "answer" : "Sin"},
        { "question" : "How would the nation grow if they are true to its divine mission? (2 pts)" , "answer" : "In strength or greatness "},
        { "question" : "What was the result if the kings and rulers failed to live up to the divine purpose? " , "answer" : "As a people Israel would be punished"},
        
        { "question" : "What & who could the nation of Israel not exist without? (2 pts)" , "answer" : "Righteousness and God "},
        { "question" : "What age did the book of Kings come into being? " , "answer" : "The age of the prophets"},
        { "question" : "What is found in the pronouncements of the book of Kings? (2 pts)" , "answer" : "Courage and spiritual insights of the prophets"},
        { "question" : "What does the books of Kings bring home to the hearts of men? " , "answer" : "Lessons from God "},
        { "question" : "Fill in the blanks: ‘In the pronouncements of this book are to be found the ___ and ____ insights of the ____ bringing home to the ___ of men lessons from ___,’" , "answer" : "Courage, spiritual, prophets, hearts, God"},
        
        { "question" : "What was an amazing thing when the Israelites failed as a nation and were faced with ruined?" , "answer" : "Someone found something worth recording for generations to come"},
        { "question" : "What were the lessons of Israel’s failure to do? (2 pts)" , "answer" : "Bring light and hope to the world "},
        { "question" : "What was to be reared upon the ashes of defeat of the children of Israel? " , "answer" : "A new structure of success and victory "},
        { "question" : "What might perish & what would not perish? (2 pts)" , "answer" : "Perish – Israel & not perish – righteousness"},
        { "question" : "What would be the result if the lessons of Israel’s failures were learned? " , "answer" : "The world would find hope in God"},
        
        { "question" : "What two words describe the state of the nation of Israel at the beginning of the glorious reign of Solomon? (2 pts)" , "answer" : "Virile & strong"},
        { "question" : "How did the reign of Israel end? (4 pts)" , "answer" : "A weak & infamous king, the Temple destroyed and the land of Judah a desolate ruin"},
        { "question" : "What was the lesson of ruin to arouse in the children of Israel? " , "answer" : "A new spirit of hope"},
        { "question" : "How were the children of Israel to use their new spirit of hope?" , "answer" : "To focus their attention upon a new and better age to come, with Israel ruled by its eternal King"},
        { "question" : "Fill in the blanks: ‘Lo, the ___ come, saith the Lord, that I will bring again the ___ of my people ____ and ___, saith the Lord.’ (Jer. 30:3; 4 pts)" , "answer" : "Days, captivity, Israel, Judah"},
        
        { "question" : "Fill in the blanks: ‘They shall ___ the Lord their God, and David, their ___, whom I will ___ up unto them.’ (Jer. 30:9; 3pts)" , "answer" : "Serve, king, raise"},
        { "question" : "Fill in the blanks: ‘Jacob shall ___, and shall be in ___, and be ___, and none shall make him ___.’ (Jer. 30:10; 4 pts)" , "answer" : "Return, rest, quiet, afraid"},
        { "question" : "According to Jeremiah 32:39-41, what kind of covenant did the Lord, say He would give them?  " , "answer" : "A everlasting"},
        { "question" : "Fill in the blanks: ‘I will give them one ___, and one ___, that they may ___ me forever, for the __ of them, and of their children after them: and I will make an ___ covenant with them, that I will not turn away from them to do them good.’ (Jer. 32:39-41; 5 pts)" , "answer" : "Heart, way, fear, good, everlasting"},
        { "question" : "According to Jeremiah 32:39 – 41, what will He put in their hearts that they shall not depart from Him? " , "answer" : "Fear"},
        
        { "question" : "Even though the primary purpose of Kings is not the presentation of history as such, it contains history of great ____ and remarkable ____. (2 pts)" , "answer" : "Importance, accuracy"},
        { "question" : "Where are items concerning the Hebrew rulers never found? " , "answer" : "In the annals of neighboring states"},
        { "question" : "Why were the secular annuls of Israel’s neighbors written? (6 pts)" , "answer" : "To extol the king, glorify him as builder, hunter or stateman, to make public his acts of piety in the service of the gods & to relate his exploits in war"},
        { "question" : "Who was to Hebrew records to glorify? " , "answer" : "God"},
        { "question" : "What do these records of Kings contain? (3 pts)" , "answer" : "The outstanding accomplishments of the Israelite rulers & their foibles and defeats"},
        
        { "question" : "Which kingdoms does the books of Kings contain historical importance? (3 pts)" , "answer" : "Israel, Judah & the nations round about"},
        { "question" : "Where was Solomon’s navy? " , "answer" : "Ezion-geber on the shores of the Red Sea"},
        { "question" : "Where did the ships of Tarshish go to get gold?" , "answer" : "Ophir"},
        { "question" : "Who came to Jerusalem with a train of camel carrying spices and gold?" , "answer" : "Queen of Sheba"},
        { "question" : "Who was slain by his two sons (Adrammelech & Sharezer) while worshipping in the house of his god? " , "answer" : "Sennacherib"},
        
        { "question" : "What were the names of the two sons of Sennacherib who killed him? (2 pts)" , "answer" : "Adrammelech & Sharezer"},
        { "question" : "Which kings did the Syrian feared?" , "answer" : "Hittite"},
        { "question" : "How many lambs did Mesha, the sheep master king of Moab, give to Ahab as tribute?" , "answer" : "100,000"},
        { "question" : "What kind of trees did Hiram import from Ophir to make pillars for the house of the Lord? (Be specific.)" , "answer" : "Almug trees"},
        { "question" : "What languages did the Assyrian envoys spoke during the 8th – 7th centuries BC? (2 pts)" , "answer" : "Aramaic & Hebrew"},
        
        { "question" : "What are the names given to 3 of the months in the early history of Canaan? (3 pts)" , "answer" : "Zif, Ethanim & Bul"},
        { "question" : "True/false – the books of Kings, is not written in a chronological order. " , "answer" : "False – one of the outstanding features of the books of Kings is their basic chronological framework "},
        { "question" : "What are the two principal items of chronological information that is given? (2 pts)" , "answer" : "A synchronism dating the beginning of the reign of a king of Judah in a specific year of the contemporary king of Israel & vice versa & the length of each reign"}
        
        
        
        /*
        //
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        */
    ],
    "ruth":[
        //title
        { "question" : "What does the book of Ruth form to the book of Judges & to the two historical books of Samuel? (2 pts)" , "answer" : "Appendix – Judges & introduction – Samuel "},
        { "question" : "Where does the book of Ruth get its title?" , "answer" : "The name of the person whose story it bears"},
        { "question" : "How is the Hebrew meaning of names lost to the reader of the bible?" , "answer" : "The translators use the names without attempting to give their meaning"},
        { "question" : "Which country is Ruth from?" , "answer" : "Moab"},
        { "question" : "Even though we are uncertain of what the name Ruth means, what could be its meaning?" , "answer" : "Friend or friendship "},
        
        { "question" : "What kind of love is not portrayed in the book of Ruth?" , "answer" : "Romantic love"},
        { "question" : "What kind of love is the book of Ruth about? 2 pts – be specific" , "answer" : "A reverential love of a young widow for the mother of her deceased husband"},
        { "question" : "What kind of love is portrayed in the character of Ruth? 3 pts." , "answer" : "Purest, most unselfish & extraordinary kind"},
        { "question" : "What was the name of the Jewish nobleman Ruth marred?" , "answer" : "Boaz"},
        { "question" : "What are the names of two important persons that Ruth became the ancestress of? (2 pts)" , "answer" : "David & Christ"},
        //Theme
        { "question" : "What kinds of narrative are mentioned in the SDA commentary of Ruth? (2 pts)" , "answer" : "Historic & epic "},
        { "question" : "How is an epic narrative normally written?" , "answer" : "In poetic form"},
        { "question" : "What does an epic narrative appeal to primarily to? (2 pts)" , "answer" : "Our creative imagination and to the emotions "},
        { "question" : "What is very peculiar of Hebrew poetry? (3 pts)" , "answer" : "That its verse system is based on parallelism of thought rather than on exact meter and rhyme"},
        { "question" : "What does an appreciation of the Bible as literature calls for?" , "answer" : "A recognition of the different forms of narrative used by Bible writers "},
        
        { "question" : "Who is described as the greatest of the kings of Israel?" , "answer" : "David"},
        { "question" : "What is the chief purpose of the book of Ruth?" , "answer" : "To give information concerning the immediate ancestors of David"},
        { "question" : "Who was to come through the line of David, the greatest of the kings of Israel? Be specific." , "answer" : "The Messiah"},
        { "question" : "After what is Christ to be the eventual ruler of the kingdom of Israel? " , "answer" : "The spirit"},
        { "question" : "How did Christ speak of His kingdom? Be specific. " , "answer" : "The kingdom of heaven "},
        
        { "question" : "Why did Christ speak of His kingdom as the kingdom of heaven" , "answer" : "To distinguish it from the kingdoms of this present world"},
        { "question" : "What kind of link does the book of Ruth provides in the inspired narrative of the kingdom Christ came to establish? " , "answer" : "A cheering link"},
        { "question" : "Fill in the blanks: “Christ is to be the eventual ruler of the kingdom of ____ after the ___, the leader of the ____ theocracy.” 3 pts" , "answer" : "Israel, spirit, eternal"},
        { "question" : "What kind of appealing picture does the book of Ruth presents? " , "answer" : "The blessings of the ideal home"},
        { "question" : "What are the two institutions that came down to us from before the fall of man? (2 pts)" , "answer" : "The Sabbath & the home"},
        
        { "question" : "When was the home established? (2 pts – be specific)" , "answer" : "The sixth day of the first week of time"},
        { "question" : "By whom was the home established? Be specific. " , "answer" : "By God Himself"},
        { "question" : "When was the Sabbath established? Be specific. " , "answer" : "The seventh day of the same week (first week of time)"},
        { "question" : "What have the Sabbath and the home become? Be specific. " , "answer" : "The special objects of Satan’s attacks"},
        { "question" : "What is a subject of amusement to many? " , "answer" : "The relationship of mother-in-law and daughter-in-law"},
        
        { "question" : "What did Naomi learn after she sojourned in the land of Moab for ten years? Be specific. 2 pts" , "answer" : "20.	What is a subject of amusement to many? "},
        { "question" : "What did Ruth break in order to accompany Naomi? (2 pts – be specific)" , "answer" : "All ties of home and kindred"},
        { "question" : "What was Ruth’s impassionate outburst to Naomi? Be specific. 2 pts" , "answer" : "‘Thy people shall be my people and thy God my God"},
        { "question" : "Fill in the blanks: Ruth left the fertile fields of her homeland Moab and entered a ___ land, united with ____ true ____ and became a ____ of the ___ of ___.  6 pts" , "answer" : "Strange, God’s, people, worshipper, God, heaven"},
        { "question" : "What titles are given to David in the SDA Commentary on Ruth? (2 pts)" , "answer" : "The greatest of the kings of Israel & the sweet psalmist od Israel "},
        
        { "question" : "What title was given to Solomon?" , "answer" : "The wisest of the sons of men"},
        { "question" : "Who was called the son of David in the SDA Commentary of Ruth?" , "answer" : "The Messiah"},
        { "question" : "What kinds of superb examples are outlined in the book of Ruth? (5 pts)" , "answer" : "Faith, piety, humility, industry & loving-kindness revealed in the ordinary occurrences of life"},
        { "question" : "Fill in the blanks: ‘Thus we have in the story o Ruth, not only a charming gem of _____ ____, but also a significant comment on a part of the _____ of ___. (4 pts)" , "answer" : "Hebrew, literature, genealogy, Christ"},
        { "question" : "What should Israel have been more prepared for by a study of the narrative of Ruth? " , "answer" : "To understand God’s plan for the salvation of individuals of all nations who would accept God "},
        
        { "question" : "Fill in the blanks: “It was God’s plan that many would thus be so ___ in ____ as to be prepared individually to become ____ of the eternal ____ of ___.” (5 pts)" , "answer" : "Transformed, character, citizens, kingdom, Christ"}
       
        
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


function ruth(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*sda_bc.ruth.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    sda_bc.ruth[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    sda_bc.ruth[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function king_1(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*sda_bc.king_1.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    sda_bc.king_1[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    sda_bc.king_1[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}