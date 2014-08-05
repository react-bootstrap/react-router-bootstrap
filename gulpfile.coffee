gulp = require 'gulp'
cjsx = require 'gulp-cjsx'
plumber = require 'gulp-plumber'

gulp.task 'build', ->
  gulp.src './src/*'
    .pipe plumber()
    .pipe cjsx({ bare: true })
    .pipe gulp.dest('./lib')

#var gulp = require('gulp');
#var util = require('gulp-util');
#var argv = require('yargs')
  #.alias('o', 'optimize')
  #.argv;

#if (argv.optimize) {
  #process.env.NODE_ENV = 'production';
#} else {
  #process.env.NODE_ENV = 'development';
#}

#// load plugins
#var plugins = require('gulp-load-plugins')();

#gulp.task('styles', ['fonts'], function () {
  #return gulp.src(['assets/styles/style.less', 'assets/styles/style-guide.less'])
    #.pipe(plugins.sourcemaps.init())
    #.pipe(plugins.plumber())
    #.pipe(plugins.less())
    #.pipe(plugins.autoprefixer("last 2 versions"))
    #.pipe(plugins.sourcemaps.write())
    #.pipe(plugins.csslint('assets/styles/csslint.json'))
    #.pipe(plugins.csslint.reporter())
    #.pipe(plugins.if(argv.optimize, plugins.minifyCss()))
    #.pipe(plugins.size({title: 'styles', showFiles: true}))
    #.pipe(gulp.dest('public/styles'));
#});

#gulp.task('fonts', function() {
  #return gulp.src(['./node_modules/font-awesome/fonts/*', './node_modules/bootstrap/fonts/*'])
    #.pipe(plugins.changed('public/fonts'))
    #.pipe(gulp.dest('public/fonts'))
    #.pipe(plugins.size({title: 'fonts', showFiles: true}));
#});

#// Hack to enable configurable watchify watching
#var watching = false;
#gulp.task('enable-watch-mode', function() { watching = true; })

#gulp.task('scripts', plugins.watchify(function (watchify) {
  #var source = require('vinyl-source-stream');

  #var stream = gulp.src('assets/scripts/bundles/*.cjsx')
    #.pipe(watchify({
      #watch: watching,
      #verbose: true,
      #extensions: ['.coffee', '.cjsx'],
      #debug: true,
      #setup: function(bundle) {
        #bundle.transform(require('coffee-reactify'));

        #if (argv.optimize) {
          #bundle.transform(require('envify'));
        #}
        #bundle.transform(require('brfs'));
      #},
    #}))
    #.pipe(plugins.plumber())
    #.pipe(plugins.rename({suffix: "-bundle", extname: ".js"}))
    #.pipe(plugins.streamify(plugins.size({title: 'bundle', showFiles: true})))
    #.pipe(gulp.dest('public/scripts'));

    #if (argv.optimize) {
      #stream = stream
        #.pipe(plugins.rename({suffix: '-min'}))
        #.pipe(plugins.streamify(plugins.uglify()))
        #.pipe(plugins.streamify(plugins.size({title: 'bundle-min', showFiles: true})))
        #.pipe(gulp.dest('public/scripts'));
    #}

    #return stream;
#}));

#gulp.task('images', function () {
    #return gulp.src('assets/images/**/*')
    #.pipe(plugins.changed('public/images'))
        #.pipe(gulp.dest('public/images'))
        #.pipe(plugins.size({title: 'images', showFiles: true}));
#});

#gulp.task('clean', function () {
  #return gulp.src(['public'], { read: false }).pipe(plugins.clean());
#});

#gulp.task('build', ['styles', 'scripts', 'images']);

#gulp.task('default', ['clean'], function () {
  #gulp.start('build');
#});

#gulp.task('connect', ['build'], function () {
  #require('coffee-script/register');
  #require('./server').gulpStartServer({
      #server: {
        #port: 9000,
        #views: {
          #path: 'views',
          #extension: 'jade',
          #compileWith: 'jade'
        #},
        #base: ''
      #},
      #watch: {
        #compiledDir: __dirname + '/public'
      #},
      #liveReload: {
        #enabled: false
      #}
    #}, function(server, app) {
      #app.use(require('connect-livereload')({ port: 35729 }));
    #}
   #);
#});

#gulp.task('serve', ['build', 'connect'], function () {
  #//require('opn')('http://localhost:9000');
#});

#gulp.task('watch', ['enable-watch-mode', 'connect', 'serve'], function () {
  #var reloadServer = plugins.livereload();
  #//this is needed to start the live reload server immediately
  #reloadServer.changed();

  #// watch for changes
  #gulp.watch([
    #'public/**/*',
  #]).on('change', function (file) {
    #reloadServer.changed(file.path);
  #});

  #//TODO: this is triggering twice sometimes on save
  #gulp.watch('assets/styles/**/*.less', ['styles']);
  #gulp.watch('assets/images/**/*', ['images']);
#});
