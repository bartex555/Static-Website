

const played = localStorage.getItem("playedSecret")

if (played == null){
    addSecretSection()
    let player = document.getElementById('video')
    player.addEventListener('ended',nukeSecretSection,false);
}

function addSecretSection(){
    let sect = document.createElement('section')
    sect.setAttribute('id','secretSection')
    sect.innerHTML = `
        <h1 style="font-family: 'Noto Sans';">???</h1>
        <div class="gallery container">
          <img src="Images/Base/img21.webp" alt="Village0" />
          <video controls id="video">
            <source src="Images/Base/maybeFinal.mp4" type="video/mp4">
            Something went wrong
          </video>
          <img src="Images/Base/img22.webp" alt="Village2" />
        </div>
    `
    document.getElementById('gallery').appendChild(sect)
}

function nukeSecretSection(){
    let sect = document.getElementById('secretSection')
    sect.remove();
    localStorage.setItem("playedSecret","true")
}