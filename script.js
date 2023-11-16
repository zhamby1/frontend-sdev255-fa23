//we are going to make an event listener.. it will trigger with the DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`
    }
    
    document.querySelector("#addedsong").innerHTML = html

})