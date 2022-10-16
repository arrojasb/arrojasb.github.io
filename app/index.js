  fecha =new Date();hora=fecha.getHours();mes=fecha.getMonth();dia=fecha.getDate()
  meses=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
  app='mipa'
  vencen=2
  freeTk=0
  price='50CUP'
  maxR=30; sizeM=150
  registros="https://jsonblob.com/api/jsonBlob/1027296024062083072"
  db=[]
  imgUrl=''
  if(window.location=='https://varito.com/'){imgUrl='file:///android_asset/'}
  internet=`<img src="${imgUrl}img/waring.png" style="width:25px;float:left"> Not Internet access`


  compra=`Para registrar su cuenta debe comprar un token de acceso para su número de teléfono enviando ${price} de saldo al número 56059870 y en menos de 24horas recibir su código<br>ATENCIÓN debe realizar la transferencia desde el mismo número que va a registrar o su token no funcionará.`
  cargando='Cargando...'
condUso=`
  No somos responsables del uso de la app
`


function alerta(texto){ 
  conf.style.display='inline'
  conf.innerHTML=`<b><img src="${imgUrl}img/noti.png" style="width:30px;float:left"> ${app} </b><hr/><div class="txt">${texto}</div> <div class="btn"><input onclick="conf.style.display='none'" value="Acectar" type="button"></div>`}
function confirma(texto,ac,ca){
  conf.style.display='inline'
  conf.innerHTML=`<b><img src="${imgUrl}img/noti.png" style="width:30px;float:left">${app}</b><hr/><div class="txt">${texto}</div> <div class="btn"> <input onclick="conf.style.display='none';${ac}" value="Acectar" type="button">  <input onclick="conf.style.display='none';${ca}" value="Cancelar" type="button"></div>`}

