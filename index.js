//Set globale variabelen
let clicks = 0;
let squarecolor = "";
let number = 1;

$(function(){
    //Functies die meteen worden uitgevoerd
    function Initialize() {
        for (let i = 0; i < 10; i++) {
            CreateRow();
        }
    }
    Initialize();

    // Bij klikken op een square de kleur veranderen
    $('.square')
        // Bij klikactie de functie TotalClicks uitvoeren
        .on('click', function(){
            TotalClicks();
        })
        // Bij mousedown de oorspronkelijke kleur opslaan en de weergave kleur veranderen in wit
        .on('mousedown', function(){
            squarecolor = $(this).css("background-color");
            $(this).css('background-color', 'white')
        })
        // Bij mouseup de oorspronkelijke kleur terug zetten
        .on('mouseup', function(){
            $(this).css('background-color', squarecolor)
        });
});

// Een nieuwe rij creëren
function CreateRow() {
    let squares ="";
    // 10 squares toevoegen aan een rij en aan iedere square een kleur meegeven
    for (let i = 0; i < 10; i++) {
        squares += '<div class="square" id='+ number +' style="background-color:'+SetColor()+'"></div>'
    }

    $('#playground').append('<div class="row">'+ squares +'</div>')
}

// Een random_rgb_waarde creëren van 50, 100, 150, 200 of 250
function RandomColor() {
    let random = Math.floor(Math.random() * 5) + 1;
    let random_rgb_waarde = random * 50;
    return (random_rgb_waarde);
}

// De random_rgb_waarde invullen zodat je rgb(x,y,z) krijgt
function SetColor() {
    let color = 'rgb( ' + RandomColor() +', ' + RandomColor() + ', ' + RandomColor() + ' )';
    return color;
}

// Aantal clicks tellen
function TotalClicks(){
    clicks ++;
    ReplaceContent('responseText', clicks + ' clicks')
}

// Content vervangen
function ReplaceContent( el_name, new_content ){
    let element = document.getElementById(el_name);
    element.innerHTML = new_content;
}



