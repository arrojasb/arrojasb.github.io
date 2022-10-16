site=[]


function homeApp(){
 if(localStorage.site!=undefined){site=JSON.parse(localStorage.site)}
 if(site.length==0){alerta(internet);dataBase(0)}
pnt_app.innerHTML=`
<div class="full">
<div style="width:100%;float:left; background: rgb(82, 82, 82); color: rgb(0, 0, 0); padding: 5px; height: 54px; position: absolute; top: 0px; left: 0px; z-index: 5; overflow: hidden; text-align: left;border-bottom:solid 1px #111;box-shadow:0px 0px 5px #000">
<!-- BARRA NAVEGADOR -->
  <input type="search" oninput="buscarPage(this.value)" placeholder="Buscador" style="width:190px;font-size:20px;height:40px;padding:2px;border-radius:3px;border:solid 1px #111">
  <div style="width: 44px; height: 44px; float: right; border-radius: 35px;"><img id="ctas" src="${imgUrl}img/menu.png" class="" style="width: 100%; float: left; height: 100%;"></div>
  <div style="width: 44px; height: 44px; float: right; border-radius: 35px;"><img id="ctaf" src="${imgUrl}img/link.png" class="" style="width: 100%; float: left; height: 100%;"></div>
</div>
    <!--INICIO INDEX-->
  <div class="elem full" id="blok" style="width: 100%; float: none; margin: auto; padding: 0px; background: rgb(255, 255, 255); text-align: left;position:relative;z-index:2">
  <div style="width:100%; height:54px;float:left;"></div>
    <!-- BARRA RESULTADO-->
  <div class="" id="resultSearch" style="width: 100%; float: left; position: absolute; top: 55px; left: 0px; z-index: 10;"></div>
    <!-- CONTENIDO-->
<div class="elem" id="pags" style="width: 100%; float: left; background: rgb(255, 255, 255); height: calc(100% - 55px); position: relative;">
<!-- INICIO -->

<div class="elem full" style="float: left; text-align: center; background: rgb(255, 255, 255);"><style>.btnLink{float: left; width: 46%; margin: 2%; box-shadow: rgb(0, 0, 0) 0px 0px 5px; border-radius: 10px; padding: 5px; text-align: left;}.btnLink img{width:25px; height:25px}</style><div class="elem" style="width: 100%; height: 48px; float: left; border-radius: 0px 0px 25px 25px; margin: 0px 0px 25px; background: rgb(255, 255, 255);">

</div><p class="elem" style="width: 100%; float: left; font-size: 3em; font-weight: 500; color: rgb(0, 0, 107);">edipaPlus</p><p class="elem" style="width: 100%; float: left; font-weight: 200; font-size: 1em; padding: 0px 15px;">Encuentra todos los proyectos creados y publicados desde la apk</p>
  <img src="${imgUrl}img/default.png" class="" style="width: 150px; border-radius: 150px; height: 150px;"><div class="elem" style="width: 100%; float: left; text-align: left; padding: 10px;">
<div class="btnLink" style="font-weight: 600;" onclick="openWeb('https://jsonblob.com/api/jsonBlob/1029927441778622464',0)">
  <img src="${imgUrl}img/globe_96.png" class="" style="float: left;">Blog Guía
</div><div class="btnLink" style="font-weight: 600;" onclick="openWeb('https://jsonblob.com/api/jsonBlob/1027889659967193088',0)">
  <img src="${imgUrl}img/link.png" class="" style="float: left;">Web Oficial
</div><p class="" style="width: 100%; float: left; font-size: 30px; font-weight: 600;">Creador</p><p class="elem" style="width: 100%; float: left; font-weight: 200;">Crea tu propio espacio web como proyecto de trabajo; escuela o negocio. Crea tu proyecto online</p></div><div class="elem" style="width: 100%; float: left;"></div></div>

<!-- FIN -->   
</div></div>
  <div class="" id="fotoDiv" style="width: 100%;background:rgba(0,0,0,0.6); float: left; position: absolute; bottom: 0px; left: 0px; z-index: 12;max-height:100%;"></div>
 </div>
`
acountV=1
document.getElementById("ctas").addEventListener("click", function(){if(acountV==1){acount();acountV=0}else{resultSearch.innerHTML="";acountV=1}});
document.getElementById("ctaf").addEventListener("click", function(){ homeApp()});
ctlImg()
}




function acount() {
resultSearch.innerHTML=`
 <div class="main">
  <div id="mic">Cuenta/Editor</div><hr/>
  <div id="pru">Mi Web Editor</div><hr/>
 </div>
`
document.getElementById("pru").addEventListener("click", function(){pags.innerHTML=localStorage.editor;resultSearch.innerHTML="";acountV=1;ctlImg()});
document.getElementById("mic").addEventListener("click", function(){miCuenta()});
}




function buscarPage(txt){
if(txt.length>1 || txt.length==0 ){
      acountV=1
      conteo=0
      resultados=""
 for(var i=0; i<site.length; i++){
   if( txt=='@admin'|| conteo<5 && (site[i].p).indexOf(txt)!=-1 || conteo<5 && ((site[i].s).toUpperCase()).indexOf(txt.toUpperCase())!=-1 ){
      conteo++
      resultados+=`<div class="" onclick="openWeb('https://jsonblob.com/api/jsonBlob/${site[i].i}',0)"><b>${site[i].s}</b><hr/></div>`
   }
 }

     resultSearch.innerHTML=`<div class="lista" onclick="resultSearch.innerHTML=''">${resultados}</div>`
     if(txt==""||conteo==0){resultSearch.innerHTML=""}
}
}



function ctlImg(){srcOb=""
 if(localStorage.editor==""){localStorage.editor='<div class="elem full" style="float:left"></div>';editorDiv.innerHTML=localStorage.editor}
 sel=document.getElementsByClassName('elem');
 for(var i=0;i<sel.length;i++){
   document.getElementsByClassName('elem')[i].addEventListener("click", function(){fotoToque(this)});
}}
function fotoToque(ob){
  if(srcOb==ob.src){fotoDiv.style.height="100%";fotoDiv.innerHTML=`<img style="box-shadow:0px 0px 100px #000;margin:2% auto" onclick="this.remove();fotoDiv.style.height='auto'" src="${ob.src}" alt="">`}else{
   if(ob.tagName=='IMG'){ srcOb=ob.src;fotoDiv.style.height="auto"; fotoDiv.innerHTML =`<div style="font-size:9px;background:#000;color:#fff;padding:5px 9px;float:left;border-radius:3px; max-width:100%" class="list"><pre>${ob.src}</pre></div>`}
  }
}
