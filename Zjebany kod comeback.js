console.log("To nie dziala jakbym chcial i jak powinno. Wiem o tym. I kurwa gowno mnie to obchodzi. Nie obchodzi mnie ze pewnie polowa kodu jest zbedna. Jebcie sie na ryj");
API.chatLog("Zjebane autosloty z którymi jednak da sie wygrać  v1.0retarded. Agresywny console.log");
API.sendChat('!slot');
setInterval(function () {
    API.getWaitListPosition = function (id) {
        if (typeof id === 'undefined' || id === null) {
            id = API.getUser().id;
        }
        var wl = API.getWaitList();
        for (var i = 0; i < wl.length; i++) {
            if (wl[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    var dj = API.getDJ().id;
    var pos = API.getWaitListPosition(id);
    if (dj === chat.uid || pos == 0) {
        return void(0);
    } else {
        API.sendChat('!slot');
    }
}, 303000);
