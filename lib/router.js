Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.onBeforeAction('loading');

Router.map(function() {
  this.route('postsList', {path: '/'});
});
