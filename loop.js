var arr=[1,2,null,4,0];

if(arr.includes(undefined)){
    console.log("Array Contains Empty or Undefined Value");
}
else{
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}