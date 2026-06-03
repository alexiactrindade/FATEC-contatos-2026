'use strict'

import { uploadParaCloudinary } from './cloudinary.js'

export async function uploadImagem(inputFoto) {

    const linkImagem =
        await uploadParaCloudinary(inputFoto.files[0])

    return linkImagem
}

export function ativarPreview(
    inputFoto,
    previewImagem
) {

    inputFoto.addEventListener(
        'change',
        ({ target }) => {

            if (target.files.length > 0) {

                previewImagem.src =
                    URL.createObjectURL(target.files[0])
            }
        }
    )
}