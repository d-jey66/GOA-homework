// 1
function printHelloWorld() {
    setTimeout(() => {
      console.log("Hello, World!");
    }, 3000);
  }
  
  // 2
  function printPhrases() {
    setTimeout(() => {
      console.log("პირველი ფრაზა");
      setTimeout(() => {
        console.log("მეორე ფრაზა");
      }, 2000);
    }, 1000);
  }
  
  // 3
  function printNumbers() {
    setTimeout(() => {
      console.log("1");
      setTimeout(() => {
        console.log("2");
        setTimeout(() => {
          console.log("3");
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  // 4
  function showMessage(message, time) {
    setTimeout(() => {
      console.log(message);
    }, time);
  }
  
  // 5
  function printTimeoutMessages() {
    setTimeout(() => {
      console.log("დრო ამოიწურა");
      setTimeout(() => {
        console.log("ხუმრობა");
      }, 1000);
    }, 5000);
  }