'use strict'
import { uploadParaCloudinary } from "./cloudinary"

function uploadImagem() { 
    const input = document.getElementById('preview-input')
    const linkPublico = uploadParaCloudinary(input.files[0])
}
function preview ({target}) { 
  document.getElementById('preview-image')
    .src = URL.createObjectURL(target.files[0]) 
  
}

document.getElementById('preview-input')
        .addEventListener('change', preview)

document.getElementById('salvar')

document.getElementById('salvar').addEventListener('click', upload)