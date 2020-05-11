// intercetto il click dell'utente
$('.fa-microphone').on("click", inviaMessaggio);

$('#content-message').keypress(function(e){
    if (e.which == 13) {
        inviaMessaggio();
    }
});


function inviaMessaggio (){
    var contentMessage = $('#content-message').val();

    // copio l'elemento template
    var message = $('.template-message .message.reply').clone();

    // inserisco il testo inserito nell'input dall'utente

    message.find('.text').text(contentMessage);

    // appendo il nuovo messaggio
    $('.conversation').append(message);

    $("#content-message").val("");
};
