const visualizadorImg = document.getElementById("visualizador-img");
const subirImagen = document.getElementById("subirImagen");

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dvi9x9ssf/image/upload`;
const CLOUDINARY_ID = "nri5jvre";

function cloudinary() {
    subirImagen.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_ID);

        // Envio hacia cloudinary
        const res = await axios.post(CLOUDINARY_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);
        visualizadorImg.src = res.data.secure_url;
    });
}

function validarExtension() {
    const subirImagen = document.getElementById("subirImagen").value;
    if (subirImagen != "") {
        var verificar = subirImagen.toLowerCase();
        if (!verificar.match(/(\.jpg|\.JPG)$/)) {
            swal("Error: El formato no es compatible.");
            document.getElementById("subirImagen").value = "";
        }
        cloudinary();
    }
}
