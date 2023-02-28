/*
 [구현할 기능] 조건문,반복문 사용해서 해결 O
    1. 유저는 숫자를 입력할 수 있다
    2. 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
    3. 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
    4. 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
    5. 유저는 총 5번의 기회가 있다
    6. 게임이 종료되면 버튼은 비활성화된다
    7. 리셋버튼을 누르면 게임이 초기화된다.
    8. 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다. (기회를 깍지 않는다)
    9. 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다. (기회를 깍지 않는다)
    10. 반응형 UI
 */

let random = 0
function PickRandomNum(){
    random = Math.floor(Math.random()*100) + 1;//Math.random() 랜덤한 숫자를 뽑을 수 있게 도와주는 함수
    console.log("정답",random) //Math.floor() 소수점 버려주는 함수
}

PickRandomNum() //함수 선언 꼭하기 !!! 

let playButton = document.getElementById("play-button") //document : 웹사이트 자체 , getElementById
let userInput = document.getElementById("user-input")
let showResult = document.getElementById("show-result")

playButton.addEventListener("click",play); //addEventListener(이벤트 이름, 이벤트 발생시 실행할 함수) : 이벤트 주는 함수
function play(){
  let userValue = userInput.value
  if(userValue < random){
    showResult.textContent = "UP!!!"
    console.log("Up!!!")
  }else if(userValue > random){
    showResult.textContent = "Down!!!"
    console.log("Down!!!!")
  }else {
    showResult.textContent = "맞추셨습니다!!!"
    console.log("~~맞추셨습니다~~")
  }
}