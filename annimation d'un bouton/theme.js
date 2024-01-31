//  les parametres de la mode d'afficharge

const moonPath = "M51 78.5C51 121.854 82.5 157 82.5 157C36.9365 157 0 121.854 0 78.5C0 35.1456 36.9365 0 82.5 0C82.5 0 51 35.1456 51 78.5Z" ;
const sunPath = "M165 78.5C165 121.854 128.063 157 82.5 157C36.9365 157 0 121.854 0 78.5C0 35.1456 36.9365 0 82.5 0C128.063 0 165 35.1456 165 78.5Z" ;
const moonFill = "rgb(71, 53, 53)";
const sunFill = "#FFC90B";
const darkMode = document.querySelector('#darkMode');
var session = document.querySelector('sectiom');

let toggle = false;

// nous avons besoin de clicker sur le soleil pour air sur la luminosite ou le mode d'affichage

//  pour ce fait , on ajoute un gestionnaire d'evenement pour le clic

darkMode.addEventListener('click' , ()=>{

    //  a ce stade nous  utiliserons la librairie anime.js

    //  ici nous avont besoin de parametrer le TIMELINE  ou la chronologie

    const timeline = anime.timeline({
        duration : 750,
        easing : 'easeOutExpo'
    });

    //  ajout de differente animation a timeline

    timeline
    .add({
        targets : '.sun',
        d: toggle?[{value:sunPath}] : [{ value : moonPath}] ,
        fill: toggle? [{value:sunFill}] : [{value:moonFill}]
    })

    .add({
        targets: '#darkMode',
        rotate: toggle? -320 :320

    } ,'-=550')
   .add({
        targets:'header',
        backgroundColor:toggle? 'rgb(71, 53, 53)':' #fff',
        color:toggle? '#fff':' rgb(71, 53, 53)'
        
    }, '-=750')
    .add({
        targets:'header a',
        backgroundColor: toggle? 'rgb(71, 53, 53)':' #fff',
        color: toggle? '#fff':' rgb(71, 53, 53)'
        
    }, '-=750')
     .add({
        targets: 'section',
        backgroundColor: toggle? '#fff': 'rgb(71, 53, 53)',
        color: toggle? ' rgb(71, 53, 53)':'#fff'
    }, '-=750');

    // chaque fois que je clique sur le soleil je veux que le toggle change 

    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
    
});