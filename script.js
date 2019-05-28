//*font-family: 'ZCOOL KuaiLe', cursive;
//*font-family: 'Seaweed Script', cursive;
//font-family: 'Gravitas One', cursive;

var glad=["https://eteknix-eteknixltd.netdna-ssl.com/wp-content/uploads/2018/08/2-30-800x450.jpg"];

var frustrated=["https://media1.tenor.com/images/d54abc9068b9f6a2378d20bb2d87327d/tenor.gif?itemid=12663207"];

var serious=["https://cdn.myanimelist.net/s/common/uploaded_files/1445336469-1d80d8dda683ffd3d33e91bac8a64fbb.jpeg"];

var bored=["https://media.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy.gif"];

$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "glad"){
        gladDisplay();
    } else if(input==="frustrated"){
        frustratedDisplay();
    }else if(input==="serious"){
      seriousDisplay();
    }else if(input==="bored"){
     boredDisplay();
    }else{
     alert("Please enter glad ,frustated, serious, or bored!");   
    }
});

function changeBackground(backgroundImage){
    $('body').css('background-color', backgroundImage);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}

function gladDisplay(){
    changeBackground("crimson");
    changeTextColor("dodgerblue");
    displayImage(glad);
}

function frustratedDisplay(){
    changeBackground("coral");
    changeTextColor("DarkMagenta");
    displayImage(frustrated);
}

function seriousDisplay(){
 changeBackground("LightBlue ") ; 
 changeTextColor("LightCoral ");
 displayImage(serious);
}
function boredDisplay(){
    changeBackground("PaleGreen  ") ; 
    changeTextColor("Tomato  ");
    displayImage(bored);
}