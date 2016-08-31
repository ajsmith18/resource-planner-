var app = angular.module("myapp", []);
	app.controller("ListController", ['$scope', function($scope) {

		$scope.resourceDetails = [
	        {
	            'role':'Software Developer',
	            'inception':'100',
	            'build':'100',
	            'stabilisation':'100',
	            'implement':'100'
	        }];

		$scope.myoptions = [
			{value: 'Business Analyist', label: 'Business Analyist'},
			{value: 'Iteration manager', label: 'Iteration manager'},
			{value: 'Solution architect', label: 'Solution architect'},
			{value: 'Software developer', label: 'Software developer'},
			{value: 'User experience designer', label: 'User experience designer'},
			{value: 'Quality assurance analyst', label: 'Quality assurance analyst'},
			{value: 'Security tester', label: 'Security tester'},
		];

		//$scope.resourceDetail.role = $scope.myoptions[1].label;

	    
    
        $scope.addNew = function(){
        	var isRole = angular.isDefined($scope.resourceDetail.role);

        	if(isRole) {
        		
	            $scope.resourceDetails.push({ 
	                'role': $scope.resourceDetail.role, 
	                'inception': $scope.resourceDetail.inception,
	                'build': $scope.resourceDetail.build,
	                'stabilisation': $scope.resourceDetail.stabilisation,
	                'implement': $scope.resourceDetail.implement,
	            });
			
            } else {
            	alert('select a role dammit');
            }

        };
    
        $scope.remove = function($index){
            $scope.resourceDetails.splice( $index, 1 );
        };
	    
	          
	}]);