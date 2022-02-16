const visualizadorImg = document.getElementById("visualizador-img");
const subirImagen = document.getElementById("subirImagen");

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dvi9x9ssf/image/upload`;
const CLOUDINARY_ID = "nri5jvre";

function cloudinary() {
    //Capturamos el evento 
    subirImagen.addEventListener("change", async (e) => {

        const archivo = e.target.files[0];
        const formData = new FormData();

        formData.append("file", archivo);
        formData.append("upload_preset", CLOUDINARY_ID);
        
        // Envio hacia cloudinary
        var res = await axios.post(CLOUDINARY_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);
        visualizadorImg.src = res.data.secure_url;
    });
}

//Funcion que valida el formato de la extension 
function validarExtension() {
    const cargarImagen = document.getElementById("subirImagen").value;
    if (cargarImagen != "") {
        var verificar = cargarImagen.toLowerCase();
        if (!verificar.match(/(\.jpg|\.JPG)$/)) {
            swal("Error: El formato no es compatible.");
        }
        cloudinary();
    }
}