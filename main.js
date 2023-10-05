


let calculation = '';


function btn1()
{
     calculation += 1;
    document.querySelector('.value1').innerHTML=  calculation;

}

function btn2()
{

     calculation += 2;
    document.querySelector('.value1').innerHTML=  calculation;


}

function btn3()
{

     calculation += 3;
    document.querySelector('.value1').innerHTML=  calculation;


}

function btn4()
{

     calculation += 4;
    document.querySelector('.value1').innerHTML=  calculation;


}

function btn5()
{

     calculation += 5;
    document.querySelector('.value1').innerHTML=  calculation;


}
function btn6()
{

     calculation += 6;
    document.querySelector('.value1').innerHTML=  calculation;


}
function btn7()
{

     calculation += 7;
    document.querySelector('.value1').innerHTML=  calculation;


}
function btn8()
{

     calculation += 8;
    document.querySelector('.value1').innerHTML=  calculation;


}
function btn9()
{

     calculation += 9;
    document.querySelector('.value1').innerHTML=  calculation;


}

function btn10()
{

     calculation += 0;
    document.querySelector('.value1').innerHTML=  calculation;


}
function btn11()
{

     calculation += '.';
    document.querySelector('.value1').innerHTML=  calculation;


}


/* adding----- */
function btn41()
{

     calculation += ' + ';
    document.querySelector('.value1').innerHTML=  calculation;
}

/* sub---- */
function btn42()
{

     calculation += ' - ';
    document.querySelector('.value1').innerHTML=  calculation;

}

/* multiply------ */
function btn43()
{

     calculation += ' * ';
    document.querySelector('.value1').innerHTML=  calculation;

}

/* percent------ */
function btn44()
{

     calculation += ' % ';
    document.querySelector('.value1').innerHTML=  calculation;

}

/* devided----- */
function btn45()
{

     calculation += ' / ';
    document.querySelector('.value1').innerHTML=  calculation;

}

function btneqal()
{

     calculation = eval(calculation);
    document.querySelector('.value2').innerHTML= ' = '  +  calculation;

}

function btnreset()
{
  
    calculation = '';
    document.querySelector('.value1').innerHTML = calculation;
    document.querySelector('.value2').innerHTML = calculation;

}







//two dimantional array---------
/* function highestRunScorer(playerInfo)
{
    var highestScorer = playerInfo[0][0];
    var highestScore = playerInfo[0][1];

    for(var i=1; i<playerInfo.length; i++)
    {
        if(highestScore < playerInfo[i][1])
        {
            highestScore = playerInfo[i][1];
            highestScorer = playerInfo[i][0];
        }
    }
    return highestScorer ;
}
var playerInfo = [
    ["mofiz", 12],
    ["mkafin", 10],
    ["arnob", 17],
    ["ratul", 18],
];
var name1 = highestRunScorer(playerInfo);
document.write(name1); */


//object------------
//create an object----
//print an object-----
/* var student1 = {

    name : "korim",
    age : 25 ,
    roll : 393,
    language : ['bnagla', 'urdu', 'hindi'],
    }
    var student2 = {
    
    name : "dipto",
    age : 25 ,
    roll : 393,
    language : ['bnagla', 'english', 'hindi'],
    }
    var student3 = {
    
    name : "hashem",
    age : 25,
    roll : 393,
    language : ['bnagla', 'spanish', 'hindi'],
    }
    document.write(student3.language); */




//constructor-------
 /* function Student(stuname,stuage,sturoll,stulanguage){
    this.name = stuname;
    this.age = stuage;
    this.roll = sturoll;
    this.lang = stulanguage;
    
}
var stu1 = new Student('dipto', 25, 14,  ['islam', 'urdu', 'hindi']); 
var stu2 = new Student('maruk', 29, 14,  ['urdu', 'urdu', 'hindi']); 
var stu3 = new Student('hamnl', 28, 14,  ['bnagla', 'urdu', 'hindi']); 

document.write(stu1.age + "<br/>");
document.write(stu3.name + "<br/>");
document.write(stu1.lang); */


//addimg function inside a constructor
/* function Student(stuname,stuage,sturoll,stulanguage){
    this.name = stuname;
    this.age = stuage;
    this.roll = sturoll;
    this.lang = stulanguage;

    this.display = function()
    {
        document.write(this.age + "<br/>");
        document.write(this.name + "<br/>");
        document.write(this.lang + "<br/>");
    }
}
var stu1 = new Student('dipto', 25, 14,  ['islam', 'urdu', 'hindi']); 
var stu2 = new Student('maruk', 29, 14,  ['urdu', 'urdu', 'hindi']); 
var stu3 = new Student('hamnl', 28, 14,  ['bnagla', 'urdu', 'hindi']); 

stu3.display();
stu1.display();
stu2.display(); */




