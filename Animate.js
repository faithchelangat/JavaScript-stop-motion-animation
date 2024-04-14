function Animate()
{
var count=0;
setInterval(Timer, 200); //This will call the Timer function - units are milliseconds

	function Timer()// Complete the Timer() function by adding conditional statements to display the images
	{
		count=count+1;
		if (count==0){
			document.getElementById("ImageDisplay").src="Spiral0.png";
		}
		if (count==1){
			document.getElementById("ImageDisplay").src="Spiral1.png";
		}
		if (count==2){
			document.getElementById("ImageDisplay").src="Spiral2.png";
		}
		Animate();
	}
}
function reload(){
	location.reload();
}
		
	

