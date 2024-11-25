 // 1~10까지합계산
 let sum=0;
 for(let i=1; i<=10; i++) {
 sum += i;
 }
 // 합을메시지로전송
postMessage(sum);