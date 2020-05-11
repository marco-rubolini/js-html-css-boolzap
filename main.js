// intercetto il click dell'utente
$('.fa-microphone').click(function(){
    //leggo il testo inserito dall'utente
    var contentMessage = $('#content-message').val();

    // copio l'elemento template
    var message = $('.template-message .message.reply').clone();

    // inserisco il testo inserito nell'input dall'utente

    message.find('.text').text(contentMessage);

    // appendo il nuovo messaggio
    $('.conversation').append(message);



});


// Inserisco in una variabile il messaggio dell'utente
//
// copio il template
//
// trova l'elemento con la classe .text e aggiungi il messaggio utente
//
// inserisci all'interno della chat il template
