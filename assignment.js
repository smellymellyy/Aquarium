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

function areaGlass() {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
		return (width*height*2) + (length*height*2) + (length*width);
} /* 1.2 */

function glue () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	var glueCost = .1;
		return ((height*4) + (length*2) + (width*2))*glueCost;
} /* 1.6 */

function labour () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	var surfaceArea = areaGlass ();
	var labourCost = 60;
	var labourMath = labourCost/6000;
		return surfaceArea * labourMath ;
} /* 0.2 */

function calcCost() {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);

		if (height < 26) {
		glassCost = .06;
		} 
		else {
		glassCost = .10;
		}

	var surfaceArea = areaGlass ();
	var glassCost;
	var glass = glassCost*surfaceArea;
	var glueGlue = glue ();
	var labourCost = labour ();
	var tax = (glass + glueGlue + labourCost)*0.1;
	var glassCost;

	var num = (glass + glueGlue + labourCost + tax);
	var outputCost = num.toFixed(2);

			if(isNaN(length) || isNaN(width) || isNaN(height)) {
				alert('Invalid length, width or height');
                return;
				}

    costObj.innerHTML = '';
	costObj.innerHTML = "The cost is $" + outputCost;
}
