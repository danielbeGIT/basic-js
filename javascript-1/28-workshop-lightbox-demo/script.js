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
 */

 const lightboxWrapperEl = document.querySelector('#lightbox-wrapper');
 const lightboxImgEl = document.querySelector('#lightbox-wrapper img');
 const lightboxCaptionEl = document.querySelector('#lightbox-wrapper .caption');
 
 /*
 // 1a. Get all `a.photo`, loop over them and add a
 // click-eventlistener to each element
 document.querySelectorAll('a.photo').forEach(link => {
     link.addEventListener('click', e => {
         // stop browser from following the link
         // (and hence leaving the page)
         e.preventDefault();
         // console.log("You clicked on:", e.target);
         // console.log("That elements parent is:", e.target.parentElement);
         // console.log("Parents href is:", e.target.parentElement.getAttribute('href'));
         // retrieve URL to large image from parent element's href-attribute
         const large_img_url = e.target.parentElement.getAttribute('href');
         // set URL to large image on lightbox's image-element's src
         lightboxImgEl.setAttribute('src', large_img_url);
         // finally, add class `show` to `#lightbox-wrapper`
         lightboxWrapperEl.classList.add('show');
     })
 });
 */
 
 // 1b. Get `.photos`-element and add a click-eventlistener to it
 document.querySelector('.photos').addEventListener('click', e => {
     // prevent default action for clicks
     e.preventDefault();
 
     // check if the element that was clicked on is a IMG
     if (e.target.tagName === "IMG") {
         // retrieve URL to large image from parent element's href-attribute
         const large_img_url = e.target.parentElement.getAttribute('href');
 
         // retrieve image caption from parent element
         const img_caption = e.target.parentElement.dataset.caption;
 
         // set URL to large image on lightbox's image-element's src
         lightboxImgEl.setAttribute('src', large_img_url);
 
         // set image caption on lightbox
         lightboxCaptionEl.innerText = img_caption;
 
         // finally, add class `show` to `#lightbox-wrapper`
         lightboxWrapperEl.classList.add('show');
     }
 });
 
 // Add click-eventlistener to `#lightbox-wrapper` and remove class `show`
 lightboxWrapperEl.addEventListener('click', () => {
     // remove class `show` from lightboxWrapperEl
     lightboxWrapperEl.classList.remove('show');
 
     // empty lightboxImg src-attribute
     lightboxImgEl.setAttribute('src', '');
 });