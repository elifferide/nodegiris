const bodyParser =require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// "/" anasayfayı temsil eder.
app.get('/' , function(req, res){
    res.sendFile(__dirname +"/index.html");
});

app.get('/iletisim' , function(req,res){
  res.sendFile(__dirname +"/iletisim.html");
});

app.get('/giris',function(req,res){  //function(req,res) yazımı ile (req,res) => yazımı aynıdır.
  res.sendFile(__dirname +"/giris.html");
});

app.get("/yazi",function(req,res){

  var gonderilecekler={
    baslik:'Almanya Hükümetinden Açıklama',
    yorumsayisi:'30' ,
    yazar : 'Falanca Kişi'
  };
  res.render('yazi',gonderilecekler);

});

app.get("/urun",function(req,res){

  var gidenler={
    baslik: "Telefon",
    yorumsayisi:"25"
  };
  res.render('urun',gidenler);
});


app.get("/kitap",function(req,res){

  var gidenler={
    isim: "Iskarta",
    yazar:"Neal Shusterman ",
    aciklama:"Çocukların organlarının başka donörlere nakledilerek ıskartaya çıkarıldığı bir dünya düşünün."+
    "Doktorlar ve tedavi yöntemleri yerine sadece cerrahlar ve protezlerin olduğu bir dünya düşünün."+
    "Kitapta yaşamın nerede başladığı ve nerede bittiğinin ötesinde, gerçekten “yaşam”ın ne anlama geldiğine dair fikirleriyle de genç okurlara meydan okuyor.",
    fiyat:"18 TL  ",
    resim:"https://i.idefix.com/cache/500x400-0/originals/0001841748001-1.jpg"
  };
  res.render('kitap',gidenler);
});


app.post('/profil',function(req,res){
  res.send("Sayfana Hoşgeldin! ")
    if(req.body.kullaniciadi=="Elif" && req.body.sifre=="1234"){
      console.log("Hoşgeldin");
    } else {
      console.log("Yanlış Kullanıcı adı ve şifre");
    }
  });




app.get('/profil',function(req,res){
  res.send("Get ile geldin.....")
});


app.get("*",function(req,res){
  res.send("Hataaaa!!! Yanlış sayfadasınız, lütfen tarayıcınızın ayarlarını kontrol ediniz.")
});

app.listen(8000);
