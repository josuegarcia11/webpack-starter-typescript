import db from './Firebase/Config';
import { retornaDocumentos } from './helpers/mostrar-documentos';


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

/*
     Select * from usuario;
       where activo = true
*/

usuarioRef.where('activo','==', true).get().then( retornaDocumentos );

/*
     Select * from usuario;
       where salario > 1800
*/

usuarioRef.where('salario','>', 1800 )
           .get().then( retornaDocumentos);

/*
     Select * from usuario;
      -- where salario > 1800 and salario < 2300
      where salario between 1800 and 2300
*/

usuarioRef.where('salario','>=', 1800 )
          .where('salario', '<=', 2300 )
           .get().then( retornaDocumentos);

/*
     Select * from usuario;
      where salario > 1800
      and activo == true
*/

usuarioRef.where('salario','>=', 1800 )
          .where('activo', '==', true )
           .get().then( retornaDocumentos);