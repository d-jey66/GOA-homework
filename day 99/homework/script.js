// 1. დავალება
function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  // 2. დავალება
  function squareNumbers(numbers) {
    return numbers.map(num => num * num);
  }
  
  // 3. დავალება
  function uniqueElements(arr) {
    return [...new Set(arr)];
  }
  
  // 4. დავალება
  function calculateSum(num1, num2) {
    return num1 + num2;
  }
  
  // 5. დავალება
  function gradeStudent(scores, callback) {
    return scores.map(callback);
  }
  
  function assignGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }
