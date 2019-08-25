function chat() {
    var message = document.getElementById('message').value;
    if (message != '') {
        sendMessage(message);
        response(message);
    }
}

function sendMessage(message) {
    //add message to chatbox
    document.getElementById('chatbox').innerHTML += '<div class="userMessage">' + message + '</div>';
    //clear message input 
    document.getElementById('message').value = '';

}

function response(message) {
    var reply = getReply(message);
    document.getElementById('chatbox').innerHTML += '<div class="botMessage">' + reply + '</div>';
}

function getReply(message) {
    message = message.toLowerCase();
    if(message.includes('hi') || message.includes('hello'))
        return 'hi';
    else if (message.includes('jisoo') && message.includes('show')) {
        return '<img class="chatimage" src="https://media.giphy.com/media/l2YWryIjnAZyj7Cms/giphy.gif"/>';
    }
    else 
        return 'wubbalubbadubdub';
}