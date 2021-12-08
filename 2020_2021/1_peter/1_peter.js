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

var peter_1 = { //might need to add "james" : [] but dont have to cause chapters are definet numbers
    "c1":[
        //Greeting to the Elect Pilgrims
        { "question" : "Who was Peter? (1 Peter 1:1)" , "answer" : "An apostle of Jesus Christ"},
        { "question" : "To whom was Peter an apostle of Jesus Christ? (1 Peter 1:1)" , "answer" : "The pilgrims of the Dispersion"},
        { "question" : "Where were the pilgrims of the Dispersion? (1 Peter 1:1)" , "answer" : "Pontus, Galatia, Cappadocia, Asia and Bithynia"},
        { "question" : "How was Peter elected? (1 Peter 1:1 – 2)" , "answer" : "According to the foreknowledge of God the Father"},
        //{ "question" : "5.	Verse worth memorizing for fill in the blanks" , "answer" : ""},
        //
        { "question" : "What was to be to you & to be multiplied? (1 Peter 1:2)" , "answer" : "Grace – be to you & peace – be multiplied"},
        { "question" : "What was Peter elected for in the sanctification of? (1 Peter 1:2)" , "answer" : "Of the Spirit "},
        { "question" : "What was Peter elected for obedience and sprinkling of blood? (1 Peter 1:2)" , "answer" : "Jesus Christ"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //A Heavenly Inheritance
        { "question" : "Who is blessed? (1 Peter 1:3)" , "answer" : "The God and Father of our Lord Jesus Christ "},
        { "question" : "How has He (God the Father) begotten us again to a living hope? 1 Peter 1:3" , "answer" : "According to His abundant mercy, through the resurrection of Jesus Christ from the dead"},
        { "question" : "What has He (God the Father) begotten us according to His abundant mercy & the resurrection of Jesus Christ from the dead? (1 Peter 1:3)" , "answer" : "A living hope"},
        { "question" : "Where is your inheritance reserved? (1 Peter 1:4)" , "answer" : "In heaven"},
        { "question" : "What kind of inheritance is reserved for you in heaven? (1 Peter 1:4)" , "answer" : "An incorruptible, undefiled and one that does not fade away"},
        //
        { "question" : "What are you kept by through faith for salvation? (1 Peter 1:5)" , "answer" : "The power of God"},
        { "question" : "What is ready to be revealed in the last? (1 Peter 1:5)" , "answer" : "Salvation"},
        { "question" : "By what have you been grieved? 1 Peter 1:6)" , "answer" : "Various trials"},
        { "question" : "What do you do in this, even though now it is for a little while? (1 Peter 1:6)" , "answer" : "Greatly rejoice"},
        { "question" : "What is much more precious than gold that perishes? (1 Peter 1:7)" , "answer" : "The genuineness of your faith"},
        //
        { "question" : "How is your faith tested? (1 Peter 1:7)" , "answer" : "By fire"},
        { "question" : "What is the genuineness of your faith found to do? (1 Peter 1:7)" , "answer" : "Praise, honour & glory at the revelation of Jesus Christ "},
        { "question" : "How do you rejoice even though you do not see Him, yet you believe? (1 Peter 1:8)" , "answer" : "With joy inexpressible and full of glory"},
        { "question" : "What is the end of your faith? (1 Peter 1:9)" , "answer" : "The salvation of your souls"},
        { "question" : "Who has inquired and searched carefully of this salvation? (1 Peter 1:10)" , "answer" : "The prophets"},
        //
        { "question" : "What had the prophets prophesied of? (1 Peter 1:10)" , "answer" : "The grace that would come to you"},
        { "question" : "What did He testify beforehand of? (1 Peter 1:11)" , "answer" : "The sufferings of Christ and the glories that would follow"},
        { "question" : "Who was in them indicating when He testified beforehand the sufferings of Christ and the glories that would follow? (1 Peter 1:11)" , "answer" : "The Spirit of Christ"},
        { "question" : "What is sent from Heaven? (1 Peter 1:12)" , "answer" : "The Holy Spirit"},
        { "question" : "Who desire to look into these things? (1 Peter 1:12)" , "answer" : "Angels"},
        //Living Before God Our Father
        { "question" : "What should you gird up? (1 Peter 1:13)" , "answer" : "The lions of your mind"},
        { "question" : "What should you rest your hope fully upon? (1 Peter 1:13)" , "answer" : "The grace that is to be brought to you at the revelation of Jesus Christ "},
        { "question" : "In addition to girding up your minds and resting your hope fully upon the grace that is brought to you at the revelation of Jesus Christ, what should you do? (1 Peter 1:13)" , "answer" : "Be sober"},
        { "question" : "What should you not conform yourselves to? (1 Peter 1:14)" , "answer" : "The former lusts"},
        { "question" : "When did you conform yourselves to the former lusts? (1 Peter 1:14)" , "answer" : "In your ignorance"},
        //
        { "question" : "How should we not conform ourselves to the former lusts? (1 Peter 1:14)" , "answer" : "As obedient children"},
        { "question" : "What should you be in all your conduct? (1 Peter 1:15)" , "answer" : "Holy"},
        { "question" : "Why should you be holy in all your conduct? (1 Peter 1:15)" , "answer" : "Because He who called you is holy, you also should be holy"},
        { "question" : "How is it written? (1 Peter 1:16)" , "answer" : "Be holy, for I am holy.”"},
        { "question" : "How does the Father judges each one’s work? (1 Peter 1:17)" , "answer" : "Without partiality"},
        //
        { "question" : "How should you conduct yourselves throughout the time of your stay here? (1 Peter 1:17)" , "answer" : "In fear"},
        { "question" : "Who judges each one’s work without partiality? (1 Peter 1:17)" , "answer" : "The Father"},
        { "question" : "What were you not redeemed with? (1 Peter 1:18)" , "answer" : "Corruptible things "},
        { "question" : "What kind of corruptible things were you not redeemed with? (1 Peter 1:18)" , "answer" : "Like silver or gold"},
        { "question" : "What did you receive by traditions from your fathers from your aimless conduct? (1 Peter 1:18)" , "answer" : "Silver or gold"},
        //
        { "question" : "What were you redeemed by? (1 Peter 1:18-19)" , "answer" : "The precious blood of Christ"},
        { "question" : "How is the precious blood of Christ described? ( 1 Peter 1:19)" , "answer" : "As of a lamb, without blemish and without spot"},
        { "question" : "When was He (Christ) foreordained? (1 Peter 1:20)" , "answer" : "Before the foundation of the world"},
        { "question" : "When was He (Christ) manifested for you? (1 Peter 1:20)" , "answer" : "In these last times"},
        { "question" : "Who do you believe in through Him (CHRIST)? (1 Peter 1:21)" , "answer" : "God"},
        //
        { "question" : "What are in in God through Him (Christ)? (1 Peter 1:21)" , "answer" : "Your faith & hope "},
        { "question" : "What did He (God) raise Him from and what did He (God) gave Him? (1 Peter 1:21)" , "answer" : "Raise Him from the dead & gave Him glory"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //The Enduring Word
        { "question" : "How should you love one another? (1 Peter 1:22)" , "answer" : "Fervently with a pure heart"},
        { "question" : "How have you purified your souls? (1 Peter 1:22)" , "answer" : "In obeying the truth through the Spirit, in sincere love of the brethren"},
        { "question" : "What lives and abides forever? (1 Peter 1:23)" , "answer" : "The word of God"},
        { "question" : "By what are we not born again? (1 Peter 1:23)" , "answer" : "Incorruptible seed"},
        { "question" : "By what are we born again? (1 Peter 1:23)" , "answer" : "The incorruptible"},
        //
        { "question" : "What is the glory of man as? (1 Peter 1:24)" , "answer" : "The flower of the grass"},
        { "question" : "What is all flesh as? (1 Peter 1:24)" , "answer" : "As grass"},
        { "question" : "What falls away & withers? (1 Peter 1:24)" , "answer" : "Falls away – its flower & withers - grass"},
        { "question" : "What endures forever? (1 Peter 1:25)" , "answer" : "The word of the Lord"},
        { "question" : "By what was the word preached to you? (1 Peter 1:25)" , "answer" : "By the gospel"}
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
        //Our Inheritance Through Christ’s Blood
        { "question" : "What should you lay aside? (1 Peter 2:1)" , "answer" : "All malice, all deceit, hypocrisy, envy, all evil speaking"},
        { "question" : "How should you lay aside all malice, all deceit, hypocrisy, envy and all evil speaking? (1 Peter 2:1- 2)" , "answer" : "As newborn babes"},
        { "question" : "What should you desire as newborn babes? (1 Peter 2:2)" , "answer" : "The pure milk of the word"},
        { "question" : "Why should you desire the pure milk of the word as newborn babes? (1 Peter 2:2)" , "answer" : "That you may grow "},
        { "question" : "If indeed you have tasted that the ___ is ___. (1 Peter 2:3)" , "answer" : "Lord, gracious"},
        //The Chosen Stone and His Chosen People
        { "question" : "How should we come to Him? (1 Peter 2:4)" , "answer" : "As to a living stone, rejected indeed by men, "},
        { "question" : "What as you also being built up as living stones? (1 Peter 2:5)" , "answer" : "A spiritual house, a holy priesthood"},
        { "question" : "Why are you as living stones being build up a spiritual house, a holy priesthood? (1 Peter 2:5)" , "answer" : "To offer spiritual sacrifices acceptable to God through Jesus Christ"},
        { "question" : "What is acceptable to God through Jesus Christ? (1 Peter 2:5)" , "answer" : "Spiritual sacrifices"},
        { "question" : "Where is it contained, “Behold, I lay in Zion a chief cornerstone, elect, precious, and he who believes on Him will be no means be put to shame.?’ (1 Peter 2:6)" , "answer" : "The Scriptures"},
        //
        { "question" : "What is laid in Zion, that is contained in the Scripture? (1 Peter 2:6) " , "answer" : "A chief cornerstone"},
        { "question" : "What will by no means happen to him who believes on Him? (1 Peter 2:6)" , "answer" : "He will not be put to shame"},
        { "question" : "What are two words that describe the chief cornerstone that is laid in Zion? (1 Peter 2:6)" , "answer" : "Elect, precious"},
        { "question" : "What has become the chief cornerstone? (1 Peter 2:7)" , "answer" : "The stone which the builders rejected"},
        { "question" : "What is He to anyone who believes? (1 Peter 2:7)" , "answer" : "Precious"},
        //
        { "question" : "What is He to those who are disobedient? (1 Peter 2:7-8)" , "answer" : "The stone which the builders rejected has become the chief cornerstone, a sone of stumbling and a rock of offense"},
        { "question" : "Why do they stumble? (1 Peter 2:8)" , "answer" : "Being disobedient to the word, to which they were appointed"},
        { "question" : "To what were they appointed? (1 Peter 2:8)" , "answer" : "The word"},
        { "question" : "What are you according to 1 Peter 2:9? (1 Peter 2: 9; 4 pts)" , "answer" : "A chosen generation, a royal priesthood, a holy nation, His own special people"},
        { "question" : "Why are you described as a chosen generation, a royal priesthood, a holy nation, His own special people? (1 Peter 2:9)" , "answer" : "That we may proclaim the praises of Him who called you out of darkness into His marvelous light"},
        //
        { "question" : "Where has He called you from? Where are you called into? (1 Peter 2:9)" , "answer" : "Out of darkness, into His marvelous light"},
        { "question" : "What are we now, who were once not a people? (1 Peter 2:10)" , "answer" : "The people of God"},
        { "question" : "What have we not obtained but now have obtained? (1 Peter 2:10)" , "answer" : "Mercy"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Living Before the World
        { "question" : "What words does Peter use to describe the beloved? (1 Peter 2:11)" , "answer" : "Sojourners and pilgrims"},
        { "question" : "What is Peter begging the beloved to abstain from? (1 Peter 2:11)" , "answer" : "Fleshly lust"},
        { "question" : "What does the fleshly lust war against? (1 Peter 2:11)" , "answer" : "The soul"},
        { "question" : "How should your conduct be among the Gentiles? (1 Peter 2:12)" , "answer" : "Honorable"},
        { "question" : "How do the Gentiles speak against you? (1 Peter 2:12)" , "answer" : "As evildoers"},
        //
        { "question" : "Why will the Gentiles glorify God in the day of visitation? (1 Peter 2:12)" , "answer" : "By your good works which they observe"},
        { "question" : "What will the good works that the Gentiles observe cause them to do? (1 Peter 2:12)" , "answer" : "Glorify God pin the day of visitation"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Submission to Government
        { "question" : "What should you submit yourselves? (1 Peter 2:13)" , "answer" : "To every ordinance of man for the Lord’s sake"},
        { "question" : "To whom should you submit every ordinance to man for the Lord’s sake? (1 Peter 2:13 - 14) " , "answer" : "To the king as supreme, to governors"},
        { "question" : "What is the will of God by doing good? (1 Peter 2:15)" , "answer" : "That you may put to silence the ignorance of foolish men"},
        { "question" : "What should we not use liberty as? (1 Peter 2:16)" , "answer" : "As a cloak for vice"},
        { "question" : "How should you use liberty? (1 Peter 2:16)" , "answer" : "As bondservants of God"},
        //
        { "question" : "Whom should you honour, love & fear? (1 Peter 2:17)" , "answer" : "Honour – all people & the king, Love – the brotherhood, Fear – God"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Submission to Masters
        { "question" : "How should servants be submissive to their masters? (1 Peter 2:18)" , "answer" : "With all fear"},
        { "question" : "Servants should not only fear in the ____ and ____, but also to the ____. (1 Peter 2:18)" , "answer" : "Good, gentle, harsh"},
        { "question" : "What is commendable? (1 Peter 2:19)" , "answer" : "If because of conscience toward God one endures grief, suffering wrongfully"},
        { "question" : "What is commendable before God? (1 Peter 2:20)" , "answer" : "You do good and suffer, if you take if patiently"},
        { "question" : "“For what ___ is it if, when you are ___ for your ____, you take it ____.” (1 Peter 2:20)" , "answer" : "Credit, beaten, faults, patiently"},
        //
        { "question" : "Why are you called to suffer? (1 Peter 2:21)" , "answer" : "Because Christ also suffered for us, leaving us an example, that you should follow"},
        { "question" : "What did Christ leave us? (1 Peter 2:21)" , "answer" : "An example"},
        { "question" : "What should we follow? (1 Peter 2:21)" , "answer" : "His steps"},
        { "question" : "What did He not commit & what was not found in His mouth? (1 Peter 2:22)" , "answer" : "Not commit – No sin & not found in His mouth – no deceit "},
        { "question" : "What did He do when He was reviled & when He suffered? (1 Peter 2:23)" , "answer" : "Reviled – He did not revile in return & when He suffered – He did not threaten"},
        //
        { "question" : "Who did He commit Himself to when He was reviled & when He suffered? (1 Peter 2:23)" , "answer" : "To Him who judges righteously "},
        { "question" : "Where did He bear our sins? (1 Peter 2:24)" , "answer" : "In His own body, on the tree"},
        { "question" : "By what are we healed? (1 Peter 2:25)" , "answer" : "By His stripes"},
        { "question" : "What have we died to & what might we live for? (1 Peter 2:24)" , "answer" : "Died – sin & live for - righteousness"},
        { "question" : "What are we now liken to? (1 Peter 2:25)" , "answer" : "Sheep going astray"},
        //
        { "question" : "To whom have we now returned to? (1 Peter 2:25)" , "answer" : "The Shepherd and Overseer of our souls"}
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
        //Submission to Husbands
        { "question" : "What should wives be to their own husbands? (1 Peter 3:1)" , "answer" : "Submissive"},
        { "question" : "Why should wives be submissive to their own husbands?  (1 Peter 3:1; 2pts)" , "answer" : "So that if some do not obey the word, they may be won by the conduct of their wives"},
        { "question" : "How may husbands be won if they do not obey the word by their wives who believe? (1 Peter 3:1)" , "answer" : "By their (the wives’) conduct"},
        { "question" : "What is their chaste conduct accompanied by? (1 Peter 3:2)" , "answer" : "Fear"},
        { "question" : "What is the outward adornment? (1 Peter 3:3; 3pts)" , "answer" : "Arranging the hair, wearing gold, putting on fine apparel"},
        //
        { "question" : "What should you not let be merely outward? (1 Peter 3:3)" , "answer" : "Your adornment"},
        { "question" : "What should your adornment rather be? (1 Peter 3:4)" , "answer" : "The hidden person of the heart"},
        { "question" : "What is the hidden person of the heart? (1 Peter 3:4; 2 pts)" , "answer" : "The incorruptible beauty of a gentle and quiet spirit"},
        { "question" : "What is precious in the sight of God? (1 Peter 3:4; 2pts)" , "answer" : "The incorruptible beauty of a gentle and quiet spirit"},
        { "question" : "Who adorned themselves in this manner in former times? (1 Peter 3:5)" , "answer" : "The holy women who trusted in God"},
        //
        { "question" : "Who obeyed Abraham? (1 Peter 3:6)" , "answer" : "Sarah"},
        { "question" : "What did Sarah call Abraham? (1 Peter 3:6)" , "answer" : "Lord"},
        { "question" : "Whose daughter are you if you do good and are not afraid with any terror? (1 Peter 3:6)" , "answer" : "Abraham"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //A Word to Husbands
        { "question" : "What should the husbands give to their wives? (1 Peter 3:7)" , "answer" : "Honour"},
        { "question" : "How should the husbands dwell with their wives? (1 Peter 3:7)" , "answer" : "With understanding"},
        { "question" : "How should the husbands give honour to their wives? (1 Peter 3:7; 2pts)" , "answer" : "As to the weaker vessel and as being heirs together of the grace of life"},
        { "question" : "Why should the husbands give honour to their wives? (1 Peter 3:7)" , "answer" : "That their prayers may not be hindered"},
        //{ "question" : "" , "answer" : ""},
        //Called to Blessing
        { "question" : "1.	What should all of you be & have & how should we love? (1 Peter 3:8; 5 pts)" , "answer" : "Be of one mind, tender-hearted, courteous & have compassion for one another & love as brothers"},
        { "question" : "What should we not be returning? (1 Peter 3:9; 2pts)" , "answer" : "Evil for evil, reviling for reviling"},
        { "question" : "3.	What should you return & why? (1 Peter 3:9; 3 pts)" , "answer" : "A blessing; knowing that you were called to this, that you may inherit a blessing"},
        { "question" : "4.	What should he refrain his tongue & his lips from? (1 Peter 3:10; 2 pts)" , "answer" : "Tongue – from evil & lips – speaking deceit"},
        { "question" : "5.	What should he who would love life and see good days do? (1 Peter 3:10; 2 pts)" , "answer" : "Refrain his tongue from evil & his lips from speaking deceit "},
        //
        { "question" : "What should he turn from and what should he do? (1 Peter 3:11; 2 pts)" , "answer" : "Turn from – evil & do – good"},
        { "question" : "What should he do with peace? (1 Peter 3:11; 2pts)" , "answer" : "Seek it & pursue it "},
        { "question" : "What are on the righteous & what is open to their prayers? (1 Peter 3:12; 2pts)" , "answer" : "The eyes of the Lord & His ears"},
        { "question" : "What is against those who do evil? (1 Peter 3:12)" , "answer" : "The face of the Lord"},
        //{ "question" : "" , "answer" : ""},
        //Suffering for Right and Wrong
        { "question" : "“And who is he who will ___ you if you become ____ of what is ____?” (1 Peter 3:13)" , "answer" : "Harm, followers, good"},
        { "question" : "How are you blessed? (1 Peter 3:14)" , "answer" : "If you should suffer for righteousness’ sake"},
        { "question" : "What should you not be afraid of? (1 Peter 3:14)" , "answer" : "Their threats"},
        { "question" : "In addition to not being afraid of their threats, what should you not be? (1 Peter 3:14)" , "answer" : "Troubled"},
        { "question" : "Whom should you sanctify in your hearts? (1 Peter 3:15)" , "answer" : "The Lord God"},
        //
        { "question" : "What should you always be ready to give? (1 Peter 3:15; 2 pts)" , "answer" : ": A defense to everyone who asks you a reason for the hope that is in you"},
        { "question" : "How should you give a defense to everyone who asks you a reason for the hope that is in you? (1 Peter 3:15 - 16; 3 pts)" , "answer" : "With meekness, fear & having a good conscience"},
        { "question" : "To whom should you always be ready to give a defense for the hope that is in you? (1 Peter 3:15)" , "answer" : "Everyone who asks you a reason"},
        { "question" : "What will happen to those who revile your good conduct in Christ? (1 Peter 3:16)" , "answer" : "They maybe ashamed"},
        { "question" : "How will they defame you? (1 Peter 3:16)" , "answer" : "As evildoers"},
        //
        { "question" : "“For it is ___, if it is the ___ of ___, to ____ for doing ____ than for doing ___.” (1 Peter 3:1;6pts)" , "answer" : "Better, will, God, suffer, good, evil"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Christ’s Suffering and Ours
        { "question" : "How many times did Christ suffer for sins? (1 Peter 3:18)" , "answer" : "Once"},
        { "question" : "Why did Christ suffer once for sins? (1 Peter 3:18)" , "answer" : "That He might bring us to God"},
        { "question" : "How did Christ suffer once for sins that He might bring us to God? (1 Peter 3:18; 2pts)" , "answer" : "Being out to death in the flesh, but made alive by the Spirit"},
        { "question" : "By what was Christ made alive? (1 Peter 3:18)" , "answer" : "The Spirit"},
        { "question" : "Where did He go and preach to the spirits? (1 Peter 3:19)" , "answer" : "In prison"},
        //
        { "question" : "How many souls were saved in the days of Noah? (1 Peter 3:20)" , "answer" : "Eight"},
        { "question" : "How were a few, only eight souls saved in the days of Noah? (1 Peter 3: 20)" , "answer" : "Through water"},
        { "question" : "What is there that also saves us? (1 Peter 3:21; 2 pts)" , "answer" : "An antitype, baptism"},
        { "question" : "What is baptism not? (1 Peter 3:21; 2 pts)" , "answer" : "The removal of the filth of the flesh"},
        { "question" : "What is baptism? (1 Peter 3:21; 2 pts)" , "answer" : "The answer of a good conscience toward God"},
        //
        { "question" : "What is through the resurrection of Jesus Christ? (1 Peter 3:21)" , "answer" : "Baptism"},
        { "question" : "Who has gone into heaven & where is He now? (1 Peter 3:21-22; 2 pts)" , "answer" : "Jesus Christ; at the right hand of God"},
        { "question" : "Who has been made subject to Him (Jesus Christ)? (1 Peter 3:21-22; 3 pts)" , "answer" : "Angels, authorities & powers "}
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
        //Christ’s Example to Be Followed
        { "question" : "How did Christ suffer for us? (1 Peter 4:1)" , "answer" : "In the flesh"},
        { "question" : "What should you do because suffered for you in the flesh? (1 Peter 4:1)" , "answer" : "Arm yourselves also with the same mind"},
        { "question" : "Why should you arm yourselves with the same mind? (1 Peter 4:1)" , "answer" : "Because He who has suffered in the flesh has ceased from sin"},
        { "question" : "What did He no longer live the rest of His time in? (1 Peter 4:2)" , "answer" : "The lusts of men"},
        { "question" : "What did He live the rest of His time for? (1 Peter 4:2)" , "answer" : "For the will of God"},
        //
        { "question" : "What have we spent enough of our past lifetime doing? (1 Peter 4:3)" , "answer" : "the will of the Gentiles"},
        { "question" : "What do we walk in when we do the will of the Gentiles? (1 Peter 4:3)" , "answer" : "Lewdness, lusts, drunkenness, revelries, drinking parties and abominable idolatries"},
        { "question" : "Why do they speak evil of you? (1 Peter 4:4)" , "answer" : "because you do not run with them in the same flood of dissipation"},
        { "question" : "To whom will they give an account? (1 Peter 4:5)" , "answer" : "To Him who is ready to judge the living and the dead"},
        { "question" : "What was preached to those who are dead? (1 Peter 4:6)" , "answer" : "The gospel"},
        //
        { "question" : "Why was the gospel preached to those who are dead? (1 Peter 4:6)" , "answer" : "That they might be judged according to men in the flesh, but live according to God in the spirit"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Serving for God’s Glory
        { "question" : "What is at hand? (1 Peter 4:7)" , "answer" : "The end of all things"},
        { "question" : "What should you do because the end of all things is at hand? (1 Peter 4:7 – 8)" , "answer" : "Be serious, watchful in your prayers and have fervent love for one another"},
        { "question" : "What is most important to us because the end is at hand? (1 Peter 4:7 – 8)" , "answer" : "To have fervent love for one another"},
        { "question" : "Why should we have fervent love for one another? (1 Peter 4:8)" , "answer" : "because love cover a multitude of sins"},
        { "question" : "What covers a multitude of sins? (1 Peter 4:8)" , "answer" : "Love"},
        //
        { "question" : "How should we be hospitable to one another? (1 Peter 4:9)" , "answer" : "Without grumbling"},
        { "question" : "What should each one who has received a gift do? (1 Peter 4:10)" , "answer" : "minister it to one another"},
        { "question" : "Why should each one who receives a gift minister it to one another? (1 Peter 4:10)" , "answer" : "Because we are good stewards of the manifold grace of God"},
        { "question" : "How should one speak? (1 Peter 4:11)" , "answer" : "As the oracles of God"},
        { "question" : "How should one minister? (1 Peter 4:11)" , "answer" : "As with the ability which God supplies"},
        //
        { "question" : "How is God glorified in all things? (1 Peter 4:11)" , "answer" : "through Jesus Christ"},
        { "question" : "What belongs to Jesus Christ forever and ever? (1 Peter 4:11)" , "answer" : "Glory &amp; dominion"},
        { "question" : "To whom does glory &amp; dominion belongs to forever and ever? (1 Peter 4:11)" , "answer" : "Jesus Christ"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Suffering for God’s Glory
        { "question" : "What should the beloved not think it strange concerning? (1 Peter 4:12)" , "answer" : "The fiery trial which is to try them"},
        { "question" : "What should we do when we experience fiery trials? (1 Peter 4:13)" , "answer" : "Rejoice to the extent that you partake of Christ’s sufferings"},
        { "question" : "Why should you rejoice to the extent that you partake of Christ’s suffering? (1 Peter 4:13)" , "answer" : "That when His glory is revealed, you may also be glad with exceeding joy"},
        { "question" : "What rests upon you if you are reproached for the name of Christ? (1 Peter 4:14)" , "answer" : "The Spirit of glory &amp; of God"},
        { "question" : "What is He on their part? And on your part? (1 Peter 4:14)" , "answer" : "Their part – blasphemed, your part – glorified"},
        //
        { "question" : "In what ways should no of us suffer? (1 Peter 4:15)" , "answer" : "As a murderer, a thief, an evildoer, or as a busybody in other peoples’ matters"},
        { "question" : "What should we do if we suffer as a Christian? (1 Peter 4:16)" , "answer" : "Not be ashamed, but let him glorify God in this matter"},
        { "question" : "What should begin at the house of God? (1 Peter 4:17)" , "answer" : "Judgement"},
        { "question" : "Who is scarcely saved? (1 Peter 4:18)" , "answer" : "The righteous one"},
        { "question" : "What should those who suffer according to the will of God commit to Him? (1 Peter 4:19)" , "answer" : "Their souls"},
        //
        { "question" : "What other title is used for God in this verse? (1 Peter 4:19)" , "answer" : "A faithful Creator"},
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

    "c5":[
        //Shepherd the Flock
        { "question" : "Whom is he exhorting? (1 Peter 5:1)" , "answer" : "The elders among you"},
        { "question" : "What does Peter say he is? (1 Peter 5:1)" , "answer" : "A fellow elder, a witness of the sufferings of Christ and a partaker of the glory that will be revealed"},
        { "question" : "What is he (Peter) a witness of? (1 Peter 5:1)" , "answer" : "The sufferings of Christ"},
        { "question" : "What is he (Peter) a partaker of? (1 Peter 5:10)" , "answer" : "The glory that will be revealed"},
        { "question" : "What should you do with the flock that is among you? (1 Peter 5:2)" , "answer" : "Shepherd the flock"},
        //
        { "question" : "How should you serve? (1 Peter 5:2 & 3)" , "answer" : "As overseas, willingly, eagerly and being examples to the flock"},
        { "question" : "How should you not serve? (1 Peter 5:2 & 3)" , "answer" : "Not by compulsion, not for dishonest gain, nor as being lords over those entrusted to you"},
        { "question" : "What should you be to the flock? (1 Peter 5:3)" , "answer" : "Examples"},
        { "question" : "When will you receive the crown of glory that does not fade away? (1 Peter 5:4)" , "answer" : "When the Chief Shepherd appears"},
        { "question" : "What will you receive when the Chief Shepherd appears? (1 Peter 5:4)" , "answer" : "The crown of glory that does not fade away"},
        //
        { "question" : "What will not fade away? (1 Peter 5:4)" , "answer" : "The crown of glory"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Submit to God, Resist the Devil
        { "question" : "1.	Whom should younger people submit themselves to? (1 Peter 5:5)" , "answer" : "Your elders"},
        { "question" : "Who should be submissive to one another? (1 Peter 5:5)" , "answer" : "All of you"},
        { "question" : "What should you be clothed with? (1 Peter 5:5)" , "answer" : "Humility"},
        { "question" : "Whom does God resist & to whom does He gives grace to? (1 Peter 5:5)" , "answer" : "Resist – the proud, Gives grace – to the humble"},
        { "question" : "What should you humble yourselves under? (1 Peter 5:6)" , "answer" : "The mighty hand of God"},
        //
        { "question" : "What should you do under the mighty hand of God? (1 Peter 5:6)" , "answer" : "Humble yourselves"},
        { "question" : "Why should you humble yourself under the mighty hand of God? (1 Peter 5:6)" , "answer" : "that He may exalt you in due time"},
        { "question" : "What should you cast upon Him? (1 Peter 5:7)" , "answer" : "All your cares"},
        { "question" : "Why should you cast all your cares upon Him? (1 Peter 5:7)" , "answer" : "Because He cares for you"},
        { "question" : "Who walks about like a roaring lion? Why? (1 Peter 5:8)" , "answer" : "Your adversary, the devil; because he is seeking whom he may devour"},
        //
        { "question" : "What should you do because your adversary walks about like a roaring lion? (1 Peter 5:8)" , "answer" : "Be sober, be vigilant"},
        { "question" : "Who is your adversary? (1 Peter 5:8)" , "answer" : "The devil "},
        { "question" : "Who experienced the same sufferings as you do? (1 Peter 5:9)" , "answer" : "Your brotherhood in the world"},
        { "question" : "What should you do knowing, that the same sufferings are experiences by your brotherhood in the world? (1 Peter 5:9)" , "answer" : "Resist him, steadfast in the faith"},
        { "question" : "Who has called us to His eternal glory? (1 Peter 5:10)" , "answer" : "The God of all grace"},
        //
        { "question" : "What has the God of all grace called us to? (1 Peter 5:10)" , "answer" : "His eternal glory "},
        { "question" : "By whom has the God of all grace called us to His eternal glory? (1 Peter 5:10)" , "answer" : "Christ Jesus"},
        { "question" : "When has the God of all grace called us to His eternal glory by Christ Jesus? (1 Peter 5:10)" , "answer" : "After you have suffered a while"},
        { "question" : "What would the God of all grace do to you, after you have suffered for a while? (1 Peter 5:10)" , "answer" : "Perfect, establish, strengthen and settle you"},
        { "question" : "What should be to Him forever and ever? (1 Peter 5:11)" , "answer" : "Glory & dominion"},
        //
        { "question" : "How long should glory & dominion be to Him (God)? (1 Peter 5:11)" , "answer" : "Forever & ever"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Farewell and Peace
        { "question" : "What was the name of Peter’s son? (1 Peter 5:13)" , "answer" : "Mark"},
        { "question" : "Where is she who is elect together with you? (1 Peter 5:13)" , "answer" : "In Babylon"},
        { "question" : "Who is considered as our faithful brother? (1 Peter 5:12)" , "answer" : "Silvanus"},
        { "question" : "Why has Peter written briefly to you? (1 Peter 5:12)" , "answer" : "Exhorting and testifying that this is the true grace of God in which you stand "},
        { "question" : "What is he exhorting and testifying in which you stand? (1 Peter 5:12)" , "answer" : "The true grace of God "},
        //
        { "question" : "What should be to all who are in Christ Jesus? (1 Peter 5:14)" , "answer" : "Peace"},
        { "question" : "How should we greet one another? (1 Peter 5:14)" , "answer" : "With a kiss of love"},
        { "question" : "What is the last word in the book of 1st Peter? (1 Peter 5:14)" , "answer" : "amen"}
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""}
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


function peter_1_c1(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_1.c1.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_1.c1[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_1.c1[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function peter_1_c2(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_1.c2.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_1.c2[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_1.c2[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function peter_1_c3(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_1.c3.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_1.c3[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_1.c3[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}
function peter_1_c4(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_1.c4.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_1.c4[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_1.c4[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function peter_1_c5(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*peter_1.c5.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    peter_1.c5[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    peter_1.c5[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}