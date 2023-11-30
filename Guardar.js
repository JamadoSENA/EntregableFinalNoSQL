function guardar(){

    db.collection("aprendices").add({
        ApellidoAcudiente: document.getElementById("ApellidoAcu").value,
        ApellidoAprendiz: document.getElementById("ApellidoApre").value,
        Barrio: document.getElementById("Barrio").value,
        Colegio: document.getElementById("Colegio").value,
        CorreoElectronico: document.getElementById("Correo").value,
        Departamento: document.getElementById("Departamento").value,
        DireccionResidencia: document.getElementById("Direccion").value,
        Edad: document.getElementById("Edad").value,
        FechaNacimiento: document.getElementById("FechaNacimiento").value,
        Jornada: document.getElementById("Jornada").value,
        Municipio: document.getElementById("Municipio").value,
        NombreAcudiente: document.getElementById("NombreAcu").value,
        NombreAprendiz: document.getElementById("NombreApre").value,
        NumeroDocumento: document.getElementById("Documento").value,
        NumeroTelefono: document.getElementById("Telefono").value,
        Otro: document.getElementById("Otro").value,
        Parentesco: document.getElementById("Parentesco").value,
        Programa: document.getElementById("Programa").value,
        TipoDocumento: document.getElementById("TipoDocumento").value
        })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
       
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
}