$(document).ready(function() {
    // på enklare set komma till Objects; events/lättare comando ,men klara inte allt
    // React & jquery--- går inte ihop/jq-på väg bort - gammal
    //$('div')-- motsvarar----- document.getElementsByTagName / .getElementById / .getElementsByClassName
    /*
    //________innerText  --lägga text(i prioritet)
    $('div').text('Detta är texten jag vill lägga in via div')//object taget
    $('#div-id').text('Detta är texten jag vill lägga in via id')//.getElementById
    $('.div-class').text('Detta är texten jag vill lägga in via class')//.getElementsByClassName

    // _______innerHTML
    $('div').html('<h3>Detta är texten jag vill lägga in via div</h3>')
    $('#div-id').html('<h3>Detta är texten jag vill lägga in via id</h3>')
    $('.div-class').html('<h3>Detta är texten jag vill lägga in via class</h3>')
    // ________style
    $('#div-id').css('color', 'red') //text är red
    // ________classList
    //i html <style> .text-blue//metod add class name to element
    $('#div-id').addClass('text-blue')
    $('#div-id').removeClass('text-blue')

    // ____________addEventListener
     $('#btnClick').click(() => {
       //  $('#div-id').hide()//
        $('#div-id').toggle()  //hide<->show
    })

    $('#input-id').keyup((e) => {
      //  console.log(e)
        console.log(e.target.value)
    })
    
    */
   //___________ fade() ---forsvinner slowly
    /* 
         $("button").click(function(){
               $("#div1").fadeIn();
               $("#div2").fadeIn("slow");
               $("#div3").fadeIn(3000);
           }); */
    
    //_____________slide()
    
        $("#flip").click(function(){
          $("#panel").slideDown("slow");
          $("#panel").delay(5000);
          $("#panel").slideUp("slow");
        });
      



    //=================================================================
    //__________ validering med jquery
   /*  $('#regform').submit((e) => {
        e.preventDefault()//hindra att skicka vidare 
        console.log(e)
    })    */
    
    $('#regform').submit((e) => {
        e.preventDefault()
        //copy from js
        let errors = []

        for (let element of e.target.elements) {
            switch(element.tagName) {
                case 'INPUT': 
                    errors.push(validateInput(element))
                    break;
                case 'SELECT': 
                    errors.push(validateSelect(element))
                    break;
            }
        }
    
        if(!errors.includes(true))
            window.location.replace("success.php");
    })
})

//----- vanlig JS f. ----ligger utanför JQ
function validateInput(element) {

    if(element.required) {
        if(element.value.length < 3)  {
            console.log('fältet uppfyller inte kravet på 3 tecken')
            return true
        }
    }
    return false
}

const validateSelect = (element) => {
    if(element.required) {
        if(element.value === '') {
            console.log('Du måste ange en stad')
            return true
        }  
    }
    return false
}

