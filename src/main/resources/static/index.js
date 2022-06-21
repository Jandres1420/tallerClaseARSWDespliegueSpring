
function lectura(){
    let file = "/hellopost"

    fetch (file,{method:'POST'})
        .then(x => x.text())
        .then(y => document.getElementById("postrespmsg").innerHTML = y)
}