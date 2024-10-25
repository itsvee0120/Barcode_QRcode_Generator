
# Simple Barcode/QR Code Generator

A web application that allows users to generate and download barcodes and QR codes from any input data or URL. This project uses APIs for barcode and QR code generation, along with HTML, CSS, and JavaScript to create an interactive user interface.

## Features

- **Input Field**: Users can enter text or a URL to generate a barcode or QR code.
- **Generate Buttons**: Generate Barcode and QR Code buttons trigger the creation of respective codes.
- **Download Options**: Users can download the generated barcode or QR code as PNG images.
- **Reset Functionality**: Clear the input and hide generated images and download options.

## Getting Started

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Safari)
- Internet connection for accessing external APIs

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/itsvee0120/Barcode_QRcode_Generator
   ```

2. **Open `index.html` in your browser.**

### Usage

1. **Input Data**: Enter the text or URL you want to encode in the input field.
2. **Generate**: Click the "Generate Barcode" or "Generate QR Code" button to create the respective code.
3. **Download**: After generation, click the "Download Barcode" or "Download QR Code" button to save the image.
4. **Reset**: Click the "Reset" button to clear the input and images.

### APIs Used

- **Barcode Generation**: 
  - **API**: [OrcaScan API](https://barcode.orcascan.com)
  - **Description**: This API generates barcode images in various formats. The application uses the Code 128 format for barcodes, allowing you to encode a wide range of data.

- **QR Code Generation**: 
  - **API**: [QRServer API](https://goqr.me/api/)
  - **Description**: This API generates QR code images based on the provided data. It supports different sizes and can encode URLs, text, or any other information.

### Technologies Used

- HTML
- CSS
- JavaScript
- Font Awesome for icons

## Demo
 [Live Demo](https://itsvee0120.github.io/Barcode_QRcode_Generator/)



https://github.com/user-attachments/assets/658b6b65-525d-4f85-b9a2-67a7e50e440e



## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Made with ❤️ by [Violet Nguyen](https://linkedin.com/in/violetnguyen0120/)  
GitHub: [itsvee0120](https://github.com/itsvee0120)

