//db=[{"phone":"110","password":"qwe","sitio":"LAwebClub","id":"1202345737931222185","caduca":"ADM"}]

function miCuenta(){ 
  if(localStorage.id==undefined){localStorage.id=""}
 if(localStorage.time!=dia){dataBase(5)}
 if(localStorage.id!=""){
    murl=`https://jsonblob.com/api/jsonBlob/${localStorage.id}`
    giturl=`https://edipaplus.github.io/?${btoa(localStorage.id)}`
 }

  nada="";
  listoB="Su HTML se ha restablecido con éxito!"
  listoC="Se ha cerrado con éxito!"

if(localStorage.id!=""){
inf=`
  <div class="free">
   <div class="opc">
     <img onclick="ajustes()" src="${imgUrl}img/ic.png">
     <img onclick="alerta('<pre>'+giturl+'</pre><br>  Éste es el link de tu página en Internet. Puede compartirlo con quien desee y así accedan a su página sin usar la apk <br> <br>ATENCIÓN Compartir su página desde la url es bajo su propio riesgo. Envíelo a conocidos.')" src="${imgUrl}img/globe_96.png" onclick="">
     <img onclick="homeApp()" src="${imgUrl}img/menu.png" onclick="">
   </div>
  <img onclick="homeApp()" src="${imgUrl}img/default.png" style="width:130px;margin:5px;"></div>
  <div class="op">
   ${localStorage.sitio}
  </div>
  <div class="pre center"> ${localStorage.phone}  ${meses[mes]}/${localStorage.caduca} </div>
   
  <div onclick="confirma('Desea obtener el proyecto publicado? El editor y los cambios realizados serán reemplazados por el antes publicado!','recuperar(murl)')" class="ob"> Recuperar Web</div>
  <div onclick="theme()" class="ob"> Plantillas Web</div>
  <div onclick="confirma('Seguro desea borrar su proyecto del editor?','localStorage.editor=nada;miCuenta();alerta(listoB)','')" class="ob"> HTML Clear</div>
  <div onclick="confirma('Cerrar la sesión actual!','localStorage.id=nada;miCuenta();alerta(listoC)')" class="ob"> Login_out</div>
`
}else{
inf=`
<div class="free registro">
 <div class="op center" id="ctau">Tu Cuenta</div>
  <div class="free" id="phones">
    <i>Teléfono</i>
    <input type="number" oninput="if(this.value<=50000000 || this.value>=60000000){ctau.style.color='#ab0700'}else{ctau.style.color='#00ab1e';creaTk()}" id="phone">
  </div> 
         <i>Contraseña</i>
   <input type="password" id="pass">
   <input onclick="buscarCuenta()" type="button" value="login/New" id="btnLogin">
<div class="free hidden" id="regis">
         <i>Confirma Contraseña</i>
   <input type="password" id="passC">
         <i>Nombre del Sitio</i><br> (más de 6 letras)
   <input type="text" id="sitio" value="nombreDelSitio">
         <i>Token de acceso</i>
   <input type="number" id="token">
   <input onclick="crearCuenta(1)" type="button" value="Registrar" class="hidden" id="crta">

</div>
</div>
`
}

pnt_app.innerHTML=`
<div class="full" style="position:relative"><textarea class="full edito" oninput="localStorage.editor=this.value">${localStorage.editor}</textarea></div>
<div class="full" style="position:absolute;top:0px;right:0px;z-index:5;background:rgba(0,0,0,0.5)"> 
<div id="themeDiv"></div>
<div class="main_app" id="cjt">
  <input value="Cuenta Data" onclick="" type="button" style="text-align:left;font-size:1.3em;width:100%">
  ${inf}
  <div onclick="editor()" class="ob"> Web Edite</div>
  <div onclick="homeApp();acount();acountV=0;" class="ob"> Home</div>
    <br>
<div> 
  <span class="link" onclick="alerta(condUso)">Términos&Con.</span>
  <span class="link" onclick="openWeb('https://jsonblob.com/api/jsonBlob/1029927441778622464',1)">Blog</span>
  <span class="link" onclick="openWeb('https://jsonblob.com/api/jsonBlob/1027889659967193088',1)">Web</span>

<div class="pre center">versión:${version} / ${localStorage.time}</div>
</div>
</div>
</div>
`
}




