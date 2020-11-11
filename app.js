window.onload = function() {
    var sButton = document.getElementById("btn");
    sButton.addEventListener('click', function(e) {
        e.preventDefault();
    var requester = new XMLHttpRequest();

    var url = "http://localhost/info2180-lab4/superheores.php#";
    requester.onreadystatechange = superHero;

    function superHero() {
    if (requester.readyState == XMLrequester.DONE){
        if (requester.status == 200) {
            var reply = requester.replyText;
            var result = document.querySelector('#result');
            result.innerHTML = reply;
        }
        else{
            alert("Please check, error occured");
        }

    requester.open("GET", url);
    requester.send();    
    }
    }
});
}
/* It doesn't work */
