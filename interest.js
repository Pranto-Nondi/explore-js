function simpleCompoundInterest(p,t,r)
{
var si,ci;
// si = parseInt((p*t*r)/100 );
amount = p*Math.pow((1 +r/100),t );
ci = parseFloat((amount-p).toFixed(2));
return ci;

}
console.log(simpleCompoundInterest(5000,5,3));