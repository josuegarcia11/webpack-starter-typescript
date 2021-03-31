import db from './Firebase/Config';


//Para crear tabla para un usuario
const usuario = {
    nombre: 'melissa',
    activo: false,
    fechaNaci: 0
}

const usuarioRef = db.collection('usuarios');

// Insertar
db.collection('usuarios')
.add(usuario)
.then( docRef => {
    console.log( docRef )
})
.catch( e => console.log ('error', e ))

//update usuarios set activo = false wherer....
usuarioRef
.doc('G5TY0KJyhRKkm4T5yymC')
.update({
    activo: true
});
//Destructivo
usuarioRef
.doc('G5TY0KJyhRKkm4T5yymC')
.set({
    activo: true,
    edad: 44,
    casado: true,
    id: 123,
});

//Borrar
usuarioRef
.doc('wYyWCKZSpjdJesgM7LjH')
.delete()
.then( () => console.log('Borrado') )
.catch( e => console.log ('error', e ));