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
        this.theTags = res.data;
        this.loadTags = function(v) {
          var theTags = res.data;
          return _.filter(theTags, function(o) { return o.pretty.includes(v) })
        }
      })

  }

  setFocus(ctrl) {
    this.$scope.focus = ctrl;
    return
  }

  clearFocus() {
    this.$scope.focus = null;
    return
  }

  createTag(tag) {
    if (!_.include(this.theTags, tag.pretty)) {
      this.$http.post('/api/tags', tag)
        .then((res) => {
          var index = _.findIndex(this.project.tags, function(o) { return o.pretty == res.data.pretty; })
          this.project.tags.splice(index, 1);
          this.project.tags.push(res.data);
          return res.data;
        })
    }
    return
  }

  updateProject() {
    this.project.goals[0].primary = 1;
    this.project.questions[0].primary = 1;
    this.project.taxonomy.tags = [];
    this.project.status = true;
    var self = this;

    _.forEach(this.project.tags, function(tag) {
      self.project.taxonomy.tags.push(tag._id)
    })

    this.$http.put('/api/projects/' + this.project._id, this.project)
      .then(res => {
        this.$state.go("project", {id: this.project._id});
      });
  }

  deleteProject() {
    this.$http.delete('/api/projects/' + this.project._id)
      .then(res =>{
        this.$state.go("filter")
      })
  }

}

angular.module('concludeApp')
  .controller('NewProjectFormController', NewProjectFormController);
