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

/* calc cost elements */

function areaGlass () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	return (width*height*2) + (length*height*2) + (length*width);
	/* -Area of glass (width x height x 2) + (length x height x 2) + (length x width)  IF cm2 > 25 x .10    ELSE x .06 */
}

function glue () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	return (height*4) + (length*2) + (width*2);
	/* -Glue needed (height x 4) + (length x 2) + (width x 2) */
}

function labour () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	return (surfaceArea/10);
	if (
	/* -Labour   surface area: (width x height x 2) + (length x height x 2) + (length x width)  if 6000 $60  if 12000 $120   go up in intervals of 6000 */
}

function gst () {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	return areaGlass () + glue () + labour ();
	/* GST is (areaGlass) + (glue) + (labour) / 10  
 subtract from final cost	*/
} 

function calcCost() {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
	var areaGlass = areaGlass ();
	var glue = glue ();
	var labour = labour ();
	var gst = gst ();
    costObj.innerHTML = '';
	costObj.innerHTML = areaGlass + glue () + labour () - gst ();
	
		
	/* glue */
	*.1
	
	/* area */
	if (height < 26) {
	areaGlass () *.06;
		} 
		else {
	areaGlass () *.10;
		}
	
	/* gst */	
	/10
	
}
