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

const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

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

    // Optionally, you can convert canvas to an image URL
    const photo = canvas.toDataURL('image/png');
    console.log(photo); // Logs the base64 image URL for the captured photo
});

startVideoStream();

