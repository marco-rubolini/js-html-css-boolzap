// $(document).ready(function(){

// intercetto il click dell'utente ed eseguo la funzione invia messaggio
$('.fa-microphone').on("click", inviaMessaggio);


// intercetto il pulsante invio della tastiera
$('#content-message').keypress(function(event){
    // se si preme invio
    if (event.which == 13) {
        // eseguo la funzione invia messaggio
        inviaMessaggio();
    }
});
// intercetto il pulsante invio della tastiera
$('#text-search').keyup(function(){
    // // se si preme invio
    // if (event.which == 13) {
        // eseguo la funzione cerca contatto
        cercaContatto();

});

// Cerca nome contatto

// intercetto il click dell'utente sul pulsante ricerca ed eseguo la funzione cerca contatto

$('.search i').click(cercaContatto);


//Click sul contatto​ mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione

// intercetto il click sul contatto
$('.conversation-preview').click(function(){
    // rimuovo da tutte le conversazioni la classe active
    $('.conversation-preview').removeClass('active');

    // aggiungo la classe active alla conversazione cliccata
    $(this).addClass('active');
    // recupero il nome del contatto
    var nomeContatto = $(this).find('p').text();
    console.log(nomeContatto);
    // sostituisco il nome del contatto nella conversazione con il contatto dell'anteprima conversazione cliccato
    $('.info-contact .data-contact p').text(nomeContatto);
    // recupero la foto profilo del contatto
    var fotoContatto = $(this).find('img').attr('src');
    console.log('indirizzo foto contatto' + fotoContatto);
    // sostituisco la foto profilo in chat
    $('.info-contact .img-profile img').attr('src', fotoContatto);
    // nascondo tutte le chat attive
    $('.conversation').removeClass('visible');
    // visualizzo solo la chat corrispondente alla conversazione cliccata
    $('.conversation[data-contact-chat="' + nomeContatto +'"]').addClass('visible');
})


// menu dropdown sul messaggio inviato

$('.conversation').on('click', '.message.send i', function(){
    $(this).next('.dropdown').toggle();
    var visibile = $(this).hasClass('visible');
    if ( visible = true) {
        $(this).next('.dropdown').find('li').click(function(){
            $(this).parents('.message.send').remove();
        })
    }
})


// funzione invia messaggio utente

function inviaMessaggio (){
    // recupero il testo inserito dall'utente nella chat
    var contentMessage = $('#content-message').val();
    // se il testo inserito non è vuoto
    if (contentMessage.trim() != '') {
        // copio l'elemento template
        var message = $('.template-message .message.send').clone();

        // inserisco il testo inserito nell'input dall'utente

        message.find('.text').text(contentMessage);

        // appendo il nuovo messaggio
        $('.conversation.visible').append(message);
        // svuoto l'input dopo aver inviato il messaggio
        $("#content-message").val("");
        // Imposto una risposta automatica dopo 1 secondo
        setTimeout(risposta, 1000);
    };
};

//Funzione di risposta automatica del pc
function risposta (){
    // creo una variabile risposta con il testo ok
    var risposta = "ok";
    // copio l'elemento messaggio di risposta dal template
    var message = $('.template-message .message.reply').clone();
    // trovo l'elemento con la classe text e ci inserisco la risposta
    message.find('.text').text(risposta);
    // appendo la risposta
    $('.conversation.visible').append(message);
};


// Funzione cerca contatto

function cercaContatto (){
    // recupero il testo dell'utente
    var testoUtente = $('#text-search').val().trim().toLowerCase();
    // verifico se l'utente ha digitato qualcosa
    if (testoUtente != '') {
        // L'utente sta cercando un nome
        // per ogni elemento della lista verifico se il suo testo è uguale al testo inserito dell'utente
        $('.conversation-preview').each(function(){
            // recupero il nome dei contatti
            var contatti = $(this).find('.data-contact p').text().trim().toLowerCase();
            // se il testo inserito dall'utente è incluso nei nomi dei contatti
            if (contatti.includes(testoUtente)) {
                //visualizza la conversazione
                $(this).show();
            } else {
                //altrimenti nascondila
                $(this).hide();
            }
        })
    } else {
    // se l'utente non digita nulla visualizza tutte le conversazioni
        $('.conversation-preview').show();
    }
}


// });
