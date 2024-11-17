function generateQRCode(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the URL from the input field
    const websiteURL = document.getElementById('websiteURL').value.trim();

    // Validate input
    if (!websiteURL) {
        alert('Please enter a URL.');
        return;
    }

    // Clear any existing QR Code
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = '';

    // Generate the QR Code
    new QRCode(qrCodeContainer, {
        text: websiteURL,
        width: 200,
        height: 200,
        colorDark: "#010101", // Green color for QR code
        colorLight: "#ffffff", // White background
        correctLevel: QRCode.CorrectLevel.H
    });
}
