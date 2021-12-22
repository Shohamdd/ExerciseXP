let input = document.getElementById("text")
input.addEventListener('keydown', logkey)

function logkey(e){
    console.log(e)
    if (e.keyCode < 64 || e.keyCode > 91){
        console.log(e.key)
    }
}
