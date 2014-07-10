/**
 * Created by piyushthapa on 7/10/14.
 */
Router.configure({
   layoutTemplate:'layout'
});
Router.map(function() {
    this.route('home', {path: '/'});
    this.route('champion',{path:'/champion'});

});