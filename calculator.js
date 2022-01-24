var historyValue= document.getElementById('history-value');
var outputValue= document.getElementById('output-value');
var op =document.getElementsByClassName('op') ;
var num = document.getElementsByClassName('num') ;

function getHistory() {
	return historyValue.innerText;  }

function printHistory(num) {
	historyValue.innerText=num;  }


function getOutput() {
	return outputValue.innerText;  }

function printOutput(num) {
if(num==''){outputValue.innerText=num}
else{outputValue.innerText=format(num); }  }


function format(num) {
	if(num=='-'){return'';}
	var value = Number(num).toLocaleString("hi");
	return value;
}

function reversNumberFormat(num) {
	return Number(num.replace(/,/g,''));
}

for (var i = 0; i < op.length; i++) {
	op[i].addEventListener('click',function(){
		if(this.id=="clear"){
          getHistory("");
          printOutput("");
        }
        else if (this.id=="backspasr"){
           var out = reversNumberFormat( getOutput()).toString();
           if (out){
           	out=out.substr(0,out.length-1)
            printOutput(out);}
        }
        else{
       var output=getOutput();  var history=getHistory();
        if(output==""&&history!="")
        	{ if (isNaN(history[history.length-1]))
        	{history=history.substr(0,history.length-1);}}

        if(output!=""|| history!=""){
        	output = output =="" ? output : reversNumberFormat(output);
        	history=history+output;
        	  if(this.id=="="){
        	var R =eval(history);
        	printOutput(R);
        	printHistory("");} 
         else {
         	history=history+this.id;
         	printHistory(history);
         	printOutput("");
         }}
        }
	})
}

for (var i = 0; i <num.length; i++) {
	num[i].addEventListener('click',function(){
		var out = reversNumberFormat( getOutput());
		 if (out!=NaN){
             out=out+this.id;
             printOutput(out);
		 }
	})
}

