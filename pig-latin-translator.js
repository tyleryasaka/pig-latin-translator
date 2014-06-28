function pigLatinTranslator(input) {
	var result=new Array(),consonant="",cluster=false,lower;
	
	for(var i=0;i<input.length;i++) {
		if(/^[a-zA-Z']+$/.test(input[i])) {
			if(!/^[a-zA-Z']+$/.test(input[i-1])||i==0) {
				if(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(input[i])) {
					if(!/^[a-zA-Z']+$/.test(input[i+1])||i+1==input.length) {
						result.push(input[i]);
						result.push("a","y");
					}
					else {
						consonant=input[i];
						cluster=true;
					}
				}
				else if(!/^[a-zA-Z']+$/.test(input[i+1])||i+1==input.length) {
					result.push(input[i]);
					result.push("w","a","y");
				}
				else
					result.push(input[i]);
			}
			else if(!/^[a-zA-Z']+$/.test(input[i+1])||i+1==input.length) {
				result.push(input[i]);
				if(consonant.length>0) {
					for(var j=0;j<consonant.length;j++) {
						result.push(consonant[j]);
					}
					result.push("a","y");
					consonant="";
				}
				else {
					result.push("w","a","y");
				}
			}
			else if(cluster==true) {
				if(/[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]/.test(input[i])) {
					consonant+=input[i];
				}
				else {
					cluster=false;
					result.push(input[i]);
				}
			}
			else
				result.push(input[i]);
		}
		else
			result.push(input[i]);
	}
	
	for(var i=0;i<result.length;i++) {
		result[i]=result[i].toLowerCase();
	}
	
	$('#pig-latin-translator-result').html(result);
}
