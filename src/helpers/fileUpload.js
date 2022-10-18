export const fileUpload = async( file ) => {
    // if(!file) throw new Error('File doest exist');
    if (!file) return null;

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dwnfybu2p/upload';

    const formData = new FormData();
    formData.append( 'upload_preset','samadhi-clases' );
    formData.append( 'file',file );

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });
        if( !resp.ok ) throw Error('No se pudo subir imagen')

        const cloudResp = await resp.json();
        return cloudResp.secure_url;
        
    } catch (error) {
        // console.log(error);
        // throw new Error( error.message );
        return null;
        
    }
}