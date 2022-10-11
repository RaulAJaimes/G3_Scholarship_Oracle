function encriptar(txtEncriptar){         
      txtEncriptar= textAencriptar.value.toLowerCase();              
      txtcifrado = txtEncriptar.replace(/e/igm,"enter");          
      txtcifrado = txtcifrado.replace(/o/igm,"ober");
      txtcifrado = txtcifrado.replace(/i/igm,"imes");
      txtcifrado = txtcifrado.replace(/a/igm,"ai");
      txtcifrado = txtcifrado.replace(/u/igm,"ufat");        
     
      return txtcifrado;
  }

function desEncriptar(){                    
        txtDescripto= textAencriptar.value.toLowerCase();
        txtCifrado=txtDescripto.replace(/ufat/igm,"u");  
        txtCifrado=txtCifrado.replace(/ai/igm,"a");
        txtCifrado=txtCifrado.replace(/imes/igm,"i");
        txtCifrado=txtCifrado.replace(/ober/igm,"o");
        txtCifrado=txtCifrado.replace(/enter/igm,"e");
                   
        return txtCifrado;                          
}

const textAencriptar = document.querySelector(".textoEncriptar");
const textSalida = document.querySelector(".textoDesencriptar");
const anuncioSalida = document.querySelector(".mensaje");
const bnEncriptar = document.querySelector(".bnEncriptar");
const bnDescriptar = document.querySelector(".buttonDscriptar");
const bnCopiar = document.querySelector(".bnCopiar");
const bnClear = document.querySelector(".clear");

bnEncriptar.addEventListener("click",(e) => {
  if(textAencriptar.value==""){
    alert("NO ESCRIBISTE NINGUN TEXTO");
    }else{
          let txtFinal = encriptar(textAencriptar.value); 
          alert("Texto Encriptado")            
          textAencriptar.value= "";
          anuncioSalida.value = "← TEXTO ENCRIPTADO";
          textSalida.value= txtFinal;
        }
});

bnDescriptar.addEventListener("click",(e) => {
  if(textAencriptar.value==""){
    alert("NO ESCRIBISTE NINGUN TEXTO");
    }else{
          desEncriptar();
          alert("Texto DesEncriptado")
          textSalida.value=txtCifrado;                 
          textAencriptar.value= "";
          anuncioSalida.value = "← TEXTO DesENCRIPTADO";
        }
});

bnCopiar.addEventListener("click",(e) => {
  if(textSalida.value==""){
    anuncioSalida.value = "← CAJA VACIA";
  }else{
        textSalida.select();
        navigator.clipboard.writeText(textSalida.value)  
        anuncioSalida.value = "← TEXTO COPIADO";
  }
});

bnClear.addEventListener("click",(e) =>{
  textSalida.value="";
  anuncioSalida.value="";
})




