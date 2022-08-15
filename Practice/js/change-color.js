alert("안녕하세요?")
var reply = confirm("정말 배경 이미지를 바꾸시겠습니까?");

var heading = document.querySelector('#heading');
heading.onclick = function(){
    heading.style.color = "green";
}