window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtWidth');
    heightObj = document.getElementById('txtHeight');
	costObj = document.getElementById('tdCost');
    document.getElementById('btnCalcCost').onclick = calcCost;
    document.getElementById('btnReset').onclick = resetInputs;
}

function resetInputs() {
    lengthObj.value = '';
    widthObj.value = '';
    heightObj.value = '';
    costObj.innerHTML = '';
}

function areaGlass () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	return (width*height*2) + (length*height*2) + (length*width);
}

function glue () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	return (height*4) + (length*2) + (width*2);
}

function labour () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	var surfaceArea = areaGlass ();
	var labourCost = 60;
	var labourMath = labourCost/6000;
	return surfaceArea * labourMath ;
}

function gst () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	return areaGlass () + glue () + labour ();
} 

function calcCost() {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	var surfaceArea = areaGlass ();
	var glueCost = glue ();
	var labourCost = labour ();
	var tax = gst ();
	
	if (height < 26) {
		surfaceArea *.06;
	} 
	else {
		surfaceArea *.10;
	}
	
	if(isNaN(length) || isNaN(width) || isNaN(height)) {
                    alert('Invalid length, width or height');
                    return;
                }

    costObj.innerHTML = '';
	costObj.innerHTML = "The cost is $" + (surfaceArea + (glueCost*.1) + labourCost + (tax/10));
}
