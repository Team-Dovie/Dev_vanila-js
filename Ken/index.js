// const title = document.querySelector("#title")
// const title = document.getElementById("title");
// title.innerHTML = "Hi! From JS";
// console.dir(title); // dir 하면 내가 할 수 있는 것들이 많이 나온다 
// title.style.color = "red";
// document.title = "I own you now" 

/* DOM Document object model 자바 스크립트는 html 파일을 가져다가 객체로 만들꺼다 
예를들어 console. 하고 나오는 것들은 다 객체이다. 나의 문서에 있는 모든 것들이 다 객체가 되는것
object 는 많은 키들을 가지고 있다. title.innerHTML . 뒤에 있는게 다 그런것임. 
실제 바뀌어있는 hi from js 를 js 파일로 부터 받게 된다. 모든 함수나 객체들은
이러한 DOM 형태로 변환이 가능하다. 내가 js에서 적는 것들은 객체가 된다.*/
// function handleResize(){
//     console.log("I have been resized")
// }

// window.addEventListener("resize",handleResize); 
// 그냥 바로 함수를 호출 handleresize
// resize 될때 불러오는것 handleResize 

// function handleClick() {
//     title.style.color = "red";
// } // title 이 클릭할때 이 색깔로 바뀜
// title.addEventListener("click", handleClick);

// if(10 === 5) { // ===는 아무것도 할당하지 않ㄷ고 체킹만 해준다 
    
//     else {}
// }

// true && true = true;
// false || false = false;

// const age = prompt("Ask sth") ; //요즘엔 잘 쓰지 않는다

// console.log(age);

// const age = prompt("How old are you");

// if (age >= 18 && age <= 21) {
//     console.log("you can drink but you shoul not ");
    
// }

// const BASE_COLOR = "#34495e";
// const OTHER_COLOR = "7f8c8d";
// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
    
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener("Click", handleClick);

// }
// init();

// //EVENT 의 근원을 찾고 싶으면 MDN에 들어가라

// function handleOffline() {
//     console.log("wifi down")
// }
// function handleOnline() {
//     console.log("welcome back")
// }
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline); 
// //앞에 네비게이터는 함수가 아니라 window 로 바꿔준다. 

const CLICKED_CLASS = "clicked" ;  // html에서 클래스 만들어준거

// function handleClick() {
//     const currentClass = title.className;
//     if (currentClass !== CLICKED_CLASS) {
//         title.className = CLICKED_CLASS; // 값을 세팅해줌 
//     } else {
//         title.className = "";
//     }
// }

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);  
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}
// hasclass는 element가 있는지 없는지 체크한다 
// 없으면 add 있으면 remove 
// toggle을 쓰면 간단하다.

function init() {
    title.addEventListener("click, handleClick");
}

// css 에는 css를 로직에는 js를 사용하자 