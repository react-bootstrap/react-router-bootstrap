gulp = require 'gulp'
cjsx = require 'gulp-cjsx'
plumber = require 'gulp-plumber'
rimraf = require 'gulp-rimraf'

gulp.task 'build', ['clean'], ->
  gulp.src './src/*'
    .pipe plumber()
    .pipe cjsx({ bare: true })
    .pipe gulp.dest('./lib')

gulp.task 'clean', ->
  gulp.src('./lib', {read: false})
    .pipe plumber()
    .pipe rimraf()
