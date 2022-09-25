var boolSound = false;
$(document).on('click', '.soundPlay', (e) => {
    let type_ = $(".soundPlay").attr("click");
    if(type_=="play"){
        soundAmbient.play();
        $(".soundPlay").attr("click","stop");
        $(".soundPlay").html(`<i class="fa-solid fa-stop"></i>`);
        boolSound = true;
    }else{
        // soundAmbient.currentTime=0.60;
        $(".soundPlay").attr("click","play");
        $(".soundPlay").html(`<i class="fa-solid fa-play"></i>`);
        boolSound = false;
        soundAmbient.pause();
        
    }
    

});

function endGame(title,icon,opc){
    // $("#idSection2").toggleClass('clickId');
    // setTimeout(function() { 
        getFinal = true;
        let style = opc == 1 ? "#ffbdbd" : "#c7ffbd";
        // $("#idSection2").toggleClass('clickId');
        $("#idSection2").hide();
        let template = `<span><i class="fa-solid fa-${icon}"></i></span> ${title}`;
        $(".titleAverage").html(template);
        $(".titleAverage").css("color",style);
        $("#idSection3").css("display","flex");
        // setIntervalCrono();
        $("#segundero").html("30");
        // createCards(arrayCards);
        result = false;
        countGood = 0;
        for (let i = 0; i < arrayCards.length; i++) {
            let id = arrayCards[i].id_;
            let p = arrayCards[i].p;
            console.log("#"+id+p);
            $("#"+id+p).removeClass("flipped");
            $("#"+id+p).removeAttr("style");
            $("#"+id+p).removeAttr("success");

//             let subId = `#${objRemember.id+""+objRemember.p}`;
//             let anotherId = this;
//             console.log(anotherId);
//             $(subId).attr('success',"true");
//             $(this).attr('success',"true");
// // CSS
//             $(subId).css('pointer-events',"none");
            $("#"+id+p + ".card .back").removeAttr("style");

            // style
        }
        // storeTimeInterval = "";
        clearInterval(storeTimeInterval);
        objRemember = {};
        init();
 
        
        
    
    // }, 500);
    
}

var result = false;
var storeTimeInterval = "";

function setIntervalCrono(){
    var countTime = 30;
    storeTimeInterval = setInterval(function(){
    countTime--;
        // $("pre").append(countTime*5 + 'sec.<br/>');
        $("#segundero").html(countTime);
        if(result==true)
            {
            
            clearInterval(storeTimeInterval);
                // if(sonidoClick.play()){
                    sonidoClick.pause();
                // }
            }

        if(countTime<=10 && countTime>0){
            // .play();
            // if(boolSound==true)
            // {
                sonidoClick.play();
            // }
        }
        if(countTime == 0){
            clearInterval(storeTimeInterval);
            endGame("oops you didn’t find them all","xmark",1);
            // check
        
        }
    }, 1000);
}



$(document).on('click', '.btnVideogame', (e) => {
// $("#idContainerPre").animate("top","100px");
 
$("#idSection1").toggleClass('clickId');
setTimeout(function() { 
    $("#idSection1").toggleClass('clickId');
    $("#idSection1").hide();
    
    $("#idSection2").css("display","flex");
    setIntervalCrono();

    

}, 500);


});

$(document).on('click', '.btnVideogame02', (e) => {
    // $("#idContainerPre").animate("top","100px");
    init();
    getFinal=false;
    $("#idSection3").toggleClass('clickId');
    $("#segundero").html('30');
    setTimeout(function() { 
        $("#idSection3").toggleClass('clickId');
        $("#idSection3").hide();
        
        $("#idSection2").css("display","flex");
        setIntervalCrono();
    
        
    
    }, 500);
    
    
    });
let arrayCards = [
    {
        icon:"fas fa-sun",
        id_:"sun",
        p:1,
        
    },
    {
        icon:"fas fa-star",
        id_:"star",
        p:1,
    },
    {
        icon:"fas fa-moon",
        id_:"moon",
        p:1,
    },
    {
        icon:"fas fa-meteor",
        id_:"comet",
        p:1,
    },

// COMIENZA EL PAR 2

    {
        icon:"fas fa-sun",
        id_:"sun",
        p:2,
    },
    {
        icon:"fas fa-star",
        id_:"star",
        p:2,
    },
    {
        icon:"fas fa-moon",
        id_:"moon",
        p:2,
    },
    {
        icon:"fas fa-meteor",
        id_:"comet",
        p:2,
    },
];
let countClick = 0;
function createCards(array){
    let template = "";
    // array  = array;
    // alert();
    array.sort(function() { return Math.random() - 0.5 });
    array.sort(function() { return Math.random() - 0.5 });
    // console.log(arr1)
    for(let i = 0; i < array.length; i++) {
        // const element = array[i];
        template += `
        <div id="${array[i].id_+""+array[i].p}" idSearch="${array[i].id_}" p="${array[i].p}" class="card">
            <div class="front">
                <i class="fas fa-question"></i>              
            </div>
            <div class="back">
            <!-- <i class="${array[i].icon}"></i> -->
                <span class="img_class" 
                style="background-image: url('assets/${array[i].id_}.svg');"
                ></span>
            </div>
        </div>
       `;
        
    }
    
        
    


    $('#idContainer').html(template);
    // console.log(template);

}