//math functions---------
/* var math1 = Math.sqrt(25);// 5*5=25
var math2 = Math.abs(-25);//25
var math3 = Math.sin(2);// value of sin2
var math4 = Math.pow(2,4); //2*2*2*2 = 16
var math5 = Math.floor(2.345);// 2
var math6 = Math.ceil(2.60);// 3 
var math7 = Math.round(4.57575750);// 5 /if(4.4 then 4)
var math8 = Math.max(34, 5,56);// max value = 56
var math9 = Math.random(); // only 0 to 1
var math10 = Math.random()*6;// only 0 to 5
var math11 = Math.floor(Math.random()*6);//floor value of 0 to 5

document.write(math1 + "<br/>");
document.write(math2 + "<br/>");
document.write(math3 + "<br/>");
document.write(math4 + "<br/>");
document.write(math5 + "<br/>");
document.write(math6 + "<br/>");
document.write(math7 + "<br/>");
document.write(math8 + "<br/>"); 
document.write(math9 + "<br/>"); 
document.write(math10 + "<br/>"); 
document.write(math11 + "<br/>");  */

//max num with promt and max functioin
/* var num1 = parseInt(prompt("enter num1 : "));
var num2 = parseInt(prompt("enter num2 : "));

var maximum = Math.max(num1,num2);
document.write("maximum number is :" + maximum);  */




//gaussing game----
/*  var wontime = 0;
var losttime = 0;
for (var i=1; i<=5; i++)
{
    var guessnum = parseInt(prompt("enter your number : "));

    var random = Math.floor(Math.random()*5) + 1;
    if (guessnum == random)
    {
        document.write("you have won"+ "<br/>");
         wontime++;
    }else{
        document.write("you have lost" + "<br/>" + "random no was :" + random + "<br/>");
        losttime++;
    
    }
}
   document.write("number of won :" + wontime + "<br/>");
   document.write("number of lost :" + losttime + "<br/>");  */



//date----
/* var date = new Date()
document.write(date + "<br/>");

var year = date.getFullYear()
document.write(year + "<br/>");

var minit = date.getMonth()
document.write(minit + "<br/>");

var date = date.getDate()
document.write(date + "<br/>"); 

var hour = date.getFullYear();
document.write(hour + "<br/>");  */


//get element by id
/*  var mybtn =  document.getElementById("btn1");
mybtn.innerHTML = "hello";
document.getElementById("p1").innerHTML= "welcome";  */


//get element by tagname
//document.getElementsByTagName("p")[0].innerHTML="sonwm"; 


//get element by classname
// document.getElementsByClassName("p1")[0].innerHTML="nothing"; 


//queryselector
 /*   document.querySelector("#p1").innerHTML="meee";
document.querySelector("form").innerHTML="uuuuuuuu";  */ 

//document.querySelectorAll("p")[1].innerHTML = "dog";



//onclick--
//img
/* function clickhere1 ()
{
    var text1 = document.querySelector("#img1");
    text1.src = "img/img1.png"
}

function clickhere2 ()
{
    var text1 = document.querySelector("#img2");
    text1.src = "img/img2.png"

} */



//dom--------dom----
//create element----
/*  var firstelement = document.createElement("p");
var secondelement = document.createTextNode("hello everyone");
firstelement.appendChild(secondelement); */
//add created element----
/* var mydiv = document.getElementById("first");
mydiv.appendChild(firstelement); */


//create element----
/*  var firstelement = document.createElement("p");
var secondelement = document.createTextNode("hello everyone");
firstelement.appendChild(secondelement); */
//add created element----
/* var mydiv = document.getElementById("first");
mydiv.appendChild(firstelement); */


//create element----
/* var newheading = document.createElement("h1");
var mainheading = document.createTextNode("first-heading");
newheading.appendChild(mainheading); */

//add craeted element before--
/* var before = document.getElementsByTagName("p")[0];
first.insertBefore(newheading,before); */



//dom traversing

/* var first = document.querySelector("li");

var third = document.getElementsByTagName("li")[2];

var two = third.previousElementSibling.innerHTML= "two"; */





//slider
/* var image = ["img/img1.png","img/img2.png", "img/img3.png" ];
var allimage = document.querySelector("img");

 var count = 0;

function next()
{
count++;

if(count>=image.length)
{
    count = 0 ;
    allimage.src = image[count];
}else{
    allimage.src = image[count];

}

}


function prev()
{
    count--;

    if(count<0)
    {
        count = image.length-1 ;
        allimage.src = image[count];
    }else{
        allimage.src = image[count];
    
    }
} */

//var outer = document.querySelector(".outerclass");

/*  var outerelement = document.createElement("p");
var newelement = document.createTextNode("hello everyone");
outerelement.appendChild(newelement); 
outer.appendChild(outerelement);

var secondpara = document.querySelector(".classpara2");
outer.insertBefore(outerelement,secondpara);  */



/* var newheading = document.createElement("h1");
var newheadinginfo = document.createTextNode("para2");
newheading.appendChild(newheadinginfo);
outer.appendChild(newheading);

var beforeclassbtn = document.querySelector(".classpara2");
outer.insertBefore(newheading,beforeclassbtn); 

outer.removeChild(newheading);
 */





//gussing game

/* let btn = document.querySelector(".classbtn");
let output = document.querySelector(".classpara1");
let form = document.querySelector("form");
let number = [Math.floor(Math.random()*10)]; */
/* let timer ;
let timeout = document.querySelector(".timeout");
(function(){
    let sec = 0;
    timer = setInterval(function(){
        timeout.innerHTML = '00:'+ sec;
        sec++;
    },1000)
})() */

