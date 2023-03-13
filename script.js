// create lightbox element with id 'lightbox'
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'

// add lightbox div to html document
document.body.appendChild(lightbox)

// select all images
const images = document.querySelectorAll('img')

// loop through all images
images.forEach(image => {
    // when clicked on an image
    image.addEventListener('click', e => {
        // add 'active' class to lightbox
        lightbox.classList.add('active')
        
        // create new image element
        const img = document.createElement('img')
        // takes src form the clicked image
        img.src = image.src
        // removes the first element in the lightbox div if there is one
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        // places the image element in the lightbox div
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    // if clicked on anything other than the lightbox (the image) don't do anything
    if (e.target !== e.currentTarget) return
    // remove 'active' class
    lightbox.classList.remove('active')
})