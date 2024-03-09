var decider;
var thou;
var hund;
var tens;
var ones;

var x = Math.floor(Math.random() * 1001);
document.getElementById("num").innerHTML="Randomly generated number: " + x;
/*
decider = x/1000;
if(decider==1){
 
}
*/
thou = x - (x%1000);
hund = x - thou;
hund = hund - (x%100);
tens = x - hund;
tens = tens - (tens%10);
ones = x- (hund+tens);
document.getElementById("brkdown").innerHTML="Breakdown: " +thou+", "+hund+", "+tens+", "+ones;
var dte = new Date ();
document.getElementById("dte").innerHTML="Number generated on: "+dte;