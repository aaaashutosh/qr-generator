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

function showWiFiForm() {
    document.getElementById('wifiForm').style.display = 'block';
    document.getElementById('urlForm').style.display = 'none';
}

function showURLForm() {
    document.getElementById('urlForm').style.display = 'block';
    document.getElementById('wifiForm').style.display = 'none';
}

function generateWiFiQRCode() {
    const ssid = document.getElementById('wifiSSID').value.trim();
    const password = document.getElementById('wifiPassword').value.trim();
    if (!ssid) {
        alert("Please enter a WiFi SSID.");
        return;
    }

    const wifiData = `WIFI:T:WPA;S:${ssid};P:${password};;`;
    generateQRCode(wifiData);
}

function generateURLQRCode() {
    const link = document.getElementById('linkInput').value.trim();
    if (!link) {
        alert("Please enter a valid URL.");
        return;
    }

    generateQRCode(link);
}

function generateQRCode(data) {
    const qrCodeDiv = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');

    qrCode.update({ data });
    qrCodeDiv.innerHTML = ""; // Clear previous QR code
    qrCode.append(qrCodeDiv);

    downloadBtn.style.display = 'block';
}

function downloadQRCode() {
    qrCode.download({ name: "qr_code", extension: "png" });
}
