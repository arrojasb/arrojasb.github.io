styleDesing=` <input value="Listo" onclick="opt.style.display='none';dis=1;opt.innerHTML=''" type="button" style="font-size:1.3em;width:100%"> <style> p.elem, div.elem{padding:15px;border:dotted 2px #000; margin-top:25px;margin-bottom:25px}</style>`
if(localStorage.editor=="" || localStorage.editor == undefined){localStorage.editor='<div class="elem full" style="float:left"></div>';editorDiv.innerHTML=localStorage.editor}

function editor(){
if(localStorage.editor=="" || localStorage.editor == undefined){localStorage.editor='<div class="elem full" style="float:left"></div>'}

pnt_app.innerHTML=`
 <div id="opt"></div>
 <div id="galeDiv"></div>
 <div id="editorDiv" style="width:100%;height: calc( 100% - 30px );position:relative">${localStorage.editor}</div>
 <input onclick="" value="Publicar" type="button" style="height:30px;width:25%;float:left;" id="btnPub">
 <input onclick="" value="Cuenta" type="button" style="height:30px;width:25%;float:left;" id="btnCuenta">
 <input onclick="verCode()" value="Html" type="button" style="height:30px;width:25%;float:left;" id="">
 <input onclick="editor()" value="Bloque" type="button" style="height:30px;width:25%;float:left;" id="">
`;
ctl();
document.getElementById("btnPub").addEventListener("click", function(){publicar()});
document.getElementById("btnCuenta").addEventListener("click", function(){miCuenta();conf.style.display="none"});
}



function ctl(){
 sel=document.getElementsByClassName('elem');
 for(var i=0;i<sel.length;i++){
   //resul=document.getElementsByClassName('elem')[i];
   document.getElementsByClassName('elem')[i].addEventListener("click", function(){toque_elem(this)});
 }
}





tq_elem=0; function toque_elem(o){ if(tq_elem==0){opts=''; ob=o; setTimeout("tq_elem=0",100); tq_elem=1; opt.style.display="inline"
   none='none'
   del=`<div><input type="button" value="Eliminar" onclick="if(ob.id!='blok'){confirma('Seguro de borrar este elemento','ob.remove();opt.style.display=none;grd()')}else{alerta('Este elemento está bloqueado no se puede borrar!')}"></div>`
   sal=del+`<div><input type="button" value="Desing" onclick="opt.innerHTML= styleDesing"></div>  <input value="Close" onclick="opt.style.display='none'" type="button" style="font-size:1.3em;width:100%">
`

//IMG
 gal=`<div>SRC<input type="button" value="Img Src" onclick="galeria()"></div>`

 hei=`<div>height<input type="" value="${ob.style.height}" oninput="ob.style.height=this.value;grd()"></div>`
 wid=`<div>width <input type="" value="${ob.style.width}" oninput="ob.style.width=this.value;grd()"></div>`+hei
 mWi=`<div>M-width <input type="" value="${ob.style.maxWidth}" oninput="ob.style.maxWidth=this.value;grd()"></div>`
 flo=`<div>float <input type="" value="${ob.style.float}" oninput="ob.style.float=this.value;grd()"></div>`
 pad=`<div>padding  <input type="" value="${ob.style.padding}" oninput="ob.style.padding=this.value;grd()"></div>`
 mar=`<div>margin <input type="" value="${ob.style.margin}" oninput="ob.style.margin=this.value;grd()"></div>`

 fsi=`<div>Size<input type="" value="${ob.style.fontSize}" oninput="ob.style.fontSize=this.value;grd()"></div>`
 fwe=`<div>Weight <input type="" value="${ob.style.fontWeight}" oninput="ob.style.fontWeight=this.value;grd()"></div>`
 bra=`<div>Radius<input type="" value="${ob.style.borderRadius}" oninput="ob.style.borderRadius=this.value;grd()"></div>`
 bsh=`<div>Shadow <input type="" value="${ob.style.boxShadow}" oninput="ob.style.boxShadow=this.value;grd()"></div>`
 col=`<div>Color <input type="color" oninput="ob.style.color=this.value;grd()"></div>`
 bac=`<div>Fondo <input type="color" oninput="ob.style.background=this.value;grd()"></div>`
 ali=`<div>Align <input type="" value="${ob.style.textAlign}" oninput="ob.style.textAlign=this.value;grd()"></div>`


//P
 entTex=`<p id="urlF">Ingrese su texto</p> <textarea rows="5" style="width:100%" oninput="ob.innerHTML=this.value;grd()">${ob.innerHTML}</textarea> `
 tex=`<div>Editor<input onclick="alerta(entTex);opt.style.display='none'" value="Edit txt" type="button"></div>`

      avan=ali+pad+fsi+fwe+bra+bsh+col+bac
 ava=`<div>More style<input type="button" value="Css more" onclick="opt.innerHTML=avan+sal"></div>`


//DIV
 listAdd=`<div> 
    <input onclick='addT(0)' value="Imagen" type="button">
    <input onclick='addT(1)' value="Texto" type="button">
    <input onclick='addT(2)' value="Div" type="button">
 </div>`
 div=`<div>ADD<input type="button" value="añadir" onclick="opt.innerHTML=listAdd+sal"></div>`
 



if(ob.tagName=='IMG'){opts=gal+mWi+wid+flo+mar+pad+bra}
if(ob.tagName=='P'){opts=tex+ava+wid+flo+mar+pad+mWi}
if(ob.tagName=='DIV'){opts=div+ava+wid+flo+mar}
opt.innerHTML=opts+sal

  if(ob.id=='not'){opt.style.display="none"}
}}









