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

var hebrews = { //might need to add "james" : [] but dont have to cause chapters are definet numbers
    "c1":[
        //God’s Supreme Revelation
        { "question" : "1.	How did God speak to the fathers in time past? (Heb 1:1; 2 pts)" , "answer" : "At various times & in various ways"},
        { "question" : "2.	By whom did God speak to the fathers in time past? (Heb 1:1)" , "answer" : "The prophets"},
        { "question" : "3.	When did God speak with the fathers in time past by the prophets? (Heb1:1)" , "answer" : "At various times"},
        { "question" : "4.	How has He (God) spoken to us in these last days? (Heb1:2)" , "answer" : "By His Son"},
        { "question" : "5.	Who has He (God0 appointed heir of all things? (Heb1:2)" , "answer" : "His Son"},
        //
        { "question" : "6.	What has He (God) also made through His Son? (Heb1:2)" , "answer" : "The worlds"},
        { "question" : "7.	What is the Son the brightness and express image of the Father? (Heb1:3; 2 pts)" , "answer" : "Brightness of His glory & express image of His person"},
        { "question" : "8.	Where has the Son sat down? (Heb1:3; 2pts)" , "answer" : "At the right hand of the Majesty on high"},
        { "question" : "9.	What had He (the Son) done by Himself? (Heb1:3)" , "answer" : "Purged our sins"},
        { "question" : "10.	How is He (the Son) upholding all things? (Heb1:3)" , "answer" : "By the word of His power"},
        //
        { "question" : "11.	Who has the Son become so much better than? (Heb1:4)" , "answer" : "The angels"},
        { "question" : "12.	How had He (the Son) obtained a more excellent name than they (the angels)? (Heb1:4)" , "answer" : "By inheritance"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Son Exalted Above Angels
        { "question" : "1.	“For to which of the ____ did He ever say: “You are My ___, today I have ____ You”? And again: “I will be to Him a ___, and He shall be to Me a ___.?” (Heb1:5; 5 pts)" , "answer" : "Angels, Son, begotten, Father, Son"},
        { "question" : "2.	What did He (the Father) again say when He brough the firstborn into the world? (Heb1:6; 8 pts)" , "answer" : "Let all the angels of God worship Him"},
        { "question" : "3.	Whom di He (the Father) say should worship Him (the firstborn)? (Heb1:6)" , "answer" : "All the angels of God"},
        { "question" : "4.	What has He made His angels & His ministers? (Heb1:7; 2 pts)" , "answer" : "His angels – spirits & His ministers – a flame of fire"},
        { "question" : "5.	What did the Father say is forever and ever? (Heb1:8)" , "answer" : "Your (God’s) throne"},
        //
        { "question" : "6.	What kind of scepter would the kingdom have? (Heb1:8)" , "answer" : "A scepter of righteousness"},
        { "question" : "7.	Whose throne is forever and ever? (Heb1:8)" , "answer" : "God’s"},
        { "question" : "8.	What did the Father say the Son loved & hated? (Heb1:9; 2 pts)" , "answer" : "Loved – righteousness & hated – lawlessness"},
        { "question" : "9.	What has God anointed the Son with? (Heb1:9)" , "answer" : "The oil of gladness"},
        { "question" : "10.	More than whom had He (God) anointed Him (the Son) with the oil of gladness? (Heb1:9)" , "answer" : "Your (the Son’s) companions"},
        //
        { "question" : "11.	What did the Lord do in the beginning & are the work of Your hands? (Heb1:10)" , "answer" : "Laid the foundation of the earth & the heavens (are the work of Your hands)"},
        { "question" : "12.	What is the work of Your hands? (Heb1:10)" , "answer" : "The heavens"},
        { "question" : "13.	How will they grow old? (Heb1:11)" , "answer" : "Like a garment"},
        { "question" : "14.	Who will perish & who will remain? (Heb1:11; 2 pts)" , "answer" : "They will perish & You will remain"},
        { "question" : "15.	How will You fold them up? (Heb1:12)" , "answer" : "Like a cloak"},
        //
        { "question" : "16.	“Like a ____ You will ___ them up, and they will ___. But You are the ____, and Your ___ will not ___.” (Heb1:12; 6 pts)" , "answer" : "Cloak, fold, changed, same, years, fail"},
        { "question" : "17.	What will not fail? (Heb1:12)" , "answer" : "Your (the Son’s) years"},
        { "question" : "18.	“___ at My ____ ____, till I ____ your ____ Your ___?” (Heb1:13; 6 pts)" , "answer" : "Sit, right, hand, make, enemies, footstool"},
        { "question" : "19.	Who are known as ministering spirits? (Heb1:13- 14)" , "answer" : "Angels"},
        { "question" : "20.	Who are the ministering spirits sent to minister for? (Heb1:15)" , "answer" : "Those who will inherit salvation"}
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
        //Do Not Neglect Salvation 
        { "question" : "1.	What should we give to the things were have heard? (Heb2:1)" , "answer" : "A more earnest heed"},
        { "question" : "2.	Why should we give a more earnest heed to the things we have heard? (Heb2:1)" , "answer" : "Lest we drift away"},
        { "question" : "3.	What will every transgression and disobedience receive? (Heb2:2)" , "answer" : "A just reward"},
        { "question" : "4.	What will receive a just reward? (Heb2:2; 2pts)" , "answer" : "Every transgression & disobedience"},
        { "question" : "5.	Who is the word spoken through? (Heb2:2)" , "answer" : "Angels"},
        //
        { "question" : "6.	‘For if the ___ spoken through ____ proved ___. And every ____ and ____ received a ___ reward.” (Heb2:2; 6 pts)" , "answer" : "Word, angels, steadfast, transgression, disobedience, just"},
        { "question" : "7.	What have we neglected? (Heb2:3)" , "answer" : "So great a salvation or simply salvation"},
        { "question" : "8.	By whom was salvation first spoken to us? (Heb2:3)" , "answer" : "The Lord"},
        { "question" : "9.	Who confirmed to us salvation? (Heb2:3)" , "answer" : "Those who heard him"},
        { "question" : "10.	By what ways did God bear witness to us? (Heb2:4, 4 pts)" , "answer" : "Both with signs and wonders, with various miracles and the gifts of the Holy Spirit"},
        //
        { "question" : "11.	How did God bear witness both with signs and wonders, with various miracles and the gifts of the Holy Spirit? (Heb2:4)" , "answer" : "According to His own will "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Son Made Lower than Angels
        { "question" : "1.	What do we speak about? (Heb2:5)" , "answer" : "The world to come"},
        { "question" : "2.	What has He (the Lord) not put in subjection to angels? (Heb2:5)" , "answer" : "The world to come"},
        { "question" : "3.	Finish the following: ‘What is man that You are _____ __ ___? Or the ___ of ___ that you ____ ____ of him? (Heb2:6; 7 pts)" , "answer" : "Mindful, of, him, son, man, take, care"},
        { "question" : "4.	What does one do in a certain place by asking – what is man that You are mindful of him? (Heb2:6)" , "answer" : "Testify"},
        { "question" : "5.	Who was made a little lower than the angels? (Heb2:7)" , "answer" : "Him (Jesus)"},
        //
        { "question" : "6.	What has He crowned Him with? (Heb2:7; 2 pts)" , "answer" : "Glory & honour"},
        { "question" : "7.	What was man set man? (Heb2:7)" , "answer" : "The works of Your (the Lord’s) hands"},
        { "question" : "8.	What has He (the Lord) put in subjection under his (man’s) feet? (Heb2:8)" , "answer" : "All things"},
        { "question" : "9.	What has He left that is not put under him (man)? (Heb2:8)" , "answer" : "Nothing"},
        { "question" : "10.	What do we not yet see? (Heb2:9)" , "answer" : "All things put under him"},
        //
        { "question" : "11.	How might Jesus taste death for everyone? (Heb2:9)" , "answer" : "By the grace of God"},
        { "question" : "12.	Who was made a little lower than the angels? (Heb2:9)" , "answer" : "Jesus"},
        { "question" : "Why was Jesus made a little lower than angels? (Heb2:9)" , "answer" : "For the suffering of death"},
        { "question" : "What was the suffering of death crowned with? Heb2:9; 2 pts)" , "answer" : "Glory & honour"},
        { "question" : "Who will Jesus taste death for by the grace of God? (Heb2:9)" , "answer" : "Everyone"},
        //Bringing Many Sons to Glory
        { "question" : "1.	Who was made perfect through suffering? (Heb2:10)" , "answer" : "The captain of their salvation"},
        { "question" : "2.	Who was it fitting for Him to bring to glory? (Heb2:10)" , "answer" : "Many sons"},
        { "question" : "3.	Who are all of one? (Heb2:11; 2 pts)" , "answer" : "He who sanctifies & those who are being sanctified"},
        { "question" : "4.	Why is He not ashamed to call them brethren? (Heb2:11)" , "answer" : "Because we are all of one"},
        { "question" : "5.	What is He not ashamed to call them? (Heb2:11)" , "answer" : "Brethren"},
        //
        { "question" : "6.	What did He say He will declare to His brethren? (Heb2:12)" , "answer" : "Your name"},
        { "question" : "7.	Where did He say He will sing praise to You? (Heb2:12)" , "answer" : "In the midst of the assembly"},
        { "question" : "8.	What did He (Jesus) say He (Jesus) would put in Him (God)? (Heb2:13)" , "answer" : "My trust"},
        { "question" : "9.	What did He say again in verse 13? (Heb2:13; 2 pts)" , "answer" : "I will put My trust in Him? & Here am I and the children whom God has given Me?"},
        { "question" : "10.	Who might He destroy through destroy? (Heb2:14; 2 pts)" , "answer" : "He who has the power of death, that is the devil"},
        //
        { "question" : "11.	What did He say the children has partaken of? (Heb2:14; 2 pts)" , "answer" : "Flesh & blood"},
        { "question" : "12.	Who has partaken of flesh & blood? (Heb2:14; 2 pts)" , "answer" : "the children & He Himself"},
        { "question" : "13.	Who has He released that has been subject to bondage all their lifetime? (Heb2:15) " , "answer" : "Those who have the fear of death "},
        { "question" : "14.	What have those who through the fear of death were all their lifetime subject to? (Heb2:15)" , "answer" : "Bondage"},
        { "question" : "15.	To whom does He not give aid? (Heb2:16)" , "answer" : "Angels"},
        //
        { "question" : "16.	To whom does He give aid to? (Heb2:16)" , "answer" : "To the seed of Abraham"},
        { "question" : "17.	Why was He (Jesus) made like His brethren? (Heb2: l7; 2 pts)" , "answer" : "That He might be a merciful and faithful High Priest in things pertaining to God"},
        { "question" : "18.	Why was He (Jesus) made a merciful & faithful High Priest? (Heb2:17)" , "answer" : "To make propitiation for the sins of the people"},
        { "question" : "19.	Why will He (Jesus) be able to aid those who are tempted? (Heb2:18; 2 pts)" , "answer" : "For He Himself has suffered, being tempted"},
        { "question" : "20.	How has He (Jesus) suffered? (Heb2:18)" , "answer" : "He was tempted "},
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
        //The Son Was Faithful
        { "question" : "1.	What two titles were given to Christ Jesus? (Heb3:1; 2pts)" , "answer" : "The Apostle & High Priest of our confession "},
        { "question" : "2.	What are the holy brethren partakers of? (Heb3:1)" , "answer" : "The heavenly calling"},
        { "question" : "3.	Who was He (Christ Jesus) faithful to? (Heb3:2)" , "answer" : "He who appointed Him"},
        { "question" : "4.	Who was also faithful in all His house? (Heb3:2)" , "answer" : "Moses"},
        { "question" : "5.	Who has more honour than the house? (Heb3:3)" , "answer" : "He who built the house"},
        //
        { "question" : "6.	What has this One been counted worthy of than Moses? (Heb3:3)" , "answer" : "More glory"},
        { "question" : "7.	Who has built all things? (Heb3:4)" , "answer" : "God"},
        { "question" : "8.	What is built by someone? (Heb3:4)" , "answer" : "Every house"},
        { "question" : "9.	What was Moses faithful in? (Heb3:5)" , "answer" : "All His house"},
        { "question" : "10.	How was Moses faithful in all His house? (Heb3:5)" , "answer" : "As a servant"},
        //
        { "question" : "11.	Why was Moses faithful in all His house as a servant? (Heb3:5)" , "answer" : "For a testimony of those things which would be spoken afterward"},
        { "question" : "12.	What is Christ as a Son over? (Heb3:6)" , "answer" : "His over house"},
        { "question" : "13.	How can be a part of the house of Jesus? (Heb3:6; 2 pts)" , "answer" : "If we hold fast the confidence & the rejoicing of the hope firm to the end"},
        { "question" : "14.	What should we hold fast to so we can be a part of the house of Jesus? (Heb3:6; 2 pts)" , "answer" : "The confidence & the rejoicing of the hope firm to the end"},
        //{ "question" : "" , "answer" : ""},
        //Be Faithful
        { "question" : "1.	Who said these words, ‘Today, if you will hear His voice, do not harden your hearts as in the rebellion…’?  (Heb3:7-8)" , "answer" : "The Holy Spirit"},
        { "question" : "2.	‘____, if you will ____ His ___, do not ___ your ____ as in the _____, in the day of ____ in the _____.’ (Heb3:7 – 8; 8pts)" , "answer" : "Today, hear, voice, harden, hearts, rebellion, trial, wilderness"},
        { "question" : "3.	What should we not harden as in the rebellion? (Heb3:8)" , "answer" : "Your hearts"},
        { "question" : "4.	What did your fathers do to Me (the Lord) in the wilderness? (Heb3:9; 2 pts)" , "answer" : "Tested and tried Him"},
        { "question" : "5.	What did our father see from the Lord in the wilderness? (Heb3:9)" , "answer" : "His works"},
        //
        { "question" : "6.	How long did our fathers see the works of the Lord in the wilderness? (Heb3:9)" , "answer" : "Forty years"},
        { "question" : "7.	What did the Lord say He was always with that generation? (Heb3:10)" , "answer" : "Angry"},
        { "question" : "8.	Where is it stated that they (our fathers) always go astray? (Heb3:10)" , "answer" : "In their hearts"},
        { "question" : "9.	What did the Lord say they (our fathers) have not known? (Heb3:10)" , "answer" : "My (the Lord’s) ways"},
        { "question" : "What did the Lord swear in His angry? (Heb3:11)" , "answer" : "They shall not enter into My (the Lord’s) rest "},
        //
        { "question" : "11.	What would cause us to depart from the living God? (Heb3:12)" , "answer" : "An evil heart of unbelief"},
        { "question" : "12.	What can an evil heart of unbelief cause us to do? (Heb3:12)" , "answer" : "Depart from the living God"},
        { "question" : "13.	What should we do to one another daily? (Heb3:13)" , "answer" : "Exhort "},
        { "question" : "14.	Why should we exhort one another daily, while it is called today? (Heb3:13)" , "answer" : "Lest any of you be hardened through the deceitfulness of sin"},
        { "question" : "15.	How can we be hardened? (Heb3:13)" , "answer" : "through the deceitfulness of sin"},
        //
        { "question" : "16.	What do we become if we hold the beginning of our confidence steadfast to the end? (Heb3:14)" , "answer" : "Partakers of Christ"},
        { "question" : "17.	How will we become partakers of Christ? (Heb3:4)" , "answer" : "If we hold the beginning of our confidence steadfast to the end"},
        { "question" : "18.	‘____, if you will ___ His ____, do not ____ your ____ as in the _____.’ (Heb3:15; 6pts)" , "answer" : "Today, hear, voice, harden, hearts rebellion"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Failure of the Wilderness Wanderers
        { "question" : "1.	What did those who heard do? (Heb3:16)" , "answer" : "Rebelled"},
        { "question" : "2.	Who rebelled? (Heb3:16; 2 pts)" , "answer" : "Those who heard, all who came out of Egypt"},
        { "question" : "3.	Who led them out of Egypt? (Heb3:16)" , "answer" : "Moses"},
        { "question" : "4.	With whom was He (the Lord) angry with for forty years? (Heb3:17; 2 pts)" , "answer" : "Those who sinned, whose corpses fell in the wilderness"},
        { "question" : "5.	Where did the corpses fall? (Heb3:17)" , "answer" : "In the wilderness"},
        //
        { "question" : "6.	To whom did He swear that they would not enter His rest? (Heb3:18)" , "answer" : "Those who did not obey"},
        { "question" : "7.	What will happen to those who did not obey? (Heb3:18)" , "answer" : "They will not enter in His rest"},
        { "question" : "8.	Why could they not enter in His rest? (Heb3:19)" , "answer" : "Because of unbelief"}
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
    "c4":[
        //The Promise of Rest
        { "question" : "1.	What remains of entering His rest? (Heb4:1)" , "answer" : "A promise"},
        { "question" : "2.	What should we do lest we seem to have come short of His rest? (Heb4:1)" , "answer" : "Fear"},
        { "question" : "3.	What was preached to us as well as to them? (Heb4:2)" , "answer" : "The gospel"},
        { "question" : "4.	Who was the gospel preached to? (Heb4:2; 2 pts)" , "answer" : "Us, as well as to them"},
        { "question" : "5.	What did not profit them? (Heb4:2)" , "answer" : "The word which they heard"},
        //
        { "question" : "6.	Why did the word which they heard not profit them? (Heb4:2)" , "answer" : "Because it was not mixed with faith in those who heard it"},
        { "question" : "7.	Who has entered that rest? (Heb4:3)" , "answer" : "We who have believed"},
        { "question" : "8.	What did He swear by? (Heb4:3)" , "answer" : "By His wrath"},
        { "question" : "9.	What did He swear in His wrath? (Heb4:3)" , "answer" : "That ‘they shall not enter My rest’"},
        { "question" : "10.	When was the works finished? (Heb4:3)" , "answer" : "From the foundation of the world"},
        //
        { "question" : "11.	Who rested on the seventh day? (Heb4:4)" , "answer" : "God"},
        { "question" : "12.	What did God rest from on the seventh day? (Heb4:4)" , "answer" : "From all His works"},
        { "question" : "13.	When did God rest from all His works? (Heb4:4)" , "answer" : "On the seventh day"},
        { "question" : "14.	Finish the following verse, “And again in this place: “They ___ ____ ___ ___ ___.” (Heb4:5)" , "answer" : "Shall not enter My rest"},
        { "question" : "15.	Why did those to whom it was first preached not enter in? (Heb4:6)" , "answer" : "Because of disobedience"},
        //
        { "question" : "16.	Fill in the blanks: “Since therefore it ___ that ___ must ___ it, and those to whom it was first ____ did not ___ because of ____.” (Heb4:6)" , "answer" : "Remains, some, enter, preached, enter, disobedience"},
        { "question" : "17.	What should we not do today, if you hear His voice? (Heb4:7)" , "answer" : "Harden your hearts"},
        { "question" : "18.	Who said the following word, ‘Today, if you hear His voice, Do not harden your hearts?’ (Heb4:7)" , "answer" : "David"},
        { "question" : "19.	Who would not have spoken of another day afterwards? (Heb 4:8)" , "answer" : "Joshua "},
        { "question" : "20.	Why would Joshua not have spoken to them about another day? (Heb 4:8)" , "answer" : "If he had given them rest"},
        //
        { "question" : "21.	What remains for the people of God? (Heb4:9)" , "answer" : "A rest"},
        { "question" : "22.	What has he who has entered His rest ceased from? (Heb4:10)" , "answer" : "His works "},
        { "question" : "23.	Who also ceased from His works? (Heb4:10)" , "answer" : "God "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Word Discovers Our Condition
        { "question" : "1.	What should we be diligent to enter? (Heb4:11)" , "answer" : "That rest "},
        { "question" : "2.	Why should we be diligent to enter that rest? (Heb4:11; 2 pts)" , "answer" : "Lest anyone fall according to the same example of disobedience"},
        { "question" : "3.	How is the word of God described? (Heb4:12; 3 pts)" , "answer" : "Living, powerful & sharper than any two-edged sword"},
        { "question" : "4.	How does the word of God pierce? (Heb4:12; 4 pts)" , "answer" : "Even to the division of soul and spirit & of joints and marrow"},
        { "question" : "5.	What is the word of God a discerner of? (Heb4:12; 2 pts)" , "answer" : "The thoughts and intents of the heart"},
        //
        { "question" : "6.	“For the word of God is ___ and ___, and ____ than any ___-___ sword, piercing even to the division of ___ and ___, and of ___ and ____, and is a discerner of the ___ and ___ of the heart.” (Heb4:12; 10 pts)" , "answer" : "Living, powerful, sharper, two-edged, soul, spirit, joints, marrow, thoughts, intents"},
        { "question" : "7.	What is not hidden from His sight? (Heb4:13)" , "answer" : "No creature"},
        { "question" : "8.	What are all things to the eyes of Him to whom we must give account? (Heb4:13; 2 pts)" , "answer" : "Naked and open "},
        { "question" : "9.	To whom are all things naked and open to? (Heb4:13; 2 pts)" , "answer" : "To the eyes of Him to whom we must give an account"},
        //{ "question" : "" , "answer" : ""},
        //Our Compassionate High Priest
        { "question" : "1.	Whom do we have that has passed through the heavens? (Heb4:14; looking for title)" , "answer" : "A great High Priest"},
        { "question" : "2.	Who is our great High Priest that has passed through the heavens? (Heb4:14; 2pts)" , "answer" : "Jesus, the Son of God"},
        { "question" : "3.	Where has Jesus, the Son of God and our great High Priest pass through? (Heb4:14)" , "answer" : "the heavens"},
        { "question" : "4.	What should we do because we have a great High Priest who has passed through the heavens? (Heb4:14)" , "answer" : "Hold fast our confession"},
        { "question" : "5.	What can our High Priest do? (Heb4:15)" , "answer" : "Sympathize with our weaknesses"},
        //
        { "question" : "6.	Why can our High Priest sympathize with our weaknesses? (Heb4:15)" , "answer" : "Because He was in all points tempted as we are "},
        { "question" : "7.	True/False – Our High Priest was tempted in all points as we are tempted, yet He sinned. (Heb4:15)" , "answer" : "False – He did not sin"},
        { "question" : "8.	How should we come to the throne of grace? (Heb4:16)" , "answer" : "Boldly"},
        { "question" : "9.	Where should we come boldly? (Heb4:16)" , "answer" : "The throne of grace"},
        { "question" : "10.	Why should we come bold to the throne of grace? (Heb4:16; 2 pts)" , "answer" : "To obtain mercy & find grace to help in time of need"}
        /*
        //
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        */
        
    ],
    "c5":[
        
        //Qualifications for High Priesthood
        { "question" : "1.	What may every high priest offer for sins? (Heb5:1; 2pts)" , "answer" : "Gifts & sacrifices"},
        { "question" : "2.	Who is every high priest who is taken from among men appointed for? (Heb5:1)" , "answer" : "For men "},
        { "question" : "3.	What is every high priest who is taken from among men for men appointed for? (Heb5:1)" , "answer" : "Things pertaining to God"},
        { "question" : "4.	Who can he (every high priest) have compassion on? (Heb5:2; 2 pts)" , "answer" : "Those who are ignorant and going astray"},
        { "question" : "5.	Why does the high priest have compassion on those who are ignorant and going astray? (Heb5:2)" , "answer" : "Because he himself is also subject to weakness"},
        //
        { "question" : "6.	What does the high priest have on those who are ignorant and going astray? (Heb5:2)" , "answer" : "Compassion"},
        { "question" : "7.	What is the high priest also required to do for himself as for the people? (Heb5:3)" , "answer" : "Offer sacrifices for sins"},
        { "question" : "8.	For whom does the high priest offer sacrifices for sins? (Heb5:3; 2 pts)" , "answer" : "For the people and for himself"},
        { "question" : "9.	Who was called by God? (Heb5:4)" , "answer" : "10.	What does no man take to himself? (Heb5:4)"},
        { "question" : "10.	What does no man take to himself? (Heb5:4)" , "answer" : "This honour "},
        //
        { "question" : "11.	Who takes this honour? (Heb5:4)" , "answer" : "He who is called by God"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //A Priest Forever
        { "question" : "1.	Who did not glorify Himself to become High Priest? (Heb5:5)" , "answer" : "Christ"},
        { "question" : "2.	How was Christ glorified? (Heb5:5; 2 pts)" , "answer" : "When He (the Father) said – ‘You are My Son, today I have begotten You.’"},
        { "question" : "3.	According to which order is Christ High Priest forever? (Heb5:6)" , "answer" : "The order of Melchizedek"},
        { "question" : "4.	How long is Christ a priest? (Heb5:6)" , "answer" : "Forever"},
        { "question" : "5.	What had He offered up in the days of His flesh? (Heb5:7; 2 pts)" , "answer" : "Prayers & supplications"},
        //
        { "question" : "6.	How had He offered up prayers and supplications in the days of His flesh? (Heb5:7; 2 pts)" , "answer" : "With vehement cries and tears"},
        { "question" : "7.	To whom did He offer up prayers and supplications with vehement cries and tears?  (Heb5:7; 2pts)" , "answer" : "To Him who was able to save Him from death"},
        { "question" : "8.	Why was His prayers and supplications heard? (Heb5:7)" , "answer" : "Because of His godly fear"},
        { "question" : "9.	How did He (the Son) learn obedience? (Heb5: 8)" , "answer" : "By the things which He suffered"},
        { "question" : "10.	How did He become the author of eternal salvation to all who obey Him? (Heb5:9)" , "answer" : "Having been perfected"},
        //
        { "question" : "11.	What did He become having been perfected? (Heb5:9)" , "answer" : "The author of eternal salvation to all who obey Him"},
        { "question" : "12.	To whom is He the author of eternal salvation? (Heb5:9)" , "answer" : "All who obey Him"},
        { "question" : "13.	By whom is He call as High Priest? (Heb5:10)" , "answer" : "God"},
        { "question" : "14.	According to what order is He called by God as High Priest? (Heb5:10)" , "answer" : "The order of Melchizedek"},
        { "question" : "Why have we much to say and hard to explain about the High Priest according to the order of Melchizedek? (Heb5:10 – 11)" , "answer" : "Because we have become dull of hearing"},
        //Spiritual Immaturity
        { "question" : "1.	What should you be at this time? (Heb5:12)" , "answer" : "Teachers"},
        { "question" : "2.	What do you need someone to teach you again? (Heb5:12)" , "answer" : "The first principles of the oracles of God"},
        { "question" : "3.	What have you come to need instead of solid food? (Heb5:12)" , "answer" : "Milk"},
        { "question" : "4.	What is everyone who partakes only of milk? (Heb5:13)" , "answer" : "Unskilled in the word of righteousness"},
        { "question" : "5.	Who is unskilled in the word of righteousness? (Heb5:13)" , "answer" : "Everyone who partakes only of milk"},
        //
        { "question" : "6.	Why is he unskilled in the word of righteousness if he partakes only of milk? (Heb5:13)" , "answer" : "He is a babe"},
        { "question" : "7.	To whom does solid food belong? (Heb5:14)" , "answer" : "To those who are of full age"},
        { "question" : "8.	What can those who are of full age able to discern? (Heb5:14; 2 pts)" , "answer" : "Both good and evil"},
        { "question" : "9.	What do those who are of full age exercise to discern both good and evil? (Heb5:14)" , "answer" : "Their senses"}
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
    "c6":[
        //The Peril of Not Progressing
        { "question" : "1.	What should we not lay again? (Heb6:1)" , "answer" : "The foundation of repentance"},
        { "question" : "2.	What should we leave behind as we go on to perfection? (Heb6:1)" , "answer" : "The discussion of the elementary principles of Christ"},
        { "question" : "3.	What do we go on to when we leave the discussion of the elementary principles of Christ? (Heb6:1)" , "answer" : "Perfection"},
        { "question" : "4.	What is the foundation of repentance made up of? (Heb6:1- 2; 6 pts)" , "answer" : "Dead works and of faith toward God, of the doctrine of baptisms, of laying on of hands, of resurrection of the dead and of eternal judgement. "},
        { "question" : "5.	How will we do this (the elementary principles of Christ)? (Heb6:1 - 3) emphasis verse 3" , "answer" : "If God permits"},
        //
        { "question" : "6.	Fill in the blanks: “For it is ____ for those who were once ____, and have ___ the ____ gift, and have become partakers of the ___ ___.” (Heb6:4; 6 pts)" , "answer" : " Impossible, enlightened, tasted, heavenly, Holy, Spirit"},
        { "question" : "7.	What have they tasted of? (Heb6:5; 2 pts)" , "answer" : "The good word of God & the powers of the age to come"},
        { "question" : "8.	What do they do again for themselves if they fall away? (Heb6:6; 2 pts)" , "answer" : "Crucify again the Son of God and put Him to open shame"},
        { "question" : "9.	Whom do they crucify again and put to open shame when they fall away? (Heb6:6)" , "answer" : "The Son of God"},
        { "question" : "10.	What does the earth drink? (Heb6:7)" , "answer" : "The rain – that often comes upon it"},
        //
        { "question" : "11.	What does the earth bears? (Heb6:7)" , "answer" : "Herbs"},
        { "question" : "12.	Who are the herbs useful for? (Heb6:7)" , "answer" : "Those by whom it is cultivated"},
        { "question" : "13.	What do we receive when the earth bears herbs that is useful for those by whom it is cultivated? (Heb6:7)" , "answer" : "Blessing from God"},
        { "question" : "14.	In addition to herbs, what else can the earth bear? (Heb6:8; 2 pts)" , "answer" : "Thorns and briers"},
        { "question" : "15.	What will happen when the earth bears thorns and briers? (Heb6:7 – 8; 3 pts)" , "answer" : "It is rejected, near to being cursed, whose end is to be burned "},
        //A Better Estimate
        { "question" : "1.	What were they confident of for the beloved? (Heb6:9)" , "answer" : "Better things concerning them"},
        { "question" : "2.	What accompanied the better things that they were confident for the beloved? (Heb6:9)" , "answer" : "Salvation"},
        { "question" : "3.	What is God not unjust to forget? (Heb6:10; 2 pts)" , "answer" : "Your work and labour of love which you have shown towards His name"},
        { "question" : "4.	Who is not unjust to forget your work and labour of love? (Heb6:10)" , "answer" : "God"},
        { "question" : "5.	To whom did they minister to? (Heb6:10)" , "answer" : "The saints"},
        //
        { "question" : "6.	True or false – Were they still ministering to the saints. (Heb6:10)" , "answer" : "True – In that you have ministered to the saints and do minister"},
        { "question" : "7.	What were they confident of for the beloved? (Heb6:9)" , "answer" : "Better things concerning them"},
        { "question" : "8.	What do they desire that each one of you show? (Heb6:11)" , "answer" : "The same diligence "},
        { "question" : "9.	How did they desire that we show the same diligence? (Heb6:11)" , "answer" : "To the full assurance of hope "},
        { "question" : "10.	Whom should we imitate? (Heb6:12; 2 pts)" , "answer" : "Those who through faith and patience inherit the promises"},
        //
        { "question" : "11.	What should we not become? (Heb6:12)" , "answer" : "Sluggish"},
        { "question" : "12.	Through what did they inherit the promises? (Heb6:12; 2 pts)" , "answer" : "Faith and patience"},
        { "question" : "13.	Why should we imitate those who through faith and patience inherit the promises? (Heb6:12)" , "answer" : "So, we do not become sluggish"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //God’s Infallible Purpose in Christ
        { "question" : "1.	To whom did God make a promise with? (Heb6:13)" , "answer" : "Abraham"},
        { "question" : "2.	Who did God swear by? (Heb6:13)" , "answer" : "By Himself"},
        { "question" : "3.	Why did God swear by Himself? (Heb6:13)" , "answer" : "Because He could swear by no one greater"},
        { "question" : "4.	What was the promise that God made with Abraham? (Heb6:14; 2pts)" , "answer" : "Surely, blessing I will bless you, and multiplying I will multiply you. "},
        { "question" : "5.	When did Abraham obtain the promise? (Heb6:15)" , "answer" : "After he patiently endured"},
        //
        { "question" : "6.	What did he (Abraham) obtain after he patiently endured? (Heb6:15)" , "answer" : "The promise"},
        { "question" : "7.	By whom do men swear? (Heb6:16) " , "answer" : "By the greater"},
        { "question" : "8.	What is a confirmation for men for the end of all dispute? (Heb6:16)" , "answer" : "An oath"},
        { "question" : "9.	What did God wish to show more abundantly to the heirs of promise? (Heb6:17)" , "answer" : "The immutability of His counsel"},
        { "question" : "10.	To whom did God wish to show more abundantly the immutability of His counsel? (Heb6:17)" , "answer" : "The heirs of promise"},
        //
        { "question" : "11.	How did God confirm that He was determined to show mote abundantly to the heirs of promise the immutability of His counsel? (Heb6:17)" , "answer" : "By an oath"},
        { "question" : "12.	What is it impossible for God to do? (Heb6:18)" , "answer" : "To lie"},
        { "question" : "13.	Fill in the blanks: “This ___ we have as an ___ of the ___, both ___ and ___, and which enters the ____ behind the veil.” (Heb6:19; 6 pts)" , "answer" : "Hope, anchor, soul, sure, steadfast, Presence "},
        { "question" : "14.	What do we have as an anchor of the soul? (Heb6:19)" , "answer" : "This hope"},
        { "question" : "15.	Who is the forerunner? (Heb6:20)" , "answer" : "Jesus"},
        //
        { "question" : "16.	What has Jesus become for us? (Heb6:20)" , "answer" : "High Priest"},
        { "question" : "17.	What order has Jesus become High Priest forever? (Heb6:20)" , "answer" : "Melchizedek "},
        { "question" : "18.	True / False – Jesus has become High Priest forever according to the order of Aaron. (Heb6:20)" , "answer" : "False – Melchizedek"}
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
    "c7":[
        //The King of Righteousness
        { "question" : "1.	Who was Melchizedek? (Heb7:1; 2 pts)" , "answer" : "The king of Salem & the priest of the Most High God"},
        { "question" : "2.	Who met Melchizedek and where was he coming from? (Heb7:1; 2 pts)" , "answer" : "Abraham; returning from the slaughter of the kings"},
        { "question" : "3.	What did Melchizedek do to Abraham? (Heb7:1; 2 pts)" , "answer" : "Met Abraham (returning from the slaughter of the kings) and blessed him"},
        { "question" : "4.	What did Abraham give to Melchizedek? (Heb7:2)" , "answer" : "A tenth part of all "},
        { "question" : "5.	What is the meaning of Melchizedek? (Heb7:1- 2; 2 pts)" , "answer" : "King of righteousness & king of peace"},
        //
        { "question" : "6.	What is Melchizedek without? (Heb7:1- 3; 5 pts)" , "answer" : "Father, mother, genealogy, having neither beginning of days nor end of life"},
        { "question" : "7.	Who was Melchizedek made like? (Heb7:1 – 3)" , "answer" : "The Son of God"},
        { "question" : "8.	What does the Son of God and Melchizedek have in common? (Heb7:1- 3)" , "answer" : "Remains a priest continually"},
        { "question" : "9.	What title is given to Abraham? (Heb7:4)" , "answer" : "Patriarch"},
        { "question" : "10.	What did the patriarch Abraham give to Melchizedek, king of Salem? (Heb7:4)" , "answer" : "A tenth of the spoils"},
        //
        { "question" : "11.	What did the sons of Levi receive? (Heb7:5)" , "answer" : "The priesthood"},
        { "question" : "12.	What was the commandment to receive tithes from the people given to the sons of Levi according to? (Heb7:5)" , "answer" : "The law "},
        { "question" : "13.	Who is blessed by the better? (Heb7:7)" , "answer" : "The lesser"},
        { "question" : "14.	What did Levi receive and also paid through Abraham? (Heb7:9; 2 pts)" , "answer" : "Tithes, tithes "},
        { "question" : "15.	Where was Levi when his father (Abraham) met Melchizedek? (Heb7:10)" , "answer" : "Still in the loins of his father (Abraham)"},
        //Need for a New Priesthood
        { "question" : "1.	What did the people receive under the Levitical priesthood? (Heb7:11)" , "answer" : "The law"},
        { "question" : "2.	What was not present in the Levitical priesthood so that another priest had to arise according to the order of Melchizedek? (Heb7:11)" , "answer" : "Perfection"},
        { "question" : "3.	What was necessary to be changed because the priesthood changed? (Heb7:12)" , "answer" : "The law"},
        { "question" : "4.	Why was it necessary for the law to be changed? (Heb7:12)" , "answer" : "Because the priesthood was changed"},
        { "question" : "5.	What kind of tribe does He of whom these things were spoken belong? (Heb7:13; 2 pts)" , "answer" : "Another & from which no man has officiated at the altar"},
        //
        { "question" : "6.	Which tribe did our Lord arise from? (Heb7:14)" , "answer" : "Judah"},
        { "question" : "7.	Who spoke nothing concerning the priesthood about Judah? (Heb7:14)" , "answer" : "Moses"},
        { "question" : "8.	In whose likeness should another priest arise? (Heb7:15)" , "answer" : "The likeness of Melchizedek"},
        { "question" : "9.	What did the priest in the likeness of Melchizedek not come according to? (Heb7:16)" , "answer" : "The law of a fleshly commandment"},
        { "question" : "10.	What did the priest in the likeness of Melchizedek come according to? (Heb7:16)" , "answer" : "The power of an endless life"},
        //
        { "question" : "11.	Fill in the blanks: ‘You are a ____ ____ according to the ____ of _____.’ (Heb7:17; 4 pts)" , "answer" : "Priest, forever, order, Melchizedek "},
        { "question" : "12.	Why is there an annulling of the former commandment? (Heb7:18; 2 pts)" , "answer" : "Because of its weakness & unprofitableness "},
        { "question" : "13.	What was there of the former commandment because of its weakness and unprofitableness? (Heb7:18)" , "answer" : "An annulling"},
        { "question" : "14.	What did the law make perfect? (Heb7:19)" , "answer" : "Nothing"},
        { "question" : "15.	What is there on the other hand? (Heb7:19)" , "answer" : "The bringing in of a better hope"},
        //
        { "question" : "16.	What does the brining in of a better hope cause us to do? (Heb7:19)" , "answer" : "Draw near to God"},
        { "question" : "17.	What causes us to draw near to God? (Heb7:19)" , "answer" : "The bringing in of a better hope"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Greatness of the New Priest
        { "question" : "1.	How was He not made a priest? (Heb7:20)" , "answer" : "Without an oath"},
        { "question" : "2.	How did they become priests? (Heb7:21)" , "answer" : "Without an oath"},
        { "question" : "3.	Fill in the blanks: ‘The ___ has sworn and will not ___, ‘You are a priest ___, according to the ___ of ____.’ (Heb7:21; 5 pts)" , "answer" : "Lord, relent, forever, order, Melchizedek"},
        { "question" : "4.	What has Jesus become by so much more? (Heb7:22)" , "answer" : "A surety of a better covenant"},
        { "question" : "5.	Who has become a surety of a better covenant by so much more? (Heb7:22)" , "answer" : "Jesus"},
        //
        { "question" : "6.	Why were there many priests? (Heb7:23; 2 pts)" , "answer" : "Because they were prevented by death, from continuing "},
        { "question" : "7.	What is the result because He (Jesus) continues forever? (Heb7:24)" , "answer" : "We have an unchangeable priesthood"},
        { "question" : "8.	Why is there an unchangeable priesthood? (Heb7:24)" , "answer" : "Because He (Jesus) continues forever"},
        { "question" : "9.	Who is He able to save to the uttermost? (Heb7:25)" , "answer" : "Those who come to God through Him"},
        { "question" : "10.	Why is He able to save to the uttermost those who come to God through Him? (Heb7:25)" , "answer" : "Because He always lives to make intercession for them"},
        //
        { "question" : "11.	How is He able to save those who come to God through Him? (Heb7:25)" , "answer" : "To the uttermost"},
        { "question" : "12.	What are 5 characteristics of the High Priest who was fitting for us? (Heb7:26; 5 pts)" , "answer" : "Holy, harmless, undefiled, separate from sinners & has become higher that the heavens"},
        { "question" : "13.	True/false – Our High Priest (Jesus) needs to offer up sacrifices daily. (Heb7:27)" , "answer" : "False "},
        { "question" : "14.	What did those high priests offer up daily? (Heb7:27)" , "answer" : "Sacrifices"},
        { "question" : "15.	Who did those high priests offer up sacrifices daily for? (Heb7:27; 2 pts)" , "answer" : "First for his own sins & then for the peoples’ "},
        //
        { "question" : "16.	How often did our High Priest (according to the order of Melchizedek) offer Himself as a sacrifice? (Heb7:27)" , "answer" : "Once"},
        { "question" : "17.	Who did He (our High Priest - according to the order of Melchizedek) offer Himself as a sacrifice for? (Heb7:27)" , "answer" : "All"},
        { "question" : "18.	Who did the law appoint as high priests? (Heb7:28)" , "answer" : "Men who have weakness"},
        { "question" : "19.	What came after the law? (Heb7:28)" , "answer" : "The word of the oath"},
        { "question" : "20.	Whom did the word of the oath appoint as High Priest? (Heb7:28)" , "answer" : "The Son who has been perfected forever"},
        //
        { "question" : "21.	How has the Son been perfected? (Heb7:28)" , "answer" : "Forever"},
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
    "c8":[
        //The New Priestly Service
        { "question" : "1.	What is the main point of the things we are saying? (Heb8:1; 2 pts)" , "answer" : "We have such a High Priest, who is seated at the right hand of the throne of the Majesty in the heavens"},
        { "question" : "2.	Where is our High Priest seated? (Heb8:1; 2pts)" , "answer" : "At the right hand of the throne of the Majesty in the heavens"},
        { "question" : "3.	Who erected the true tabernacle – in heaven? (Heb8:2)" , "answer" : "The Lord"},
        { "question" : "4.	What do we have of the sanctuary and the tabernacle which the Lord erected? (Heb8:2)" , "answer" : "A Minister "},
        { "question" : "5.	Who did not erect the tabernacle in heaven? (Heb8:2)" , "answer" : "Man"},
        //
        { "question" : "6.	What is every high priest appointed to offer? (Heb8:3; 2 pts)" , "answer" : "Gifts and sacrifices"},
        { "question" : "7.	To what do the priests on earth offer gifts? (Heb8:4)" , "answer" : "The law"},
        { "question" : "8.	What does the law serve as? (Heb8:4-5; 2 pts)" , "answer" : "The copy and shadow of the heavenly things"},
        { "question" : "9.	How was Moses instructed when he was about to make the tabernacle? (Heb8:5)" , "answer" : "Divinely"},
        { "question" : "10.	Who was divinely instructed when he was about to make the tabernacle? (Heb8:5)" , "answer" : "Moses"},
        //
        { "question" : "11.	Fill in the blanks: ‘See that you ___ all things according to the ____ shown you on the ____.’(Heb8:5; 3 pts)" , "answer" : "Make, pattern, mountain"},
        { "question" : "12.	Where was Moses shown a pattern of the tabernacle in heaven? (Heb8:5)" , "answer" : "On the mountain"},
        { "question" : "13.	What is He who obtained a more excellent ministry also the Mediator of? (Heb8:6)" , "answer" : "Of a better covenant"},
        { "question" : "14.	What is the better covenant established on? (Heb8:6)" , "answer" : "Better promises"},
        //{ "question" : "" , "answer" : ""},
        //A New Covenant
        { "question" : "1.	Why would there be no need for a second covenant? (Heb8:7)" , "answer" : "If the first covenant had been faultless"},
        { "question" : "2.	True/false – The first covenant was faultless. (Heb8:7)" , "answer" : "False – if it had been faultless"},
        { "question" : "3.	With whom did the Lord say He would make a new covenant? (Heb8:8; 2 pts)" , "answer" : "The house of Israel & the house of Judah"},
        { "question" : "4.	What did the Lord say He would make with the house of Israel & the house of Judah? (Heb8:8)" , "answer" : "A new covenant"},
        { "question" : "5.	How did the Lord, lead the children of Israel & the children of Judah out of the land of Egypt? (Heb8:9)" , "answer" : "By the hand"},
        //
        { "question" : "6.	Where did the Lord lead them (the children of Israel & the children of Judah) out of? (Heb8:9)" , "answer" : "Egypt"},
        { "question" : "7.	When did the Lord make the covenant with the fathers when He led them out of Egypt? (Heb8:9)" , "answer" : "In the day He took them by the hand and lead them out of Egypt"},
        { "question" : "8.	What did the Lord do because they did not continue in His covenant? (Heb8:9)" , "answer" : "He disregarded them"},
        { "question" : "9.	Where did the Lord say He would put His laws and where would He write them? (Heb8:; 2 pts)" , "answer" : "Put them in their minds & write them on their hearts"},
        { "question" : "10.	Fill in the blanks: ‘For this is the ____ that I will make with the ____ of Israel after those days, says the LORD: I will put My -___ in their ___ and ____ them on their ___; and I will be their ___, and they shall be My ___.’ (Heb8:10; 8 pts)" , "answer" : "Covenant, house, laws, mind, write, hearts, God, people "},
        //
        { "question" : "11.	Who shall know the Lord? (Heb8:11; 3 pts)" , "answer" : "All, from the least of them, to the greatest of them"},
        { "question" : "12.	Who shall none of them teach saying, ‘Know the Lord’? (Heb8:11; 2 pts)" , "answer" : "His neighbour & his brother"},
        { "question" : "13.	What did the Lord say He would remember no more? (Heb8:12; 2 pts)" , "answer" : "Their sins & their lawless deeds"},
        { "question" : "14.	What will the Lord be to their unrighteousness? (Heb8:12)" , "answer" : "Merciful"},
        { "question" : "15.	Fill in the blanks: ‘For I will be ____ to their _____, and their ___ and their lawless ____ I will ______ no more.” (Heb8:12; 5 pts)" , "answer" : "Merciful, unrighteousness, sins, deeds, remember"},
        //
        { "question" : "16.	What has He (the Lord) made of the first covenant? (Heb8:13)" , "answer" : "Obsolete"},
        { "question" : "17.	What did He (the Lord) say is ready to vanish away? (Heb8:13; 2pts)" , "answer" : "What is becoming obsolete & growing old"},
        { "question" : "18.	What has He (the Lord) made with us? (Heb8:13)" , "answer" : "A new covenant"},
        { "question" : "19.	What will happen to that which is becoming obsolete and growing old? (Heb 8 v 13)" , "answer" : "It is ready to vanish away"}
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
    "c9":[
        //The Earthly Sanctuary
        { "question" : "1.	What kind of ordinances did the first covenant have? (Heb9:1; 2 pts)" , "answer" : "Of divine service & the earthly sanctuary "},
        { "question" : "2.	What was in the first part of the tabernacle? (Heb9:2; 3pts)" , "answer" : "The lampstand, the table & the showbread"},
        { "question" : "3.	What was the first part of the tabernacle called? (Heb9:2)" , "answer" : "The sanctuary"},
        { "question" : "4.	Which part of the tabernacle was behind the second veil? (Heb9:3)" , "answer" : "The Holiest of All"},
        { "question" : "5.	What was in the Holiest of All in the tabernacle? (Heb9:3-4; 2pts)" , "answer" : "The golden censer & the ark of the covenant "},
        //
        { "question" : "6.	What overlaid all the sides of the ark of the covenant? (Heb9:4)" , "answer" : "Gold"},
        { "question" : "7.	What was in the ark of the covenant? (Heb9:4; 3pts)" , "answer" : "The golden pot that had the manna, Aaron’s rod that budded and the tablets of the covenant"},
        { "question" : "8.	What was in the golden pot? (Heb9:4)" , "answer" : "Manna"},
        { "question" : "9.	Whose rod was in the ark of the covenant? (Heb9:4)" , "answer" : "Aaron"},
        { "question" : "10.	What was above the ark of the covenant? (Heb9:4-5)" , "answer" : "The cherubim of glory "},
        //
        { "question" : "11.	What was the cherubim of glory overshadowing? (Heb9:5)" , "answer" : "The mercy seat"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Limitations of the Earthly Service
        { "question" : "1.	Who went into the first part of the tabernacle? (Heb9:6)" , "answer" : "The priests"},
        { "question" : "2.	What did the priests do in the first part of the tabernacle? (Heb9:6)" , "answer" : "Perform the services"},
        { "question" : "3.	Who went into the second part of the tabernacle? (Heb9:7)" , "answer" : "The high priest - alone"},
        { "question" : "4.	True/false – The high priest was accompanied by other priests when he went in the second part of the tabernacle. (Heb9:7)" , "answer" : "False – he went in alone"},
        { "question" : "5.	How often did the high priest go into the second part of the tabernacle? (Heb9:7)" , "answer" : "Once a year"},
        //
        { "question" : "6.	Who did the high priest offer sacrifice for before he went into the second part of the tabernacle? (Heb9:7; 2 pts)" , "answer" : "Himself & for the peoples’ sins committed in ignorance"},
        { "question" : "7.	True/false – The high priest went into the second part without blood. (Heb9:7)" , "answer" : "False – he did not go without blood"},
        { "question" : "8.	What was not yet manifested while the first tabernacle was still standing? (Heb9:8)" , "answer" : "The way into the Holiest of All"},
        { "question" : "9.	Who indicated that the way into the Holiest of All was not yet made manifest while the first tabernacle was still standing? (v Heb9:8)" , "answer" : "The Holy Spirit "},
        { "question" : "10.	What is both symbolic for the present & cannot make him who perform the service perfect in regard to the conscience? (Heb9:9; 2 pts)" , "answer" : "both gifts & sacrifices "},
        //
        { "question" : "11.	Until when was the foods and drinks, various washings and fleshly ordinances imposed? (Heb 9:10)" , "answer" : "Until the time of reformation"},
        { "question" : "12.	What was imposed until the time of reformation? (Heb 9:10; 4 pts)" , "answer" : "Foods & drinks, various washings and fleshly ordinances. "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Heavenly Sanctuary
        { "question" : "1.	Who came as High Priest of the good things to come? (Heb9:11)" , "answer" : "Christ"},
        { "question" : "2.	Fill in the blanks: ‘But ___ came as ___ ____ of the good things to come, with the ___ and more perfect ____ not made with ____, that is not of this ___.’ (Heb9:11; 7 pts)" , "answer" : "Christ, High, Priest, greater, tabernacle, hands, creation"},
        { "question" : "3.	What kind of tabernacle is Christ the High Priest of? (Heb9:11; 4 pts)" , "answer" : "A greater, more perfect tabernacle, not made with hands, not of this creation"},
        { "question" : "4.	With what did Christ enter the most Holy Place? (Heb9:12)" , "answer" : "His own blood"},
        { "question" : "5.	With what did Christ not enter the Most Holy Place? (Heb9:12: 2pts)" , "answer" : "The blood of goats & calves"},
        //
        { "question" : "6.	What did Christ obtain with His own blood? (Heb9:12)" , "answer" : "Eternal redemption"},
        { "question" : "7.	What sanctifies for the purifying of the flesh? (Heb9:13; 4 pts)" , "answer" : "The blood of bulls and goats, and the ashes of a heifer and sprinkling the unclean"},
        { "question" : "8.	Which animals were used in the purifying of the flesh? (Heb9:13; 3 pts)" , "answer" : "Goats, bulls & heifer"},
        { "question" : "9.	Through whom did Christ offer Himself without spot to God? (Heb9:14)" , "answer" : "The eternal Spirit"},
        { "question" : "10.	How did Christ offer Himself to God? (Heb9:14)" , "answer" : "Without spot"},
        //
        { "question" : "11.	What does the blood of Christ cleanse your conscience from? (Heb9:14)" , "answer" : "Dead works"},
        { "question" : "12.	What does the blood of Christ cleanse your conscience from dead works to do? (Heb9:14)" , "answer" : "To serve the living God"},
        { "question" : "13.	Who is the Mediator of the new covenant? (Heb9:15)" , "answer" : "He – Christ"},
        { "question" : "14.	Why is He (Christ) the Mediator of the new covenant? (Heb9:15)" , "answer" : "By means of death"},
        { "question" : "15.	What did He (Christ) accomplish by means of death under the first covenant? (Heb9:15)" , "answer" : "The redemption of the transgression"},
        //
        { "question" : "16.	Who will receive the promise of eternal inheritance? (Heb9:15)" , "answer" : "Those who are called"},
        { "question" : "17.	What will those who are called receive? (Heb9:15)" , "answer" : "The promise of eternal inheritance"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Mediator’s Death Necessary
        { "question" : "1.	What is necessary where there is testament? (Heb9:16)" , "answer" : "The death of the testator"},
        { "question" : "2.	When does a testament goes in force? (Heb9:17)" , "answer" : "After men are dead"},
        { "question" : "3.	What does a testament no have while the testator is still alive? (Heb9:17)" , "answer" : "No power"},
        { "question" : "4.	What was the first covenant not dedicated without? (Heb9:18)" , "answer" : "Without blood"},
        { "question" : "5.	What did Moses do after he spoke every precept to all the people according to the law? (Heb9:19; 7 pts)" , "answer" : "He took the blood of calves, and goats, with water, scarlet wool, and hyssop, and sprinkled both the book itself, and all the people."},
        //
        { "question" : "6.	What did Moses sprinkle with the blood of calves and goats, with water, scarlet wool & hyssop? (Heb9:19; 2 pts)" , "answer" : "The book itself & all the people"},
        { "question" : "7.	What did Moses speak to all the people? (Heb9:19; 2 pts)" , "answer" : "Every precept, according to the law"},
        { "question" : "8.	What did Moses say after he sprinkled the book and all the people? (Heb9:19 – 20)" , "answer" : "This is the blood of the covenant which God has commanded you. "},
        { "question" : "9.	In addition to the book and all the people, what else did Moses sprinkle? (Heb9:21; 2 pts)" , "answer" : "The tabernacle & all the vessels of the ministry"},
        { "question" : "10.	What did Moses sprinkle the tabernacle and all the vessels of the ministry with? (Heb9:21)" , "answer" : "Blood"},
        //
        { "question" : "11.	What is purified with blood according to the law? (Heb9:22)" , "answer" : "Almost all things"},
        { "question" : "12.	What is almost all things purified with? (Heb9:22)" , "answer" : "Blood"},
        { "question" : "13.	Fill in the blanks: And according to the ___ almost all things are ___ with ___, and without ____ of ___ there is no ___.’ (Heb9:22; 6 pts)" , "answer" : "Law, purified, blood, shedding, blood, remission"},
        { "question" : "14.	How is remission obtained? (Heb9:22)" , "answer" : "By the shedding of blood"},
        //{ "question" : "" , "answer" : ""},
        //Greatness of Christ’s Sacrifice
        { "question" : "1.	What are better sacrifices than these? (Heb9:23)" , "answer" : "The heavenly things "},
        { "question" : "2.	What was necessary to be purified with these? (Heb9:23)" , "answer" : "The copies of the things in the heavens"},
        { "question" : "3.	Where has Christ entered that was not made with hands? (Heb9:24)" , "answer" : "Heaven"},
        { "question" : "4.	Why has Christ entered heaven? (Heb9:24; 2pts)" , "answer" : "To appear in the presence of God, for us"},
        { "question" : "5.	Where does the high priest enter every year with blood of another? (Heb9:25)" , "answer" : "The Most Holy Place"},
        //
        { "question" : "6.	What has He (Christ) put away by the sacrifice of Himself? (Heb9:26)" , "answer" : "Sin"},
        { "question" : "7.	How did Christ put away sin? (Heb9:26)" , "answer" : "By the sacrifice of Himself"},
        { "question" : "8.	From when did He (Christ) have to suffer? (Heb9:26)" , "answer" : "Since the foundation of the world"},
        { "question" : "9.	When will He (Christ) appear to put away sin by the sacrifice of Himself?" , "answer" : "At the end of the ages"},
        { "question" : "10.	How often did He (Christ) have to sacrifice Himself? (v Heb9:26)" , "answer" : "Once"},
        //
        { "question" : "11.	What comes after death? (Heb9:27)" , "answer" : "The judgement"},
        { "question" : "12.	What is appointed for men? (Heb9:27; 2 pts)" , "answer" : "To die once, but after this the judgement"},
        { "question" : "13.	What was Christ offered once to bear? (Heb9:28)" , "answer" : "To bear the sins of many"},
        { "question" : "14.	To whom will He (Christ) appear a second time, apart from sin for salvation? (Heb9:28)" , "answer" : "To those who eagerly wait for Him"},
        { "question" : "15.	How will He (Christ) appear to those who eagerly wait for Him a second time? (Heb9:28; 2 pts)" , "answer" : "Without sin, for salvation"}
        /*
        //
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        { "question" : "" , "answer" : ""},
        */
        //
        
    ],
    "c10":[
        //Animal Sacrifices Insufficient
        { "question" : "1.	What does the law have? (Heb10:1)" , "answer" : "A shadow of the good things to come"},
        { "question" : "2.	What cannot make those who approach perfect? (Heb10:1; 2 pts)" , "answer" : "The law, with these same sacrifices"},
        { "question" : "3.	How often did they offer the same sacrifices? (Heb10:1)" , "answer" : "Continually year by year"},
        { "question" : "4.	What would happen if the law and these sacrifices made those who approach perfect? (Heb10:1- 2; 2 pts)" , "answer" : "They would cease to offer sacrifices & the worshippers once purified would have no more consciousness of sins"},
        { "question" : "5.	What is a reminder of sins every year? (Heb10:3)" , "answer" : "Those sacrifices"},
        //
        { "question" : "6.	What are those sacrifices a reminder of every year? (Heb10:3)" , "answer" : "Sins"},
        { "question" : "7.	What is it not possible for the blood of bulls and goats to do? (Heb10:4)" , "answer" : "Take away sins"},
        { "question" : "8.	What is not possible to take away sins? (Heb10:4; 2 pts)" , "answer" : "The blood of bulls and goats"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Christ’s Death Fulfills God’s Will
        { "question" : "1.	What did He not desire before He came into the world? (Heb10:5; 2pts)" , "answer" : "Sacrifice & offering"},
        { "question" : "2.	What did He have prepared for Him? (Heb10:5)" , "answer" : "A body"},
        { "question" : "3.	What did He have no pleasure in? (Heb10:6; 2 pts)" , "answer" : "Burnt offerings & sacrifices for sin"},
        { "question" : "4.	Where is the following statement written, ‘Behold, I have come to do Your will, O God’? (Heb10:7)" , "answer" : "In the volume of the book"},
        { "question" : "5.	Fill in the blanks: ‘____ and offering, ____ offerings and offerings for ___ You did not ____, nor had ____ in them.’ (Heb10:8; 5 pts)" , "answer" : "Sacrifices, burnt, sin, desire, pleasure"},
        //
        { "question" : "6.	What did He take away & what did He establish? (Heb10:9; 2 pts)" , "answer" : "Take away – the first & establish – the second"},
        { "question" : "7.	What did He come to do? (Heb 10:9)" , "answer" : "The will of God"},
        { "question" : "8.	How have we been sanctified? (Heb10:10; 2 pts)" , "answer" : "Through the offering of the body of Jesus Christ, once for all "},
        { "question" : "9.	Who was the body of Jesus Christ offered for? (Heb10:10)" , "answer" : "All"},
        { "question" : "10.	How many times was the body of Jesus Christ offered for all? (Heb10:10)" , "answer" : "Once"},
        //Christ’s Death Perfects the Sanctified
        { "question" : "1.	What does every priest stand doing every day? (Heb10:11; 2 pts)" , "answer" : "Ministering & offering repeatedly the same sacrifices"},
        { "question" : "2.	What can never take away sins? (Heb10:11)" , "answer" : "Offering repeatedly the same sacrifices"},
        { "question" : "3.	Who offered one sacrifice for sins forever? (Heb10:12)" , "answer" : "This Man"},
        { "question" : "4.	What did this Man do? (Heb10:12)" , "answer" : "Offered one sacrifice for sins forever"},
        { "question" : "5.	What did this Man do after He offered one sacrifice for sins forever? (Heb10:12)" , "answer" : "He sat down at the right hand of God"},
        //
        { "question" : "6.	Until when will this Man sit at the right hand of God? (Heb10:12 -13)" , "answer" : "Until His enemies are made His footstool"},
        { "question" : "7.	What is this Man waiting at the right hand of God for? (Heb10:12- 13)" , "answer" : "Until His enemies are made His footstool"},
        { "question" : "8.	Who will be made His footstool? (Heb10:13)" , "answer" : "His enemies"},
        { "question" : "9.	What has He done by one offering? (Heb10:14)" , "answer" : "He has perfected forever those who are being sanctified"},
        { "question" : "10.	Who has He perfected forever by one offering? (Heb10:14)" , "answer" : "Those who are being sanctified "},
        //
        { "question" : "11.	Who also witness to us? (Heb10:15)" , "answer" : "The Holy Spirit"},
        { "question" : "12.	What does the Holy Spirit also do for us? (Heb10:15)" , "answer" : "Witness for us"},
        { "question" : "13.	Where did the Lord say He will also put His laws & write them? (Heb10:16; 2 pts)" , "answer" : "Put them in our heart & write them in our minds"},
        { "question" : "14.	Fill in the blanks: ‘This is the ____ that I will make with them after those days, says the Lord: I will ___ My ____ into their ___, and in their ___ I will ___ them.” (Heb10:16; 6 pts)" , "answer" : "Covenant, put, laws, hearts, minds, write"},
        { "question" : "15.	What will the Lord make with them after those days? (Heb10:16)" , "answer" : "A covenant"},
        //
        { "question" : "16.	What did He (the Lord) added that He will remember no more? (v 17; 2 pts)" , "answer" : "Their sins and their lawless deeds"},
        { "question" : "17.	Fill in the blanks: Their ___ and their ____ ____ I will ____ no more? (Heb10:17; 4 pts)" , "answer" : "Sins, lawless, deeds, remember"},
        { "question" : "18.	Where there is remission of these, there is no _____ an ____ for ___. (Heb10:18; 3 pts)" , "answer" : "Longer, offering, sin"},
        { "question" : "19.	When will there no longer be an offering for sin? (Heb10:18)" , "answer" : "Where there is remission of these"},
        //{ "question" : "" , "answer" : ""},
        //Hold Fast Your Confession
        { "question" : "1.	How should we enter the Holiest? (Heb10:19)" , "answer" : "With boldness"},
        { "question" : "2.	By what should we enter the Holiest? (Heb10:19)" , "answer" : "By the blood of Jesus"},
        { "question" : "3.	What has He (Jesus) consecrated for us? (Heb10:20; 2 pts)" , "answer" : "A new & living way"},
        { "question" : "4.	How has He (Jesus) consecrated a new and living way for us? (Heb10:20)" , "answer" : "Through the veil"},
        { "question" : "5.	What is the veil? (Heb10:20)" , "answer" : "His flesh"},
        //
        { "question" : "6.	What do we have over the house of God? (Heb10:21)" , "answer" : "A High Priest"},
        { "question" : "7.	How should we draw near with a true heart? (Heb10:22)" , "answer" : "In full assurance of faith"},
        { "question" : "8.	What should we have our hearts sprinkled from? (Heb10:22)" , "answer" : "An evil conscience"},
        { "question" : "9.	What should we have our bodies washed with? (Heb10:22)" , "answer" : "Pure water"},
        { "question" : "10.	Fill in the blanks: ‘Let us ___ near with a true ___ in full ___ of ___, having our ____ sprinkled from an ___ conscience and our ___ washed with ____ water.’ (Heb10:22; 8 pts)" , "answer" : "Draw, heart, assurance, faith, hearts, evil, bodies, pure"},
        //
        { "question" : "11.	What should we hold fast? (Heb10:23)" , "answer" : "The confession of our hope"},
        { "question" : "12.	How should we hold fast the confession of our hope? (Heb10:23)" , "answer" : "Without wavering"},
        { "question" : "13.	Fill in the blanks: ‘Let us ___ fast the ___ of our ___ without ___, for He who promised is ___.’ (Heb10:23; 5 pts)" , "answer" : "Hold, confession, hope, wavering, faithful"},
        { "question" : "14.	Why should we consider one another? (Heb10:24; 2 pts)" , "answer" : "In order to stir up love and good works"},
        { "question" : "15.	What should we not forsake? (Heb10:25)" , "answer" : "The assembling of ourselves together"},
        //
        { "question" : "16.	What should we do in addition to assembling together? (Heb10:25)" , "answer" : "Exhort on e another"},
        { "question" : "17.	When should we assemble and exhort one another more? (Heb10: 25)" , "answer" : "When we see the Day approaching"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Just Live by Faith
        { "question" : "1.	When will there no longer remain a sacrifice for sins? (Heb10:26; 2 pts)" , "answer" : "If we sin willfully after, we have received the knowledge of the truth"},
        { "question" : "What no longer remains if we sin willfully after we have received the knowledge of the truth? (Heb10:26)" , "answer" : "A sacrifice for sins"},
        { "question" : "3.	In addition to there no longer being a sacrifice for sins, what is the result if we sin willfully after we have received the knowledge of the truth? (Heb10:26 – 27; 2 pts)" , "answer" : "A certain fearful expectation of judgement & fiery indignation which will devour the adversaries"},
        { "question" : "4.	What kind of expectation of judgement will devour the adversaries? (Heb10:27)" , "answer" : "A fearful"},
        { "question" : "5.	What will devour the adversaries? (Heb10:27; 2 pts)" , "answer" : "A certain fearful expectation of judgement & fiery indignation"},
        //
        { "question" : "6.	Who will die without mercy on the testimony of two or three witnesses? (Heb10:28)" , "answer" : "Anyone who rejected Moses’ law"},
        { "question" : "What happened to anyone who rejected Moses’ law? (Heb10:28; 2 pts)" , "answer" : "They die without mercy and the testimony of two or three witnesses"},
        { "question" : "1.	What is it to fall into the hands of the living God? (Heb10:31)" , "answer" : "A fearful thing"},
        { "question" : "2.	What is a fearful thing? (Heb10:34)" , "answer" : "To fall into the hands of the living God"},
        { "question" : "3.	What happened in the former days after you were illuminated? (Heb10:34)" , "answer" : "You endured a great struggle with sufferings"},
        //
        { "question" : "4.	What did you endure a great struggle with? (Heb10:32)" , "answer" : "Sufferings"},
        { "question" : "5.	By what were you made a spectacle? (Heb10:33; 2 pts)" , "answer" : "By reproaches and tribulations"},
        { "question" : "6.	In what two ways did you endure a great struggle? (Heb10:32 – 33; 2 pts)" , "answer" : "Partly while you were made a spectacle both by reproaches & tribulations & partly while you became companions of those who were so treated"},
        { "question" : "7.	Who were you companion with? (Heb10:33)" , "answer" : "those who were treated so"},
        { "question" : "8.	What did they have on him while he was in chains? (Heb10:34)" , "answer" : "Compassion"},
        //
        { "question" : "9.	What kind of possession do you have for yourselves in heaven? (Heb10:34; 2 pts)" , "answer" : "A better and enduring possession"},
        { "question" : "10.	Where do you have a better and an enduring possession for yourselves? (Heb10:34)" , "answer" : "In heaven"},
        { "question" : "11.	How did they accept the plundering of your goods? (Heb10:34)" , "answer" : "Joyfully"},
        { "question" : "12.	What should you not cast away? (Heb10:35)" , "answer" : "Your confidence"},
        { "question" : "13.	Why should you not cast away your confidence? (Heb10:35)" , "answer" : "It has great reward"},
        //
        { "question" : "14.	What will you receive after you have done the will of God? (Heb10:36)" , "answer" : "The promise"},
        { "question" : "15.	What do you have need of, so that after you have done the will of God you may receive the promise? (Heb10:36)" , "answer" : "Endurance"},
        { "question" : "16.	What do you need to do before you receive the promise? (Heb10:36)" , "answer" : "The will of God"},
        { "question" : "17.	What will He who is coming do? (Heb10:37; 2 pts)" , "answer" : "He will come & not tarry"},
        { "question" : "18.	When will He who is coming come & not tarry? (Heb10:37)" , "answer" : ": Yet a little while"},
        //
        { "question" : "19.	Who shall live by faith? (Heb10:38)" , "answer" : "The just"},
        { "question" : "20.	What will happen to anyone who draws back? (Heb10:38)" , "answer" : "My (the Lord’s) soul has no pleasure in him"},
        { "question" : "21.	Whom did the Lord say, ‘My soul has no pleasure in him?’ (Heb10:38)" , "answer" : "Anyone who draws back"},
        { "question" : "22.	Who are we not of? (Heb10:39)" , "answer" : "Those who draw back to perdition"},
        { "question" : "23.	Who are we of? (Heb10:39)" , "answer" : "Those who believe to the saving of the soul "},
        //
        { "question" : "24.	Fill in the blanks: “But we are not of those who ___ back to ___, but of those who ___ to the ___ of the ___.” (Heb10:39; 5 pts)" , "answer" : "Draw, perdition, believe, saving, soul"}
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
    "c11":[
        
        //By Faith We Understand
        { "question" : "1.	What is faith? (Heb11:1; 2 pts)" , "answer" : "The substance of things hoped for & the evidence of things not seen"},
        { "question" : "2.	What did the elders obtain by faith? (Heb11:2)" , "answer" : "A good testimony"},
        { "question" : "3.	What do we understand by faith? (Heb11:3)" , "answer" : "That the worlds were framed by the word of God"},
        { "question" : "4.	How were the worlds framed by faith? (Heb11:3)" , "answer" : "By the word of God"},
        { "question" : "5.	How were things which are seen not made? (Heb11:3)" , "answer" : "Of things which are visible"},
        //Faith at the Dawn of History
        { "question" : "1.	Who offered to God a more excellent sacrifice? (Heb11:4)" , "answer" : "Abel"},
        { "question" : "2.	What did Abel offer to God more than Cain? (Heb11:4)" , "answer" : "Excellent sacrifice"},
        { "question" : "3.	Who testified of Abel’s gifts? (Heb11:4)" , "answer" : "God"},
        { "question" : "4.	What did Abel obtain by offering a more excellent sacrifice to God than Cain? (Heb11:4)" , "answer" : "Witness that he was righteous "},
        { "question" : "5.	Who was taken away so that he did not see death? (Heb11:5)" , "answer" : "Enoch"},
        //
        { "question" : "6.	How was Enoch taken away, so he did not see death? (Heb11:5)" , "answer" : "By faith"},
        { "question" : "7.	What did Enoch have before he was taken that pleased God? (Heb11:5)" , "answer" : "This testimony"},
        { "question" : "8.	Who taken Enoch that he was not found? (Heb11:5)" , "answer" : "God"},
        { "question" : "9.	How is it impossible to please God? (Heb11:6)" , "answer" : "Without faith"},
        { "question" : "10.	Whom is it impossible to please without faith? (Heb11:6)" , "answer" : "God"},
        //
        { "question" : "11.	Fill in the blanks: ‘But without ___ it is ____ to please Him, for he who comes to God must ____ that He is a ___ of those who ____ seek Him.’ (Heb11:6; 5 pts)" , "answer" : "Faith, impossible, believe, rewarder, diligently"},
        { "question" : "12.	Who was divinely warned of things not yet seen? (Heb11:7)" , "answer" : "Noah"},
        { "question" : "13.	How did Noah move? (Heb11:7)" , "answer" : "With godly fear"},
        { "question" : "14.	How was Noah warned of things not yet seen? (Heb11:7)" , "answer" : "Divinely"},
        { "question" : "15.	What did Noah prepare for the saving of his household? (Heb11:7)" , "answer" : "An ark"},
        //
        { "question" : "16.	Who Why did Noah prepare an ark? (Heb11:7)" , "answer" : "For the saving of his household"},
        { "question" : "17.	What did he (Noah) condemn? (Heb11:7)" , "answer" : "The world"},
        { "question" : "18.	What did he become by faith after he condemned the world? (Heb11:7)" , "answer" : "Heir of the righteousness "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Faithful Abraham
        { "question" : "1.	Who obeyed when he was called to go out to a place of which he knew nothing? (Heb11:8)" , "answer" : "Abraham"},
        { "question" : "2.	Why was Abraham called to go to a place of which he knew nothing? (Heb11:8)" , "answer" : "To receive an inheritance"},
        { "question" : "3.	True/false – Abraham refused to go where God sent him. (Heb11:8)" , "answer" : "False – he went not knowing where he was going"},
        { "question" : "4.	Did Abraham know where he was going? (Heb11:8)" , "answer" : "No"},
        { "question" : "5.	By what did Abraham obey when he was called to go out to a place where he would receive an inheritance? (Heb11:8)" , "answer" : "By faith"},
        //
        { "question" : "6.	Who are heirs of the same promise that was made with Abraham? (Heb11:9; 2 pts)" , "answer" : "Isaac & Jacob"},
        { "question" : "7.	Where did Abraham dwell as in a foreign country? (Heb11:9)" , "answer" : "In the land of promise"},
        { "question" : "8.	How did Abraham dwell in the land of promise? (Heb11:9; 2 pts)" , "answer" : "As in a foreign land & in tents"},
        { "question" : "9.	By what did Abraham dwell in the land of promise as in a foreign country? " , "answer" : "By faith"},
        { "question" : "10.	Why did Abraham dwell in the land of promise as in a foreign country? (Heb11: 9 - 10; 4 pts)" , "answer" : "He waited for a city, which has foundations, whose builder, and maker is God"},
        //
        { "question" : "11.	Who is the builder and maker of the city that Abraham waited for? (Heb11:9 – 10)" , "answer" : "God"},
        { "question" : "12.	What did Sarah receive by faith? (Heb11:11)" , "answer" : "Strength to conceive seed"},
        { "question" : "13.	When did Sarah bear a child? (Heb11:11)" , "answer" : "When she was past the age"},
        { "question" : "14.	By what did Sarah also receive strength to conceive seed? (Heb11:11)" , "answer" : "By faith"},
        { "question" : "15.	How did Sarah bear child after she was past the age? (Heb11:11; 2pts)" , "answer" : "Because she judged Him faithful, who had promised"},
        //
        { "question" : "16.	What was therefore born by one man though he is dead? (Heb11:12; 2 pts)" , "answer" : "As many as the stars of the sky in multitude & innumerable as the sand which is by the seashore"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Heavenly Hope
        { "question" : "1.	What did they not receive having all died in faith? (Heb11:13)" , "answer" : "The promises"},
        { "question" : "2.	How did they all died not receiving the promises? (Heb11:13)" , "answer" : "In faith"},
        { "question" : "3.	How were they assured of the promises? (Heb11:13)" , "answer" : "Having seem them afar"},
        { "question" : "4.	How did they try the promises even though they did not receive them? (Heb11:13)" , "answer" : "they embraced them"},
        { "question" : "5.	What did they confess? (Heb11:13; 2 pts)" , "answer" : "That they were strangers & pilgrims on the earth"},
        //
        { "question" : "6.	Where did they confess that they were strangers and pilgrims? (Heb11:13)" , "answer" : "On the earth"},
        { "question" : "7.	What do those who say such things declare plainly that they seek? (Heb11:14)" , "answer" : "A homeland"},
        { "question" : "8.	How do they declare that they seek a homeland? (Heb11:14)" , "answer" : "Plainly"},
        { "question" : "9.	What would they have done if they had called to mind that country from which they had come? (Heb11:15)" , "answer" : "They would have had opportunity to return"},
        { "question" : "10.	Where would they have returned to if they had an opportunity? (Heb11:15)" , "answer" : "That country from which they had come out "},
        //
        { "question" : "11.	What do they now desire? (Heb11:16; 2 pts)" , "answer" : "A better, a heavenly country "},
        { "question" : "12.	What is God not ashamed to be called? (Heb11:16)" , "answer" : "Their God"},
        { "question" : "13.	What has God prepared for them? (Heb11:16)" , "answer" : "A city"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Faith of the Patriarchs
        { "question" : "1.	Who offered up his only begotten son? (Heb11:17)" , "answer" : "Abraham"},
        { "question" : "2.	What was the name of Abraham’s son? (Heb11:17)" , "answer" : "Isaac"},
        { "question" : "3.	Why did Abraham offer up phis only begotten son, Isaac? (Heb11:17)" , "answer" : "He was tested"},
        { "question" : "4.	What was said about Isaac? (Heb11:17 – 18)" , "answer" : "In Isaac your seed shall be called"},
        { "question" : "5.	What did Abraham conclude that God was able to do? (Heb11:17 – 19; 2 pts)" , "answer" : "To raise him (Isaac) up, even from the dead"},
        //
        { "question" : "6.	In what sense did Abraham also receive him? (Heb11:19)" , "answer" : "Figurative sense"},
        { "question" : "7.	Who did Isaac bless by faith concerning things to come? (Heb11:20; 2 pts)" , "answer" : "Jacob & Esau"},
        { "question" : "8.	What did Isaac bless Jacob and Esau b faith with? (Heb11:20)" , "answer" : "things to come"},
        { "question" : "9.	What did Jacob do by faith when he was dying? (Heb11:21; 2 pts)" , "answer" : "Blessed each of the sons of Joseph & worshipped"},
        { "question" : "10.	How did Jacob worship when he blessed Joseph’s sons? (Heb11:21)" , "answer" : "Leaning on the top of his staff"},
        //
        { "question" : "11.	Whose sons did Jacob bless by faith when he was dying? (Heb11:21)" , "answer" : "Joseph "},
        { "question" : "12.	What did Joseph do by faith when he was dying? (Heb11:22; 2 pts)" , "answer" : "Made mention of the departure of the children of Israel & gave instructions concerning his bones"},
        { "question" : "13.	What did Joseph give instructions concerning? (Heb11:22)" , "answer" : "His bones"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Faith of Moses
        { "question" : "1.	How long was Moses hidden by his parents? (Heb11:24)" , "answer" : "Three months"},
        { "question" : "2.	Why did Moses’ parents hide him for three months? (Heb11:23; 2 pts)" , "answer" : "Because they saw that he was a beautiful child & they were not afraid of the king’s command"},
        { "question" : "3.	When was Moses hidden by his parents? (Heb11:23)" , "answer" : "When he was born"},
        { "question" : "4.	When did Moses refuse to be called the son of Pharaoh’s daughter? (Heb11:24)" , "answer" : "When he became of age"},
        { "question" : "5.	What did Moses do when he became of age? (Heb11:24)" , "answer" : "Refused to be called the son of Pharaoh’s daughter,"},
        //
        { "question" : "What did Moses choose to do? (Heb11:25; 2pts)" , "answer" : "Suffer affliction with the people of God than to, enjoy the passing pleasures of sin "},
        { "question" : "7.	What did Moses esteem greater than the treasures in Egypt? (Heb11:26)" , "answer" : "The reproach of Christ"},
        { "question" : "8.	Why did Moses esteem the reproach of Christ greater riches than the treasures in Egypt? (Heb11:26)" , "answer" : "He looked to the reward"},
        { "question" : "9.	What did Moses not fear when he left Egypt? (Heb11:27)" , "answer" : "The wrath of God"},
        { "question" : "10.	Why did Moses not fear when he left Egypt? (Heb11:27)" , "answer" : "For he endured as seeing Him who is invisible. "},
        //
        { "question" : "What did he (Moses) kept by faith lest he who destroyed the firstborn should touch them? (Heb11:28; 2 pts)" , "answer" : "The Passover & the sprinkling of blood"},
        { "question" : "12.	Why did he (Moses) keep the Passover & the sprinkling of blood? (Heb11:28; 2 pts)" , "answer" : "Lest he who destroyed the firstborn, should touch them"},
        { "question" : "13.	Where did they pass through by faith as by dry land? (Heb11:29)" , "answer" : "The Red Sea"},
        { "question" : "14.	What happened to the Egyptians who attempted to do so (pass through the Red Sea)? (Heb11:29)" , "answer" : "They were drowned"},
        { "question" : "15.	How did they pass through the Red Sea as by dry land? (Heb11:29)" , "answer" : "By faith"},
        //By Faith They Overcame
        { "question" : "1.	What fell down after they were encircled for seven days? (Heb11:30)" , "answer" : "The wall of Jericho"},
        { "question" : "2.	Who did not perish with those who did not believe? (Heb11:31)" , "answer" : "Rahab"},
        { "question" : "3.	How did Rahab receive the spies? (Heb11:31)" , "answer" : "With peace"},
        { "question" : "4.	What was Rahab? (Heb11:31)" , "answer" : "A harlot"},
        { "question" : "5.	List the six Old Testament characters that are mentioned in Chapter 11 verse 32. (Heb11:32; 6 pts)" , "answer" : "Gideon, Barak, Samson, Jephthah, David & Samuel"},
        //
        { "question" : "6.	What are 4 things that the writer failed to mention that the men in the Old Testament did? (Heb11:33; 4 pts)" , "answer" : "Subdued kingdoms, worked righteousness, obtained promises & stopped the mouths of lions"},
        { "question" : "7.	What are 5 things that the writer failed to mention that the men in the Old Testament did? (Heb11:34; 5 pts)" , "answer" : "Quenched violence of fire, escaped the edge of the sword, out of weakness were made strong, became valiant in battle, turned to flight the armies of the aliens"},
        { "question" : "8.	What did the women receive? (Heb11:35)" , "answer" : "Their dead raised to life again"},
        { "question" : "9.	Why did those who were tortured not accept deliverance? (Heb11:35)" , "answer" : "That they might obtain a better resurrection"},
        { "question" : "10.	What did those who were tortured not accept that they might obtain a better resurrection? (Heb11:35)" , "answer" : "Deliverance"},
        //
        { "question" : "11.	What kinds of trials did some of them have? (Heb11:36; 4 pts)" , "answer" : "Mockings, scourgings, chains & imprisonment "},
        { "question" : "12.	What did they wander about in? (Heb11:37; 2 pts)" , "answer" : "Sheepskins & goatskins"},
        { "question" : "13.	Why did they wander about in sheepskins & goatskins? (Heb11:37; 3 pts)" , "answer" : "They were being destitute, afflicted & tormented"},
        { "question" : "14.	According to Hebrews 11:37, how were they also treated? (Heb11:37; 4 pts)" , "answer" : "They were stoned, they were sawn in two, were tempted & were slain with the sword"},
        { "question" : "15.	Who was not worthy of those who suffered? (Heb11:38)" , "answer" : "The world"},
        //
        { "question" : "16.	Where did they (those who suffered persecution) wandered? (Heb11:38; 4 pts)" , "answer" : "Deserts, mountains, dens & caves of the earth"},
        { "question" : "17.	What did they all obtain through faith but did not receive the promise? (Heb11:39) " , "answer" : "A good testimony"},
        { "question" : "18.	What did they all not receive having obtained a good testimony through faith? (Heb11:39)" , "answer" : "The promise"},
        { "question" : "19.	What has God provided for us? (Heb11:40)" , "answer" : "Something better"},
        { "question" : "20.	What should they not be made apart from us? (Heb11:40)" , "answer" : "Perfect"},
        //
        { "question" : "21.	Who has provided something better for us? (Heb11:40)" , "answer" : "God"}
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
    "c12":[
        //The Race of Faith
        { "question" : "1.	What are we surrounded by? (Heb 12:1)" , "answer" : "So great a cloud of witnesses"},
        { "question" : "2.	What should we do because we are surrounded by so great a cloud of witnesses? (Heb 12:1; 2 pts)" , "answer" : "Lay aside every weigh & the sin which so easily ensnares us, and leu us run with endurance the race that is set before us"},
        { "question" : "3.	What should we lay aside? (Heb 12: 1; 2 pts)" , "answer" : "Every weigh & sin which so easily ensnares us"},
        { "question" : "4.	How should we run the race that is set before us? (Heb 12: 1)" , "answer" : "4.	How should we run the race that is set before us? (Heb 12: 1)"},
        { "question" : "5.	What should we run with endurance? (Heb 12:1)" , "answer" : "The race that is set before us"},
        //
        { "question" : "6.	To whom should we look? (Heb 12:2)" , "answer" : "Jesus"},
        { "question" : "7.	What titles are given to Jesus in Hebrews 1:2? (Heb12:2 pts)" , "answer" : "the author & finisher of our faith"},
        { "question" : "8.	What did Jesus endure & despise? (Heb 12:2; 2 pts)" , "answer" : "Endure – the cross & despise – the shame"},
        { "question" : "9.	Where has Jesus sat down? (Heb 12:2)" , "answer" : "At the right hand of the throne of God"},
        { "question" : "10.	What was set before Jesus? (Heb 12:2)" , "answer" : "the joy"},
        //The Discipline of God
        { "question" : "1.	Why should you consider Him who endured such hostility from sinners against Himself? (Heb 12:3; 2 pts)" , "answer" : "Lest you become weary & discouraged in your souls"},
        { "question" : "2.	From whom did He endured hostility from? (Heb 12: 3)" , "answer" : "From sinners"},
        { "question" : "3.	What have you not yet resisted to striving against sin? (Heb 12:4)" , "answer" : "Bloodshed"},
        { "question" : "4.	What have you forgotten which speaks to you as to sons? (Heb 12:5)" , "answer" : "Exhortation"},
        { "question" : "5.	What should we not despise? (Heb 12:5)" , "answer" : "The chastening of the Lord"},
        //
        { "question" : "6.	When should we not be discouraged? (Heb 12:5)" , "answer" : "When we are rebuked by Him (the Lord)"},
        { "question" : "7.	Whom does the Lord chasten? (Heb 12:6)" , "answer" : "Those He loves"},
        { "question" : "8.	Whom does the Lord scourges? (Heb 12:6)" , "answer" : "Every son whom He receives"},
        { "question" : "9.	What does it mean if you endure chastening? (Heb 12:7)" , "answer" : "God deals with you as with sons"},
        { "question" : "10.	Fill in the blanks: ‘If you ___ chastening, God __ with you as with ___; for what ___ is there whom a ____ dies not ___.’ (Heb 12:7; 6 pts)" , "answer" : "Endure, deals, sons, son, father, chasten"},
        //
        { "question" : "11.	What have you become if you are without chastening? (Heb 12: 8)" , "answer" : "Illegitimate and not sons"},
        { "question" : "12.	What should we not be more readily to the Father of spirits & live? (Heb 12:9)" , "answer" : "Subjection "},
        { "question" : "13.	Whom do we have that corrects us? (Heb 12:9)" , "answer" : "Human fathers"},
        { "question" : "14.	What have we paid to our human fathers? (Heb 12: 9)" , "answer" : "Respect"},
        { "question" : "15.	Chastening is not ___ but ____. (Heb 12:11; 2 pts)" , "answer" : "Joyful, painful"},
        //
        { "question" : "16.	What does chasten yield to those who are trained by it? (Heb 12:11)" , "answer" : " The peaceable fruit of righteousness"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Renew Your Spiritual Vitality
        { "question" : "1.	What should you strengthen? (Heb 12:12; 2 pts)" , "answer" : "The hands which hang down & the feeble knees"},
        { "question" : "2.	What should you do with the hands which hang down and the feeble knees? (Heb 12:12)" , "answer" : "Strengthen them"},
        { "question" : "3.	What should you make for your feet? (Heb 12:13)" , "answer" : "Straight paths"},
        { "question" : "4.	Why should you make straight paths for your feet? (Heb 12:13; 2 pts)" , "answer" : "So that what is lame may not be dislocated, but rather be healed"},
        { "question" : "5.	What should you pursue with all people? (Heb 12:14)" , "answer" : "Peace "},
        //
        { "question" : "6.	What should you pursue? (Heb 12:14; 2 pts)" , "answer" : "Peace & holiness"},
        { "question" : "7.	Whom will you not see without holiness? (Heb 12:14)" , "answer" : "The Lord"},
        { "question" : "8.	How should you look lest anyone fall short of the grace of God? (Heb 12:15)" , "answer" : "Carefully"},
        { "question" : "9.	Why should you look carefully? (Heb 12:15; 2 pts)" , "answer" : "Lest anyone fall short of the grace of God, lest any root of bitterness springing up cause trouble"},
        { "question" : "10.	What can we fall short of? (Heb 12:15)" , "answer" : "The grace of God"},
        //
        { "question" : "11.	What can cause trouble? (Heb 12:15)" , "answer" : "Any root of bitterness springing up"},
        { "question" : "12.	Who sold his birthright for one morsel of food? (Heb 12:16)" , "answer" : "Esau"},
        { "question" : "13.	What did Esau sell for one morsel of food? (Heb 12:16)" , "answer" : "His birthright"},
        { "question" : "14.	Who was described as a profane person? (Heb 12:16)" , "answer" : "Esau "},
        { "question" : "15.	What did Esau want afterward? (Heb 12:17)" , "answer" : "To inherit the blessing"},
        //
        { "question" : "True/false: Esau inherited the blessing afterward. (Heb 12:17)" , "answer" : "False – he was rejected"},
        { "question" : "17.	How did Esau seek for repentance? (Heb 12:17)" , "answer" : "Diligently with tears"},
        { "question" : "18.	Why was he rejected when he wanted to inherit the blessing? (Heb 12:17)" , "answer" : "He found no place for repentance"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Glorious Company
        { "question" : "1.	Where have we not come to, that may be touched and that burn with fire? (Heb 12:18)" , "answer" : "The mountain"},
        { "question" : "2.	Fill in the blanks: ‘For you have not come to the ____ that may be _____ and that ____ with fire, and to _____ and darkness and _____.” (Heb 12:18; 5 pts)" , "answer" : "ountain, touched, burned, blackness, tempest"},
        { "question" : "3.	What did those who heard begged not to be spoken to them anymore? (Heb 12:18)" , "answer" : "The word"},
        { "question" : "4.	What did they (those who begged that the word not be spoke to them anymore) hear? (Heb 12:18; 2 pts)" , "answer" : "The sound of the trumpet & the voice of words"},
        { "question" : "5.	What could they (those who begged that the word not be spoken to them anymore) not endure? (Heb 12:20)" , "answer" : "What was commanded"},
        //
        { "question" : "6.	What would be done to a beast who touched the mountain? (Heb 12:20; 2 pts)" , "answer" : "It shall be stoned or shot with an arrow"},
        { "question" : "7.	Who said the following words, ‘I am exceedingly afraid & trembling.’? (Heb 12:21)" , "answer" : "Moses"},
        { "question" : "8.	Why did Moses say, ‘I am exceedingly afraid & trembling’? (Heb 12:21)" , "answer" : "8.	Why did Moses say, ‘I am exceedingly afraid & trembling’? (Heb 12:21)"},
        { "question" : "9.	What is another name for the city of the living God? (Heb 12:22)" , "answer" : "The heavenly Jerusalem"},
        { "question" : "10.	Where have you come to? (Heb 12:22; 4 pts)" , "answer" : "Mount Zion, the city of the living God, the heavenly Jerusalem, an innumerable company of angels"},
        //
        { "question" : "11.	What is described as an innumerable company? (Heb 12:22)" , "answer" : "Angels"},
        { "question" : "12.	Where is the general assembly and church of the firstborn registered? (Heb 12:23)" , "answer" : "In heaven"},
        { "question" : "13.	What is registered in heaven? (Heb 12:23; 2 pts)" , "answer" : "The general assembly & church of the firstborn"},
        { "question" : "14.	Who is the Judge of all? (Heb 12:23)" , "answer" : "God"},
        { "question" : "15.	To what is the spirits of just men made? (Heb 12:23)" , "answer" : "Perfect"},
        //
        { "question" : "16.	Who is the Mediator of the new covenant? (Heb 12:24)" , "answer" : "Jesus"},
        { "question" : "17.	What is Jesus the Mediator? (Heb 12:24)" , "answer" : "The new covenant"},
        { "question" : "18.	What speaks better things than that of Abel? (Heb 12:24)" , "answer" : "The blood of sprinkling "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Hear the Heavenly Voice
        { "question" : "1.	Whom should you not refuse? (Heb 12:25)" , "answer" : "Him who speaks"},
        { "question" : "3.	What are we receiving that cannot be shaken? (Heb 12:28)" , "answer" : "A kingdom"},
        { "question" : "4.	What should we have because we are receiving a kingdom that cannot be shaken? (Heb 12:28)" , "answer" : "Grace"},
        { "question" : "5.	How do we serve God acceptably by grace? (Heb 12:28; 2 pts)" , "answer" : "With reverence & godly fear"},
        { "question" : "6.	Whom should we serve acceptably with reverence & godly fear? (Heb 12:28)" , "answer" : "God"},
        //
        { "question" : "7.	Who is a consuming fire? (Heb 12:29)" , "answer" : "Our God"},
        { "question" : "8.	What is our God? (Heb 12:29)" , "answer" : "A consuming fire"},
        { "question" : "9.	Who is a consuming fire? (Heb 12:29)" , "answer" : "Our God"}
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
    "c13":[
        //Concluding Moral Directions
        { "question" : "1.	What should we let continue? (Heb13:1)" , "answer" : "Brotherly love"},
        { "question" : "2.	Whom should we not forget to entertain? (Heb13:2)" , "answer" : "Strangers"},
        { "question" : "3.	Why should we not forget to entertain strangers? (Heb13:2)" , "answer" : "We may entertain angels"},
        { "question" : "4.	Who may we unwittingly entertain when we entertain strangers? (Heb13:2)" , "answer" : "Angels"},
        { "question" : "5.	How should you remember the prisoners? (Heb13:3)" , "answer" : "As if chained with them"},
        //
        { "question" : "6.	Why should you remember those who are mistreated? (Heb13:3)" , "answer" : "Since you are in the body also"},
        { "question" : "7.	What is honorable & what is undefiled? (Heb13:4; 2 pts)" , "answer" : "Honorable – marriage & undefiled – the bed"},
        { "question" : "8.	Who will God judge? (Heb13:4; 2 pts" , "answer" : "Fornicators & adulterers"},
        { "question" : "9.	How should your conduct be? (Heb13:5)" , "answer" : "Without covetousness"},
        { "question" : "10.	What should you be with such things as you have? (Heb13:5)" , "answer" : "Content"},
        //
        { "question" : "11.	What did He Himself say? (Heb13:5; 2 pts)" , "answer" : "‘I will never leave you, nor forsake you.’"},
        { "question" : "12.	Fill in the blanks: ‘Let your ___ be without ___; be ____ with such ___ as you have.’ (Heb13:5; 4 pts)" , "answer" : "Conduct, covetousness, content, things"},
        { "question" : "13.	Fill in the blanks: ‘For He Himself has said, “I will __ ___ you nor ___ you.” (Heb13:5; 3 pts)" , "answer" : "Never, leave, forsake"},
        { "question" : "14.	What may we boldly say? (Heb13:6; 3 pts)" , "answer" : "The Lord is my helper; I will not fear. What can man do to me?"},
        { "question" : "15.	Who is my helper? (Heb13:6)" , "answer" : "The Lord"},
        //
        { "question" : "16.	How should we say, ‘The Lord is my helper; I will not fear. What can man do to me? (Heb13:6)" , "answer" : "Boldly"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Concluding Religious Directions
        { "question" : "1.	Whom should you remember? (Heb 13:7; 3 pts)" , "answer" : "Those who rule over you, who have spoken the word of God & whose faith follow"},
        { "question" : "2.	What should you consider? (Heb 13:7)" , "answer" : "The outcome of their conduct"},
        { "question" : "3.	Who is the same yesterday, today & forever? (Heb 13:8)" , "answer" : "Jesus Christ"},
        { "question" : "4.	What is Jesus Christ? (Heb 13:8; 3 pts)" , "answer" : "The same yesterday, today & forever"},
        { "question" : "5.	What should you not be carried about with? (Heb 13:9; 2 pts)" , "answer" : "Various and strange doctrines"},
        //
        { "question" : "6.	What should the heart be established by? (Heb 13:9)" , "answer" : "By grace"},
        { "question" : "7.	What should the heart not be established with? (Heb 13:9)" , "answer" : "With foods"},
        { "question" : "8.	What do we have which those who serve the tabernacle have no right to eat? (Heb 13:10)" , "answer" : "An altar"},
        { "question" : "9.	Where was the bodies of those animals, whose blood was brought into the sanctuary by the high priest burned? (Heb 13:11)" , "answer" : "Outside the camp"},
        { "question" : "10.	What was brought by the high priest into the sanctuary? (Heb 13:11)" , "answer" : "The blood of the animals"},
        //
        { "question" : "11.	Why was the blood of the animals brought into the sanctuary by the high priest? (Heb 13:11)" , "answer" : "For sin"},
        { "question" : "12.	Who brought the blood of the animals into the sanctuary? (Heb 13:11)" , "answer" : "The high priest"},
        { "question" : "13.	Where did Jesus suffer? (Heb 13:12)" , "answer" : "Outside the gate"},
        { "question" : "14.	Why did Jesus suffer outside the gate? (Heb 13:12; 2 pts)" , "answer" : "That He might sanctify the people, with His own blood"},
        { "question" : "15.	Who also suffered outside the gate? (Heb 13:12)" , "answer" : "Jesus"},
        //
        { "question" : "16.	Where should we go forth to Him (Jesus)? (Heb 13:13)" , "answer" : "Outside the camp"},
        { "question" : "17.	What should we bear when we go forth to Him outside the camp? (Heb 13:13)" , "answer" : "His reproach"},
        { "question" : "18.	What do we seek for? (Heb 13:14)" , "answer" : "The one (city) to come"},
        { "question" : "19.	What do we not have here? (Heb 13:14)" , "answer" : "A continuing city"},
        { "question" : "20.	How should we offer the sacrifice of praise to God? (Heb13:15)" , "answer" : "Continually"},
        //
        { "question" : "21.	What should we offer continually to God? (Heb 13:15)" , "answer" : "The sacrifice of praise"},
        { "question" : "22.	What is the sacrifice of praise to God? (Heb 13:15)" , "answer" : "22.	What is the sacrifice of praise to God? (Heb 13:15)"},
        { "question" : "23.	Fill in the blanks: ‘Therefore by Him let us ____ offer the ___ of praise to God, that is, the ___ of our ___, giving thanks to His ___.’ (Heb 13:15; 5 pts)" , "answer" : "Continually, sacrifice, fruit, lips, name"},
        { "question" : "24.	What should we not forget to do? (Heb 13 v 16; 2 pts)" , "answer" : "To do good & to share"},
        { "question" : "25.	Why should we not forget to do good and to share? (Heb 13v 16)" , "answer" : "For with such sacrifices God is pleased"},
        //
        { "question" : "26.	What is God well pleased with? (Heb 13 v 16)" , "answer" : "Such sacrifices to do good & to share"},
        { "question" : "27.	Whom should we obey? (Heb 13 v 17)" , "answer" : "Those who rule over you"},
        { "question" : "28.	What should we be in addition, to obeying those who rule over you? (Heb 13 v 17)" , "answer" : "Submissive "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Prayer Requested
        { "question" : "1.	What did the writer say they were confident they have? (Heb 13:18)" , "answer" : "A good conscience"},
        { "question" : "2.	How did the desire to live in all things? (Heb 13:18)" , "answer" : "Honorably"},
        { "question" : "3.	What did the writer ask them to do? (Heb 13:18)" , "answer" : "Pray for us"},
        { "question" : "4.	What did the writer (Paul) urge them to pray for? (Heb 13:19)" , "answer" : "That he may be restored to them sooner"},
        //{ "question" : "" , "answer" : ""},
        //Benediction, Final Exhortation, Farewell
        { "question" : "1.	Who brought up our Lord Jesus from the dead? (Heb 13:20)" , "answer" : "The God of peace"},
        { "question" : "2.	How did the God of peace bring up our Lord Jesus from the dead? (Heb 13:20)" , "answer" : "Through the blood of the everlasting covenant"},
        { "question" : "3.	Who is the great Shepherd of the sheep? (Heb 13:20)" , "answer" : "3.	Who is the great Shepherd of the sheep? (Heb 13:20)"},
        { "question" : "4.	What should the God of peace make you complete in & to do? (Heb 13:20-21; 2 pts)" , "answer" : "In every good work, to do His will "},
        { "question" : "5.	To whom should be glory forever & ever? (Heb 13:21)" , "answer" : "Jesus Christ "},
        //
        { "question" : "6.	Fill in the blanks: ‘Make you ___ in every __ work to do His __, working in you what is well ___ in His __, through ____ ___, to whom be glory ____ and ever. ___.’ (Heb 13:21; 9 pts)" , "answer" : "Complete, good, will, pleasing, sight, Jesus, Christ, forever, Amen"},
        { "question" : "7.	How did the writer say he had written to them? (Heb 13:22)" , "answer" : "In few words"},
        { "question" : "8.	What did the writer appeal to the brethren to bear? (Heb 13:22)" , "answer" : "The word of exhortation "},
        { "question" : "9.	Whom did the writer appeal to? (Heb 13:22)" , "answer" : "You (brethren)"},
        { "question" : "10.	Who was set free? (Heb 13:23)" , "answer" : "Our brother, Timothy"},
        //
        { "question" : "11.	Whom did the writer say to greet? (Heb 13:24; 2 pts)" , "answer" : "All those who rule over you & all the saints"},
        { "question" : "12.	Whom did the writer say greeted them? (Heb 13:24)" , "answer" : "Those from Italy"},
        { "question" : "13.	What did the writer say to be with them all? (Heb 13:25)" , "answer" : "Grace"},
        { "question" : "14.	What is the last word in the book of Hebrews? (Heb 13:25)" , "answer" : "Amen"}
        //{ "question" : "" , "answer" : ""},
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

//chapter 1
function hebrews_c1(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c1.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c1[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c1[i].answer ;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 2
function hebrews_c2(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c2.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c2[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c2[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 3
function hebrews_c3(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c3.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c3[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c3[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 4
function hebrews_c4(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c4.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c4[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    hebrews.c4[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 5
function hebrews_c5(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c5.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c5[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c5[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 6
function hebrews_c6(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c6.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c6[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c6[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 7
function hebrews_c7(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c7.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c7[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c7[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 8
function hebrews_c8(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c8.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c8[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c8[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 9
function hebrews_c9(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c9.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c9[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c9[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 10
function hebrews_c10(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c10.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c10[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c10[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 11
function hebrews_c11(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c11.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c11[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c11[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 12
function hebrews_c12(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c12.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c12[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML = 
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c12[i].answer;
    //<b>Correct Answer:</b><br><br></br>
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

//chapter 13
function hebrews_c13(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*hebrews.c13.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    hebrews.c13[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    hebrews.c13[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}