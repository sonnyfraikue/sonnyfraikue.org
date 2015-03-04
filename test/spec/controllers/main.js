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

  it('should attach a list of projects to the scope', inject(function ($httpBackend) {

    $httpBackend.whenGET('/api/features').respond([
      {
        id: 'txtnation',
        name: 'txtNation',
        logo: '/image/logo.png',
        href: '/api/features/txtnation'
      },
      {
        id: 'feburman',
        name: 'FE Burman Ltd',
        logo: '/image/logo.png',
        href: '/api/features/feburman'
      },
      {
        id: 'firstclarity',
        name: 'First Clarity',
        logo: '/image/logo.png',
        href: '/api/features/firstclarity'
      },
      {
        id: 'katchup',
        name: 'Katchup',
        logo: '/image/logo.png',
        href: '/api/features/katchup'
      },
      {
        id: 'riverisland',
        name: 'River Island',
        logo: '/image/logo.png',
        href: '/api/features/riverisland'
      },
      {
        id: 'prodirect',
        name: 'Pro Direct Sport',
        logo: '/image/logo.png',
        href: '/api/features/prodirect'
      },
      {
        id: 'thelearningclinic',
        name: 'The Learning Clinic Ltd',
        logo: '/image/logo.png',
        href: '/api/features/thelearningclinic'
      },
      {
        id: 'fcbinferno',
        name: 'FCB Inferno',
        logo: '/image/logo.png',
        href: '/api/features/fcbinferno'
      },
      {
        id: 'tmw',
        name: 'TMW Agency',
        logo: '/image/logo.png',
        href: '/api/features/tmw'
      },
      {
        id: 'movingbrands',
        name: 'Moving Brands',
        logo: '/image/logo.png',
        href: '/api/features/movingbrands'
      }
    ]);

    var resources = {
      'txtnation': {
        name: 'txtNation',
        logo: '/image/logo.png',
        description: 'txtnation'
      },
      feburman: {
        name: 'FE Burman Ltd',
        logo: '/image/logo.png',
        description: 'feburman'
      },
      firstclarity: {
        name: 'First Clarity',
        logo: '/image/logo.png',
        description: 'firstclarity'
      },
      katchup: {
        name: 'Katchup',
        logo: '/image/logo.png',
        description: 'katchup'
      },
      riverisland: {
        name: 'River Island',
        logo: '/image/logo.png',
        description: 'riverisland'
      },
      prodirect: {
        name: 'Pro Direct Sport',
        logo: '/image/logo.png',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      thelearningclinic: {
        name: 'The Learning Clinic Ltd',
        logo: '/image/logo.png',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      fcbinferno: {
        name: 'FCB Inferno',
        logo: '/image/logo.png',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      tmw: {
        name: 'TMW Agency',
        logo: '/image/logo.png',
        description: 'Spectacular Test Runner for JavaScript.'
      },
      movingbrands: {
        name: 'Moving Brands',
        logo: '/image/logo.png',
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

    expect(scope.projects.length).toBe(10);
  }));
});
