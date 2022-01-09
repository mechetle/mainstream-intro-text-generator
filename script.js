const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const topTextInput = document.querySelector("#topTextInput");

let image;

imageFileInput.addEventListener("change", (e) => {e.target.files[0]
  const imageDataUrl = URL.createObjectURL();

  image = new Image();
  image.src = imageDataUrl;

  //image.addEventListener(
  //  "load",
  //  () => {
  //    updateMemeCanvas(
  //      canvas,
  //      image,
  //      topTextInput.value,
  //      bottomTextInput.value
  //    );
  //  },
  //  { once: true }
  //);
                                                  
  updateCanvas(
        canvas,
        image,
        topTextInput.value,
  );
});

topTextInput.addEventListener("change", () => {
  updateCanvas(canvas, image, topTextInput.value);
});


function updateCanvas(canvas, image, topText) {
  const ctx = canvas.getContext("2d");
  
  // not used at the moment
  //const width = image.width;
  //const height = image.height;
  const width = 1080;
  const height = 1080;

  const fontSize = Math.floor(width / 4);
  const yOffset = height / 25;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  //ctx.drawImage(image, 0, 0);
  ctx.fillStyle = '#d7ccc8';
  ctx.fillRect(0, 0, width, height);

  // Prepare text
  ctx.strokeStyle = "#009688";
  ctx.lineWidth = 30;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `bold ${fontSize}px 'American Captain', sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  let topX = width / 2;
  let topY = height / 2 - fontSize / 2; 
  
  ctx.strokeText(topText, topX, topY);

  let alpha = 0;

  for (i = 0; i < 125; i++) {
    topY += 1.1;
    alpha += 0.008;
    ctx.strokeStyle = `rgba(0, 150, 136, ${1 - alpha})`;
    ctx.font = `bold ${fontSize - i}px 'American Captain', sans-serif`;
    ctx.strokeText(topText, topX, topY);
  }

  topY = height / 2 - fontSize / 2; 
  ctx.font = `bold ${fontSize}px 'American Captain', sans-serif`;
  ctx.fillText(topText, topX, topY);
}
