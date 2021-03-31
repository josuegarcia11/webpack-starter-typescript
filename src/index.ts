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