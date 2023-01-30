/**
 * Async pets
 *
 */

const getJSON = (url, callback) => {
    // Create a new XML Http Request
    const request = new XMLHttpRequest();

    // Attach a event listener to the request
    request.addEventListener('readystatechange', () => {
        // Check if readyState is 4 (=== DONE)
        if (request.readyState === 4) {

            // Was request successful?
            if (request.status === 200) {
                // Request returned succcessful!
                console.log("Request was OK");

                // take a STRING and PARSE it into a JavaScript Object (Array)
                const data = JSON.parse(request.responseText);
                // console.log(data)

                callback(false, data);

            } else {
                // Something went wrong with the request
                console.log("Request was NOT OK");

                callback("Something went wrong");
            }
            
        }
    });

    // Set request to GET data from url
    request.open('GET', url);

    // Send request
    request.send();

    // Done?
    console.log("Request Sent!");

}

// Get list of pet species
getJSON('data/cats.json', (err, cats) => {
    if (err) {
        console.log("Could not get list of cats! Error was:", err);
        return;
    }

    console.log("Got list of pet species:", cats)

    // Get list of dogs
    getJSON('data/dogs.json', (err, dogs) => {

        // Get list of birds
        getJSON('data/birds.json', (err, birds) => {

            // WE DONE?
        });
    });
});