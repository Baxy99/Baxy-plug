console.log("Wiem że to i tak slotuje jak pojebane i nie patrzy czy jestes djem lub czy jestes pierwszy. Wiem ze jest zjebane.");
API.chatLog("Zjebane autosloty z którymi jednak da sie wygrać, ale slotuje jak pojebane");
API.sendChat('!slot');
setInterval(function () {
    var dj = API.getDJ().id;
    var pos = API.getWaitListPosition().id;
    // pewnie to cale zjebane jest 
    if (dj === chat.uid || pos == 0) {
        return void(0);
    } else {
        API.sendChat('!slot');
    }
}, 303000);
