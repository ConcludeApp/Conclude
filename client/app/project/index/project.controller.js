'use strict';

class ProjectController {

  constructor(Auth, $state, $scope, $http, $stateParams, $anchorScroll, $location, $uibModal, project) {
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;
    this.$scope = $scope;
    this.modal = $uibModal;

    this.me = Auth.getCurrentUser()
    this.project = project.data
    this.implicationsTab = 'Sales'

    $scope.persona_search = []
    $scope.method_search = []

    $scope.slickConfig = {
      autoplay: false,
      draggable: false,
      arrows: false,
      dots: true,
      method: {}
    }

    /* Edit Project */
    $scope.$watch('$prjct.show', function(o,n) {
      if (o === 'EditProject') {
        $scope.loading = true
        $http.get('/api/personas')
          .then(res => {
            return $scope.personas = res.data;
          })
        $http.get('/api/taxonomy/categories')
          .then(res => {
            return $scope.$categories = res.data;
          })
        $http.get('/api/taxonomy/subcategories')
          .then(res => {
            return $scope.$subcategories = res.data;
          })
        $http.get('/api/products')
          .then(res => {
            return $scope.$products = res.data;
          });
        $http.get('/api/research-methods')
          .then(res => {
            return $scope.$methods = res.data;
          });
        $http.get('/api/users')
          .then(res => {
            if (project.data.researcher) {
              $scope.selected = _.findIndex(res.data, {_id: project.data.researcher._id});
            }
            return $scope.$users = res.data;
          });
        $http.get('/api/tags')
          .then(res => {
            $scope.theTags = res.data;
            $scope.loadTags = function(v) {
              var theTags = res.data
              return _.filter(theTags, function(o) { return o.pretty.includes(v) })
            }
          })
        $scope.fileTypes = [
          {
            label: 'Text',
            value: 'text'
          },
          {
            label: 'Video',
            value: 'video'
          },
          {
            label: 'Audio',
            value: 'audio'
          },
          {
            label: 'Image',
            value: 'image'
          },
          {
            label: 'PDF',
            value: 'pdf'
          },
          {
            label: 'Spreadsheet',
            value: 'spreadsheet'
          },
          {
            label: 'Presentation',
            value: 'presentation'
          },
          {
            label: 'Folder',
            value: 'folder'
          }
        ]
        return $scope.loading = false
      }
    });



  }

  showMenuItem(item) {
    return this.show = (this.show === item ? '' : item);
  }

  saveProject() {
    this.$scope.loading = true
    this.$http.put('/api/projects/'+this.project._id, this.project)
      .then(res => {
        this.show = ''
        this.$http.get('/api/projects/'+res.data._id)
          .then(res => {
            this.$scope.loading = false
            this.$scope.slickConfig.enabled = true
            this.show = ''
            return this.project = res.data
          })
      })
  }

  cancelEdits() {
    this.$scope.loading = true
    this.$http.get('/api/projects/'+this.project._id)
      .then(res => {
        this.$scope.loading = false
        this.show = ''
        return this.project = res.data
      })
  }

  addComment() {
    if (!this.comment) {
      return this.NoComment = true
    }
    var comment = {
      user: this.me.name,
      comment: this.comment
    }
    this.project.comments.push(comment)
    this.saveProject()
    return this.NoComment = this.comment = null
  }

  addKeyFindings() {
    var self = this
    this.modal.open({
      templateUrl: '/components/key-findings/key-findings.html',
      controller: 'KeyFindingsModalController',
      resolve: {
        params: function() {
          return {'project': self.project}
        }
      }
    })
  }

  addDirectQuotes() {
    var self = this
    this.modal.open({
      templateUrl: '/components/direct-quotes/direct-quotes.html',
      controller: 'DirectQuotesModalController',
      resolve: {
        params: function() {
          return {'project': self.project}
        }
      }
    })
  }

  addDecisions() {
    var self = this
    this.modal.open({
      templateUrl: '/components/decisions/decisions.html',
      controller: 'DecisionsModalController',
      resolve: {
        params: function() {
          return {'project': self.project}
        }
      }
    })
  }

  addImplications() {
    var self = this
    this.modal.open({
      templateUrl: '/components/implications/implications.html',
      controller: 'ImplicationsModalController',
      resolve: {
        params: function() {
          return {'project': self.project}
        }
      }
    })
  }

  createTag(tag) {
    if (!_.include(this.theTags, tag.pretty)) {
      this.$http.post('/api/tags', tag)
        .then((res) => {
          var index = _.findIndex(this.project.taxonomy.tags, function(o) { return o.pretty == res.data.pretty; })
          this.project.taxonomy.tags.splice(index, 1);
          this.project.taxonomy.tags.push(res.data);
          return res.data;
        })
    }
    return
  }

  setTab(title) {
    return this.implicationsTab = title
  }

  sendNotifications() {
    this.$http.get('/api/projects/notifications')
      .then(res => {
        return console.log(res)
      })
  }

}

angular.module('concludeApp')
  .controller('ProjectController', ProjectController);