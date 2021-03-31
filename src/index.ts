import db from './Firebase/Config';


//Para crear tabla para un usuario
const usuario = {
    nombre: 'melissa',
    activo: false,
    fechaNaci: 0
}

// insert into usuarios ....

//db.collection('usuarios')
//.add(usuario)
//.then( docRef => {
//    console.log( docRef )
//})
//.catch( e => console.log ('error', e ))


// update usuarios set activo = false where....
//usuariosRef
//.doc('G5TY0KJyhRKkm4T5yymC')
//.update({
//    activo: true
//});

//Destructivo
//usuariosRef
//.doc('G5TY0KJyhRKkm4T5yymC')
//.set({
//    activo: false,
//    adad: 44,
//    casado: true,
//    id: 123
//});