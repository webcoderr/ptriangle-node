app.controller('ptriangleController', ['$scope',
  function ($scope) {

        $scope.getTriangle = function (trianglerows) {
            $scope.pascalTriangle = [];

            $scope.addcolors = ['red', 'blue', 'orange', 'green', 'red', 'blue'];
           // if (trianglerows < 6) {

                $scope.colors = ['red', 'blue', 'orange', 'green', 'red', 'blue'];
            //}
            // if(trianglerows>6){
            //$scope.colors = $scope.colors.concat($scope.addcolors);
            //}
            //if ($scope.colors.length < trianglerows) {
                for (c = trianglerows; c < trianglerows + trianglerows; c++) {
                    $scope.colors = $scope.colors.concat($scope.addcolors);
                }
           // }

            for (var i = 0; i < trianglerows; i++) {
                $scope.pascalTriangle.push(new Array(i + 1));

                for (var j = 0; j < i + 1; j++) {
                    if (j === 0 || j === i) {
                        $scope.pascalTriangle[i][j] = 1;
                    } else if (j < i) {
                        $scope.pascalTriangle[i][j] = $scope.pascalTriangle[i - 1][j - 1] + $scope.pascalTriangle[i - 1][j];
                    } else {
                        continue;
                    }
                }
            }

            //return $scope.pascalTriangle.toString();
            //$scope.pascalTriangle = $scope.pascalTriangle.toString();
            //$scope.pascalTriangle = $scope.pascalTriangle.replace(/,/g , " ");


        }



        //console.log(createPascalTriangle(6));


}]);