function grd(){localStorage.editor =editorDiv.innerHTML}





function addT(n){
 imgF='https://e7.pngegg.com/pngimages/572/330/png-clipart-android-logo-android-robot-sideview-character-bots-and-robots.png'
 switch(n){
  case 0: ob.innerHTML+='\n<img src="'+imgF+'" class="elem" style="width:100%;float:left;">\n' ;break;
  case 1: ob.innerHTML+='\n<p class="elem" style="width:100%;float:left;">\ntexto\n</p>\n' ;break;
  case 2: ob.innerHTML+='\n<div class="elem" style="width:100%;height:150px;float:left;"></div>\n' ;break;
 }
 opt.style.display="none"
 ctl();grd()
}




function verCode(){ opt.style.display="none"
editorDiv.innerHTML='<textarea class="full edito" oninput="localStorage.editor=this.value">'+localStorage.editor+'</textarea>'
}








function galeria(){ui=0; conf.style.display="none"
 entUrl=`<p id="urlF">Ingrese una Url válida!</p> <input value="${ob.src}" style="width:100%" oninput="ob.src=this.value;grd()">`
 gale_http=`<div><input onclick="alerta(entUrl);opt.style.display='none'" value="Url" type="button" style="width:100%">`
imgs=[
 'For App',
 'https://i.pinimg.com/736x/ae/b8/d0/aeb8d06e3c6bc62acc0a9bb8078a3ea6--mobile-design-app-design.jpg',
 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_600,h_447/https://mividafreelance.com/wp-content/uploads/2015/08/idea-freelance-6-disena-vende-apps-empresariales-mi-vida-freelance-1.jpg',
 'https://blog.sagipl.com/wp-content/uploads/2017/09/Mobile-App-ideas.jpg',
 'file:///storage/emulated/0/DCIM/tutoriales/bootstrap-4-blog-template.png',
 '0tras',

 'https://t1.uc.ltmcdn.com/es/posts/5/4/9/como_compartir_varios_links_en_un_solo_enlace_19945_600.jpg',
 'https://www.ordenadores-y-portatiles.com/wp-content/uploads/2020/04/A%C3%B1adir-enlaces.jpg',
 'https://e7.pngegg.com/pngimages/572/330/png-clipart-android-logo-android-robot-sideview-character-bots-and-robots.png',
 'https://i.blogs.es/2b63f8/androidze/840_560.jpg',
 'https://blog.ida.cl/wp-content/uploads/sites/5/2012/05/encabezado1.jpg',
 'https://mirayhazlo.com/wp-content/uploads/2018/09/Html5_dise%C3%B1o_web-1.png',

 'Gays',
 'https://image.tmdb.org/t/p/w500/dm5GA0xwJwvPsAU6YBPCfyvvWSb.jpg',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvd52leloa9YXOksjEtBnbIyR7igwPs1dFg&usqp=CAU',
 'https://i.pinimg.com/736x/0b/5e/21/0b5e21731fda3f16a852908e3a5a528b.jpg',

/*
 'Not',
 'https://shangay.com/wp-content/uploads/2020/08/vintage-porno-gay-hot-rods-08.png',
 'https://fagalicious.com/wp-content/uploads/TeamUSA-Part-3-1.jpg',
 'https://i2.wp.com/www.manhuntdiario.com/wp-content/uploads/2014/01/Robert-Marucci-aka-Sean-Cody-model-Noel-was-allegedly-suspended-from-high-school-for-doing-gay-porn-5.jpg?resize=550%2C825',
 'https://muy-porno.com/wp-content/uploads/2022/04/free-gay-porn-usa.jpg',
 'https://imgs1cdn.adultempire.com/products/96/3215096bh.jpg',
 'https://imgs1cdn.adultempire.com/products/06/2752406h.jpg',
 'https://imgs1cdn.adultempire.com/products/33/2726333h.jpg',
 'https://fagalicious.com/wp-content/uploads/2022/02/Stretch-Me-Out-Daddy-CockyBoys-NakedSword-1.jpg',
 'https://v6c9x3b7.ssl.hwcdn.net/blog/wp-content/uploads/2019/08/Freddie-Daze-Gay-Porn-Cory-Kane-CockyBoys-Bareback-Sex.jpg',
 'https://assets.rabbitsreviews.com/images/thumbs450/various/cocky-boys2.jpg',
 'https://gcs.pornsitemanager.com/store/8/5/6/000000019025000000143658/hd/l7891-hotcast-gay-sex-porn-hardcore-videos-twinks-young-guys-minets-jeunes-mecs-cockyboys-100-cockyboys-013.jpg',
 'https://www.gaydemon.com/blogs/assets/3/1/3248826c2abc0d1e1d83aa08391acdc1.jpeg',
 'https://fagalicious.com/wp-content/uploads/2022/07/Break-Him-In-Raw-Volume-2-CockyBoys-NakedSword-1.jpg',
 'https://cockyboys.com/img/trending/1.jpg',
 'https://www.manhuntdaily.com/files/2016/08/IMG_6383-500x781.jpg',
 'https://www.boysgobareback.com/wp-content/uploads/2017/02/cockyboys-gabriel-clark-and-jett-black-15-gay-porn-pics-photo-620x930.jpg',
 'https://v6c9x3b7.ssl.hwcdn.net/blog/wp-content/uploads/2020/07/Blake-Mitchell-Gay-Porn-Levi-Karter-CockyBoys.jpg',
 'https://www.discountgayporn.club/wp-content/uploads/2018/02/Cocky-Boy-Discount.jpg',
 'https://www.muscle-porn.com/wp-content/uploads/2018/11/cockyboys-620x350.jpg',
 'https://fagalicious.com/wp-content/uploads/2020/05/Boy-Bangers-CockyBoys-NakedSword-1.jpg',
 'http://thumbs.gaypornpics.xyz/thumbs/p/240/13/3256/3255530.jpg',
 'https://imgs1cdn.adultempire.com/products/20/2750520h.jpg',
 'https://hotbigdicksgayporn.com/wp-content/uploads/2017/03/Cockyboys-sexy-young-teen-Boy-Skyy-Knox-double-prenetration-Jack-Hunter-Brandon-Jones-two-big-thick-dicks-ass-fucking-002-gay-porn-sex-gallery-pics-video-photo.jpg',
 'https://v6c9x3b7.ssl.hwcdn.net/blog/wp-content/uploads/2019/01/Clark-Davis-Gay-Porn-Taylor-Reign-CockyBoys-Bareback-Sex.jpg',
 'https://cdn.cockyboys.com/content/contentthumbs/22914.jpg',
 'https://bananaguide.com/gallery_images/27755/galleries/BG/master/cocky-boys-k-pe-rams-ky-039-s-hot-ass-master.jpg',
 'https://nudedudesexpics.com/wp-content/uploads/2022/02/Hottie-young-twink-Damien-Grey-bare-bubble-butt-raw-fucked-bearded-stud-Jordan-Starr-huge-dick-0-gay-porn-pics-768x512.jpg',
 'https://gayhd.club/wp-content/uploads/2022/06/gayhd.club_1656001711_23062022.jpeg',
 'https://xphoto.name/uploads/posts/2022-07/1657791060_1-xphoto-name-p-cocky-boys-porn-1.jpg',
 'https://cdn-img1.playvids.com/chl/257/257383/new/cvr1eeb72f0.jpg',
 'https://mensparkle.com/blog/wp-content/uploads/2018/04/Timtales-Tim-Kruger-Valentin-Braun-Devon-Lebron-Lukas-Daken-01.jpg',
 'https://i103.fastpic.org/big/2018/0330/0f/076daa90851465c8a306146162659b0f.jpg',
 'https://bananaguide.com/gallery_images/23165/galleries/BG/master/cocky-boys-cory-kane-and-valentin-braun-flip-fuck-master.jpg',
 'https://cdn.cockyboys.com/content/contentthumbs/22489.jpg',
 'https://noesotrobloggay.com/wp-content/uploads/2017/05/bg-trivial2.jpg',
 'https://xvideosporno.blog.br/wp-content/uploads/pica-grossa-no-cu-do-passivo.jpg',
 'https://tse1.mm.bing.net/th?id=OIP.P_TewtkKUJbtA4tQfNVZTQHaE7&pid=15.1',
 'https://4kgay.com/wp-content/uploads/2021/02/dominant-gay-sex-balls-deep-ass-fucking-400x300.jpg',
 'https://gaypornpicsgalleries.com/wp-content/uploads/2021/05/Hottie-bearded-young-hunk-bare-ass-fucked-hard-big-dick-Amateur-Gay-POV-019-gay-porn-pics.jpg',
 'https://ei.phncdn.com/videos/202103/18/385339221/original/(m=qUNWPLWbeGNdHgaaaa)(mh=X970Qt1W2IN0kO7w)0.jpg',
 'https://external-preview.redd.it/yiizSKY8LlDQgF_KgM4IHVSb6oPgaU_62QBzNtpXXbE.jpg?auto=webp&s=99dd5bbebfa01983da4bbc2d106d43c339ad73ad',
 'https://cdn.cockyboys.com/content/contentthumbs/23226.jpg',
 'https://www.sexflexible.com/wp-content/uploads/2022/09/men-com-straight-shooter-brysen-angel-rivera/men-brysen-angel-rivera-featimg-2.jpg',
 'https://imgs1cdn.adultempire.com/product/500/3297734/fuck-like-bunnies.jpg',
 'https://cockyboys.com/content/contentthumbs/301-dvdasc.jpg',
 'https://cockyboys.com/content/contentthumbs/288-dvdasc.jpg',
 'https://cockyboys.com/content/contentthumbs/307-dvdasc.jpg',
 'https://zing.waybig.com/reviews/CockyBoys/07-15-21/brock-banks-angel-rivera-camp-cockyboys-cockyboys-01.jpg',
 'https://zing.waybig.com/reviews/SeanCody/11-13-20/jax-cody-seiya-seancody-01.jpg',
 'https://zing.waybig.com/reviews/CockyBoys/03-17-21/austin-wolf-tayte-hanson-lucky-love-cockyboys-01.jpg',
 'https://zing.waybig.com/reviews/CockyBoys/08-25-22/cody-seiya-kane-fox-surrender-pt1-cockyboys-001.jpg',
 'https://zing.waybig.com/reviews/CockyBoys/03-26-21/roman-todd-angel-rivera-lucky-love-cockyboys-01.jpg',
 'https://zing.waybig.com/reviews/CockyBoys/08-14-20/tayte-hanson-austin-avery-cockyboys-01.jpg',
 'https://zing.waybig.com/reviews/RandyBlue/11-27-14/austinw-kurtisw-randyblue-01.jpg',
 'https://zing.waybig.com/reviews/CockyBoys/04-02-21/tatye-hanson-brock-banks-lucky-in-love-finale-cockyboys-01.jpg',
 'https://img.gaybeeg.info/2020/08/14/o4bjl6ET.jpg',
 'https://gaymanporn.org/uploads/posts/2019-08/1565616759_281_gaymanporn_org.jpg',
 'https://cockyboys.com/content/contentthumbs/309-dvdasc.jpg',
 'https://www.thesword.com/wp-content/uploads/2020/02/CockyBoys-avery-jones-brock-banks-7865.jpg',
 'https://cdn.mansurfer.com/videos/w/8/w8q300/temp/00000001.jpg',
 'https://www.homoactive.com/media/catalog/product/cache/1/image/x800/040ec09b1e35df139433887a97daa66f/n/d/ndp010daddyfuck3_copy.jpg',
 'https://www.homoactive.com/media/catalog/product/cache/1/image/x800/040ec09b1e35df139433887a97daa66f/c/o/cover_f_3.jpg',
 'https://redixxmen.com/wp-content/uploads/2020/11/cockyboys-angel-rivera-avery-jones-3.jpg',
 'https://static2.gay0day.com/contents/videos_screenshots/190000/190476/preview.jpg',
 'https://bananaguide.com/gallery_images/16854/galleries/BG/master/men-com-rafael-alencar-drills-dylan-knight-master.jpg',
 'https://i0.wp.com/zonagayweb.com/wp-content/uploads/2020/07/Rafael-Alencar-003.jpg?resize=540%2C358&ssl=1',
 'https://www.queerclick.com/images/2011/04/xtra_inches_luke_dominic_rafael.jpg',
 'https://www.pornogaylatino.com/wp-content/uploads/2022/05/OF-IAmFuckingYourHusband-RafaelAlencar-RuggeryValdivia-Poyato-1024x572.jpg',
 'https://1.bp.blogspot.com/_vH39EqkhKZ8/S2xlJuuIX9I/AAAAAAAATfM/aZBrsrKCfbY/s1600/Rafael_Alencar_UZ_06.jpg',
 'https://1.bp.blogspot.com/-19paZkbDhlU/UU9gyzx9jcI/AAAAAAAAGQ4/D6pZuJxZW5g/s1600/vvvcvc.jpg',
 'https://www.pornogaylatino.com/wp-content/uploads/2022/01/22592153-1024x576.jpg',
 'https://gcs.pornsitemanager.com/store/0/d/f/5c5753afe4f4cfba4f8b4fd0/hd/rafaelalencar.jpg',
 'https://cdn-w.lucasentertainment.com/lucasentertainment/content/models/781/Rafael_Alencar_10_May_2019.jpg',
 'https://pbs.twimg.com/media/CVwkie7VAAErWRQ?format=jpg&name=large',
 'https://i.pinimg.com/originals/98/33/24/98332418063e57303c72414e170d2ba2.jpg',
 'https://i.pinimg.com/736x/87/d7/51/87d7512f3e3268620896c00e0875cc8b--rafael-alencar-bathing.jpg',
 'https://i.pinimg.com/originals/09/73/5c/09735c00d40f680ef964956deac08847.jpg',
 'https://image-service-ht.project1content.com/7c9/8a6/135/7b6/45d/383/b02/28b/cd4/d2f/c6/model/profile_001.jpg?width=600&aspectRatio=3x4&imageVersion=1654789360',
 'https://pic.aebn.net/dis/i/Stream/Movie/Stars/s24993_i20360_l.jpg?s=419w',
 'https://v6c9x3b7.ssl.hwcdn.net/blog/wp-content/uploads/2015/04/Pierre-Fitch-FalconEdge-Gay-Porn-Star-2.jpg',
 'https://imgs1cdn.adultempire.com/products/30/1764430h.jpg',
 'https://cdn-w.lucasentertainment.com/lucasentertainment/content/models/Pierre-Fitch/Pierre_Fitch.jpg',
 'https://bananaguide.com/gallery_images/26937/galleries/BG/master/men-com-pierre-fitch-fucks-tony-carusso-master.jpg',
 'https://www.gaydemon.com/blogs/assets/e/a/e423ca4fbb4ec3b307442031677ff56a.jpeg',
 'https://66.media.tumblr.com/73d003addd183c9475584a89821bdea3/tumblr_p81t23ejAw1xqr2fio1_1280.jpg',
 'https://bananaguide.com/gallery_images/31759/galleries/BG/master/cocky-boys-avery-jones-is-railed-by-gabriel-clark-master.jpg',
 'https://gayboyporn.org/uploads/posts/2019-10/1571768516_5751_gayboyporn_org.jpg',
 'https://gaymanporn.org/uploads/posts/2020-09/1601277330_2631_gaymanporn_org.jpg',
 'https://gcs.pornsitemanager.com/store/6/1/f/5c571720e4f4cf974f8b4f16/hd/gabriel-clark-actif-ttbm-cover.jpg',
 'https://img.gaybeeg.info/2021/12/16/78fPJDkTZIzK.jpg',
 'https://v6c9x3b7.ssl.hwcdn.net/blog/wp-content/uploads/2015/05/Manuel-Deboxer-Fucks-Gabriel-Clark-Maskurbate.jpg',
 'https://cdn.mansurfer.com/videos/n/b/nb1200/temp/00000001.jpg',
 'https://menofporn.typepad.com/.a/6a00d83451f9a269e20240a4757a42200c-600wi',
 'https://gcs.pornsitemanager.com/store/6/5/2/000000032503000000205256/hd/gabriel-clark.jpg',
 'https://v6c9x3b7.ssl.hwcdn.net/blog/wp-content/uploads/2019/08/Gabriel-Clark-Gay-Porn-Bareback-Fuck-Shane-Jackson.jpg',
 'https://image-service-ht.project1content.com/dbf/c6c/4e6/dee/47d/c90/443/84a/592/dba/06/model/profile_001.jpg?width=600&aspectRatio=3x4&imageVersion=1664472057',
 'https://i.pinimg.com/originals/a1/77/4f/a1774f49e37369893613e33f14e2a196.jpg',
 'https://m.media-amazon.com/images/I/51wjo2uOIZS._SY679_.jpg',
 'https://www.underwearexpert.com/blog/wp-content/uploads/2019/07/headerIMG_1348-1.jpg',
 'https://i.pinimg.com/originals/26/9b/0d/269b0d3c4a22a36180e68ebaf50cdbeb.jpg',
*/
 ''
]
for(var i=0; i<imgs.length; i++){
 if(imgs[i][0]=="h" || imgs[i][0]=="f"){
  gale_http+=`<img src="${imgs[i]}" onclick="if(ob.src==this.src){opt.style.display='none'}else{ob.src=this.src;grd()}" onerror="this.remove()" style="width:50%;height:120px;border:solid 1px #000">`
 }else{
  gale_http+=`</div><div class="free cvGale" onclick="if(gale${i}.style.display=='none'){gale${i}.style.display='inline'}else{gale${i}.style.display='none'}">${imgs[i]}</div><div class="free hidden" style="display:none;width:100%" id="gale${i}">`
 }
}
opt.innerHTML=gale_http+'</div>'
}





