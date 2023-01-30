/**
 * Fetch
 *
 */

/*
fetch('data/dogs.json')
    .then(res => res.json())
    .then (data => {
        console.log("Got data", data)
    })
    .catch(err => {
        console.warn("Dogs rejected", err)
    });
*/


fetch('data/dogss.json')
    .then(res => {
        // trigger an error
        if (!res.ok) {
            throw new Error("Response was not OK"); // Throw an exception
        }

        return res.json()
    })
    .then (data => {
        console.log("Got data", data)
    })
    .catch(err => {
        console.warn("Dogs rejected", err) // type of error and error message
        console.log("Error name:", err.name) // type of error only
        console.log("Error message:", err.message) // error message only

        /*
        // Way to use example
        if (err.name === "Error") {
            // do something generit
        } else if (err.name === "NotFoundError") {
            // do something else
        } else if (err.name === "ServerError") {
            // try again in 30 seconds
        }
        */
    });