/* function starCounter() {
    let timeSet = 11;
    const timeSetElement = document.querySelector('.timeout');

    const countDownHandler = setInterval(() => {
        timeSet--;
        timeSetElement.textContent = timeSet;

        if (timeSet === 0) {
            clearInterval(countDownHandler)
            starCounter();
        let won = document.querySelector(".won");
        won.innerHTML = "REFREASH AND RESTART";
            
        }
    }, 1000)
}
starCounter() */


/* function btnclick()
{
    let input = document.querySelector(".classinput").value;
    if (input == number)
    {
        output.innerHTML= "YOUR GUESS IS RIGHT";
        won.innerHTML = "CONGRATULATION!";
        
        
    }else{
        output.innerHTML= " YOUR GUESS IS NOT RIGHT";
    }
   
} */



/* add css with js-------------- */
/* function firstbtn(){
var para = document.querySelector("p");
    para.classList.add("change1");
}
function secondbtn(){
var para = document.querySelector("p");
    para.classList.add("change2");
} */




//eventlistener-----------
/* var para = document.querySelector("p");
para.addEventListener("mouseover",function(){
     
    para.classList.add("style");
});
para.addEventListener("mouseout",function(){
     
    para.classList.remove("style");
}); */



//add multiple element with listner
/* var len = document.querySelectorAll(".btn1").length;

for(var i = 0; i<len; i++){

    var first = document.querySelectorAll(".btn1")[i];
    first.addEventListener("click",function(){
    
        var text = this.innerHTML;
        document.querySelector("p").innerHTML = text + " i am good";
    });

    
} */



//add audio play with js
/* for(var i = 0; i<3; i++){

    var btn = document.querySelectorAll(".btn1")[i].addEventListener("click",function(){

        var text = this.innerHTML;
        console.log(text);
        adioplay(text);

    })
}

function adioplay(text){

    switch(text){
        case "first" :
            var audio = new Audio('../audio/ad1.wav');
             audio.play();
             break;
        case "second" :
            var audio = new Audio('../audio/ad2.wav');
             audio.play();
             break;
        case "third" :
            var audio = new Audio('../audio/ad3.wav');
             audio.play();
             break;
    }
}
 */



//add animation--
 /* for(var i = 0; i<3; i++){

    var btn = document.querySelectorAll(".btn1")[i].addEventListener("click",function(){

        var text = this.innerHTML;
        console.log(text);
        adioplay(text);
        animation(text);

    })
}

function adioplay(text){

    switch(text){
        case "first" :
            var audio = new Audio("../audio/ad1.wav");
             audio.play();
             break;
        case "second" :
            var audio = new Audio("../audio/ad2.wav");
             audio.play();
             break;
        case "third" :
            var audio = new Audio("../audio/ad3.wav");
             audio.play();
             break;
    }
}

function animation(text){
 */
    //var selectbtn1 = document.querySelector("." + text);
    //selectbtn1.classList.add("animationhere");

/*     var selectbtn1 = document.querySelector(".animate1");
    selectbtn1.classList.add("animationhere");
    var selectbtn2 = document.querySelector(".animate2");
    selectbtn2.classList.add("animationhere");
    var selectbtn2 = document.querySelector(".animate3");
    selectbtn2.classList.add("animationhere");

    setTimeout(function(){
        selectbtn1.classList.remove("animationhere")
    },1000);
    
}  */ 

/* var count = 0 ;
document.querySelector("#alltext").addEventListener("keypress",function(event){
 count++;
    var text = event.key;

    document.querySelector("p").innerHTML = "Number of Charecters are : " + count ;
}); */


/* dom event------- */

// Include qrious library in your HTML file.

/* let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.startsWith("world", 5); */



/* -----------lesson-3----------------------- */
//document.write("my name is :" + " 'dipto'")
/* let basketball = 2095;
let tshirt = 799;
let shipping = 499; */

//document.write("total cost: $" + (coffee + bagel)/100);
//document.write(`total cost: $${(coffee + bagel)/100}`);
/* alert(`total cost: $${(coffee + bagel)/100}
Thank you. come again`); */

 //document.write(`item (${2+2}): $${(basketball*2 + tshirt*2)/100}`);
 //document.write(`shipping & handling : $${(shipping + shipping)/100}`);
//document.write(`estimated tax(10%) : $${Math.round((2095*2 + 799*2 + 499 +499)*0.1)/100}`);



/* ------------lesson-4---------------------- */
/* function color1(){

    alert("Added");

}

function color2(){

    document.write("Loading");
    alert("purches")

} */



/* --------------lesson-5------------------ */

/* var names = "dipto";
document.write(`my name is : ${names}`); */

//var cost = 1*5 + 2*3 + 1*9 ;
//document.write(`cost of food : $${cost}`); 

//var tax = (cost*0.1);
//document.write(`tax(10%) : $${tax}`);

/* var totalcost = (cost + tax);
document.write(`Total cost : $${totalcost}`); */



/*-------------lesson-6------------------ */


 




