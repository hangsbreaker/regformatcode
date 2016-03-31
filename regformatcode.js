function cleanCode(text) {
    for(var n = 0; n <= 1; n++){
		 var script = document.getElementById(text);
		 var arr = new Array();
		 var tab = "";
		 // create array
		 code = script.value;
		 code = code.split("\n");
		 // trim and remove blank array
		 code = code.map(Function.prototype.call, String.prototype.trim);
		 code = code.filter(Boolean);
		 //result.value=code;
		 for(var i = 0; i < code.length; i++) {
		     if(i < (code.length-1)){
		         if(code[i+1].trim().substring(0,1) == "{"){
		             code[i] = code[i]+"{";
		             code[i+1] = code[i+1].trim().substring(1);
		             //code.splice(i, 1);
		         }
		     }
		     // remove line break and double space trim
		     code[i] = code[i].replace(/(\r\n|\n|\r)/gm," ").replace(/\s{2,}/g,"").trim();
		     code[i] = code[i].replace(/(?![^(]*\))({| {)/g,"{\n")
		                 .replace(/(?![^(]*\))(})/g,"\n}\n")
		                 .replace(/(?![^(]*\))( \()/g,"(")
		                 .replace(/(?![^(]*\))(; )/g,";")
		                 .replace(/(?![^(]*\))(;)/g,";\n")
		                 .replace(/(\. )((?=([^"]*"[^"]*")*[^"]*$)(?=([^']*'[^']*')*[^']*$))/g,".")
		                 .replace(/( \.)((?=([^"]*"[^"]*")*[^"]*$)(?=([^']*'[^']*')*[^']*$))/g,".");
		     // make array for code[i] to proccess again
		     var ncode = code[i].split("\n");
		     
		     // create delete tabulation
		     if(i > 0){
		         if(code[i-1].substring(code[i-1].length-1) == "{"){
		             tab = tab+"\t";
		         }
		         if(code[i].substring(0,1) == "}"){
		             tab = tab.substring(1);
		         }
		     }
		     
		     
		     // remove all falsy values: undefined, null, 0, false, NaN and "" (empty string)
		     code[i] = code[i].replace(/(\r\n|\n|\r)/gm,"").trim();
		     if(ncode.length>2){
		         for(var c = 0; c < ncode.length; c++) {
		             if(c < (ncode.length-1)){
		                 if(ncode[c+1].trim().substring(0,1) == "{"){
		                     ncode[c] = ncode[i]+"{";
		                     ncode[c+1] = ncode[c+1].trim().substring(1);
		                 }
		             }
		             // create delete tabulation
		             if(c > 0){
		                 if(ncode[c-1].substring(ncode[c-1].length-1) == "{"){
		                     tab = tab+"\t";
		                 }
		                 if(ncode[c].substring(0,1) == "}"){
		                     tab = tab.substring(1);
		                 }
		             }
		             // remove all falsy values: undefined, null, 0, false, NaN and "" (empty string)
		             ncode[c] = ncode[c].replace(/(\r\n|\n|\r)/gm,"").trim();
		             if(ncode[c]){
		                 arr.push(tab+ncode[c]);
		             }
		         }
		         //continue;
		     }else if(code[i]){
		         arr.push(tab+code[i]);
		     }
		 }
    	script.value = arr.join("\n");
    }
    //return arr.join("\n");
    script.value = arr.join("\n");
}
