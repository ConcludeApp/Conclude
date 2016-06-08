'use strict';

class Q4Controller {

  constructor(Auth, $state, $scope, $http) {
    
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;

    this.project = $scope.$project;

    $http.get('/api/research-methods')
      .then(res => {
        res.data[0].recommended = true;
        $scope.$project.method = res.data[0]._id;
        this.methods = res.data;
      });

    this.project.researcher = Auth.getCurrentUser()

  }

  createProject() {
    this.$http.post('/api/projects', {
      phase: this.project.phase,
      researchMethod: this.project.method,
      taxonomy: {
        category: this.project.taxonomy.category,
        subcategory: this.project.taxonomy.subcategory,
        products: [this.project.taxonomy.product]
      },
      timestamp: {
        endDate: this.project.endDate_unix,
        updated: Date.now()
      },
      researcher: this.project.researcher._id,
      users: [{user: this.project.researcher._id, notifications: 1}]
    }).then(res => {
      var project = res.data;
      this.$http.put('/api/users/'+project.researcher+'/access', {project: project._id, accessLevel: 2, notifications: 1})
        .then(res => {
          return this.$state.go('new.wizard', {id: project._id});
        })
    });
  }

}

angular.module('concludeApp')
  .controller('Q4Controller', Q4Controller);