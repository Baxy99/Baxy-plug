console.log("To nie dziala jakbym chcial i jak powinno. Wiem o tym. I kurwa gowno mnie to obchodzi. Nie obchodzi mnie ze pewnie polowa kodu jest zbedna. Jebcie sie na ryj");
API.chatLog("Zjebane autosloty z którymi jednak da sie wygrać  v1.0retarded. Agresywny console.log");
API.sendChat('!slot');
setInterval(function () {
    var dj = API.getDJ().id;
    var pos = API.getWaitListPosition(user.id);
    if (dj === chat.uid || pos == 0) {
        return void(0);
    } else {
        API.sendChat('!slot');
    }
}, 303000);
