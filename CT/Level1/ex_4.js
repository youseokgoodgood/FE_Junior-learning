//핸드폰 번호 가리기
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

function solution(phone_number) {
  let answer = Array.from(phone_number);

  answer.forEach((item, index) => {
    if (index < answer.length - 4) {
      answer.splice(index, 1, "*");
    }
  });

  return answer.join("");
}

console.log(solution("01033334444"));
