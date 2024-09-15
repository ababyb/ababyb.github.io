document.addEventListener("DOMContentLoaded", ()  => {

    const images = document.querySelectorAll ("img");

    for (const image of images){
        fetch("https://images.unsplash.com/photo-1502174832274-bc176e52765a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D")
        .then(response  => response.json())
        .then (data  => {
            image.src = data.message
            image.width = 50;
            image.height = 30;
        })
    }

for (const image of images){
    fetch("https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww")
    .then(response  => response.json())
    .then (data  => {
        image.src = data.message
        image.width = 50;
        image.height = 30;
    })
}
})
