angular
    .module('pessoas',['ngRoute'])
    .config(function($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'listar.html'
            })
            .when('/pessoa/adicionar', {
                templateUrl: 'adicionar.html',
                controller: 'CtrlAdicionar'
            })
            .when('/pessoa/:index', {
                templateUrl: 'editar.html',
                controller: 'CtrlEditar'
            })
            .when('/pessoa/:index', {
                templateUrl: 'listar.html',
                controller: 'CtrlExcluir'
            });
    })

    // definindo um controller para listar as pessoas
    .controller('CtrlPessoas', function($scope){
       $scope.pessoas = [
           {nome: "Maria", cidade: "São Paulo"},
           {nome: "Pedro", cidade: "Salvador"},
           {nome: "João", cidade: "Parnaíba"},
           {nome: "Cleber", cidade: "Barueri"}
       ];
    })


    // definindo outro controller para adicionar pessoas
    .controller('CtrlAdicionar', function($scope) {
        $scope.add = function () {
            $scope.pessoas.push($scope.pessoa);

            // Limpar todos os filhos de pessoa
            $scope.pessoa = "";
            $scope.result = "Registro adicionado com sucesso";
        };
    })

    .controller('CtrlEditar', function($scope, $routeParams) {
        $scope.pessoa = $scope.pessoas[$routeParams.index];
    })

    .controller('CtrlExcluir', function($scope, $routeParams) {
        $scope.remove = function(index) {
            $scope.pessoas.splice(index, 1);
        };

    })
;

