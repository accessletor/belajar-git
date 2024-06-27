function displayText() {
  // Ambil nilai dari input teks
  const textInput = document.getElementById('textInput').value;
  
  // Tampilkan nilai di area tampilan
  const displayArea = document.getElementById('displayArea');
  displayArea.textContent = textInput;
  
  // Atur warna teks displayArea menjadi merah
  displayArea.style.color = "red";
  
  // Atur teks displayArea menjadi tebal (bold)
  displayArea.style.fontWeight = "bold";
}
