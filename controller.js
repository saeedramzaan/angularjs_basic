
app.controller('formCont', function ($scope, $http) {
    $scope.username = null;
    $scope.email = null;
    $scope.password = null;
    $scope.lblMsg = null;
    $scope.postdata = function (username, email, password) {
    var data = {
    username: username,
    email: email,
    password: password 
    };
    
    //Call the services
    $http.post('http://localhost:8000/api/regUser', JSON.stringify(data)).then(function (response) {
    
    
      if (response.data)
    
      $scope.user_msg = null;
      $scope.email_msg = null;
      $scope.password_msg = null;
    
    console.log(response.data);
    $scope.msg = "Post Data Submitted Successfully!";
    
    }, function (response) {
    
      
      if (response.data.errors.username) {
    
        $scope.user_msg = response.data.errors.username[0];
    
      }else{
    
        $scope.user_msg = null;
    
      }
    
      if (response.data.errors.email) {
    
       $scope.email_msg = response.data.errors.email.toString();
    
      }else{
    
      $scope.email = null;
    
      }
    
      if(response.data.errors.password){
        $scope.password_msg = response.data.errors.password['0'];
      }else{
        $scope.password_msg = null;
      }
    
      // $scope.email_msg = response.data.errors.email[0];
      // $scope.password_msg = response.data.errors.password[0];
    
      // console.log(response.data.errors);
    
    $scope.msg = "Service not Exists";
    $scope.statusval = response.status;
    $scope.statustext = response.statusText;
    $scope.headers = response.headers();
    
    });
    };
    });

    // <script type="text/javascript">



