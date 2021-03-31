# select * from usuarios order by nombre asc, salario asc
''''
usuarioRef
        .orderBy('nombre')
        .orderBy('salario')
        .get().then( retornaDocumentos )
....