/*
String
const what = "Eddy";

console.log(what);
*/

/*
Boolean
const wat = true;
*/

/*
Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek[0]);
*/

/*
Object
const eddyInfo = {
    name:"Eddy",
    age:33,
    gender:"Male"
};

console.log(eddyInfo.gender);
*/

/*
함수와 `` 사용

function sayHello(username, age){
   return `Hello ${username}, you are ${age} years old`;
}

const greetEddy = sayHello("Eddy", 27)

console.log(greetEddy)

const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(2,5)
console.log(plus)
*/

/*
html element 객체처럼 사용

const title = document.getElementById("title");
console.log(title);

title.innerHTML = "Changed Title";

title.style.color = 'black';
console.dir(title);

console.dir(document);

document.title = "Changed Doc.title"
*/

/*
이벤트 바로 호출하려면 (), 트리거 있을 때마다 이벤트 호출되게 하려면 () 없이

function handleResize(){
    console.log("I have been resized")
}

window.addEventListener("resize", handleResize)
*/

/*
event를 인자로 넣어두면 이벤트로 다룰 함수를 만들때마다 자바스크립트가 자동적으로 함수를 객체로 붙여둠
function handleResize(event){
    console.log(event)
}

window.addEventListener("resize", handleResize)
*/

/*
event로 스타일 변경
function handleClick(){
    title.style.color = "red";
}

title.addEventListener("click", handleClick)
*/


/*
js는 값 같은지 체크할때 === (3개)
and는 &&
or는 ||

if (10===10){
    console.log("hi")
} else {
    console.log("ho")
}
*/

/*
prompt -> user가 입력할 수 있게 함 (scan)
잘 안씀 이제는

const age = prompt("How old are you?")

if (age > 18){
    console.log("you can drink")
} else {
    console.log("you can't drink")
}
*/

/*
이벤트 다루기
Javascript DOM event mdn -> 이벤트 검색
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#58B19F"

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();
*/

/*
다양한 이벤트가 있군여
function handleOffline(){
    console.log("Bye bye");
}

function handleOnline(){
    console.log("Welcome back")
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline)
*/

/*
classList.contains 통해 클래스 포함 여부 파악하여 T/F 값으로 반환
classList에 add, remove 통해 클릭 같은 이벤트 여부 추가 가능

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}
*/

/*
toggle은 위에 한 작업을 구현해주는 함수
class가 존재하는지 확인 후 있으면 제거 없으면 포함해주는 것
const title = document.querySelector("#title")

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
*/