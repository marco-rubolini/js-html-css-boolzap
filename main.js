// intercetto il click dell'utente
$('.fa-microphone').on("click", inviaMessaggio);


$('.fa-smile').click(function(){
    rispostaPc();
})
// intercetto il pulsante invio della tastiera
$('#content-message').keypress(function(event){
    if (event.which == 13) {
        inviaMessaggio();
    }
});

// Cerca nome contatto

// intercetto il click dell'utente sul pulsante ricerca

$('.search').click(function(){
    alert('ciao');
});


// funzione invia messaggio utente

function inviaMessaggio (){
    var contentMessage = $('#content-message').val();

    if (contentMessage.trim() != '') {
        // copio l'elemento template
        var message = $('.template-message .message.send').clone();

        // inserisco il testo inserito nell'input dall'utente

        message.find('.text').text(contentMessage);

        // appendo il nuovo messaggio
        $('.conversation').append(message);

        $("#content-message").val("");

        setTimeout(risposta, 1000);
    };
};

//Funzione di risposta automatica del pc
function risposta (){
    var risposta = "ok";
    var message = $('.template-message .message.reply').clone();
    message.find('.text').text(risposta);
    $('.conversation').append(message);
};
