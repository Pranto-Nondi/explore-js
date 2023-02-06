function multiplyByTwo(n, callback) {
    var result = n * 2;
     callback(result);
  }
  
  function logResult(result) {
    console.log(result);
  }
  
  const result=multiplyByTwo(5, logResult);
  