function dataBase(p){
var xhr = new XMLHttpRequest();xhr.open("GET", registros);
 xhr.setRequestHeader("Cache-Control", "no-cache");
 xhr.setRequestHeader("Content-type", "application/json");
 xhr.onreadystatechange = function(){ if(xhr.readyState == 4){ if(xhr.responseText!=''){

//REGISTROS DB
    db=JSON.parse(xhr.responseText)
    reg=[]
for(var i=0; i<db.length; i++){
    reg.splice(0,0,{"p":db[i].phone,"s":db[i].sitio,"i":db[i].id})
}
    site=reg
    localStorage.site=JSON.stringify(site)
    localStorage.time=dia
    if(p==0){homeApp();alerta('Navegador Actualizado!')}
    if(p==1){buscarCuenta()}
    if(p==2){crearCuenta(2)}

 }else{
  alerta(internet)
  if(p==0){setTimeout("dataBase(0)",5000)}
 }}};
 xhr.send();
}




function buscarCuenta(){
 sinCuenta=0
 if(phone.value>50000000 && phone.value<60000000 || phone.value >=100 && phone.value <=200){
  if(db.length==0){
     dataBase(1)
     alerta(cargando)
  }else{
    for(var i=0; i<db.length; i++){
      if(db[i].phone==phone.value){ sinCuenta=1
        if(pass.value!=""){
          if(db[i].password==pass.value){
//YA TIENES UNA CUENTA 
  localStorage.sitio=db[i].sitio
  localStorage.phone=db[i].phone
  localStorage.password=db[i].password
  localStorage.caduca=db[i].caduca
  localStorage.id=db[i].id
 
  miCuenta()
  alerta('Listo ya tu cuenta está disponible!')

          }else{alerta('Contraseña incorrecta!')}
        }else{alerta('Escriba su contraseña!')}
      break;
      }
     }
  if(sinCuenta==0){confirma('Deseas crear una cuenta con el número '+phone.value,'crearCuenta(0)','')}
    }
  }else{alerta('Escriba su número de teléfono')}
}

function crearCuenta(p){   inline='inline-block'
 if(p==0){
   btnLogin.style.display="none"
   phones.style.display="none"
   regis.style.display="inline-block"
   confirma('Si presionas <b>Aceptar</b> estás de acuerdo con:<br><br>'+condUso,'crta.style.display=inline','editor()')
     pass.value=''
     passC.value=''
 }

 if(p==1){
   if(pass.value==passC.value && pass.value!=''){
    if(token.value==tken){
      if(sitio.value.length>5){
//REGISTRO LISTO
  valo=JSON.stringify([{"sitio":sitio.value}])
  localStorage.sitio=sitio.value
  localStorage.phone=phone.value
  localStorage.password=pass.value
	 alerta('Creando cuenta... Espere!')	
      const request = new XMLHttpRequest();
      request.open("POST", "https://jsonblob.com/api/jsonBlob", true);
      request.setRequestHeader("Content-type", "application/json");
      request.setRequestHeader("Private", "false");
      request.onreadystatechange = function(){ if(request.readyState == 4){ if(request.responseText!=''){

  respuesta=request.getResponseHeader("location")
  apis=''
  for(var i=33; i<respuesta.length; i++){
    apis+=respuesta[i]
  }
    alerta(apis)
    localStorage.id=apis
    alerta('Obteniendo ID...')
    dataBase(2)

      }else{alerta(internet)}}};
      request.send(valo);

      }else{alerta('Da un nombre a tu página!')}
    }else{alerta('El token es incorrecto!'); if(freeTk==0){alerta(compra)}}
   }else{alerta('Las contraseñas no son iguales!')}
 }




 if(p==2){
   caduce=mes+vencen; if(caduce>11){caduce=caduce-12}
   ct=meses[caduce]
//phone-password-sitio-id-caduca
   db.splice(0,0,{"phone":phone.value,"password":pass.value,"sitio":sitio.value,"id":localStorage.id,"caduca":ct})
      var xhr = new XMLHttpRequest();xhr.open("Put", registros);
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.onreadystatechange = function(){ if(xhr.readyState == 4){ if(xhr.responseText!=''){
//REGISTRO CREADO
       alerta('Se ha creado la cuenta '+localStorage.id)

       miCuenta()
      }else{alert(internet);localStorage.id=''}}};xhr.send(JSON.stringify(db));
 }




}











