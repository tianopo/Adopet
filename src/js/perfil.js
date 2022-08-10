let inputFile = document.querySelector('#upfile');
let pictureImage = document.querySelector('.form--imagem');
let pictureImageTxt = 'Clique na foto para editar'

inputFile.addEventListener('change', function(e){
    const file = inputTarget.files[0];
    console.log(file)
    if (file){
        let reader = new FileReader();

        reader.addEventListener('load', function(e){
            let readerTarget = e.target;

            let img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('form--picture');

            pictureImage.appendChild(img);
        })

        reader.readAsDataURL(file);
    }else{
        pictureImage.innerHTML = pictureImageTxt
    }
})