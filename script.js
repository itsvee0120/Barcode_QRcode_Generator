let imgBox = document.querySelector(".imgBox"); // Use querySelector to get the imgBox class
let barcodeImg = document.getElementById("barcodeImg");
let qrCodeImg = document.getElementById("qrCodeImg");
let barcodeText = document.getElementById("barcodeText");
let downloadBarcodeBtn = document.getElementById("downloadBarcodeBtn");
let downloadQRCodeBtn = document.getElementById("downloadQRCodeBtn");

function generateBarcode() {
  if (barcodeText.value.length > 0) {
    let inputData = barcodeText.value;
    let barcodeApiUrl = `https://barcodeapi.org/api/128/${encodeURIComponent(
      inputData
    )}`;

    barcodeImg.src = barcodeApiUrl;
    qrCodeImg.src = ""; // Clear QR code
    imgBox.style.display = "flex"; // Show the image box
    downloadBarcodeBtn.style.display = "inline"; // Show barcode download
    downloadQRCodeBtn.style.display = "none"; // Hide QR download
  } else {
    barcodeText.classList.add("error");
    setTimeout(() => {
      barcodeText.classList.remove("error");
    }, 1000);
  }
}

function generateQRCode() {
  if (barcodeText.value.length > 0) {
    let inputData = barcodeText.value;
    let qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      inputData
    )}&size=150x150`;
    qrCodeImg.src = qrCodeApiUrl;
    barcodeImg.src = ""; // Clear barcode
    imgBox.style.display = "flex"; // Show the image box
    downloadQRCodeBtn.style.display = "inline"; // Show QR download
    downloadBarcodeBtn.style.display = "none"; // Hide barcode download
  } else {
    barcodeText.classList.add("error");
    setTimeout(() => {
      barcodeText.classList.remove("error");
    }, 1000);
  }
}

function downloadBarcode() {
  let barcodeSrc = barcodeImg.src;

  if (!barcodeSrc) {
    console.error("No barcode image source found.");
    return;
  }

  fetch(barcodeSrc)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);

      let anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = "generated_barcode.png";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      window.URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => console.error("Error downloading barcode image:", error));
}

function downloadQRCode() {
  downloadImage(qrCodeImg.src, "generated_qr_code.png");
}

function downloadImage(imageSrc, filename) {
  if (!imageSrc) {
    console.error("No image source found.");
    return;
  }

  fetch(imageSrc)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);

      let anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = filename;

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      window.URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => console.error("Error downloading image:", error));
}

function resetFields() {
  barcodeText.value = "";
  imgBox.style.display = "none";
  barcodeImg.src = "";
  qrCodeImg.src = "";
  downloadBarcodeBtn.style.display = "none";
  downloadQRCodeBtn.style.display = "none";
}
