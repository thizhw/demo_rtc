// const video = document.getElementById('video');

// async function startVideoStream() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//             video: { facingMode: { ideal: 'environment' } }
//         });
//         video.srcObject = stream;
//     } catch (error) {
//         console.error('Error accessing media devices.', error);
//     }
// }


// startVideoStream();

// const video = document.getElementById('video');
// const captureButton = document.getElementById('capture');
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');

// async function startVideoStream() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//             video: { facingMode: { ideal: 'environment' } }
//         });
//         video.srcObject = stream;
//     } catch (error) {
//         console.error('Error accessing media devices.', error);
//     }
// }

// // Capture photo when the button is clicked
// captureButton.addEventListener('click', () => {
//     // Set canvas size to video size
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     // Draw current frame from video onto the canvas
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Optionally, you can convert canvas to an image URL
//     const photo = canvas.toDataURL('image/png');
//     console.log(photo); // Logs the base64 image URL for the captured photo
// });

// startVideoStream();

// const video = document.getElementById('video');
// const captureButton = document.getElementById('capture');
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// const capturedImagesContainer = document.getElementById('capturedImages');

// async function startVideoStream() {
//     try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//             video: { facingMode: { ideal: 'environment' } }
//         });
//         video.srcObject = stream;
//     } catch (error) {
//         console.error('Error accessing media devices.', error);
//     }
// }

// // Capture photo when the button is clicked
// captureButton.addEventListener('click', () => {
//     // Set canvas size to video size
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     // Draw current frame from video onto the canvas
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Convert canvas to an image URL (base64)
//     const photo = canvas.toDataURL('image/png');

//     // Create an image element and set the captured image as the source
//     const imgElement = document.createElement('img');
//     imgElement.src = photo;

//     // Append the image to the captured images container
//     capturedImagesContainer.appendChild(imgElement);
// });

// startVideoStream();

const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const capturedImagesContainer = document.getElementById('capturedImages');

const headings = [
    'Front On Number Plate',
    'Front Full View of Vehicle with Number Plate',
    'Front on Left 30 degrees',
    'Front on Left 45 degrees',
    'Front on Right 30 degrees',
    'Front on Right 45 degrees',
    'Front take upside of number plate',
    'Back On Number Plate',
    'Back Full View of Vehicle with Number Plate',
    'Back on Left 30 degrees',
    'Back on Left 45 degrees',
    'Back on Right 30 degrees',
    'Back on Right 45 degrees',
    'Back take upside of number plate',
    'Random Pic 1 (number plate should be visible)',
    'Random Pic 2 (number plate should be visible)'
];

let currentHeadingIndex = 0; // Track which heading to use

async function startVideoStream() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { ideal: 'environment' } }
        });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing media devices.', error);
    }
}

// Capture photo when the button is clicked
captureButton.addEventListener('click', () => {
    // Set canvas size to video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw current frame from video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to an image URL (base64)
    const photo = canvas.toDataURL('image/png');

    // Create a container for the image and heading
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('capturedImage');

    // Create the heading for the image
    const heading = document.createElement('h3');
    heading.innerText = headings[currentHeadingIndex];
    imageContainer.appendChild(heading);

    // Create an image element and set the captured image as the source
    const imgElement = document.createElement('img');
    imgElement.src = photo;
    imageContainer.appendChild(imgElement);

    // Append the image container to the captured images container
    capturedImagesContainer.appendChild(imageContainer);

    // Update heading index for the next image
    currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
});

startVideoStream();



