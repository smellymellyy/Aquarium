window.onload=function() {
	lengthObj = document.getElementById('txtLength');
	widthObj = document.getElementById('txtWidth');
    weightObj = document.getElementById('tdHeight');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calcCost;
}
function resetInputs() {
	lengthObj.value = '';
	widthObj.value = '';
    heightObj.innerHTML = '';
}
function calcCost() {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || (isNaN(height) || isNaN(width)) {
		alert('Invalid length, width or height');
		return;
	}
	costObj.innerHTML = length*Math.pow(width,2)/800;
