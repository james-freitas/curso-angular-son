pessoas
    .controller('PessoasCtrl',
        ['$scope','PessoasSrv','$location', '$routeParams',
            function($scope, PessoasSrv, $location, $routeParams){
                $scope.load = function(){
                    $scope.registros = PessoasSrv.query();
                }

                $scope.clear = function() {
                    $scope.item = "";
                }

                $scope.get = function() {
                    $scope.item = PessoasSrv.get({id: $routeParams.id})
                }

                $scope.add = function(item) {
                    $scope.result = PessoasSrv.save(
                        {},
                        $jQuery.param(item),
                        function(data, status, headers, config) { // sucesso no add
                            $location.path('/');
                        },
                        function(data, status, headers, config) { // falha no add
                            alert('Ocorreu um erro: ' + data.messages[0]);
                        }
                    );
                }

                $scope.editar = function(item) {
                    var params = $jQuery.param(JSON.parse(angular.toJson(item)));

                    $scope.result = PessoasSrv.update(
                        {id: $routeParams.id},
                        params,
                        function(data, status, headers, config) { // sucesso no edit
                            $location.path('/');
                        },
                        function(data, status, headers, config) { // falha no edit
                            alert('Ocorreu um erro: ' + data.messages[0]);
                        }
                    )
                }

                $scope.delete = function(id) {
                    if(confirm('Deseja realmente excluir essa pessoa?')) {
                        PessoasSrv.remove(
                            {id: id},
                            {},
                            function(data, status, headers, config) { // sucesso no delete
                                $scope.load();
                            },
                            function(data, status, headers, config) { // falha no delete
                                alert('Ocorreu um erro: ' + data.messages[0]);
                            }
                        )
                    } else {
                        $scope.load();
                    }
                }
            }
        ]
);