var objRemember = {};
let objGood = {};


var getFinal = false;
function setAlert(title,text,icon,obj){
    let result_ = result;
    let finalJere = getFinal;
    // let obj_ = Object.entries(obj).length === 0 ? {} : objRemember;
    
Swal.fire({
position: 'bottom-left',
title:title,
text: text,
icon: icon,
// showCancelButton: true,
confirmButtonColor: '#3085d6',
// cancelButtonColor: '#d33',
customClass: "customeSweet",
// confirmButtonText: 'Yes, delete it!',
allowOutsideClick: false
}).then((result) => {
if (result.isConfirmed) {

if(getFinal==true|| finalJere==true){
    console.warn("ss");
    getFinal = false;
    return false;
}

if(Object.entries(obj).length != 0){
    console.log(result_);
    if(result_==true){
        return false;
    }
    // console.log("HACER");
    // console.log(obj_);
    $(obj.first).toggleClass('flipped');
    $(obj.second).toggleClass('flipped');
}
if(boolSound==true)
{
    if(icon=="error"){
        sonidoBad.pause();
        sonidoBad.currentTime = 0;
    }else{
        sonidoGood.pause();
        sonidoGood.currentTime = 0;
    }
    
}
    
// console.log(obj);
}
})

}
const cargarSonido = function (fuente,type=null) {
const sonido = document.createElement("audio");
sonido.src = fuente;
sonido.setAttribute("preload", "auto");
sonido.setAttribute("controls", "none");
// muted="muted"
// sonido.setAttribute("allow","autoplay");
// sonido.setAttribute("muted","true");
if(type==true){
    sonido.setAttribute("loop","loop");    
    sonido.volume=0.3;
}
 

sonido.style.display = "none"; // <-- oculto
document.body.appendChild(sonido);
return sonido;
};

// El sonido que podemos reproducir o pausar
// let sonidoBad = cargarSonido("music/contactmic_1.mp3");
// let sonidoGood = cargarSonido("music/005084953_prev.mp3");
// let soundAmbient = cargarSonido("music/aves_16.mp3",true);
// let sonidoClick = cargarSonido("music/click.mp3");

let sonidoBad = cargarSonido("assets/incorrect.mp3");
let sonidoGood = cargarSonido("assets/correct.mp3");
let soundAmbient = cargarSonido("assets/background.mp3",true);
let sonidoClick = cargarSonido("assets/ticking.mp3");
let colorOpacity = "#66d9888a";
let countGood = 0;
init();
function init(){
    // getFinal = false;
$(function() {
// $('#idContainer').trigger('click');soundPlay
// document.getElementById('idContainer').click();
createCards(arrayCards);
$('.card').click(   function(){ 

    if($(this).attr("success")!=undefined){
        // alert("");
        return false;
    }

    if((this).id == objRemember.id+objRemember.p){
        $(this).toggleClass('flipped');
        objRemember = {};
        return false;
    }
    console.log(objRemember);

    $(this).toggleClass('flipped');

    let id = "";
    let p = "";
    let tamanio = Object.entries(objRemember).length;
    // console.log(Object.entries(objRemember).length);
    if( tamanio === 0 ){
        id = $(this).attr('idSearch');
        p = $(this).attr('p');

        objRemember = {id:id,p:p};

    } else{
        
        id = $(this).attr('idSearch');
        p = $(this).attr('p');
        if(objRemember.p != p && objRemember.id == id  ){

            // CUANDO ES BUENO

            let subId = `#${objRemember.id+""+objRemember.p}`;
            let anotherId = this;
            console.log(anotherId);
            $(subId).attr('success',"true");
            $(this).attr('success',"true");
// CSS
            $(subId).css('pointer-events',"none");
            $(subId + ".card .back").css("background",colorOpacity);

            $(this).css('pointer-events',"none");
            $("#"+anotherId.id + ".card .back").css("background",colorOpacity);

            objRemember = {};
            
            setAlert("Excelent","you did it","success",{});
            countGood++;

            if(countGood == 4){
                result = true;
                endGame("You did it","check",0);
                // sonidoClick.stop();
                
            }
            // if(boolSound==true)
            // {  
                 sonidoGood.play();
            // }
            // alert("GOOD");
        }else{
            // $(this).toggleClass('flipped');
            console.log(`#${objRemember.id+objRemember.p}`);
            let obj_ =  {first : `#${objRemember.id+""+objRemember.p}`, 
            second : "#"+(this).id };
            // $(`#${objRemember.id+""+objRemember.p}`).toggleClass('flipped');
            // $(this).toggleClass('flipped');
            setAlert("Oops...","sorry, but this is not a match","error",obj_);
            // ESTOS DOS
            // if(boolSound==true)
            // {
                sonidoBad.play();
            // }
            
            // $(`#${objRemember.id+""+objRemember.p}`).toggleClass('flipped');
            // $(this).toggleClass('flipped');
            objRemember = {};
        }   
    }
    
    
});
$(".logo_").animate({top: '0px'},500);
$(".btnVideogame").animate({bottom: '0px'},1000);


});

}
