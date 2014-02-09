'use strict';

//Factory para un servicio...
angular.module('angularJs2BbApp').factory("elementosProvider", function($http)
{
  var  miServicio = {
    async:function()
    {
      var promise = $http.get("json/elementos.json").then(function(response)
      {
        return response.data;
      });
      return promise;
    }
  }

  return miServicio;
});






  //contrlador para el dibujo
  angular.module('angularJs2BbApp').controller("ctrlDibujo", ["$scope","$http",function($scope, $http, elementosProvider)
  {
    $scope.alto = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k', 'l', 'm', 'n'];
    $scope.ancho = [1,2,3,4,5,6,7,8,9,10,11,12];
    $scope.actual = "";
    $scope.elementos = {};
    $scope.color = "#f34";

    $scope.listadoElementos=[];

    $scope.respuestaServidor = "";





    $scope.loadTodosElementos = function()
    {
      $http.get("http://127.0.0.1:5984/dibujo/_design/dibujo/_view/todos").success(function(datos)
      {
        $scope.listadoElementos=datos.rows;
      });
    }


    $scope.loadElementos = function()
    {

      $http.get("http://127.0.0.1:5984/dibujo/4fa1b219cf32f19df624fbee05000a4f").success(function(datos)
      {
        $scope.elementos = datos.e; 
      });
    }

    $scope.loadElementosById = function(id)
    {

      $http.get("http://127.0.0.1:5984/dibujo/"+id).success(function(datos)
      {
        $scope.elementos = datos.e; 
      });
    }

    $scope.saveElementos = function()
    {
      $http.post("http://127.0.0.1:5984/dibujo", {"e":$scope.elementos,"t":new Date().getTime()})
      .success(function(datos)
      {
        $scope.listadoElementos.push(datos);
        $scope.respuestaServidor = datos;
        
      });
      
    }

    $scope.loadTodosElementos();


    $scope.activaElemento = function(indice1, indice2)
    {
    	var cadena  = indice1.toString()+indice2.toString();
    	$scope.actual = cadena;
    	
    	if($scope.elementos[cadena]==null)
    		$scope.elementos[cadena]=1;
    	else
    		$scope.elementos[cadena]++;
    }

  //Función que se crea par poder aplicarla dentro..
  $scope.formateaFecha = function(milis)
  {
    console.log("fecha: " + milis);
    return moment(new Date(milis)).format('llll');
  }
}]);
