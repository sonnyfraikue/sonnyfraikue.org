'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sonnyfraikueorgApp'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', inject(function ($httpBackend) {

    $httpBackend.whenGET('/api/features').respond([
      {
        id: 'txtnation',
        name: 'txtNation',
        href: '/api/features/txtnation'
      },
      {
        id: 'feburman',
        name: 'FE Burman Ltd',
        href: '/api/features/feburman'
      },
      {
        id: 'firstclarity',
        name: 'First Clarity',
        href: '/api/features/firstclarity'
      },
      {
        id: 'katchup',
        name: 'Katchup',
        href: '/api/features/katchup'
      },
      {
        id: 'riverisland',
        name: 'River Island',
        href: '/api/features/riverisland'
      },
      {
        id: 'prodirect',
        name: 'Pro Direct Sport',
        href: '/api/features/prodirect'
      },
      {
        id: 'thelearningclinic',
        name: 'The Learning Clinic Ltd',
        href: '/api/features/thelearningclinic'
      },
      {
        id: 'fcbinferno',
        name: 'FCB Inferno',
        href: '/api/features/fcbinferno'
      },
      {
        id: 'tmw',
        name: 'TMW Agency',
        href: '/api/features/tmw'
      },
      {
        id: 'movingbrands',
        name: 'Moving Brands',
        href: '/api/features/movingbrands'
      }
    ]);

    var resources = {
      'txtnation': {
        name: 'txtNation',
        description: 'txtnation'
      },
      feburman: {
        name: 'FE Burman Ltd',
        description: 'feburman'
      },
      firstclarity: {
        name: 'First Clarity',
        description: 'firstclarity'
      },
      katchup: {
        name: 'Katchup',
        description: 'katchup'
      },
      riverisland: {
        name: 'River Island',
        description: 'riverisland'
      },
      prodirect: {
        name: 'Pro Direct Sport',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      thelearningclinic: {
        name: 'The Learning Clinic Ltd',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      fcbinferno: {
        name: 'FCB Inferno',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      tmw: {
        name: 'TMW Agency',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      movingbrands: {
        name: 'Moving Brands',
        description: 'Spectacular Test Runner for JavaScript.'
      }
    };
    $httpBackend.whenGET('/api/features/txtnation').respond(resources.txtnation);
    $httpBackend.whenGET('/api/features/feburman').respond(resources.feburman);
    $httpBackend.whenGET('/api/features/firstclarity').respond(resources.firstclarity);
    $httpBackend.whenGET('/api/features/katchup').respond(resources.katchup);
    $httpBackend.whenGET('/api/features/riverisland').respond(resources.riverisland);
    $httpBackend.whenGET('/api/features/prodirect').respond(resources.prodirect);
    $httpBackend.whenGET('/api/features/thelearningclinic').respond(resources.thelearningclinic);
    $httpBackend.whenGET('/api/features/fcbinferno').respond(resources.fcbinferno);
    $httpBackend.whenGET('/api/features/tmw').respond(resources.tmw);
    $httpBackend.whenGET('/api/features/movingbrands').respond(resources.movingbrands);

    $httpBackend.flush();

    expect(scope.awesomeThings.length).toBe(10);
  }));
});
