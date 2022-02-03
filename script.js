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