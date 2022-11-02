console.log('Before fetching the image');
fetch('lake.jpg')
    .then(response => {
        console.log(response);
        return response.blob();
    })
    .then(blob => {
        console.log(blob);
        // error
        // document.getElementById('lakke').src = URL.createObjectURL(blob);
        document.getElementById('lake').src = URL.createObjectURL(blob);
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    });