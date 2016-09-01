var app = angular.module("myapp", []);
	app.controller("ListController", ['$scope', function($scope) {

		$scope.resourceDetails = [
	        {
	            'role':{val: 'sd', label: 'Software developer'},
	            'inception':'100',
	            'build':'100',
	            'stabilisation':'100',
	            'implement':'100'
	        }];

		$scope.items = [{
		  id: 1,
		  label: 'Project Manager',
		  val: 'pm'
		},{
		  id: 2,
		  label: 'Business Analyst',
		  val: 'ba'
		}, {
		  id: 3,
		  label: 'Iteration Manager',
		  val: 'im'
		}, {
		  id: 4,
		  label: 'Solution Architect',
		  val: 'sa'
		}, {
		  id: 5,
		  label: 'Software Developer',
		  val: 'sd'
		}, {
		  id: 6,
		  label: 'Lead Software Developer',
		  val: 'lsd'
		}, {
		  id: 7,
		  label: 'User Experience Designer',
		  val: 'ux'
		}, {
		  id: 8,
		  label: 'Quality Assurance Analyst',
		  val: 'qa'
		}, {
		  id: 9,
		  label: 'Security Tester',
		  val: 'st'
		}, {
		  id: 10,
		  label: 'Contractor',
		  val: 'co'
		}];

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

        $scope.showAllocation = function(num) {
       		return (num > 1);
        }
	    
	          
	}]);