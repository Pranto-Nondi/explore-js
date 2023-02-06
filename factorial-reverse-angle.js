function findFactorial(number) {

    var result = number;    
  
    if (number === 0 ) {    
      return 0;
    }  
    else if (number==1){
         return 1;
    }
    
    while (number > 1) {     
      number = number - 1;
      result = result * number;
    }
  
    return result;     
  
  }
  
  console.log(findFactorial(5));