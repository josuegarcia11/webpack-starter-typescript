import db from './Firebase/Config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuarioRef = db.collection('usuarios');


// select * from usuarios order by nombre asc, salario asc
usuarioRef
        .orderBy('nombre')
        .orderBy('salario')
        .get().then( retornaDocumentos )