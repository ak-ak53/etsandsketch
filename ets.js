
const mainn=document.createElement("div")
mainn.id="container"
document.body.appendChild(mainn)




for(let i=0;i<16;i++){
    const child=document.createElement("div")
mainn.appendChild(child)

}

console.log(document.documentElement.outerHTML);  // This will print the entire HTML markup of the page.
