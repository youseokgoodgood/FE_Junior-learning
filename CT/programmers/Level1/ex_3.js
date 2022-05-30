//행렬의 덧셈
//행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수
//arr1	arr2	return
//[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
//[[1],[2]]	[[3],[4]]	[[4],[6]]

function solution(arr1, arr2) {
  let answer = [];
  let tempList = [];

  arr1.forEach((num, index) => {
    num.forEach((item, j) => {
      tempList.push(item + arr2[index][j]);
    });
    answer.push(tempList);
    tempList = [];
  });

  return answer;
}

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(arr1, arr2));
