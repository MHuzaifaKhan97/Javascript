var images = [1,2,3,4,5]
var i = 0;
function changeImage()
{
   document.getElementById('img').src = "./images/"+images[i]+".jpg"; 

   if( i < images.length -1)
   {
       i++;
   }
   else{
       i=0;
   }
   setTimeout("changeImage()",3000);
}

window.onload = changeImage;