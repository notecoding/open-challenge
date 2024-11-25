let count=1;
let timerID=null; // 타이머ID
onmessage= function(e) { // 브라우저로부터메시지수신
if(e.data== "start") {
if(timerID!= null) return; // 타이머작동중이면리턴
timerID= setInterval(myCallback, 1000); // 1초간격myCallback() 호출
}
else if(e.data== "stop") {
if(timerID== null) return; // 타이머작동하지않으면리턴
clearInterval(timerID);
close(); // 워커태스크종료. 더이상메시지받지않음
}
}
function myCallback() { // 1초간격으로호출
postMessage(count); // 카운트값을브라우저로전송
count++; // 카운트값증가
}