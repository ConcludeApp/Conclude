'use strict';

class Q4Controller {

  constructor(Auth, $state, $scope, $http) {
    
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;

    this.project = $scope.$project;

    $http.get('/api/research-methods')
      .then(res => {
        res.data[0].recommended = 1;
        this.methods = res.data;
      });

    // Dev Project
    this.project = {
      phase: 0,
      method: "573e1953a134100952531328",
      category: "573e155ac9acb2cd74e74007",
      subcategory: "573e1528afdac1f0de865670",
      product: "573e163e5917a8317f19d7ba",
      timestamp: {
        endDate: Date.now()
      }
    }

  }

  createProject() {
    this.$http.post('/api/projects', {
      phase: this.project.phase,
      researchMethod: this.project.method,
      taxonomy: {
        category: this.project.category,
        subcategory: this.project.subcategory,
        products: [this.project.product]
      },
      timestamp: {
        endDate: this.project.endDate_unix,
        updated: Date.now()
      }
    }).then(res => {
      this.$state.go("new.wizard", {id: res.data._id});
    });
  }

}

angular.module('concludeApp')
  .controller('Q4Controller', Q4Controller);