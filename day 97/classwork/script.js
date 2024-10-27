function filterArguments(...args) {
    return args.filter(item => Array.isArray(item)); 
  }
  
  console.log(filterArguments([1, 2, 3], 4, [5, 6], "text", [7, 8])); 
  