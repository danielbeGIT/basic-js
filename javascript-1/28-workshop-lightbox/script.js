/**
 * Workshop: Lightbox
 *
 * Två möjliga tillvägagångssätt
 *
 * 1a. Hämta ut alla `a.photo`, loopa över dem och lägg till en
 * click-EventListener för varje element.
 *
 * 1b. Hämta ut `.photos`-elementet och lägg till en click-EventListener
 * på den. I EventListener:n, kolla om det som klickades på är
 * en IMG.
 *
 * 2. Hämta ut IMG's förälder (A-tagg) href och sätt på `#lightbox-wrapper img` src-attribut.
 *
 * 3. Lägg till klassen `show` på `#lightbox-wrapper`.
 *
 * 4. (Lägg till en click-EventListener på `#lightbox-wrapper` som tar bort `show`-klassen.)
 *
 * 5. 🌟 Om du kan fixa så man kan ha en caption på varje bild och den visas. Naturligtvis
 * via JavaScript, lägg inte till en caption i själva bildfilen :P.
 *
 * 
 */


// const photoLinksEl = document.querySelectorAll('a.photo');
// const lightboxImgEl = document.querySelector('#lightbox-wrapper img');
const rowPhotosEl = document.querySelector('.photos');
const lightboxEl = document.querySelector('#lightbox');
const lightwrapperEl = document.querySelector('#lightbox-wrapper');
const captionEl = document.querySelector('.caption');


rowPhotosEl.addEventListener ('click', e => {
    e.preventDefault();

    if (e.target.tagName === 'IMG') {
        const getUrl = e.target.parentElement.getAttribute('href')
        const getCaption = e.target.parentElement.getAttribute('title')
        // const getCaption = e.target.parentElement.dataset.caption;
        
        console.log(getUrl)

        lightboxEl.firstElementChild.setAttribute('src', getUrl);
        captionEl.innerText = getCaption;
        // captionEl.innerText = getCaption;

        lightwrapperEl.classList.add('show');

        // console.log(e.target.parentElement.getAttribute('href'));
        // console.log(e.target.parentElement.classList.contains('photo'));
        // console.log(lightwrapperEl)
    }
});


/*
photoLinksEl.forEach(photoLink => {
    photoLink.addEventListener('click', e => {
        e.preventDefault();

        const getUrl = e.target.parentElement.getAttribute('href')
        const getCaption = e.target.parentElement.getAttribute('title')
        
        console.log(getUrl)

        lightboxImgEl.setAttribute('src', getUrl);
        captionEl.innerHTML = getCaption;

        lightwrapperEl.classList.add('show');
    })
});
*/


lightwrapperEl.addEventListener ('click', e => {
    e.target.classList.remove('show');

    lightboxEl.firstElementChild.setAttribute('src', '');
});
