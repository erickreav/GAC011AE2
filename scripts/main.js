function newImage (){
	var image = document.getElementById("myImage") ;
	if(image.src.match("image2")){
		image.src = "images/image1.jpg";
		}else{
		image.src = "images/image2.jpg"
		}
	}