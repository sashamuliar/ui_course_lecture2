//minimum
 var min = function(fir, sec){
 	return (Math.min(fir,sec));
 }
 //countBs
  var countBs = function (str){
 	var c=0;
 	for (var i=0;i<=str.length;i++){
		
		b = str.charAt(i);
	 	if (b=="B"){
	 		c++;
	 	}
	}
	return c;
}
//countchar
 var countChar = function (str, leter){
 	var c=0;
 	for (var i=0;i<=str.length;i++){
		
		b = str.charAt(i);
	 	if (b==leter){
	 		c++;
	 	}
	}
	return c;
}

//recursive
function isEven(initial){
	if (initial<0){initial=initial*(-1)}

		if (initial==1){
			return false;
		}
		else if(initial==0){
			return true;
		}

		return isEven(initial-2);

}