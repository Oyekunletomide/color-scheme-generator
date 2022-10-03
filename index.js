const seed = document.getElementById("seed-color")
const btn = document.getElementById("btn")
const colorsContainer = document.getElementById('colors-container')
const hexContainer = document.getElementById('hex-container')

// button event
    btn.addEventListener("click", function(){
        const colorCon = document.getElementById('color-con').value
        let seeds = seed.value.slice(1)
        const para = document.getElementById('para')
    fetch(`https://www.thecolorapi.com/scheme?hex=${seeds}&mode=${colorCon}&count=5`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
	    .then(response => response.json())
	    .then(data => {
        
       let colorsHtml = ''
       let hexHtml = ''
        for (let color of data.colors){
            
            colorsHtml += `
            <div class="color-div" style="background-color: ${color.hex.value}"></div>
            `
                hexHtml += `
            <div class="hex-div">
                ${color.hex.value}
            </div>
            `  
        }
        colorsContainer.innerHTML = colorsHtml
        hexContainer.innerHTML = hexHtml
        })
      
      setTimeout(function(){
          para.innerHTML = "Click on the codes to copy to your clipboard"
      }, 3000)
             
    })
    // copy codes
    
function CopyToClipboard(id) {
let r = document.createRange();
r.selectNode(document.getElementById('hex-container'));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
alert(" copied")
}
      
    
    