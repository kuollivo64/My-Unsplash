import { svc_unsplash } from "../api/svc-unsplash"

export const postUnsplash = async ( dataForm ) => {
    const res = await svc_unsplash.post('unsplash', dataForm);
    return res.data;
}

export const getUnsplash = async () => {
    const res = await svc_unsplash.get('unsplash');
    return res.data.unsplash
}

export const searchUnsplash = async ( title ) => {
    const res = await svc_unsplash.get(`unsplash/search?title=${title}`);
    return res.data.unsplash
}

export const deleteUnsplash = async (cod_unsplash) => {
    const res = await svc_unsplash.delete(`unsplash/${cod_unsplash}`);
    return res
}

