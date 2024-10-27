function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log("დაწყება...");
    await delay(3000); 
    console.log("Hello, World!");
  }
  
  asyncFunction();
  