const video = document.getElementById('video');

async function startVideoStream() {
    try {
        // Get access to the camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;

        // Here you can add the WebRTC connection setup to send the stream
        // For example, using RTCPeerConnection to connect to a remote peer
    } catch (error) {
        console.error('Error accessing media devices.', error);
    }
}

startVideoStream();
