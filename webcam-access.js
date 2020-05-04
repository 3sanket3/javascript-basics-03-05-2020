var video = document.getElementById("video");
var capturePhoto = document.getElementById("capturePhoto");
var canvas = document.getElementById("canvas");
var photo = document.getElementById("photo");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then(function (stream) {
    video.srcObject = stream;
    video.play();
  })
  .catch(function (e) {
    console.log(e);
    console.log("There is an error");
  });

capturePhoto.addEventListener(
  "click",
  function () {
    var context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 200, 100);
    var imageData = canvas.toDataURL("image/png");
    photo.setAttribute("src", imageData);
  },
  false
);
