gulp = require 'gulp'
cjsx = require 'gulp-cjsx'
plumber = require 'gulp-plumber'

gulp.task 'build', ->
  gulp.src './src/*'
    .pipe plumber()
    .pipe cjsx({ bare: true })
    .pipe gulp.dest('./lib')
