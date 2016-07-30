var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
var marker = "firstwrongmarker";
var sH = setInterval(function(){
	var compTBody = $('tbody[id$="ComponentList:tb"]');
	var rows = compTBody.find("tr");
	var curmarker = $($(rows.get(0)).find("td").get(0)).find("a").attr("href");
	if (marker.localeCompare(curmarker) != 0) {
		marker = curmarker;
		for (i = 0; i < rows.length; i++) {
			var thisRow = $(rows.get(i));
			var thisDatas = thisRow.find("td");
			var cstr = "";
			for (j = 1; j <= 4; j++) {
				cstr += $(thisDatas.get(j)).text() + ",";
			}
			console.log(cstr);
		}
		var nextbtn = $('a[id$="pageNavigatorComponent:nextPageLink"]');
		if (nextbtn.length > 0) {
			nextbtn.click();
		} else {
			clearInterval(sH);
		}
	}
},500);
