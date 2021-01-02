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

var james = { //might need to add "james" : [] but dont have to cause chapters are definet numbers
    "c1" : [
        //Greeting to the Twelve Tribes
        { "question":"Who was James? (James1:1; 2 pts)" , "answer":"A bondservant of God and of the Lord Jesus Christ" }, 
        { "question":"Whom was James sending the letter to? (James1:1)" , "answer":"To the 12 tribes which were scattered abroad" }, 
        { "question":"Where were the 12 tribes? (James1:1)" , "answer":"Scattered abroad" },
        { "question" : "What was the opening word of the letter? (James1:1)" , "answer" : "Greetings"},
        //Profiting from Trials
        { "question" : "What did James tell them to count it all when they fall into various trial? (James1:2)" , "answer" : "All joy"}, 
        { "question" : "Why were they to count it all joy when they fall into various trial? (James1:2 – 3)" , "answer" : "Knowing that the testing of your faith produces patience"},
        { "question" : "What produces patience? (James1: 3)" , "answer" : "The testing of your faith"},
        { "question" : "What should you let have its perfect work? (James1:4)" , "answer" : "Patience"},
        { "question" : "Why should you let patience have its perfect work? (James1:4; 2 pts)" , "answer" : "That you may be perfect and complete, lacking nothing"},
        //
        { "question" : "What should you do if you lack wisdom? (James1:5; 3pts)" , "answer" : "Let him ask of God, who gives to all liberally and without reproach, and lit will be given to him"},
        { "question" : "How does God give to all? (James1:5; 2 pts)" , "answer" : "Liberally & without reproach"},
        { "question" : "How should we ask for wisdom? (James1:5-6; 2 pts)" , "answer" : "In faith, with no doubting"},
        { "question" : "How is the one who doubts described? (James1:6; 2pts)" , "answer" : "Like a wave of the sea driven and tossed by the wind"},
        { "question" : "Who is like a wave of the sea driven and tossed by the wind? (James1:6)" , "answer" : "The one who doubts"},
        //
        { "question" : "Why should you not let that man suppose he will receive anything from the Lord? (James1:7-8; 2pts)" , "answer" : "He is a double-minded man, unstable in his ways"},
        //The Perspective of Rich and Poor
        { "question" : "Who should glory in his exaltation1? (James1:9)" , "answer" : "The lowly brother"},
        { "question" : "What should the rich man glory in? (James1:9 – 10)" , "answer" : "In his humiliation"},
        { "question" : "Why should a rich man glory in his humiliation? (James1:10)" , "answer" : "Because as a flower of the field he will pass away"},
        { "question" : "What does the sun rise with? (James1:11)" , "answer" : "A burning heat"},
        { "question" : "What will the rich man fade away in? (James1:11)" , "answer" : "His pursuits"},
        //
        { "question" : "What happens when the sun rises with a burning heat? James1:11; 3 pts)" , "answer" : "It withers the grass, its flower falls & its beautiful appearance perishes"},
        { "question" : "What happens to the beautiful appearance of the grass? (James1:11)" , "answer" : "It perishes"},
        //Loving God Under Trials
        { "question" : "What happens to the man who endures temptation? (James1:12)" , "answer" : "He is blessed"},
        { "question" : "What will the man who endures temptation receive when he is approved? (James1:12)" , "answer" : "A crown of life"},
        { "question" : "Who as the Lord promised a crown of life? (James1:12)" , "answer" : "Those who love Him"},
        { "question" : "When will the man who endures temptation receive a crown of life? (James1:12)" , "answer" : "When he is approved"},
        { "question" : "What should no one say when he is tempted? (James1:13)" , "answer" : "I am tempted by God"},
        //
        { "question" : "Why should no one say he is tempted by God? (James1:13; 2 pts)" , "answer" : "For God cannot be tempted by evil, nor does He Himself tempt anyone"},
        { "question" : "How is each one tempted? (James1:14; 2 pts)" , "answer" : "When he is drawn away by his own desires and enticed"},
        { "question" : "By what is he who is tempted drawn away? (James1:14)" , "answer" : "His own desires"},
        { "question" : "9.	What is conceived and what does it gives birth to? (James1:15; 2 pts)" , "answer" : "Conceived – desire & Gives birth to – sin"},
        { "question" : "10.	When sin is full grown, what does it bring? (James1:15)" , "answer" : "Death"},
        //
        { "question" : "11.	Whom did James admonished not to be deceived? (James1:16)" , "answer" : "My beloved brethren"},
        { "question" : "12.	What comes from above & comes down from the Father of lights? (James1:17; 2pts)" , "answer" : "Every good gift & perfect gift"},
        { "question" : "13.	Where does every good gift and perfect gift comes from? (James1:17)" , "answer" : "From above"},
        { "question" : "14.	Whom does every good gift and perfect gifts comes from? (James1:17)" , "answer" : "From the Father of lights"},
        { "question" : "15.	What is there none of with the Father of lights? (James1:17; 2 pts)" , "answer" : "No variation or shadow of turning"},
        //
        { "question" : "16.	Why did He (the Father of lights) bring us (man) forth? (James1:18)" , "answer" : "That we might be a kind of first fruits of His creatures "},
        { "question" : "17.	By what did He (the Father of lights) bring us forth? (James1:18; 2pts)" , "answer" : "Of His own will, He brought us forth by the word of truth"},
        //Qualities Needed in Trials
        { "question" : "1.	What should every man be swift to be? (James1:19)" , "answer" : "Swift to hear"},
        { "question" : "2.	What should every man be slow to do? (James1:19; 2 pts)" , "answer" : "Slow to speak; slow to wrath"},
        { "question" : "3.	What does not produce the righteousness of God? (v 20)" , "answer" : "The wrath of man"},
        { "question" : "What does the wrath of man not produce? (James1:20)" , "answer" : "The righteousness of God"},
        //Doers—Not Hearers Only
        { "question" : "1.	What did James say we are to lay aside? (James1:21; 2 pts)" , "answer" : "All filthiness & overflow of wickedness"},
        { "question" : "2.	What should we receive? (James1:21)" , "answer" : "The implanted word "},
        { "question" : "3.	How should we receive the implanted word? (James1:21)" , "answer" : "With meekness"},
        { "question" : "4.	What is the implanted word able to do? (James1:21)" , "answer" : "To save your souls"},
        { "question" : "5.	What should we be of the word? (James1:22)" , "answer" : "Doers of the word"},
        //
        { "question" : "6.	Why should we be doers of the word and not only hearers only? (James1:22)" , "answer" : "Not deceiving ourselves"},
        { "question" : "7.	What is anyone who is a hearer of the word and not a doer of the word liken to? (James1:23)" , "answer" : "Like a man observing his natural face in a mirror"},
        { "question" : "8.	What does the man observing his natural face in the mirror do? (James1:23 – 24; 3 pts)" , "answer" : "Observes himself, goes away, and immediately forgets what kind of man he was"},
        { "question" : "9.	What does the man who observes himself in the mirror immediately forgets? (James1:23- 24)" , "answer" : "What kind of man he was "},
        { "question" : "10.	In what does he who is not a forgetful hearer but a doer of the work looks? (James1:25)" , "answer" : "Into the perfect law of liberty"},
        //
        { "question" : "11.	Who looks into the perfect law of liberty and continues in it? (James1:25; 2 pts)" , "answer" : "He who is not a forgetful hearer, but a doer of the work "},
        { "question" : "12.	What does he who does not bridle his tongue do? (James1:26)" , "answer" : "Deceives his own heart"},
        { "question" : "13.	What kind of religion does the one who does not bridle his tongue but deceives his own heart has? (James1:26)" , "answer" : "A useless religion"},
        { "question" : "14.	What is pure and undefiled religion before God and the Father? (James1:27; 3 pts)" , "answer" : "To visit orphans & widows in their troubles, and to keep oneself unspotted from the world"},
        { "question" : "15.	To visit the orphans and widows in their trouble & to keep oneself unspotted from the world, is known as? (James1:27; 2 pts)" , "answer" : "Pure and undefiled religion before God and the Father"}
        //
        //{ "question" : "" , "answer" : ""}  
    ],

    "c2":[
        //Beware of Personal Favoritism
        { "question" : "1.	What should we not hold with partiality? (James2:1)" , "answer" : "he faith of our Lord Jesus Christ"},
        { "question" : "2.	What is another title for our Lord Jesus Christ? (James2:1)" , "answer" : "The Lord of glory"},
        { "question" : "3.	How does the verse describe the two men that should come into the assembly? (James2:2; 4pts)" , "answer" : "A man with rings, in fine apparel & a poor man in filthy clothes"},
        { "question" : "4.	What statement was used when speaking to the one wearing the fine clothes? (James2:3)" , "answer" : "‘You sit here in a good place.’"},
        { "question" : "5.	What statements were used when speaking to the poor man? (James2:3; 2 pts)" , "answer" : "‘You stand there.’ Or ‘Sit here at my footstool’"},
        //
        { "question" : "6.	What have we shown among ourselves? (James2:4)" , "answer" : "Partiality"},
        { "question" : "7.	What have we become by showing partiality? (James2:4)" , "answer" : "Judges"},
        { "question" : "8.	What kind of judges have we become by showing partiality? (James2:4)" , "answer" : "Judges with evil thoughts"},
        { "question" : "9.	Who has God chosen to be rich in faith & heir of the kingdom? (James2:5)" , "answer" : "The poor of this world"},
        { "question" : "10.	Why has God chosen the poor of this world? (James2:5; 2pts)" , "answer" : "To be rich in faith and heirs of the kingdom which He promised to those who love Him"},
        //
        { "question" : "What has God promised to those who love Him? (James2:5)" , "answer" : "To be heirs of the kingdom"},
        { "question" : "What have you done to the poor man? (James2:6)" , "answer" : "Dishonoured"},
        { "question" : "13.	What do the rich do to you? (James2:6; 2 pts)" , "answer" : "Oppress you & drag you into the courts"},
        { "question" : "14.	What do they (the rich) blaspheme by which you are called? (James2:7)" , "answer" : "That noble name"},
        { "question" : "15.	What is the royal law? (James2:8)" , "answer" : "You shall love your neighbor as yourself"},
        //
        { "question" : "16.	How should you fulfil the royal law? (James2:8)" , "answer" : "According to Scripture"},
        { "question" : "17.	What should you fulfill according to the Scripture? (James2:8)" , "answer" : "The royal law"},
        { "question" : "18.	What happens if you show partiality? (James2:9; 2 pts)" , "answer" : "You commit sin & ae convicted by the law as transgressors"},
        { "question" : "19.	When we show partiality, how are we convicted? (James2: 9)" , "answer" : "By the law"},
        { "question" : "20.	What is the result of someone who keeps the whole law and yet he stumbles in one point? (James2:10)" , "answer" : "He is guilty of all "},
        //
        { "question" : "21.	What two commandments are mentioned in verse 11? (James2:11; 2 pts)" , "answer" : "Do not commit adultery & Do not murder"},
        { "question" : "22.	What have you become if you do not commit adultery, but you do murder? (James2:11)" , "answer" : "A transgressor of the law"},
        { "question" : "23.	What will you be judged by? (James2: 12)" , "answer" : "The law of liberty"},
        { "question" : "24.	What triumphs over judgement? (James2:13)" , "answer" : "Mercy"},
        { "question" : "25.	How is judgement for the one who has shown no mercy? (James2:13)" , "answer" : "Without mercy"},
        //Faith Without Works Is Dead
        { "question" : "1.	“What does it ____, my brethren, if someone says he has ____ but does not have ___? Can ___ save him?” (James2:14; 4 pts)" , "answer" : "Profit, faith, works, faith"},
        { "question" : "If a brother or sister is ___ and ____ of ____ ____, and one of you says to them,  ‘____ in ____, be ____ and ____,’ (James2:15 -16; 8 pts)" , "answer" : "Naked, destitute, daily, food, depart, peace, warmed, filled"},
        { "question" : "3.	What is dead if, by itself it does not have works? (James2:17)" , "answer" : "Faith"},
        { "question" : "4.	‘But someone will say, ‘You have ___, and I have ___.’ Show me your ___ without your ___, and I will show you my ___ by my ___.” (James2:18; 6 pts)" , "answer" : "Faith, works, faith, works, faith, works"},
        { "question" : "5.	According to James 2:19, what do you believe? (James2:19)" , "answer" : "That there is one God"},
        //
        { "question" : "6.	Who also believe that there is one God? (James2:19)" , "answer" : "The demons"},
        { "question" : "7.	What do the demons do? (James2:19; 2 pts)" , "answer" : "Believe & tremble"},
        { "question" : "8.	“But do you want to know, O ___ man, that ___ without ___ is ___? (James2:20; 4 pts)" , "answer" : "Foolish, faith, works, dead"},
        { "question" : "9.	How was Abraham justified by works? (James2:21)" , "answer" : "When he offered Isaac his son on the altar"},
        { "question" : "10.	Who was justified when he offered his son (Isaac) on the altar? (James2:21)" , "answer" : "Abraham"},
        //
        { "question" : "11.	How is faith made perfect? (James2: 22)" , "answer" : "By works"},
        { "question" : "12.	Who was called the friend of God? (James2:23)" , "answer" : "Abraham"},
        { "question" : "13.	What was the result of Abraham believing God? (James2:23)" , "answer" : "It was accounted to him for righteousness"},
        { "question" : "14.	What was accounted to Abraham for righteousness? (James2:23)" , "answer" : "Because he believed God"},
        { "question" : "15.	What was fulfilled when it says Abraham believed God, and it was accounted to him for righteousness? (James2:23)" , "answer" : "The Scripture "},
        //
        { "question" : "16.	What is a man justified by? (James2:24; 2 pts)" , "answer" : "Works and faith"},
        { "question" : "17.	Who was Rahab? (James2:25)" , "answer" : "The harlot"},
        { "question" : "18.	Whom did Rahab receive? (James2: 25)" , "answer" : "The messengers"},
        { "question" : "19.	Where did Rahab send the messengers? (James2:25)" , "answer" : "Out another way"},
        { "question" : "20.	“For as the ____ without the ____ is____, so ___ without ___ is ____ also.” (James2:26; 6 pts)" , "answer" : "Body, spirit, dead, faith, works, dead"}
        //
        //{"question" : "" , "answer" : ""}
    ],

    "c3":[
        //The Untamable Tongue
        { "question" : "1.	Why was James saying that not many of his brethren should become teachers? (James 3:1) " , "answer" : "Knowing that we (teachers) shall receive a stricter judgement"},
        { "question" : "2.	Who did James say will receive a stricter judgement? (James 3:1)" , "answer" : "Teachers"},
        { "question" : "3.	What do we all stumble in? (James 3:2)" , "answer" : "Many things"},
        { "question" : "4.	Who is described as a perfect man? (James 3:2)" , "answer" : "Anyone who does not stumble in word"},
        { "question" : "5.	What should anyone who does not stumble in word be able to do also? (James 3:2)" , "answer" : "Bridle the whole body"},
        //
        { "question" : "6.	What do we put in horses’ mouth that they may obey us? (James 3:3; 2 pts)" , "answer" : "Ans: Bits & we turn their whole body"},
        { "question" : "7.	What are ships driven by? (James 3:4)" , "answer" : "Fierce winds"},
        { "question" : "8.	What are ships turned by? (James 3:4)" , "answer" : "A very small rudder"},
        { "question" : "9.	What is turned by a very small rudder wherever the pilot desires? (James 3:4)" , "answer" : "Ships"},
        { "question" : "10.	What is described as a little member and boasts great things? (James 3:5)" , "answer" : "The tongue"},
        //
        { "question" : "11.	What does a little fire kindle? (James 3:5)" , "answer" : "A forest"},
        { "question" : "12.	List three things that the tongue is compared with. (James 3:3 – 5; 3 pts)" , "answer" : "Bits – horses, rudder – ship & a little fire – forest "},
        { "question" : "13.	What does the tongue liken to? (James 3:6; 2 pts)" , "answer" : "A fire, a world of iniquity"},
        { "question" : "14.	Where is the tongue set among? (James 3:6)" , "answer" : "Our members"},
        { "question" : "15.	Why is the tongue set among our members? (James 3:6; 2 pts)" , "answer" : "To defile the whole body and sets on fire the course of nature"},
        //
        { "question" : "16.	What is the tongue set on fire by? (James 3:6)" , "answer" : "By hell"},
        { "question" : "17.	What is tamed and has been tamed by mankind? (James 3:7; 4 pts)" , "answer" : "Every kind of beast & bird, of reptile and creature of the sea. "},
        { "question" : "18.	Who can tame the tongue? (James 3:8)" , "answer" : "No man"},
        { "question" : "19.	How is the tongue described in verse 8? (James 3:8; 2 pts)" , "answer" : "An unruly evil full of deadly poison"},
        { "question" : "20.	Whom do we bless with our tongue? (James 3:9; 2 pts)" , "answer" : "Our God and Father"},
        //
        { "question" : "21.	Who do we curse with our tongue? (James 3:9)" , "answer" : "Men"},
        { "question" : "22.	How was man made? (James 3:9)" , "answer" : "In the similitude of God"},
        { "question" : "23.	What proceeds out of the same mouth? (James 3:10; 2 pts)" , "answer" : "Blessing and cursing"},
        { "question" : "24.	What did James say should not be so? (James 3:10; 2 pts)" , "answer" : "That blessings and cursing should proceed out of the same mouth"},
        { "question" : "25.	“Does a ___ send forth ___ water and ____ from the same ___?” (James 3:11; 4 pts)" , "answer" : "Spring, fresh, bitter, opening"},
        //
        { "question" : "26.	“Can a ___ ___, my brethren, bear ___, or a ____ bear ____? Thus no ___ yields both ___ water and ___.” (James 3:12; 8 pts)" , "answer" : "Fig, tree, olives, grapevine, figs, spring, salt, fresh"},
        //Heavenly Versus Demonic Wisdom
        { "question" : "1.	Who should show by good conduct that his works are done in the meekness of wisdom? (James 3:13; 2 pts)" , "answer" : "He who is wise and understanding among you"},
        { "question" : "2.	What should he who is wise and understanding among you do? (James 3:13; 2 pts)" , "answer" : "Show by good conduct that his works are done in the meekness of wisdom"},
        { "question" : "3.	How should he who is wise and understanding among you show that his works are done in meekness of wisdom? (James 3:13)" , "answer" : "By his good conduct"},
        { "question" : "4.	How are his works done? (James 3:13)" , "answer" : "In the meekness of wisdom"},
        { "question" : "5.	If you have these in your hearts you should not boast and lie against the truth? (James 3:14; 2 pts)" , "answer" : "Bitter envy & self-seeking"},
        //
        { "question" : "6.	What should you not do if you have bitter envy and self-seeking in your hearts? (James 3:14; 2 pts)" , "answer" : "Do not boast & lie against the truth"},
        { "question" : "7.	What does not descend from above? (James 3:15)" , "answer" : "This wisdom"},
        { "question" : "8.	‘This wisdom does not descend from above, but is ____, _____, _____.” (James 3:15; 3 pts)" , "answer" : "Earthly, sensual, demonic"},
        { "question" : "9.	What exists where there is envy and self-seeking? (James 3:16; 2 pts)" , "answer" : "Confusion & every evil thing are there"},
        { "question" : "10.	Confusion and every evil thing are there when these exist? (James 3:16; 2 pts)" , "answer" : "Envy & self-seeking"},
        //
        { "question" : "11.	What are some characteristics of the wisdom that is from above? (James 3:17; 8 pts)" , "answer" : "First pure, then peaceable, gently, willing to yield, full of mercy & good fruits, without partiality and without hypocrisy"},
        { "question" : "12.	How is the fruit of righteousness sown? (James 3:18)" , "answer" : "In peace"},
        { "question" : "13.	Who is the fruit of righteousness sown in peace by? (James 3:18)" , "answer" : "By those who make peace"},
        { "question" : "14.	What is sown in peace y those who make peace? (James 3:18)" , "answer" : "The fruit of righteousness"}
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
        //Pride Promotes Strife
        { "question" : "1.	What comes from your desires for pleasure that war in your members? (James 4:1; 2pts)" , "answer" : "Wars & fights"},
        { "question" : "2.	Where do wars & fights come from among you? (James 4:1)" , "answer" : "From your desires for pleasures that war in your members"},
        { "question" : "3.	What do you do and do not have? (James 4:2)" , "answer" : "Lust"},
        { "question" : "4.	What do you and cannot obtain? (James 4:2; 2 pts)" , "answer" : "Murder & covet"},
        { "question" : "5.	What are five things that you do? (James 4:2; 5 pts)" , "answer" : "Lust, murder, cover, fight and war"},
        //
        { "question" : "6.	Why do you not have? (James 4:2)" , "answer" : "Because you do not ask"},
        { "question" : "7.	How do you ask? (James 4:3)" , "answer" : "Amiss"},
        { "question" : "8.	Why do you not receive even though you ask? (James 4:3)" , "answer" : "Because you ask amiss"},
        { "question" : "9.	Why does one ask amiss? (James 4:3)" , "answer" : "That they may spend it on their own pleasures"},
        { "question" : "Who was James addressing when he asked the question, ‘Do you not know that friendship with the world is enmity with God? (James 4:4; 2 pts)" , "answer" : "Adulterers and adulteresses"},
        //
        { "question" : "11.	What is enmity with God? (James 4:4)" , "answer" : "Friendship with the world"},
        { "question" : "12.	What does he who wants to be a friend of the world make himself? " , "answer" : "An enemy of God"},
        { "question" : "13.	What do you think the Scripture says in vain? (James 4:5)" , "answer" : "The Spirit who dwells in us yearns jealously"},
        { "question" : "14.	Who does God resist & to whom does He gives grace? (James 4:6; 2 pts)" , "answer" : "Resist – the proud; gives grace – to the humble"},
        //{ "question" : "" , "answer" : ""},
        //Humility Cures Worldliness
        { "question" : "1.	To whom should we submit to? (James 4:7)" , "answer" : "God"},
        { "question" : "2.	What will happen when you resist the devil? (James 4:7)" , "answer" : "He will flee from you"},
        { "question" : "3.	Whom should we resist? (James 4:7)" , "answer" : "The devil"},
        { "question" : "4.	What will happen when you draw near to God? (James 4:8)" , "answer" : "He will draw near to you"},
        { "question" : "5.	Who should cleanse their hands & purify their hearts? (James 4:8; 2 pts)" , "answer" : "Cleanse hands – you sinners & purify your hearts – you double-minded"},
        //
        { "question" : "6.	What should the sinners & double-minded do? (James 4:8-9; 5 pts)" , "answer" : "Lament, mourn, weep, let your laughter be turned to mourning & your joy to gloom"},
        { "question" : "7.	What will happen when you humble yourselves in the sight of the Lord? (James 4:10)" , "answer" : "He will lift you up"},
        { "question" : "8.	When will the Lord lift you up? (James 4:10)" , "answer" : "When you humble yourself in His sight "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Do Not Judge a Brother
        { "question" : "1.	What should you not speak of anyone? (James 4:11)" , "answer" : "Evil"},
        { "question" : "2.	What does he who speaks evil of his brother and judges his brother also do? (James 4:11; 2pts)" , "answer" : "Speak evil of the law & judges the law"},
        { "question" : "3.	What are you if you judge the law? (James 4:11; 2 pts)" , "answer" : "Not a doer of the law, but a judge"},
        { "question" : "4.	Who is there one of? (James 4:12)" , "answer" : "One Lawgiver"},
        { "question" : "5.	What is the Lawgiver able to do? (James 4:12; 2 pts)" , "answer" : "To save and to destroy"},
        //Do Not Boast About Tomorrow
        { "question" : "1.	When will you go to such and such a city? (James 4:13; 2 pts)" , "answer" : "Today or tomorrow"},
        { "question" : "2.	Where will you go today or tomorrow? (James 4:13; 2 pts)" , "answer" : "Such and such a city"},
        { "question" : "3.	How long would you spend in such and such a city? (James 4:13)" , "answer" : "A year"},
        { "question" : "4.	What would you do in such and such a city for a year? (James 4:13; 3 pts)" , "answer" : "Buy & sell and make a profit"},
        { "question" : "5.	According to James 4 verse 14, you know what will happen tomorrow? " , "answer" : "No"},
        //
        { "question" : "6.	What is your life compared to? (James 4:14)" , "answer" : "A vapor"},
        { "question" : "7.	How long does a vapor appears for? (James 4:14)" , "answer" : "A little time"},
        { "question" : "8.	What happens to a vapor after it appears for a little time? (James 4:14)" , "answer" : "It vanishes away"},
        { "question" : "9.	What should we say instead? (James 4:15; 3pts)" , "answer" : "‘If the Lord wills, we shall live, and do this or that.’"},
        { "question" : "10.	What do you boast in? (James 4:16)" , "answer" : "In your arrogance"},
        //
        { "question" : "11.	What is all such boasting? James 4:16)" , "answer" : "Evil"},
        { "question" : "12.	What is it to him who knows to do good and does not do it? (James 4:17)" , "answer" : "It is sin"}
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""}
    ],

    "c5":[
        //Rich Oppressors Will Be Judged
        { "question" : "1.	Who should weep & howl for the miseries that are coming upon them? (James 5:1)" , "answer" : "The rich"},
        { "question" : "2.	What should the rich do for the miseries that are coming upon you? (James 5:1; 2pts)" , "answer" : "Weep & Howl"},
        { "question" : "3.	What are corrupted & moth-eaten? (James 5:2; 2 pts)" , "answer" : "Corrupted – your riches & moth-eaten – your garments"},
        { "question" : "4.	What are corroded? (James 5:3; 2 pts)" , "answer" : "Your gold & silver"},
        { "question" : "5.	What will the corrosion of your gold and silver be against you? (James 5:3)" , "answer" : "A witness"},
        //
        { "question" : "6.	What will the corrosion of your gold and silver eat? (James 5:3)" , "answer" : "Your flesh like fire"},
        { "question" : "7.	What have you heaped up in the last days? (James 5:3)" , "answer" : "Treasures"},
        { "question" : "8.	What have reached the ears of the Lord of Sabaoth? (James 5:4)" , "answer" : "The cries of the reapers"},
        { "question" : "9.	What cried out? (James 5:4; 2 3 pts)" , "answer" : "The wages of the labourers who mowed your fields, which you kept back by fraud"},
        { "question" : "10.	How have you kept back the wages of the labourers who mowed your fields? (James 5:4)" , "answer" : "By fraud"},
        //
        { "question" : "11.	How have you lived on the earth? (James 5:5; 2 pts)" , "answer" : "In pleasure & luxury "},
        { "question" : "12.	What have you fattened as in the day of slaughter? (James 5:5)" , "answer" : "Your heart"},
        { "question" : "13.	Who does not resist you (the rich)? (James 5:6)" , "answer" : "The just"},
        { "question" : "14.	What have they (the rich) done to the just? (James 5:6; 2 pts)" , "answer" : "Condemned & murdered"},
        //{ "question" : "" , "answer" : ""},
        //Be Patient and Persevering
        { "question" : "1.	Until when did James say the brethren were to be patient? (James 5:7)" , "answer" : "Until the coming of the Lord"},
        { "question" : "2.	What does the farmer wait for? (James 5:7)" , "answer" : "The precious fruit of the earth"},
        { "question" : "3.	How does the farmer wait for the precious fruit of the earth? (James 5:7)" , "answer" : "Patiently"},
        { "question" : "4.	The farmer patiently waits for the precious fruit of the earth until it receives what? (James 5:7; 2 pts)" , "answer" : "The early and the latter rain"},
        { "question" : "5.	What should you establish because the coming of the Lord is at hand? (James 5:8)" , "answer" : "Your hearts"},
        //
        { "question" : "6.	What is at hand? (James 5:8)" , "answer" : "The coming of the Lord"},
        { "question" : "7.	What should you not do against one another? (James 5:9)" , "answer" : "Grumble"},
        { "question" : "8.	Why should you not grumble against one another? (James 5:9)" , "answer" : "Lest you be condemned"},
        { "question" : "9.	Who is standing at the door? (James 5:9)" , "answer" : "The Judge"},
        { "question" : "10.	In whose name did the prophets speak. (James 5:10)" , "answer" : "The name of the Lord"},
        //
        { "question" : "11.	The prophets spoke in the name of the Lord as an example of what? (James 5:10; 2 pts)" , "answer" : "Suffering and patience"},
        { "question" : "12.	Who do we count as blessed? (James 5:11)" , "answer" : "Those who endure"},
        { "question" : "13.	What have you heard and seen of Job? (James 5:11; 2 pts)" , "answer" : "The perseverance of Job – Heard & The end intended by the Lord – Seen"},
        { "question" : "14.	How is the Lord described? (James 5:11; 2 pts)" , "answer" : "Very compassionate & merciful"},
        { "question" : "15.	Why should you not swear? (James 5:12)" , "answer" : "Lest you fall into judgement"},
        //
        { "question" : "16.	What should you not swear by? (12; 3 pts)" , "answer" : "Either by heaven or by earth or with any other oath"},
        { "question" : "17.	What should you let your yes and your no be? (James 5:12; 2 pts)" , "answer" : "Yes be yes & no be no"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Meeting Specific Needs
        { "question" : "1.	What should you do if you are suffering? (James 5:13)" , "answer" : "Pray"},
        { "question" : "2.	What should the cheerful do? (James 5:13)" , "answer" : "Sing psalms"},
        { "question" : "3.	What should the sick among you do? (James 5:14; 3 pts)" , "answer" : "Call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord"},
        { "question" : "4.	Whom should you call for if you are sick? (James 5:14)" , "answer" : "The elders of the church"},
        { "question" : "5.	What will save the sick? (James 5:15)" , "answer" : "The prayer of faith"},
        //
        { "question" : "6.	Who will raise the sick up? (James 5:15)" , "answer" : "The Lord"},
        { "question" : "7.	What will happen if he (the sick) had committed sins? (James 5:15)" , "answer" : "He will be forgiven"},
        { "question" : "8.	What should you confess to one another? (James 5:16)" , "answer" : "Your trespasses"},
        { "question" : "9.	Why should you confess your trespasses to one another and pray for one another? (James 5:16)" , "answer" : "That you may be healed"},
        { "question" : "10.	What kind of prayer avails much? (James 5:16; 3 pts)" , "answer" : "The effective, fervent prayer of a righteous man"},
        //
        { "question" : "11.	Who was a man with like nature as ours? (James 5:17)" , "answer" : "Elijah"},
        { "question" : "12.	How did he (Elijah) prayed that it did not rain? (James 5:17)" , "answer" : "Earnestly"},
        { "question" : "13.	How long did it not rain on the land when Elijah prayed? (James 5:17)" , "answer" : "3 years and 6 months"},
        { "question" : "14.	What happened when Elijah prayed again? (James 5:18; 2 pts)" , "answer" : "The heaven gave rain & the earth produced it fruit"},
        { "question" : "15.	What gave rain & produced fruit? (James 5:18; 2 pts)" , "answer" : "Rain – heaven ; produced fruit – the earth"},
        //Bring Back the Erring One
        { "question" : "1.	What will anyone wonder from? (James 5:19)" , "answer" : "The Truth"},
        { "question" : "2.	What will he who turns a sinner from the error of his way do? (James 5:10; 2 pts)" , "answer" : "Will save a soul from death & cover a multitude of sins"}
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
    ]
        

}


function james_c1(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*james.c1.length);
    document.getElementById("number").innerHTML = "Question #" + (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    james.c1[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    james.c1[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}
function james_c2(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*james.c2.length);
    document.getElementById("number").innerHTML ="Question #" +  (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    james.c2[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    james.c2[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function james_c3(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*james.c3.length);
    document.getElementById("number").innerHTML ="Question #" +  (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    james.c3[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    james.c3[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function james_c4(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*james.c4.length);
    document.getElementById("number").innerHTML ="Question #" +  (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    james.c4[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    james.c4[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}

function james_c5(){
    //converts the json object into somthing readable
    //generates a random number over the length of the JSON array
    var i = Math.floor(Math.random()*james.c5.length);
    document.getElementById("number").innerHTML ="Question #" +  (i+1);
    //puts the random question into the html
    document.getElementById("question").innerHTML =
    james.c5[i].question;
    //puts the correct random answer into the html
    document.getElementById("answer").innerHTML =
    "<b>"+" Correct Answer:" + "<br>"+ "</b>"+
    james.c5[i].answer;
    //hides the answer
    document.getElementById("answer").style.display = "none";
    //changes the button back 
    document.getElementById("show").innerHTML ="Show Answer";
    //erases user text
    document.getElementById("u_answer").value = "";
}