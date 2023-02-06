function publicBusFare(participants) {
    if (typeof participants != "number" || participants < 50) {
      return "Provide valid participants...";
    }
    let busSeatCapacity = 50;
    let microSeatCapacity = 11;
  
    let remaining = 0;
   
    remaining = participants % busSeatCapacity;
    console.log( remaining);
  
  
    if(remaining >=11){
     remaining = remaining % microSeatCapacity;
     }
    
  
    let costOfPublicBus = remaining * 250
    return costOfPublicBus;
  }
  console.log(publicBusFare(56));