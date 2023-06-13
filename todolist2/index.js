let addInput = document.getElementById('addInput');
let textInput = document.getElementById('textInput');
let clearInput = document.getElementById('clearInput');
let todoCont = document.getElementById('todoCont'); 

    addInput.addEventListener('click', function(e){
    e.preventDefault();  // tıklanınca sayfa yenılemesı kesme
    let paragraph = document.createElement('p'); // bir element oluşturma
    paragraph.classList.add('sonradan') // class ekleme 
    todoCont.appendChild(paragraph); //divin altına ekleme
    paragraph.innerHTML = textInput.value; // inputun içindeki veriyi yazdırma
    textInput.value = ""; // text içersi tıkladıktan sonra boşaltma

    clearInput.addEventListener('click', function(e){
        e.preventDefault();
        paragraph.remove();
    })

    paragraph.addEventListener('dblclick', function(){
        todoCont.removeChild(paragraph);   // kaldirma
    })

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration= "line-through";  //tek tıklamayla üzerine çizgi
    })

});



