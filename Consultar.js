function consultar(){
    db.collection("aprendices").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            document.getElementById("printNombres").innerHTML=`${doc.data().NombreAprendiz}`
            document.getElementById("printApellidos").innerHTML=`${doc.data().ApellidoAprendiz}`
        });
    });
}