function publicar(){
 if(localStorage.time!=dia){dataBase(5)}else{
 if(localStorage.id==""){
  alerta('Configura una cuenta para publicar tu página!')
 }else{
//PUBLICAR TU WEB
   alerta('Publicando...')
   if(localStorage.ct!=meses[mes]){
     var xhr = new XMLHttpRequest();
     xhr.open("Put", murl);
     xhr.setRequestHeader("Content-type", "application/json");
     xhr.onreadystatechange = function(){ if(xhr.readyState == 4){ if(xhr.responseText!=''){
//PUBLICADO
     alerta('Proyecto publicado con éxito '+giturl)
    }else{alerta(internet)}}};xhr.send(localStorage.editor);
}else{alerta(`Ha pasado ${vencen} mes/es debe pagar para publicar...`);
cargaDB(4)}
 }
}
}





function recuperar(url){
 if(localStorage.time!=dia){dataBase(5)}else{

//RECUPERAR WEB
alerta('Recuperando...')
var xhr = new XMLHttpRequest();xhr.open("GET", url);
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function(){ if(xhr.readyState == 4){ if(xhr.responseText!=''){
//RECUPERADO
    cont=xhr.responseText; none='none'
    themeDiv.style.display='inline-block'
    themeDiv.innerHTML=`
    <div style="width:100%;height:calc( 100% - 50px );position:relative">${cont}</div>
    <input onclick="confirma('Seguro de cargar estos datos en el editor, Todo será  reemplazados por el mismo!','localStorage.editor=cont;miCuenta();themeDiv.style.display=none','themeDiv.style.display=none')" value="Usar data" type="button" style="width:50%;height:50px;float:left">
    <input onclick="themeDiv.style.display='none'" value="Cancelar" type="button" style="width:50%;height:50px;float:left">
   `
    conf.style.display=none
 }else{alerta(internet)}}};
xhr.send();
}
}




function creaTk(){
 vl=(phone.value+''); tken=''
 tken=Number(vl[6]+vl[7])*2 +3000
 if(freeTk==1){token.value=tken}
}




function openWeb(pag,p){
 if(localStorage.time!=dia){dataBase(5)}else{

alerta(cargando)
var xhr = new XMLHttpRequest();xhr.open("GET", pag);
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function(){ if(xhr.readyState == 4){ if(xhr.responseText!=''){
//RECUPERADO
    cont=`<div class="close" onclick="miCuenta()">×</div>  <div class="full"> ${xhr.responseText} </div>`; 
    if(p==0){pags.innerHTML=xhr.responseText; resultSearch.innerHTML='';conf.style.display="none"}
    if(p==1){pnt_app.innerHTML=cont}
    localStorage.pc= JSON.stringify([pag,xhr.responseText])
ctlImg()
 }else{
  alerta(internet)
  if(p==0){pags.innerHTML =`<div class="elem full" style="float: left; text-align: center;"><img src="${imgUrl}img/waring.png" class="" style="width: 200px; margin: 20px 0px 0px;"><p class="elem" style="width: 100%; float: left; font-size: 3em; font-weight: 900;">Ups err</p><p class="elem" style="width: 100%; float: left; padding: 3px; font-weight: 300;">Revise su conexión a Internet  o reintente en unos minutos. Si el problema persiste revise la url</p></div>`
  if(JSON.parse(localStorage.pc)[0]==pag){confirma('No se pudo conectar quiere ver su copia en caché',' pags.innerHTML=JSON.parse(localStorage.pc)[1];ctlImg()','')};
ctlImg()
  }
 }}};
xhr.send();
}
}


function ajustes(){
cjt.innerHTML=`
  <div onclick="miCuenta()" class="ob"> Regresar</div>
  <div class="op">Ajustes avanzados de su cuenta!</div>


  <i>Contraseña Actual</i>
  <input type="password" id="passA">
  <i>Contraseña Nueva</i>
  <input type="password" id="passN">
  <input type="button" value="Cambiar contraseña">

<br><br><hr/> <i>Identidad URL</i><br>
 <b style="color:#ff000a">modifique su identidad de url sólo si cree que su cuenta  ha sido hackeada</b><br>
 <input type="button" value="Cambiar Identidad">

`
}
