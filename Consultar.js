db.collection("aprendices").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        document.getElementById("printDocumento").innerHTML = doc.data().NumeroDocumento;
        document.getElementById("printNombre").innerHTML = doc.data().NombreAprendiz;
        document.getElementById("printApellido").innerHTML = doc.data().ApellidoAprendiz;
        document.getElementById("printPrograma").innerHTML = doc.data().Programa;
        document.getElementById("printJornada").innerHTML = doc.data().Jornada;
        document.getElementById("printCorreo").innerHTML = doc.data().CorreoElectronico;
        document.getElementById("printTelefono").innerHTML = doc.data().NumeroTelefono;
    });
}).catch((error) => {
    console.error("Error al obtener datos: ", error);
});