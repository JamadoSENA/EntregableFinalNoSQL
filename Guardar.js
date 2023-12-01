function guardar() {
    // Validación de campos obligatorios
    const ApellidoAcudiente = document.getElementById("ApellidoAcu").value;
    const ApellidoAprendiz = document.getElementById("ApellidoApre").value;
    const Barrio = document.getElementById("Barrio").value;
    const Colegio = document.getElementById("Colegio").value;
    const CorreoElectronico = document.getElementById("Correo").value;
    const Departamento = document.getElementById("Departamento").value;
    const DireccionResidencia = document.getElementById("Direccion").value;
    const Edad = document.getElementById("Edad").value;
    const FechaNacimiento = document.getElementById("FechaNacimiento").value;
    const Jornada = document.getElementById("Jornada").value;
    const Municipio = document.getElementById("Municipio").value;
    const NombreAcudiente = document.getElementById("NombreAcu").value;
    const NombreAprendiz = document.getElementById("NombreApre").value;
    const NumeroDocumento = document.getElementById("Documento").value;
    const NumeroTelefono = document.getElementById("Telefono").value;
    const Otro = document.getElementById("Otro").value;
    const Parentesco = document.getElementById("Parentesco").value;
    const Programa = document.getElementById("Programa").value;
    const TipoDocumento = document.getElementById("TipoDocumento").value;

    // Validación de existencia de usuario
    db.collection("aprendices")
        .where("Documento", "==", NumeroDocumento)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                swal("¡Error!", "Ya existe un usuario con este número de documento", "error");
            } else if (ApellidoAcudiente && ApellidoAprendiz && Barrio && Colegio &&
                CorreoElectronico && Departamento && DireccionResidencia &&
                Edad && FechaNacimiento && Jornada && Municipio && NombreAcudiente &&
                NombreAprendiz && NumeroDocumento && NumeroTelefono &&
                Otro && Parentesco && Programa && TipoDocumento
            ) {
                swal({
                    title: "¿Estás seguro de guardar estos datos?",
                    text: "Se agregarán a la base de datos.",
                    icon: "warning",
                    buttons: ["Cancelar", "Guardar"],
                    dangerMode: true,
                })
                    .then((willSave) => {
                        if (willSave) {
                            // Guardar datos en Firestore
                            db.collection("aprendices")
                                .add({
                                    ApellidoAcudiente,
                                    ApellidoAprendiz,
                                    Barrio,
                                    Colegio,
                                    CorreoElectronico,
                                    Departamento,
                                    DireccionResidencia,
                                    Edad,
                                    FechaNacimiento,
                                    Jornada,
                                    Municipio,
                                    NombreAcudiente,
                                    NombreAprendiz,
                                    NumeroDocumento,
                                    NumeroTelefono,
                                    Otro,
                                    Parentesco,
                                    Programa,
                                    TipoDocumento
                                })
                                .then((docRef) => {
                                    swal("¡Éxito!", "Los datos se han guardado correctamente", "success");
                                })
                                .catch((error) => {
                                    swal("¡Error!", "Hubo un problema al guardar los datos", "error");
                                });
                        } else {
                            swal("Operación cancelada", "Los datos no se han guardado", "info");
                        }
                    });
            } else {
                swal("¡Error!", "Por favor, completa TODOS los campos.", "error");
            }
        })
        .catch((error) => {
            swal("¡Error!", "Hubo un problema al verificar el número de documento", "error");
        });
}
