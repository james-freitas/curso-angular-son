pessoas
    .factory('PessoasSrv', function($resource){
        return $resource(  // faz uma consulta em index.php/pessoas no banco de dados atraves do php
            '/index.php/pessoas/:id', {
                id: '@id'
            },
            {
                update: {  // criando método para outro padrão de url
                    method: 'PUT',
                    url: '/index.php/pessoas/:id'
                }
            }
        );
    });
