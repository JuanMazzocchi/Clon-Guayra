function descripcion(event){

    var id = event.currentTarget.getAttribute("id")
    console.log(id)
   var x = document.getElementsByClassName(id);

    
   idtotal="desc"+id
   console.log(idtotal)

   document.getElementById(idtotal).style.position="absolute"
   document.getElementById(idtotal).style.textAlign="center"
   document.getElementById(idtotal).style.top="50%"
   document.getElementById(idtotal).style.left="50%"
   document.getElementById(idtotal).style.transform="translate(-50%, -50%)"
   document.getElementById(idtotal).style.fontSize="large"
   document.getElementById(idtotal).style.fontWeight="bolder"
  

 document.getElementById(idtotal).innerHTML =  x[0].innerHTML;
    
}

function borrar(event){
    var id = event.currentTarget.getAttribute("id")
    console.log(id)
   var x = document.getElementsByClassName(id);
   console.log(x[0])
   idtotal="desc"+id

 document.getElementById(idtotal).innerHTML =  "";

}


 // Galeria 
     
  // Get the image and insert it inside the modal - use its "alt" text as a caption
function Zoom(event){

// Get the modal
var modal = document.getElementById('myModal');
       
  var img =  event.currentTarget.getAttribute("id")
  // console.log("este es el id "+img)

  var src=  event.currentTarget.getAttribute("src")

  // console.log("este es el src "+ src)

  var alt =event.currentTarget.getAttribute("alt")

  // console.log("ALT "+alt)
 
  var modalImg = document.getElementById("img01");
   
  // console.log("modalImg "+modalImg)
  var captionText = document.getElementById("caption");
 
  // console.log(captionText)
 
  
      modal.style.display = "block";
      modalImg.src =src ; 
      modalImg.alt =alt;
      captionText.innerHTML =alt;}
            
          
      //  When the user clicks on <span> (x), close the modal
   function salir(event) {
   var modal = document.getElementById('myModal');  
   img01.className += " out";
   setTimeout(function() {
   modal.style.display = "none";
   img01.className = "modal-content";
   }, 400); }      
          
  
function slides(cambio) {

const fotos = [
{src:"/Fotos/1.jpeg",alt:"Piscina"},
{src:"/Fotos/2.jpeg",alt:"Piscina vista baja"},
{src:"/fotos/3.jpeg",alt:"Piscina con pileton"},
{src:"/fotos/4.jpeg",alt:"Deck desde arriba" },
{src:"/fotos/5.jpeg",alt:"Piscina vista alta"},
{src:"/fotos/6.jpeg",alt:"Frente Hotel" },
{src:"/fotos/7.jpeg",alt:"Frente desde el Muelle"},
{src:"/fotos/8.jpeg",alt:"Piscina Cerca" },
{src:"/Fotos/9.jpeg",alt:"Quincho"},
{src:"/fotos/guayra-hotel-11_1200x759.jpg",alt:"Resto"},
{src:"/Fotos/guayra-hotel-12_1200x716.jpg",alt:"Desayuno" },
{src:"/Fotos/guayra-hotel-13_1200x716.jpg",alt:"Desayuno"},
{src:"/Fotos/guayra-hotel-2_1200x670.jpg",alt:"Desayuno"},
{src:"/Fotos/guayra-hotel-31_1200x763.jpg",alt:"Habitaciones"},
{src:"/Fotos/guayra-hotel-33_1200x756.jpg",alt:"Habitaciones"},
{src:"/fotos/guayra-hotel-34_1200x801.jpg",alt:"Habitaciones"},
{src:"/Fotos/guayra-hotel-35_1200x801.jpg",alt:"Cabañas" },
{src:"/fotos/guayra-hotel-3_1200x801.jpg",alt:"Resto"},

 ]

// console.log(fotos[1].src) 
// console.log(fotos[1].alt) 

zoomPic=document.getElementById("img01")

// console.log(zoomPic)

source=zoomPic.getAttribute("src") //busco el src de la foto que estoy haciendo zoom
console.log(source)

var dedonde=fotos.findIndex(x=> x.src===source) //busco el index de esa foto para poder subir y bajar segun se necesite
console.log(dedonde)




if (cambio =="prev"){

dedonde-=1
var modal = document.getElementById('myModal');
var captionText = document.getElementById("caption");
var modalImg = document.getElementById("img01");
modalImg.src =fotos[dedonde].src ; 
modalImg.alt =fotos[dedonde].alt;
captionText.innerHTML =fotos[dedonde].alt;


// console.log("anterior")
 }

  else if (cambio=="next"){
    
dedonde+=1
var modal = document.getElementById('myModal');
var captionText = document.getElementById("caption");
var modalImg = document.getElementById("img01");
modalImg.src =fotos[dedonde].src ; 
modalImg.alt =fotos[dedonde].alt;
captionText.innerHTML =fotos[dedonde].alt;
    
    
    
    
    
    
    
    //console.log("proxima")
  }




   


   }