// script.js
// Função para visualizar a imagem selecionada
function previewImage() {
  var reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById('preview').src = e.target.result;
  };
  reader.readAsDataURL(document.getElementById('file-input').files[0]);
}
