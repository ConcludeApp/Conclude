'use strict';

class NewProjectFormController {

  constructor(Auth, $state, $scope, $http, $stateParams) {
    
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;
    this.$scope = $scope;

    $http.get('/api/personas')
      .then(res => {
        this.personas = res.data;
      })

    $http.get('/api/projects/' + $stateParams.id)
      .then(res => {
        this.project = res.data;
        this.project.goals = [{}]
        this.project.questions = [{}]
        this.project.personas = [""]
        this.persona_search = []
        $scope.$project = res.data;
      })

    $http.get('/api/tags')
      .then(res => {
        this.loadTags = function() { 
          return res.data;
        }
      })

  }

  setFocus(ctrl) {
    console.log(ctrl)
    this.$scope.focus = ctrl;
    return
  }

  clearFocus() {
    this.$scope.focus = null;
    return
  }

  updateProject() {
    this.project.goals[0].primary = 1
    this.project.questions[0].primary = 1
    this.$http.put('/api/projects/' + this.project._id, this.project)
      .then(res => {
        this.$state.go("project", {id: this.project._id});
      });
  }

  deleteProject() {
    this.$http.delete('/api/projects/' + this.project._id)
      .then(res =>{
        this.$state.go("main")
      })
  }

}

angular.module('concludeApp')
  .controller('NewProjectFormController', NewProjectFormController);
