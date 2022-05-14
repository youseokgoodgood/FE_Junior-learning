//평균 구하기
//정수를 담고 있는 배열 arr의 평균값을 return하는 함수
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

function solution(arr) {
  var answer = 0;
  let sum = 0;

  arr.forEach((item) => {
    sum += Number(item);
  });

  answer = sum /= arr.length;

  return answer;
}
