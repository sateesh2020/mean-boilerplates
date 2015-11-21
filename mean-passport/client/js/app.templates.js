(function () {
    angular.module('app.templates', [])
        .run(['$templateCache', function (templateCache) {
            templateCache.put('question-radio.html',
                '<div class="panel-heading">Q. {{question}}</div><div class="panel-body"><ul class="list-group answers"><li class="list-group-item" ng-repeat="answer in answers"><div class="radio"><label><input type="radio" name=question{{$index}}> {{answer}} </label></div></li></ul></div>');
            templateCache.put('question-checkbox.html',
                '<div class="panel-heading">Q. {{question}}</div><div class="panel-body"><ul class="list-group answers"><li class="list-group-item" ng-repeat="answer in answers"><div class="checkbox"><label><input type="checkbox"> {{answer}} </label></div></li></ul></div>');
            templateCache.put('navbar.html',
                '<div class="container-fluid">' +
                '<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="javascript://"><img src="img/login-logo.png" alt="Dataphobia"></a></div>' +
                '<div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ui-sref-active="active"><a ui-sref="login">Home</a></li><li ui-sref-active="active"><a ui-sref="assesment">Assesment</a></li><li><a href="javascript://">An Another</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="javascript://">Hello User</a></li></ul></div></div>');
            templateCache.put('login.html',
                '<div class="login-container login" ng-controller="LoginController"><!-- BEGIN LOGO --><div class="logo"><img src="img/login-logo.png" width="277" height="208" class="img-responsive"></div><!-- END LOGO -->' +
                '<div class="content"><!-- BEGIN LOGIN FORM -->' +
                '<form class="form-vertical login-form" action="" method="post"><h3 class="form-title">Login to your account</h3><div class="alert alert-error alert-warning" ng-class="{hide:userValid}"><button class="close" data-dismiss="alert"></button><span>User Not Exists</span></div><div class="control-group"><!--ie8, ie9 does not support html5 placeholder, so we just show field title for that--><label class="control-label visible-ie8 visible-ie9">Username</label><div class="input-group"><span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span><input ng-model="userName" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"></div></div><div class="control-group"><label class="control-label visible-ie8 visible-ie9">Password</label><div class="input-group"><span class="input-group-addon" id="basic-addon2"><i class="fa fa-lock"></i></span><input ng-model="password" type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon2"></div></div><div class="form-actions"><label class="checkbox"><input type="checkbox" name="remember" value="1"/> Remember me</label><button type="button" ng-click="signIn(userName,password)" class="btn blue pull-right">Login <i class="m-icon-swapright m-icon-white"></i></button></div><div class="forget-password"><h4>Forgot your password ?</h4><p>no worries, click <a href="javascript:;"  id="forget-password">here</a>to reset your password.</p></div><div class="create-account"><p>Don\'t have an account yet ?&nbsp; <a href="javascript:;" id="register-btn" >Create an account</a></p></div></form><!-- END LOGIN FORM --></div><!-- END LOGIN --></div>');
            templateCache.put('questionare.html',
                '<div class="container"><section class="col-md-8 questionare-container"><div data-ng-controller="AssesmentController"><div class="panel panel-info" data-ng-repeat="question in questions" questionare-radio question="question.question" answers="question.answers" ></div></div></section><section class="col-md-4"></section></div><!-- Questionare Section -->');
           
            }]);
})();