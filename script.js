function displayText() {
    // Ambil nilai dari input teks
    const textInput = document.getElementById('textInput').value;
    
    // Tampilkan nilai di area tampilan
    const displayArea = document.getElementById('displayArea');
    displayArea.textContent = textInput;
  }
  