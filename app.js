angular.module('myApp', [])
  //
  //app.controller('EmailCtrl', function ($scope, $http) {
  //
  //  $scope.submitSearch = function (isValid) {
  //
  //    if (isValid) {
  //
  //    } else {
  //      $scope.Display = "Invalid";
  //    }
  //    $scope.showDetails = function (OfMail) {}
  //  }
  //});

  .controller('EmailCtrl', function ($scope) {

    $scope.ismodelVisible = false;
    $scope.isComposemodelVisible = false;
    $scope.newmail = {};
    $scope.activeTab = "inbox";
    $scope.sentEmails = [];

    $scope.forward = function () {
      $scope.ismodelVisible = false;
      $scope.newmail = {};
      angular.copy($scope.thisEmail, $scope.newmail);

      $scope.newmail.body =
        "\n-------------------------------\n" +
        "from: " + $scope.newmail.from + "\n" +
        "sent: " + $scope.newmail.date + "\n" +
        "to: " + $scope.newmail.to + "\n" +
        "sub: " + $scope.newmail.sub + "\n" +
        $scope.newmail.body;

      $scope.newmail.sub = "FW: " + $scope.newmail.sub;
      $scope.newmail.to = "";
      $scope.newmail.from = "me";
      $scope.isComposemodelVisible = true;
    };

    $scope.reply = function () {

      $scope.ismodelVisible = false;
      $scope.newmail = {};

      angular.copy($scope.thisEmail, $scope.newmail);
      $scope.newmail.body =
        "\n-------------------------------\n" +
        "from: " + $scope.newmail.from + "\n" +
        "sent: " + $scope.newmail.date + "\n" +
        "to: " + $scope.newmail.to + "\n" +
        "sub: " + $scope.newmail.sub + "\n" +
        $scope.newmail.body;

      $scope.newmail.sub = "RE: " + $scope.newmail.sub;

      $scope.newmail.to = $scope.newmail.from;

      $scope.newmail.from = "me";

      $scope.isComposemodelVisible = true;
    };

    $scope.sendEmail = function () {
      $scope.isComposemodelVisible = false;
      $scope.newmail.from = "me";
      $scope.newmail.date = new Date();
      $scope.sentEmails.splice(0, 0, $scope.newmail);
    };

    $scope.showComposemodel = function () {
      $scope.newmail = {};
      $scope.isComposemodelVisible = true;
    };

    $scope.closeComposemodel = function () {
      $scope.isComposemodelVisible = false;
    };

    $scope.showmodel = function (email) {
      $scope.ismodelVisible = true;
      $scope.thisEmail = email;
    };

    $scope.closemodel = function () {
      $scope.ismodelVisible = false;
    };

    $scope.emails = [
      {
        from: 'abhi 111',
        to: 'Betty',
        sub: 'hello',
        date: '11 dec',
        body: 'what is wrong???????',
        archive: 'yes'
        },
      {
        from: 'abhi',
        to: 'Cooper',
        sub: 'hello',
        date: '11 dec',
        body: 'what is wrong???????',
        archive: 'no'
        },
      {
        from: 'abhi',
        to: 'Jon',
        sub: 'hello',
        date: '11 dec',
        body: 'what is wrong???????',
        archive: 'no'
        }
    ];
  });