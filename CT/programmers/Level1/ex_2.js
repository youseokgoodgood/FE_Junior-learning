//x만큼 간격이 있는 n개의 숫자
//함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
//x	n	answer
//2	5	[2,4,6,8,10]
//4	3	[4,8,12]
//-4 2	[-4, -8]

function solution(x, n) {
  var answer = [];
  let temp = 0;

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  console.log(answer);

  return answer;
}

solution(2, 5);
