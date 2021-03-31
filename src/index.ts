import db from './Firebase/Config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuarioRef = db.collection('usuarios');


const usuariosRef = db.collection('usuarios');

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append ( btnNext )

let firstdocument: any = null;
let lastdocument: any = null;
btnNext.addEventListener('click', () => {

    const Query = usuariosRef
                 .orderBy('nombre')
                 .startAfter( lastdocument )

    Query.limit(2).get().then( snap => {

        firstdocument = snap.docs[ 0 ] || null;
        lastdocument = snap.docs[ snap.docs.length - 1 ] || null;
        retornaDocumentos(snap);

    })      

});

btnNext.click();

// btn Previous
const btnPrev = document.createElement('button');
btnNext.innerText = 'Previous Page';
document.body.append ( btnPrev )


btnPrev.addEventListener('click', () => {

    const Query = usuariosRef
                 .orderBy('nombre')
                 .endBefore( firstdocument )

    Query.limit(2).get().then( snap => {

        firstdocument = snap.docs[ 0 ] || null;
        lastdocument = snap.docs[ snap.docs.length - 1 ] || null;
        retornaDocumentos(snap);
    })

});