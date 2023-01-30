/**
 * XMLHttpRequest
 *
 */

const getJSON = (url, callback) => {
    // inser code here

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


// Get users
getJSON('https://jsonplaceholder.typicode.com/users', (err, data) => {
    if (err) {
        console.log("ERROR! DANGER WILL ROBINSON!")
        console.log("Error message:", err)
        return;
    }

    // console.log("got data?", data);

    data.forEach(user => {
        document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
    });
});

// Get posts
getJSON('https://jsonplaceholder.typicode.com/posts', (err, data) => {
    if (err) {
        console.log("ERROR! DANGER WILL ROBINSON!")
        console.log("Error message:", err)
        return;
    }

    // console.log("got data?", data);

    data.forEach(post => {
        document.querySelector('#posts').innerHTML += `<li>${post.title}</li>`;
    });
});

/*
// Get users (AGAIN)
getUsers( (err, data) => {
    if (err) {
        return;
    }

    data.forEach(user => {
        console.log(user.email)
    });
});
*/