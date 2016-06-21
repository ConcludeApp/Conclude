'use strict';

class BrowseController {

  constructor(Auth, $scope, $http, $stateParams, projects) {
    this.Auth = Auth;
    this.$http = $http;
    this.$scope = $scope;

    this.projects = projects.data

    this.filter = 0
    this.filterOptions = [
      {
        label: 'Researcher',
        value: 'researcher'
      },
      {
        label: 'Category',
        value: 'taxonomy.category',
      },
      {
        label: 'Subcategory',
        value: 'taxonomy.subcategory',
      },
      {
        label: 'Tag',
        value: 'taxonomy.tags'
      },
      {
        label: 'Product',
        value: 'taxonomy.products'
      },
      {
        label: 'Persona',
        value: 'personas'
      }
    ]
    this.appliedFilters = []

    /*
     * Data for Typeahead Filters
     */
    $http.get('/api/users')
      .then(res => {
        return $scope.users = res.data;
      })
    $http.get('/api/taxonomy/categories')
      .then(res => {
        return $scope.categories = res.data;
      })
    $http.get('/api/taxonomy/subcategories')
      .then(res => {
        return $scope.subcategories = res.data;
      })
    $http.get('/api/tags')
      .then(res => {
        return $scope.tags = res.data;
      });
    $http.get('/api/products')
      .then(res => {
        return $scope.products = res.data;
      });
    $http.get('/api/personas')
      .then(res => {
        return $scope.personas = res.data;
      });
    
    /*
     * Function to Filter Projects
     */
    this.searchProjects = function() {

      $scope.loading = true;
      var q = this.keyword;
      this.appliedFilters = [];

      $http.post('/api/projects/search', {query: q})
        .then(res => {
          $scope.loading = false;
          return this.projects = res.data;
        })

      return true;

    }

    this.resetFilters = function() {
      $scope.loading = true;
      $http.post('/api/projects/index')
        .then(res => {
          $scope.loading = false
          return this.projects = res.data;
        })
      this.appliedFilters = [];
      return this.filterValue = this.keyword = this.filterKey = ''
    }

    this.filterProjects = function() {

      $scope.loading = true;

      var q = this.filterValue,
          k = this.keyword,
          f = this.filterKey,
          filter = {namespace: (f && f != 0 ? f : 'title'), query: q};

      if (_.some(this.appliedFilters, filter)) {
        var FilterIndex = _.findIndex(this.appliedFilters, filter);
        $scope.loading = false;
        return $scope.filterIndex = FilterIndex;
      }

      if (!k && typeof q != 'object') {
        var FilterIndex = _.findIndex(this.appliedFilters, filter);
        $scope.loading = false;
        return this.appliedFilters.splice(FilterIndex, 1);
      }

      this.appliedFilters.push(filter);
      
      $http.post('/api/projects/index', this.appliedFilters)
        .then(res => {
          $scope.loading = false
          return this.projects = res.data;
        })

      return this.filterValue = this.keyword = this.filterKey = ''

    }

    this.removeFilter = function(index) {
      this.appliedFilters.splice(index, 1)
      $http.post('/api/projects/index', this.appliedFilters)
        .then(res => {
          return this.projects = res.data;
        })
      return
    }

  }

}

angular.module('concludeApp')
  .controller('BrowseController', BrowseController);