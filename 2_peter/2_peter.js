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

var peter_2 = { //might need to add "james" : [] but dont have to cause chapters are definet numbers
    "c1":[
        //Greeting the Faithful
        { "question" : "1.	What titles are given to Peter in verse 1: (2 Peter 1:1; 2 pts)" , "answer" : "1.	What titles are given to Peter in verse 1: (2 Peter 1:1; 2 pts)"},
        { "question" : "2.	What have they obtained by the righteousness of our God and Saviour Jesus Christ? ( 2 Peter 1:1)" , "answer" : "Precious faith"},
        { "question" : "3.	Through whom have we obtained precious faith by righteousness? (2 Peter 1:1; 2 pts)" , "answer" : "Our God and Saviour Jesus Christ"},
        { "question" : "4.	What should be multiplied to you? (2 Peter 1:2: 2 pts)" , "answer" : "Grace & peace"},
        { "question" : "5.	In what should grace & peace be multiplied in you? (2 Peter 1:2; 2pts)" , "answer" : "In the knowledge of God and of Jesus our Lord"},
        //
        { "question" : "6.	What has given us all things that pertain to life and godliness? (2 Peter 1:3)" , "answer" : "His divine power"},
        { "question" : "7.	What has His divine power given to us all things that pertain to? (2 Peter 1:3; 2pts)" , "answer" : "Life and godliness"},
        { "question" : "8.	What has He called us by? (2 Peter 1:3; 2pts)" , "answer" : "Glory & virtue"},
        { "question" : "9.	Through what has His divine power given us all things that pertain to life and godliness? (2 Peter 1:3)" , "answer" : "The knowledge of Him who called us by glory and virtue"},
        { "question" : "10.	What kind of promises has been given to us? (2 Peter 1:4; 2pts)" , "answer" : "Exceedingly great and precious"},
        //
        { "question" : "11.	What may we be, through the exceedingly great and precious promises? (2 Peter 1:4)" , "answer" : "Partakers of the divine nature"},
        { "question" : "12.	What have we escaped to be partakers of the divine nature? (2 Peter 1: 4)" , "answer" : "The corruption that is in the world through lust"},
        { "question" : "13.	How is corruption in the world? (2 Peter 1: 4)" , "answer" : "Through lust"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},

        //Fruitful Growth in the Faith
        { "question" : "1.	What should you add to your faith & virtue? (2 Peter 1:5; 2 pts)" , "answer" : "Faith – virtue & Virtue – knowledge"},
        { "question" : "2.	What is He giving for this very reason? (2 Peter 1:5)" , "answer" : "All diligence"},
        { "question" : "3.	What should you add to knowledge, self-control & perseverance? (2 Peter 1:6; 3pts)" , "answer" : "Knowledge - Self-control, Self-control – Perseverance, Perseverance – Godliness"},
        { "question" : "4.	What should you add to godliness & brotherly kindness? (2 Peter 1:7; 2 pts)" , "answer" : "Godliness – Brotherly kindness, Brotherly kindness – Love"},
        { "question" : "5.	If these things (faith, virtue etc.) are your and abound, what will be neither be in the knowledge of our Lord Jesus Christ? (2 Peter 1:8; 2pts)" , "answer" : "Barren nor unfruitful"},
        //
        { "question" : "6.	What is he, who lacks these things (faith, virtue etc.)? (2 Peter 1:9)" , "answer" : "Short sighted"},
        { "question" : "7.	What are they even short-sighted to? (2 Peter 1:9)" , "answer" : "to blindness"},
        { "question" : "8.	What has he forgotten? (2 Peter 1:9)" , "answer" : "That he was cleansed from his old sins"},
        { "question" : "9.	What should we be more diligent to make? (2 Peter 1:10: 2pts)" , "answer" : "Your call & election"},
        { "question" : "10.	What will never happen if you do these things? (2 Peter 1:10)" , "answer" : "You will never stumble"},
        //
        { "question" : "11.	What will be supplied to you abundantly? (2 Peter 1:11)" , "answer" : "An entrance"},
        { "question" : "12.	How will an entrance be supplied to you? (2 Peter 1:11)" , "answer" : "Abundantly"},
        { "question" : "13.	Into what is an entrance supplied abundantly for you? (2 Peter 1:11; 2pts)" , "answer" : "The everlasting kingdom of our Lord and Saviour Jesu Christ"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Peter’s Approaching Death
        { "question" : "1.	What did Peter, say he would not be to remind you always of these things? (2 Peter 1:12)" , "answer" : "Negligent"},
        { "question" : "2.	What did Peter say you know and are established in? (v 12)" , "answer" : "The present truth"},
        { "question" : "3.	‘Yes, I think it is ___, as long as I am in this __, to __ you up by ____ you.’ (2 Peter 1:13; 4 pts)" , "answer" : "Right, tent, stir, reminding"},
        { "question" : "4.	What did Peter say he had to put off shortly, just as our Lord Jesus Christ showed him? (2 Peter 1:14)" , "answer" : "My (Peter’s) tent"},
        { "question" : "5.	Who showed Peter about putting off his tent? (2 Peter 1:14)" , "answer" : "Our Lord Jesus Christ"},
        //
        { "question" : "6.	What did Peter say he would be more careful to ensure after he died? (2 Peter 1:15)" , "answer" : "That you always have a reminder of these things"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Trustworthy Prophetic Word
        { "question" : "1.	What did they not follow when they made know to them the power and coming of our Lord Jesus Christ? (2 Peter 1:16)" , "answer" : "Cunningly devised fables"},
        { "question" : "2.	What did they make known to them by not following cunningly devised fables? (2 Peter 1:16; 2pts)" , "answer" : "The power & coming of our Lord Jesus Christ"},
        { "question" : "3.	What were we of His majesty? (2 Peter 1:16)" , "answer" : "Eyewitnesses"},
        { "question" : "4.	What did Peter say they received from God the Father? (2 Peter 1:17; 2 pts)" , "answer" : "Power & glory"},
        { "question" : "5.	When did Peter say they received power & glory from God the Father? (2 Peter 1:17; 2 pts)" , "answer" : "When a voice came to Him from the Excellent Glory"},
        //
        { "question" : "6.	What did the voice that came from the Excellent Glory say? (2 Peter 1:17; 2 pts)" , "answer" : "This is My beloved Son, in whom I am well pleased"},
        { "question" : "7.	Whom did Peter say the voice came from? (2 Peter 1:17)" , "answer" : "The Excellent Glory"},
        { "question" : "8.	Where did peter say the voice came from? (2 Peter 1:18)" , "answer" : "From heaven"},
        { "question" : "9.	Where were they when the voice came from heaven? (2 Peter 1:18)" , "answer" : "On the holy mountain"},
        { "question" : "10.	What do they have confirmed? (2 Peter 1:19)" , "answer" : "The prophetic word"},
        //
        { "question" : "11.	How were they to heed to the prophetic word? (2 Peter 1:19; 2 pts)" , "answer" : "As a light that shines in a dark place, until the day dawns and the morning star rises in your hearts"},
        { "question" : "12.	What would rise is your hearts? (2 Peter 1:19)" , "answer" : "The morning star"},
        { "question" : "13.	What is no prophecy of scripture according to? (2 Peter 1:20)" , "answer" : "Any private interpretation"},
        { "question" : "14.	What did prophecy never come by? (2 Peter 1:21)" , "answer" : "By the will of men"},
        { "question" : "15.	How did prophecy come about? (2 Peter 1:21; 2 pts)" , "answer" : "Holy men of God spoke as they were moved by the Holy Spirit"},
        //
        { "question" : "16.	Who spoke as they were moved by the Holy Spirit? (2 Peter 1:21)" , "answer" : "Holy men of God"},
        { "question" : "17.	Who were holy men of God moved by? (2 Peter 1:21)" , "answer" : "The Holy Spirit"}
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        /*
        //
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        */
    ],

    "c2":[
        //Destructive Doctrines
        { "question" : "1.	Who is among the people & you? (2 Peter 2:1; 2 pts)" , "answer" : "People – false prophet & You – false teachers"},
        { "question" : "2.	What will false prophets & false teachers secretly bring in? (2 Peter 2:1)" , "answer" : "Destructive heresies"},
        { "question" : "3.	Who will they even deny? (2 Peter 2:1)" , "answer" : "The Lord"},
        { "question" : "4.	What has the Lord done for them? (2 Peter 2:1)" , "answer" : "Bought them"},
        { "question" : "5.	What will they bring on themselves? (2 Peter 2:1)" , "answer" : "Swift destruction"},
        //
        { "question" : "6.	What will many follow? (2 Peter 2:2)" , "answer" : "Their destructive ways"},
        { "question" : "7.	What will happen to the way of truth because many will follow their destructive ways? (2 Peter 2:2)" , "answer" : "It will be blasphemed"},
        { "question" : "8.	How will they exploit you with deceptive words? (2 Peter 2:3)" , "answer" : "By covetousness"},
        { "question" : "9.	What has not been idle for a long time? (2 Peter 2:3)" , "answer" : "Their judgement"},
        { "question" : "10.	What does not slumber? (2 Peter 2:3)" , "answer" : "Their destruction"},
        //Doom of False Teachers
        { "question" : "1.	Who did God not spare? (2 Peter 2:4)" , "answer" : "The angels who sinned"},
        { "question" : "2.	Where did God cast & delivered the angels who sinned? (2 Peter 2:4; 2pts)" , "answer" : "Cast – down to hell & delivered – them into chains of darkness"},
        { "question" : "3.	Why did God cast the angels who sinned down to hell & delivered them into chains of darkness? (2 Peter 2:4)" , "answer" : "To be reserved for judgement"},
        { "question" : "4.	Whom did God not spare when He saved Noah? (2 Peter 2:5)" , "answer" : "The ancient world"},
        { "question" : "5.	What title is given to Noah in verse 5? (2 Peter 2:5)" , "answer" : "A preacher of righteousness"},
        //
        { "question" : "6.	Upon whom did He brought the flood on? (2 Peter 2:5)" , "answer" : "The world of the ungodly"},
        { "question" : "7.	What did God bring on the world of the ungodly? (2 Peter 2:5)" , "answer" : "The flood"},
        { "question" : "8.	What two phrases are used to describe Noah in verse 5? (2 Peter 2:5; 2 pts)" , "answer" : "One of eight people & the preacher of righteousness"},
        { "question" : "9.	Which cities did He turn into ashes? (2 Peter 2:6: 2 pts)" , "answer" : "Sodom & Gomorrah"},
        { "question" : "10.	What did He (God) do to the cities of Sodom & Gomorrah? (2 Peter 2:6; 3 pts)" , "answer" : "Turned them into ashes, condemned them to destruction & made them an example to those who afterward would live ungodly"},
        //
        { "question" : "11.	What did He condemn Sodom & Gomorrah to? (2 Peter 2:6)" , "answer" : "Destruction"},
        { "question" : "12.	What did He make Sodom & Gomorrah to those who would afterward live ungodly? (2 Peter 2:6)" , "answer" : "An example"},
        { "question" : "13.	Whom did God delivered that was oppressed by the filthy conduct of the wicked? (2 Peter 2:7)" , "answer" : "Righteous Lot"},
        { "question" : "14.	What was righteous Lot oppressed by? (2 Peter 2:7)" , "answer" : "The filthy conduct of the wicked"},
        { "question" : "15.	How was the righteous soul of Lot tormented from day to day? (2 Peter 2:8; 2 pts)" , "answer" : "By seeing and hearing their lawless deeds"},
        //
        { "question" : "16.	What was tormented of the righteous man (Lot) from day to day? (2 Peter 2:8)" , "answer" : "16.	What was tormented of the righteous man (Lot) from day to day? (2 Peter 2:8)"},
        { "question" : "17.	What does the Lord know how to deliver? (2 Peter 2:9)" , "answer" : "The godly out of temptations"},
        { "question" : "18.	What does the Lord know how to reserve? (2 Peter 2:9)" , "answer" : "The unjust under punishment for the day of judgement"},
        { "question" : "19.	What do those who walk according to the flesh lust in & despise? (2 Peter 2:10; 2 pts)" , "answer" : "Uncleanness and despise authority"},
        { "question" : "20.	What are they not afraid to speak? (2 Peter 2:10)" , "answer" : "Evil of dignitaries"},
        //
        { "question" : "21.	What are angels greater in? (2 Peter 2:11; 2 pts)" , "answer" : "Power & might"},
        { "question" : "22.	What do the angels not bring against them before the Lord? (2 Peter 2:11)" , "answer" : "A reviling accusation "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Depravity of False Teachers
        { "question" : "1.	What do they speak evil of? (2 Peter 2:12)" , "answer" : "The things they do not understand"},
        { "question" : "2.	What will they utterly perish in? (2 Peter 2:12)" , "answer" : "Their own corruption"},
        { "question" : "3.	What are they liken to? (2 Peter 2:12)" , "answer" : "Natural brute beasts"},
        { "question" : "4.	What are natural brute beasts made to be? (2 Peter 2:10; 2pts)" , "answer" : "To be caught & destroyed"},
        { "question" : "5.	What will they receive as those who count it pleasure to carouse in the daytime? (2 Peter 2:13)" , "answer" : "The wages of unrighteousness"},
        //
        { "question" : "6.	When do those who count it pleasure to carouse, do so? (2 Peter 2:13)" , "answer" : "In the daytime"},
        { "question" : "7.	What do they carouse in while they feast with you? (2 Peter 2:13)" , "answer" : "Their own deceptions"},
        { "question" : "8.	“They are ___ and ___, carousing in their own ___ while they ___ with you.” (2 Peter 2:13; 4 pts)" , "answer" : "Spots, blemishes, deceptions, feast"},
        { "question" : "9.	What are their eyes full of? (2 Peter 2:14)" , "answer" : "Adultery"},
        { "question" : "10.	What can they not do because their eyes are full of adultery? (2 Peter 2:14)" , "answer" : "They cannot cease from sin"},
        //
        { "question" : "11.	Whom do they entice because their eyes are full of adultery and they cannot cease from sin? (2 Peter 2:14)" , "answer" : "Unstable souls"},
        { "question" : "12.	What is their heart trained in? (2 Peter 2:14)" , "answer" : "Covetous practices"},
        { "question" : "13.	What kind of children are they? (2 Peter 2:14)" , "answer" : "Accursed"},
        { "question" : "14.	What have they forsaken and done? (2 Peter 2:15; 2 pts)" , "answer" : "The right way & gone astray"},
        { "question" : "15.	What have they followed? (2 Peter 2:15)" , "answer" : "The way of Balaam "},
        //
        { "question" : "16.	Who was the son of Beor? (2 Peter 2:15)" , "answer" : "Balaam"},
        { "question" : "17.	What did Balaam love? (2 Peter 2:15)" , "answer" : "The wages of unrighteousness"},
        { "question" : "18.	For what was Balaam rebuked? (2 Peter 2:16)" , "answer" : "His iniquity "},
        { "question" : "19.	What restrained the madness of the prophet? (2 Peter 2:16; 2 pts)" , "answer" : "A dumb donkey, speaking with a man’s voice"},
        { "question" : "20.	What did a dumb donkey speaking with a man’s voice do? (2 Peter 2:16)" , "answer" : "Restrained the madness of the prophet"},
        //
        { "question" : "21.	What is carried by a tempest? (2 Peter 2:17)" , "answer" : "Clouds"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Deceptions of False Teachers
        { "question" : "1.	What do they speak? (2 Peter 2:18)" , "answer" : "Great swelling words of emptiness"},
        { "question" : "2.	How do they allure when they speak great swelling words? (2 Peter 2:18; 2 pts)" , "answer" : "Through the lusts of the flesh & through lewdness"},
        { "question" : "3.	Who do they allure when they speak great swelling words of emptiness? (2 Peter 2:18)" , "answer" : "The ones who have actually escaped from those who live in error"},
        { "question" : "4.	What are they promised & what are they slaves of? (2 Peter 2:19; 2 pts)" , "answer" : "Promised – liberty; Slaves – of corruption"},
        { "question" : "5.	By whom is a person brought into bondage? (2 Peter 2:19)" , "answer" : "A person by whom he is overcome"},
        //
        { "question" : "6.	What have they escaped? (2 Peter 2:20)" , "answer" : "The pollutions of the world"},
        { "question" : "7.	How have they escaped the pollutions of the world? (2 Peter 2:20)" , "answer" : "Through the knowledge of the Lord and Saviour Jesus Christ"},
        { "question" : "8.	What is worse for them than the beginning? (2 Peter 2:20)" , "answer" : "The latter end"},
        { "question" : "9.	What would it have been better they that had not known? (2 Peter 2:21)" , "answer" : "The way of righteousness "},
        { "question" : "10.	It would have been better for them not to have known the way of righteousness, than having known it to do what? (2 Peter 2:21)" , "answer" : "To turn from the holy commandment delivered to them"},
        //
        { "question" : "11.	What is the true proverb? (2 Peter 2:22; 2pts)" , "answer" : "‘A dog returns to his own vomit’ & ‘A sow, having washed, to her wallowing in the mire.’"}
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        /*
        //
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        */
    ],

    "c3":[
        //God’s Promise Is Not Slack
        { "question" : "1.	What is Peter writing to them? (2 Peter 3:1)" , "answer" : "This second epistle"},
        { "question" : "2.	What did Peter want to stir up in the beloved? (2 Peter 3:1)" , "answer" : "Your pure minds"},
        { "question" : "3.	How did Peter want to stir up their pure minds? (2 Peter 3:1)" , "answer" : "By way of reminder"},
        { "question" : "4.	What did Peter want them to be mindful of? (2 Peter 3:2; 2 pts)" , "answer" : "The words which were spoken before by the holy prophets & of the commandment of us, the apostles of the Lord and Saviour "},
        { "question" : "5.	Who wil1 come in the last days? (2 Peter 3:3)" , "answer" : "Scoffers"},
        //
        { "question" : "6.	How will scoffers walk in the last days? (2 Peter 3:3)" , "answer" : "According to their own lusts"},
        { "question" : "7.	What questions is asked in verse 4? (2 Peter 3:4)" , "answer" : "Where is the promise of His coming?"},
        { "question" : "8.	Since when has all things continued as they were from the beginning of creation? (2 Peter 3:4)" , "answer" : "Since the fathers slept"},
        { "question" : "9.	What have they willfully forgotten? (2 Peter 3:5)" , "answer" : "That by the word of God the heavens were of old & the earth standing out of water and in the water"},
        { "question" : "10.	What is earth standing out of and in? (2 Peter 3:5)" , "answer" : "Water"},
        //
        { "question" : "11.	What perished being flooded by water? (2 Peter 3:6)" , "answer" : "The world that then existed"},
        { "question" : "12.	What are being preserved by the same word? (2 Peter 3:7; 2 pts)" , "answer" : "The heavens and the earth"},
        { "question" : "13.	Why are the heavens and the earth now preserved by the same word? (2 Peter 3:7; 2 pts)" , "answer" : "They are reserved for fire until the day of judgement and perdition of ungodly men"},
        { "question" : "14.	What id the heavens and the earth reserved for until the day of judgement? (2 Peter 3:7)" , "answer" : "Fire"},
        { "question" : "15.	What should the beloved not forget? (2 Peter 3:8; 2 pts)" , "answer" : "That with the Lord one day is as a thousand and a thousand years as one day"},
        //
        { "question" : "16.	What is the Lord not slack concerning? (2 Peter 3:9)" , "answer" : "His promise"},
        { "question" : "17.	What is the Lord toward us? (2 Peter 3:9)" , "answer" : "Longsuffering "},
        { "question" : "18.	What is the Lord not willing to happen? (2 Peter 3:9)" , "answer" : "That any should perish"},
        { "question" : "19.	What does the Lord want all of us to come to? (2 Peter 3:9)" , "answer" : "To come to repentance"},
        //{ "question" : "" , "answer" : ""},
        //The Day of the Lord
        { "question" : "1.	What will come as a thief in the night? (2 Peter 3:10)" , "answer" : "The day of the Lord"},
        { "question" : "2.	How will the heavens pass away? (2 Peter 3:10)" , "answer" : "2.	How will the heavens pass away? (2 Peter 3:10)"},
        { "question" : "3.	What will melt & how will it melt? (2 Peter 3:10; 2 pts)" , "answer" : "The elements; will melt with fervent heat"},
        { "question" : "4.	What will be burned up? (2 Peter 3:10: 2pts)" , "answer" : "The earth and the works that are in it"},
        { "question" : "5.	What will happen to all these things? (2 Peter 3:11)" , "answer" : "They will be dissolved"},
        //
        { "question" : "6.	“Since all these things will be ____, what manner of _____ ought you to be in ____ _____ and ____.” (2 Peter 3:11; 5 pts)" , "answer" : "Dissolved, persons, holy, conduct, godliness"},
        { "question" : "7.	How will the heavens be dissolved? (2 Peter 3:12: 2pts)" , "answer" : "Being on fire & the elements will melt with fervent heat"},
        { "question" : "8.	What are we looking for and hastening? (2 Peter 3:12)" , "answer" : "The coming of the day of God  "},
        { "question" : "9.	What do we look for according to His promise? (2 Peter 3:13; 2 pts)" , "answer" : "New heavens and a new earth "},
        { "question" : "10.	What dwells in the new heavens and the new earth that we look for according to His promise? (2 Peter 3:13)" , "answer" : "Righteousness"},
        //
        { "question" : "11.	Why do we look for new heavens and a new earth in which righteousness dwells? (2 Peter 3:13)" , "answer" : "According to His promise"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""}
        //Be Steadfast
        { "question" : "1.	What should we do to be found by Him in peace, without spot and blameless? (2 Peter 3:14)" , "answer" : "Be diligent"},
        { "question" : "2.	How did Peter address the brethren in verse 14? (2 Peter 3:14)" , "answer" : "Beloved"},
        { "question" : "3.	How should we be found by Him in peace when we are diligent? (2 Peter 3:14; 2pts)" , "answer" : "Without spot & blameless "},
        { "question" : "4.	What should we consider as salvation? (2 Peter 3:15)" , "answer" : "The longsuffering of our Lord"},
        { "question" : "5.	Who is our beloved brother? (2 Peter 3:15)" , "answer" : "Paul"},
        //
        { "question" : "6.	According to what has our beloved brother, Paul written to us? (2 Peter 3:15)" , "answer" : "The wisdom given to him"},
        { "question" : "7.	What two words are used to describe people who twist some things that are hard to understand to their own destruction? (2 Peter 3:16; 2 pts)" , "answer" : "Untaught and unstable"},
        { "question" : "8.	In addition, to some things which are hard to understand, what do untaught and unstable people twist to their own destruction? (2 Peter 3:16)" , "answer" : "The rest of the Scriptures"},
        { "question" : "9.	What are you being led away with? (2 Peter 3:17)" , "answer" : "The error of the wicked"},
        { "question" : "10.	What should you do lest you fall from your own steadfastness? (2 Peter 3:17)" , "answer" : "Beware"},
        //
        { "question" : "11.	When did Peter say the beloved knew of this? (2 Peter 3:17)" , "answer" : "Beforehand"},
        { "question" : "12.	From what would you fall from if you did not beware? (2 Peter 3:17)" , "answer" : "Your own steadfastness"},
        { "question" : "13.	What did Peter instruct them to grow pin? (2 Peter 3:18; 2pts)" , "answer" : "The grace and knowledge of our Lord & Saviour Jesus Christ"},
        { "question" : "14.	What should be to Him now & forever? (2 Peter 3:18)" , "answer" : "Glory"},
        { "question" : "15.	What is the last word in the book of 2 Peter? (2 Peter 3:18)" , "answer" : "Amen"}
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


function peter_2_c1(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_2.c1.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_2.c1[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_2.c1[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function peter_2_c2(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_2.c2.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_2.c2[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_2.c2[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function peter_2_c3(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_2.c3.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_2.c3[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_2.c3[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}