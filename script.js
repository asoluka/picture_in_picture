const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    console.dir(videoElement);
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      videoElement.requestPictureInPicture();
    };
  } catch (e) {}
}

button.addEventListener("click", async () => {
  button.disabled = true;
  await selectMediaStream();
  button.disabled = false;
});
