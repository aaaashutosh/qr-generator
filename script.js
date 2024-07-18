// script.js

const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
        color: "#000000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff"
    }
});

function generateQRCode() {
    const link = document.getElementById('linkInput').value;
    const imageInput = document.getElementById('imageInput');
    const qrCodeDiv = document.getElementById('qrcode');
    
    if (link) {
        qrCode.update({
            data: link,
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 20
            }
        });
    } else if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            qrCode.update({
                data: e.target.result,
                imageOptions: {
                    crossOrigin: "anonymous",
                    margin: 20
                }
            });
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert('Please enter a URL or select an image.');
        return;
    }

    qrCode.append(qrCodeDiv);
}
