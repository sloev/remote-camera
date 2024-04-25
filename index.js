import { joinRoom } from "trystero";


function getBlobFromMediaStream(stream) {

    if ('ImageCapture' in window) {
  
      const videoTrack = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(videoTrack);
      return imageCapture.takePhoto();
      
    } else {
  
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
  
      video.srcObject = stream;
  
      return new Promise((resolve, reject) => {
        video.addEventListener('loadeddata', async () => {
          const { videoWidth, videoHeight } = video;
          canvas.width = videoWidth;
          canvas.height = videoHeight;
  
          try {
            await video.play();
            context.drawImage(video, 0, 0, videoWidth, videoHeight);
            canvas.toBlob(resolve, 'image/jpg');
          } catch (error) {
            reject(error);
          }
        });
      });
  
    }
    
  }

  
let room,
  sendPic,
  getPic,
  sendCameraSettings,
  getCameraSettings,
  setZoom,
  getZoom,
  takePictureEvent,
  getTakePictureEvent;

const settings = {
  roomId: null,
  isCamera: false,
};

function serialize(data) {
  return encodeURIComponent(JSON.stringify(data)); // use something better
}

// helper function to turn a string back into an object
// note: this is dumb and easy and not a good idea, just an example
function deserialize(string) {
  console.log("s", string);
  try {
    return JSON.parse(decodeURIComponent(string)); // use something better
  } catch (err) {
    // lol the URL was shit probably
    console.error("derp!", err);
    return undefined;
  }
}

// every time the user does something, save the new state to the URL
function save_new_state() {
  // a temp data object to serialize
  // serialize the data and save behind the url's #
  window.location.hash = serialize(settings);
  // show the current url in a readonly text field
}

// every time the page loads, see if some state came with it
async function load_state() {
  room ? room.leave() : null;
  room = null;

  // will hold data if there is any
  var data;
  // get the current url hash (behind the #)
  var url_hash = window.location.hash.substring(1);
  console.log("hash on page load is", url_hash); // debug in dev
  // check for and apply state if any is present
  if (url_hash !== undefined && url_hash !== "") {
    console.log("whoa"); // we found shit
    // try turning the hash string into data
    data = deserialize(url_hash);
    console.log("got data:", data);
    if (data === undefined) {
      return; // nope, nothing here
    }
    // do we see what we'd expect?
    if (data.roomId !== undefined) {
      settings.roomId = data.roomId;
      roomIdInput.value = settings.roomId;
      room = joinRoom({ appId: "lolcat" }, roomId);
      [sendPic, getPic] = room.makeAction("pic");
      [setZoom, getZoom] = room.makeAction("zoom");
      [takePictureEvent, getTakePictureEvent] = room.makeAction("takepic");
      [sendCameraSettings, getCameraSettings] = room.makeAction("settings");
      console.log(room);
    }
    if (data.isCamera !== undefined) {
      settings.isCamera = data.isCamera;
      isCameraInput.checked = settings.isCamera;
    }
    if (settings.isCamera) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: true,
          facingMode: {
            exact: 'environment'
          }
        })
        .then((selfStream) => {
          const [track] = selfStream.getVideoTracks();
          const capabilities = track.getCapabilities();
          const settings = track.getSettings();
          if (!("zoom" in settings)) {
          } else {
            sendCameraSettings({
              min: capabilities.zoom.min,
              max: capabilities.zoom.max,
              step: capabilities.zoom.step,
              value: settings.zoom,
            });
            getZoom((data, peerId) => {
              console.log("got zoom level", data);
              track.applyConstraints({ advanced: [{ zoom: data.zoomLevel }] });
            });
          }

          getTakePictureEvent(() => {
            getBlobFromMediaStream(selfStream).then(blob=>{sendPic(blob)})
            
          });

          room.addStream(selfStream);
          room.onPeerJoin((peerId) => room.addStream(selfStream, peerId));
        });
    } else {
        getCameraSettings((data, peerId)=>{
            zoomInput.min = data.min
            zoomInput.max=data.max
            zoomInput.step = data.step
            zoomInput.value = data.value
        })
      getPic((data, peerID) => {
        const fileUrl = window.URL.createObjectURL(new Blob([data]));
        const anchorElement = document.createElement("a");

        anchorElement.href = fileUrl;
        anchorElement.download = "img.jpg";
        anchorElement.style.display = "none";

        document.body.appendChild(anchorElement);

        anchorElement.click();
        anchorElement.remove();

        window.URL.revokeObjectURL(fileUrl);
      });
      room.onPeerStream((stream, peerId) => {
        console.log("got video from peer:", peerId);

        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      });
    }
  }
  // update the url text field for dummies
}

const takePicture = () => {
  console.log("take picture");
  takePictureEvent({})
};
const changeZoom = (e) => {
  var zoomLevel = e.target.value;

  console.log("change zoom", zoomLevel);
  setZoom({ zoomLevel: zoomLevel });
};
var form = document.getElementById("form");
var zoomInput = document.getElementById("zoom");
var shootInput = document.getElementById("shoot");
zoomInput.onchange = changeZoom;
shootInput.onclick = takePicture;

var roomIdInput = document.getElementById("roomId");
var isCameraInput = document.getElementById("isCamera");
const video = document.getElementById("camera");

form.onsubmit = function (event) {
  event.preventDefault();
  var formdata = new FormData(form);
  var data = Object.fromEntries(formdata);
  settings.roomId = data.roomId;
  settings.isCamera = data.isCamera ? true : false;
  console.log(settings, data);
  save_new_state();
  location.reload();

  return false;
};

load_state();
