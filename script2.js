console.log('Before fetching the image using async await');

catchLake()
    .then(response => {
        console.log('yay! It worked.');
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    });

async function catchLake(){
    const response = await fetch('lake.jpg');
    const blob = await response.blob();
    document.getElementById('lake').src = URL.createObjectURL(blob);
}


// fetch('lake.jpg')
//     .then(response => {
//         console.log(response);
//         return response.blob();
//     })
//     .then(blob => {
//         console.log(blob);
//         // error
//         // document.getElementById('lakke').src = URL.createObjectURL(blob);
//         document.getElementById('lake').src = URL.createObjectURL(blob);
//     })
//     .catch(error => {
//         console.log('error!');
//         console.error(error);
//     });