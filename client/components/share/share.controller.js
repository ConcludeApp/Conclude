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
    
    this._ = _;

    this.project = $state.params.id;
    this.invitees = [];
    this.theUsers = this.$scope.$prjct.project.users;

    $http.get('/api/users')
      .then(res => {
        return this.users = _.difference(res.data, this.theUsers);
      })

    this.checkEmail = function validateEmail(email) {
      // var val = /^.+(@returnpath.com)$/;
      var val = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
      return val.test(email)
    }

    $scope.$watch('share.to', function(o,n) {
      if (n && o != n && $scope.share.checkEmail(o)) {
        return $scope.share.error = false
      }
      return $scope.share.error = true
    });

  }

  cancelShare() {
    this.invitees = []
    return this.to = '';
  }

  clearTo() {
    return this.to = '';
  }

  queueInvite(to) {
    if (_.findIndex(this.invitees, {email: to.email}) > -1 || !this.checkEmail(to.email) || _.findIndex(this.theUsers, to.email) > -1) {
      return this.error = true;
    }
    this.invitees.push({email: to.email, project: this.project, name: (to.name ? to.name : null)});
    return this.to = this.error = null;
  }

  removeInvite(index) {
    return this.invitees.splice(index, 1)
  }

  sendInvite() {
    var self = this;
    self.invitees[0].message = self.message;
    this.$scope.$prjct.$scope.loading = true;
    return self.$http.post('/api/projects/'+self.project+'/share', self.invitees)
      .then(res => {
        self.invitees = []
        self.to = self.message = ''
        self.$scope.$prjct.$scope.loading = false
        return self.$state.go(self.$state.current, {id: self.project}, {reload: true});
      }, function(err) {
        self.invitees = []
        self.to = self.message = ''
        self.$scope.$prjct.$scope.loading = false
        return self.$state.go(self.$state.current, {id: self.project}, {reload: true});
      })
  }

}

angular.module('concludeApp')
  .controller('ShareController', ShareController);