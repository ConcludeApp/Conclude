'use strict';

class ShareController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $scope, $http, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.$http = $http;
    this.$scope = $scope;
    this.$state = $state;
    this.me = Auth.getCurrentUser();
    
    this._ =

    this.project = $state.params.id;
    this.invitees = []

    $http.get('/api/users')
      .then(res => {
        return this.users = _.difference(res.data, this.$scope.$prjct.project.users);
      })

    this.checkEmail = function validateEmail(email) {
      var val = /\S+@\S+\.\S+/;
      return val.test(email)
    }

    $scope.$watch('share.to', function(o,n) {
      if (n && o != n && $scope.share.checkEmail(n)) {
        return $scope.share.error = false
      }
      return $scope.share.error = true
    });

  }

  cancelShare() {
    this.invitees = []
    return this.to = ''
  }

  clearTo() {
    return this.to = ''
  }

  queueInvite(to) {
    if (_.findIndex(this.invitees, {email: to.email}) > -1 || !this.checkEmail(to.email) || _.findIndex(this.$scope.$prjct.project.users, {email: to.email}) > -1) {
      return this.error = true
    }
    this.to = this.error = null
    return this.invitees.push({email: to.email, accessLevel: 2, project: this.project})
  }

  removeInvite(index) {
    return this.invitees.splice(index, 1)
  }

  sendInvite() {
    this.$http.post('/api/projects/'+this.project+'/share', this.invitees)
      .then(res => {
        this.invitees = []
        this.to = ''
        return this.$state.go(this.$state.current, {id: this.project}, {reload: true});
      })
  }

}

angular.module('concludeApp')
  .controller('ShareController', ShareController);