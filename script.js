const video = document.getElementById('video');

async function startVideoStream() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { exact: 'environment' } } // Accesses the back camera
        });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing media devices.', error);
    }
}


startVideoStream();
