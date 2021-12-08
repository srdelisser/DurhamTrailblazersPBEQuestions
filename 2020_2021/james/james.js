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
        { "question" : "Who was James? (James1:1; 2 pts)" , "answer":"A bondservant of God and of the Lord Jesus Christ" }, 
        { "question" : "Whom was James sending the letter to? (James1:1)" , "answer":"To the 12 tribes which were scattered abroad" }, 
        { "question" : "Where were the 12 tribes? (James1:1)" , "answer":"Scattered abroad" },
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
        { "question" : "What is conceived and what does it gives birth to? (James1:15; 2 pts)" , "answer" : "Conceived – desire & Gives birth to – sin"},
        { "question" : "When sin is full grown, what does it bring? (James1:15)" , "answer" : "Death"},
        //
        { "question" : "Whom did James admonished not to be deceived? (James1:16)" , "answer" : "My beloved brethren"},
        { "question" : "What comes from above & comes down from the Father of lights? (James1:17; 2pts)" , "answer" : "Every good gift & perfect gift"},
        { "question" : "Where does every good gift and perfect gift comes from? (James1:17)" , "answer" : "From above"},
        { "question" : "Whom does every good gift and perfect gifts comes from? (James1:17)" , "answer" : "From the Father of lights"},
        { "question" : "What is there none of with the Father of lights? (James1:17; 2 pts)" , "answer" : "No variation or shadow of turning"},
        //
        { "question" : "Why did He (the Father of lights) bring us (man) forth? (James1:18)" , "answer" : "That we might be a kind of first fruits of His creatures "},
        { "question" : "By what did He (the Father of lights) bring us forth? (James1:18; 2pts)" , "answer" : "Of His own will, He brought us forth by the word of truth"},
        //Qualities Needed in Trials
        { "question" : "What should every man be swift to be? (James1:19)" , "answer" : "Swift to hear"},
        { "question" : "What should every man be slow to do? (James1:19; 2 pts)" , "answer" : "Slow to speak; slow to wrath"},
        { "question" : "What does not produce the righteousness of God? (v 20)" , "answer" : "The wrath of man"},
        { "question" : "What does the wrath of man not produce? (James1:20)" , "answer" : "The righteousness of God"},
        //Doers—Not Hearers Only
        { "question" : "What did James say we are to lay aside? (James1:21; 2 pts)" , "answer" : "All filthiness & overflow of wickedness"},
        { "question" : "What should we receive? (James1:21)" , "answer" : "The implanted word "},
        { "question" : "How should we receive the implanted word? (James1:21)" , "answer" : "With meekness"},
        { "question" : "What is the implanted word able to do? (James1:21)" , "answer" : "To save your souls"},
        { "question" : "What should we be of the word? (James1:22)" , "answer" : "Doers of the word"},
        //
        { "question" : "Why should we be doers of the word and not only hearers only? (James1:22)" , "answer" : "Not deceiving ourselves"},
        { "question" : "What is anyone who is a hearer of the word and not a doer of the word liken to? (James1:23)" , "answer" : "Like a man observing his natural face in a mirror"},
        { "question" : "What does the man observing his natural face in the mirror do? (James1:23 – 24; 3 pts)" , "answer" : "Observes himself, goes away, and immediately forgets what kind of man he was"},
        { "question" : "What does the man who observes himself in the mirror immediately forgets? (James1:23- 24)" , "answer" : "What kind of man he was "},
        { "question" : "In what does he who is not a forgetful hearer but a doer of the work looks? (James1:25)" , "answer" : "Into the perfect law of liberty"},
        //
        { "question" : "Who looks into the perfect law of liberty and continues in it? (James1:25; 2 pts)" , "answer" : "He who is not a forgetful hearer, but a doer of the work "},
        { "question" : "What does he who does not bridle his tongue do? (James1:26)" , "answer" : "Deceives his own heart"},
        { "question" : "What kind of religion does the one who does not bridle his tongue but deceives his own heart has? (James1:26)" , "answer" : "A useless religion"},
        { "question" : "What is pure and undefiled religion before God and the Father? (James1:27; 3 pts)" , "answer" : "To visit orphans & widows in their troubles, and to keep oneself unspotted from the world"},
        { "question" : "To visit the orphans and widows in their trouble & to keep oneself unspotted from the world, is known as? (James1:27; 2 pts)" , "answer" : "Pure and undefiled religion before God and the Father"}
        //
        //{ "question" : "" , "answer" : ""}  
    ],

    "c2":[
        //Beware of Personal Favoritism
        { "question" : "What should we not hold with partiality? (James2:1)" , "answer" : "he faith of our Lord Jesus Christ"},
        { "question" : "What is another title for our Lord Jesus Christ? (James2:1)" , "answer" : "The Lord of glory"},
        { "question" : "How does the verse describe the two men that should come into the assembly? (James2:2; 4pts)" , "answer" : "A man with rings, in fine apparel & a poor man in filthy clothes"},
        { "question" : "What statement was used when speaking to the one wearing the fine clothes? (James2:3)" , "answer" : "‘You sit here in a good place.’"},
        { "question" : "What statements were used when speaking to the poor man? (James2:3; 2 pts)" , "answer" : "‘You stand there.’ Or ‘Sit here at my footstool’"},
        //
        { "question" : "What have we shown among ourselves? (James2:4)" , "answer" : "Partiality"},
        { "question" : "What have we become by showing partiality? (James2:4)" , "answer" : "Judges"},
        { "question" : "What kind of judges have we become by showing partiality? (James2:4)" , "answer" : "Judges with evil thoughts"},
        { "question" : "Who has God chosen to be rich in faith & heir of the kingdom? (James2:5)" , "answer" : "The poor of this world"},
        { "question" : "Why has God chosen the poor of this world? (James2:5; 2pts)" , "answer" : "To be rich in faith and heirs of the kingdom which He promised to those who love Him"},
        //
        { "question" : "What has God promised to those who love Him? (James2:5)" , "answer" : "To be heirs of the kingdom"},
        { "question" : "What have you done to the poor man? (James2:6)" , "answer" : "Dishonoured"},
        { "question" : "What do the rich do to you? (James2:6; 2 pts)" , "answer" : "Oppress you & drag you into the courts"},
        { "question" : "What do they (the rich) blaspheme by which you are called? (James2:7)" , "answer" : "That noble name"},
        { "question" : "What is the royal law? (James2:8)" , "answer" : "You shall love your neighbor as yourself"},
        //
        { "question" : "How should you fulfil the royal law? (James2:8)" , "answer" : "According to Scripture"},
        { "question" : "What should you fulfill according to the Scripture? (James2:8)" , "answer" : "The royal law"},
        { "question" : "What happens if you show partiality? (James2:9; 2 pts)" , "answer" : "You commit sin & ae convicted by the law as transgressors"},
        { "question" : "When we show partiality, how are we convicted? (James2: 9)" , "answer" : "By the law"},
        { "question" : "What is the result of someone who keeps the whole law and yet he stumbles in one point? (James2:10)" , "answer" : "He is guilty of all "},
        //
        { "question" : "What two commandments are mentioned in verse 11? (James2:11; 2 pts)" , "answer" : "Do not commit adultery & Do not murder"},
        { "question" : "What have you become if you do not commit adultery, but you do murder? (James2:11)" , "answer" : "A transgressor of the law"},
        { "question" : "What will you be judged by? (James2: 12)" , "answer" : "The law of liberty"},
        { "question" : "What triumphs over judgement? (James2:13)" , "answer" : "Mercy"},
        { "question" : "How is judgement for the one who has shown no mercy? (James2:13)" , "answer" : "Without mercy"},
        //Faith Without Works Is Dead
        { "question" : "“What does it ____, my brethren, if someone says he has ____ but does not have ___? Can ___ save him?” (James2:14; 4 pts)" , "answer" : "Profit, faith, works, faith"},
        { "question" : "If a brother or sister is ___ and ____ of ____ ____, and one of you says to them,  ‘____ in ____, be ____ and ____,’ (James2:15 -16; 8 pts)" , "answer" : "Naked, destitute, daily, food, depart, peace, warmed, filled"},
        { "question" : "What is dead if, by itself it does not have works? (James2:17)" , "answer" : "Faith"},
        { "question" : "‘But someone will say, ‘You have ___, and I have ___.’ Show me your ___ without your ___, and I will show you my ___ by my ___.” (James2:18; 6 pts)" , "answer" : "Faith, works, faith, works, faith, works"},
        { "question" : "According to James 2:19, what do you believe? (James2:19)" , "answer" : "That there is one God"},
        //
        { "question" : "Who also believe that there is one God? (James2:19)" , "answer" : "The demons"},
        { "question" : "What do the demons do? (James2:19; 2 pts)" , "answer" : "Believe & tremble"},
        { "question" : "“But do you want to know, O ___ man, that ___ without ___ is ___? (James2:20; 4 pts)" , "answer" : "Foolish, faith, works, dead"},
        { "question" : "How was Abraham justified by works? (James2:21)" , "answer" : "When he offered Isaac his son on the altar"},
        { "question" : "Who was justified when he offered his son (Isaac) on the altar? (James2:21)" , "answer" : "Abraham"},
        //
        { "question" : "How is faith made perfect? (James2: 22)" , "answer" : "By works"},
        { "question" : "Who was called the friend of God? (James2:23)" , "answer" : "Abraham"},
        { "question" : "What was the result of Abraham believing God? (James2:23)" , "answer" : "It was accounted to him for righteousness"},
        { "question" : "What was accounted to Abraham for righteousness? (James2:23)" , "answer" : "Because he believed God"},
        { "question" : "What was fulfilled when it says Abraham believed God, and it was accounted to him for righteousness? (James2:23)" , "answer" : "The Scripture "},
        //
        { "question" : "What is a man justified by? (James2:24; 2 pts)" , "answer" : "Works and faith"},
        { "question" : "Who was Rahab? (James2:25)" , "answer" : "The harlot"},
        { "question" : "Whom did Rahab receive? (James2: 25)" , "answer" : "The messengers"},
        { "question" : "Where did Rahab send the messengers? (James2:25)" , "answer" : "Out another way"},
        { "question" : "“For as the ____ without the ____ is____, so ___ without ___ is ____ also.” (James2:26; 6 pts)" , "answer" : "Body, spirit, dead, faith, works, dead"}
        //
        //{"question" : "" , "answer" : ""}
    ],

    "c3":[
        //The Untamable Tongue
        { "question" : "Why was James saying that not many of his brethren should become teachers? (James 3:1) " , "answer" : "Knowing that we (teachers) shall receive a stricter judgement"},
        { "question" : "Who did James say will receive a stricter judgement? (James 3:1)" , "answer" : "Teachers"},
        { "question" : "What do we all stumble in? (James 3:2)" , "answer" : "Many things"},
        { "question" : "Who is described as a perfect man? (James 3:2)" , "answer" : "Anyone who does not stumble in word"},
        { "question" : "What should anyone who does not stumble in word be able to do also? (James 3:2)" , "answer" : "Bridle the whole body"},
        //
        { "question" : "What do we put in horses’ mouth that they may obey us? (James 3:3; 2 pts)" , "answer" : "Ans: Bits & we turn their whole body"},
        { "question" : "What are ships driven by? (James 3:4)" , "answer" : "Fierce winds"},
        { "question" : "What are ships turned by? (James 3:4)" , "answer" : "A very small rudder"},
        { "question" : "What is turned by a very small rudder wherever the pilot desires? (James 3:4)" , "answer" : "Ships"},
        { "question" : "What is described as a little member and boasts great things? (James 3:5)" , "answer" : "The tongue"},
        //
        { "question" : "What does a little fire kindle? (James 3:5)" , "answer" : "A forest"},
        { "question" : "List three things that the tongue is compared with. (James 3:3 – 5; 3 pts)" , "answer" : "Bits – horses, rudder – ship & a little fire – forest "},
        { "question" : "What does the tongue liken to? (James 3:6; 2 pts)" , "answer" : "A fire, a world of iniquity"},
        { "question" : "Where is the tongue set among? (James 3:6)" , "answer" : "Our members"},
        { "question" : "Why is the tongue set among our members? (James 3:6; 2 pts)" , "answer" : "To defile the whole body and sets on fire the course of nature"},
        //
        { "question" : "What is the tongue set on fire by? (James 3:6)" , "answer" : "By hell"},
        { "question" : "What is tamed and has been tamed by mankind? (James 3:7; 4 pts)" , "answer" : "Every kind of beast & bird, of reptile and creature of the sea. "},
        { "question" : "Who can tame the tongue? (James 3:8)" , "answer" : "No man"},
        { "question" : "How is the tongue described in verse 8? (James 3:8; 2 pts)" , "answer" : "An unruly evil full of deadly poison"},
        { "question" : "Whom do we bless with our tongue? (James 3:9; 2 pts)" , "answer" : "Our God and Father"},
        //
        { "question" : "Who do we curse with our tongue? (James 3:9)" , "answer" : "Men"},
        { "question" : "How was man made? (James 3:9)" , "answer" : "In the similitude of God"},
        { "question" : "What proceeds out of the same mouth? (James 3:10; 2 pts)" , "answer" : "Blessing and cursing"},
        { "question" : "What did James say should not be so? (James 3:10; 2 pts)" , "answer" : "That blessings and cursing should proceed out of the same mouth"},
        { "question" : "“Does a ___ send forth ___ water and ____ from the same ___?” (James 3:11; 4 pts)" , "answer" : "Spring, fresh, bitter, opening"},
        //
        { "question" : "“Can a ___ ___, my brethren, bear ___, or a ____ bear ____? Thus no ___ yields both ___ water and ___.” (James 3:12; 8 pts)" , "answer" : "Fig, tree, olives, grapevine, figs, spring, salt, fresh"},
        //Heavenly Versus Demonic Wisdom
        { "question" : "Who should show by good conduct that his works are done in the meekness of wisdom? (James 3:13; 2 pts)" , "answer" : "He who is wise and understanding among you"},
        { "question" : "What should he who is wise and understanding among you do? (James 3:13; 2 pts)" , "answer" : "Show by good conduct that his works are done in the meekness of wisdom"},
        { "question" : "How should he who is wise and understanding among you show that his works are done in meekness of wisdom? (James 3:13)" , "answer" : "By his good conduct"},
        { "question" : "How are his works done? (James 3:13)" , "answer" : "In the meekness of wisdom"},
        { "question" : "If you have these in your hearts you should not boast and lie against the truth? (James 3:14; 2 pts)" , "answer" : "Bitter envy & self-seeking"},
        //
        { "question" : "What should you not do if you have bitter envy and self-seeking in your hearts? (James 3:14; 2 pts)" , "answer" : "Do not boast & lie against the truth"},
        { "question" : "What does not descend from above? (James 3:15)" , "answer" : "This wisdom"},
        { "question" : "‘This wisdom does not descend from above, but is ____, _____, _____.” (James 3:15; 3 pts)" , "answer" : "Earthly, sensual, demonic"},
        { "question" : "What exists where there is envy and self-seeking? (James 3:16; 2 pts)" , "answer" : "Confusion & every evil thing are there"},
        { "question" : "Confusion and every evil thing are there when these exist? (James 3:16; 2 pts)" , "answer" : "Envy & self-seeking"},
        //
        { "question" : "What are some characteristics of the wisdom that is from above? (James 3:17; 8 pts)" , "answer" : "First pure, then peaceable, gently, willing to yield, full of mercy & good fruits, without partiality and without hypocrisy"},
        { "question" : "How is the fruit of righteousness sown? (James 3:18)" , "answer" : "In peace"},
        { "question" : "Who is the fruit of righteousness sown in peace by? (James 3:18)" , "answer" : "By those who make peace"},
        { "question" : "What is sown in peace y those who make peace? (James 3:18)" , "answer" : "The fruit of righteousness"}
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
        { "question" : "What comes from your desires for pleasure that war in your members? (James 4:1; 2pts)" , "answer" : "Wars & fights"},
        { "question" : "Where do wars & fights come from among you? (James 4:1)" , "answer" : "From your desires for pleasures that war in your members"},
        { "question" : "What do you do and do not have? (James 4:2)" , "answer" : "Lust"},
        { "question" : "What do you and cannot obtain? (James 4:2; 2 pts)" , "answer" : "Murder & covet"},
        { "question" : "What are five things that you do? (James 4:2; 5 pts)" , "answer" : "Lust, murder, cover, fight and war"},
        //
        { "question" : "Why do you not have? (James 4:2)" , "answer" : "Because you do not ask"},
        { "question" : "How do you ask? (James 4:3)" , "answer" : "Amiss"},
        { "question" : "Why do you not receive even though you ask? (James 4:3)" , "answer" : "Because you ask amiss"},
        { "question" : "Why does one ask amiss? (James 4:3)" , "answer" : "That they may spend it on their own pleasures"},
        { "question" : "Who was James addressing when he asked the question, ‘Do you not know that friendship with the world is enmity with God? (James 4:4; 2 pts)" , "answer" : "Adulterers and adulteresses"},
        //
        { "question" : "What is enmity with God? (James 4:4)" , "answer" : "Friendship with the world"},
        { "question" : "What does he who wants to be a friend of the world make himself? " , "answer" : "An enemy of God"},
        { "question" : "What do you think the Scripture says in vain? (James 4:5)" , "answer" : "The Spirit who dwells in us yearns jealously"},
        { "question" : "Who does God resist & to whom does He gives grace? (James 4:6; 2 pts)" , "answer" : "Resist – the proud; gives grace – to the humble"},
        //{ "question" : "" , "answer" : ""},
        //Humility Cures Worldliness
        { "question" : "To whom should we submit to? (James 4:7)" , "answer" : "God"},
        { "question" : "What will happen when you resist the devil? (James 4:7)" , "answer" : "He will flee from you"},
        { "question" : "Whom should we resist? (James 4:7)" , "answer" : "The devil"},
        { "question" : "What will happen when you draw near to God? (James 4:8)" , "answer" : "He will draw near to you"},
        { "question" : "Who should cleanse their hands & purify their hearts? (James 4:8; 2 pts)" , "answer" : "Cleanse hands – you sinners & purify your hearts – you double-minded"},
        //
        { "question" : "What should the sinners & double-minded do? (James 4:8-9; 5 pts)" , "answer" : "Lament, mourn, weep, let your laughter be turned to mourning & your joy to gloom"},
        { "question" : "What will happen when you humble yourselves in the sight of the Lord? (James 4:10)" , "answer" : "He will lift you up"},
        { "question" : "When will the Lord lift you up? (James 4:10)" , "answer" : "When you humble yourself in His sight "},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Do Not Judge a Brother
        { "question" : "What should you not speak of anyone? (James 4:11)" , "answer" : "Evil"},
        { "question" : "What does he who speaks evil of his brother and judges his brother also do? (James 4:11; 2pts)" , "answer" : "Speak evil of the law & judges the law"},
        { "question" : "What are you if you judge the law? (James 4:11; 2 pts)" , "answer" : "Not a doer of the law, but a judge"},
        { "question" : "Who is there one of? (James 4:12)" , "answer" : "One Lawgiver"},
        { "question" : "What is the Lawgiver able to do? (James 4:12; 2 pts)" , "answer" : "To save and to destroy"},
        //Do Not Boast About Tomorrow
        { "question" : "When will you go to such and such a city? (James 4:13; 2 pts)" , "answer" : "Today or tomorrow"},
        { "question" : "Where will you go today or tomorrow? (James 4:13; 2 pts)" , "answer" : "Such and such a city"},
        { "question" : "How long would you spend in such and such a city? (James 4:13)" , "answer" : "A year"},
        { "question" : "What would you do in such and such a city for a year? (James 4:13; 3 pts)" , "answer" : "Buy & sell and make a profit"},
        { "question" : "According to James 4 verse 14, you know what will happen tomorrow? " , "answer" : "No"},
        //
        { "question" : "What is your life compared to? (James 4:14)" , "answer" : "A vapor"},
        { "question" : "How long does a vapor appears for? (James 4:14)" , "answer" : "A little time"},
        { "question" : "What happens to a vapor after it appears for a little time? (James 4:14)" , "answer" : "It vanishes away"},
        { "question" : "What should we say instead? (James 4:15; 3pts)" , "answer" : "‘If the Lord wills, we shall live, and do this or that.’"},
        { "question" : "What do you boast in? (James 4:16)" , "answer" : "In your arrogance"},
        //
        { "question" : "What is all such boasting? James 4:16)" , "answer" : "Evil"},
        { "question" : "What is it to him who knows to do good and does not do it? (James 4:17)" , "answer" : "It is sin"}
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""}
    ],

    "c5":[
        //Rich Oppressors Will Be Judged
        { "question" : "Who should weep & howl for the miseries that are coming upon them? (James 5:1)" , "answer" : "The rich"},
        { "question" : "What should the rich do for the miseries that are coming upon you? (James 5:1; 2pts)" , "answer" : "Weep & Howl"},
        { "question" : "What are corrupted & moth-eaten? (James 5:2; 2 pts)" , "answer" : "Corrupted – your riches & moth-eaten – your garments"},
        { "question" : "What are corroded? (James 5:3; 2 pts)" , "answer" : "Your gold & silver"},
        { "question" : "What will the corrosion of your gold and silver be against you? (James 5:3)" , "answer" : "A witness"},
        //
        { "question" : "What will the corrosion of your gold and silver eat? (James 5:3)" , "answer" : "Your flesh like fire"},
        { "question" : "What have you heaped up in the last days? (James 5:3)" , "answer" : "Treasures"},
        { "question" : "What have reached the ears of the Lord of Sabaoth? (James 5:4)" , "answer" : "The cries of the reapers"},
        { "question" : "What cried out? (James 5:4; 2 3 pts)" , "answer" : "The wages of the labourers who mowed your fields, which you kept back by fraud"},
        { "question" : "How have you kept back the wages of the labourers who mowed your fields? (James 5:4)" , "answer" : "By fraud"},
        //
        { "question" : "How have you lived on the earth? (James 5:5; 2 pts)" , "answer" : "In pleasure & luxury "},
        { "question" : "What have you fattened as in the day of slaughter? (James 5:5)" , "answer" : "Your heart"},
        { "question" : "Who does not resist you (the rich)? (James 5:6)" , "answer" : "The just"},
        { "question" : "What have they (the rich) done to the just? (James 5:6; 2 pts)" , "answer" : "Condemned & murdered"},
        //{ "question" : "" , "answer" : ""},
        //Be Patient and Persevering
        { "question" : "Until when did James say the brethren were to be patient? (James 5:7)" , "answer" : "Until the coming of the Lord"},
        { "question" : "What does the farmer wait for? (James 5:7)" , "answer" : "The precious fruit of the earth"},
        { "question" : "How does the farmer wait for the precious fruit of the earth? (James 5:7)" , "answer" : "Patiently"},
        { "question" : "The farmer patiently waits for the precious fruit of the earth until it receives what? (James 5:7; 2 pts)" , "answer" : "The early and the latter rain"},
        { "question" : "What should you establish because the coming of the Lord is at hand? (James 5:8)" , "answer" : "Your hearts"},
        //
        { "question" : "What is at hand? (James 5:8)" , "answer" : "The coming of the Lord"},
        { "question" : "What should you not do against one another? (James 5:9)" , "answer" : "Grumble"},
        { "question" : "Why should you not grumble against one another? (James 5:9)" , "answer" : "Lest you be condemned"},
        { "question" : "Who is standing at the door? (James 5:9)" , "answer" : "The Judge"},
        { "question" : "In whose name did the prophets speak. (James 5:10)" , "answer" : "The name of the Lord"},
        //
        { "question" : "The prophets spoke in the name of the Lord as an example of what? (James 5:10; 2 pts)" , "answer" : "Suffering and patience"},
        { "question" : "Who do we count as blessed? (James 5:11)" , "answer" : "Those who endure"},
        { "question" : "What have you heard and seen of Job? (James 5:11; 2 pts)" , "answer" : "The perseverance of Job – Heard & The end intended by the Lord – Seen"},
        { "question" : "How is the Lord described? (James 5:11; 2 pts)" , "answer" : "Very compassionate & merciful"},
        { "question" : "Why should you not swear? (James 5:12)" , "answer" : "Lest you fall into judgement"},
        //
        { "question" : "What should you not swear by? (12; 3 pts)" , "answer" : "Either by heaven or by earth or with any other oath"},
        { "question" : "What should you let your yes and your no be? (James 5:12; 2 pts)" , "answer" : "Yes be yes & no be no"},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //{ "question" : "" , "answer" : ""},
        //Meeting Specific Needs
        { "question" : "What should you do if you are suffering? (James 5:13)" , "answer" : "Pray"},
        { "question" : "What should the cheerful do? (James 5:13)" , "answer" : "Sing psalms"},
        { "question" : "What should the sick among you do? (James 5:14; 3 pts)" , "answer" : "Call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord"},
        { "question" : "Whom should you call for if you are sick? (James 5:14)" , "answer" : "The elders of the church"},
        { "question" : "What will save the sick? (James 5:15)" , "answer" : "The prayer of faith"},
        //
        { "question" : "Who will raise the sick up? (James 5:15)" , "answer" : "The Lord"},
        { "question" : "What will happen if he (the sick) had committed sins? (James 5:15)" , "answer" : "He will be forgiven"},
        { "question" : "What should you confess to one another? (James 5:16)" , "answer" : "Your trespasses"},
        { "question" : "Why should you confess your trespasses to one another and pray for one another? (James 5:16)" , "answer" : "That you may be healed"},
        { "question" : "What kind of prayer avails much? (James 5:16; 3 pts)" , "answer" : "The effective, fervent prayer of a righteous man"},
        //
        { "question" : "Who was a man with like nature as ours? (James 5:17)" , "answer" : "Elijah"},
        { "question" : "How did he (Elijah) prayed that it did not rain? (James 5:17)" , "answer" : "Earnestly"},
        { "question" : "How long did it not rain on the land when Elijah prayed? (James 5:17)" , "answer" : "3 years and 6 months"},
        { "question" : "What happened when Elijah prayed again? (James 5:18; 2 pts)" , "answer" : "The heaven gave rain & the earth produced it fruit"},
        { "question" : "What gave rain & produced fruit? (James 5:18; 2 pts)" , "answer" : "Rain – heaven ; produced fruit – the earth"},
        //Bring Back the Erring One
        { "question" : "What will anyone wonder from? (James 5:19)" , "answer" : "The Truth"},
        { "question" : "What will he who turns a sinner from the error of his way do? (James 5:10; 2 pts)" , "answer" : "Will save a soul from death & cover a multitude of sins"}
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