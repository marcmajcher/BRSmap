'use strict';

/* eslint-env node */

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const lintable = [
  'gulpfile.js',
  'src/js/**/*.js',
  '!node_modules/**',
  '!src/js/_lib/**'
];

gulp.task('default', ['clean', 'build', 'lint', 'watch']);
gulp.task('build', ['sass', 'scripts']);
gulp.task('lint', ['eslint', 'jshint', 'watch']);

gulp.task('clean', () =>
  del([
    'public/css/*',
    'public/js/*'
  ])
);

gulp.task('eslint', () =>
  gulp.src(lintable)
  .pipe(eslint())
  .pipe(eslint.format())
  .on('error', (error) => {
    console.error(error.toString()); // eslint-disable-line no-console
    this.emit('end');
  })
);

gulp.task('jshint', () => gulp
  .src(lintable)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
);

gulp.task('sass', () =>
  gulp
  .src('src/scss/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer())
  .pipe(gulp.dest('public/css'))
);

gulp.task('scripts', () => {
  gulp
    .src('src/js/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', (error) => {
      console.error(error.toString()); // eslint-disable-line no-console
    })
    .pipe(concat('index.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', () => {
  gulp.watch([
    'gulpfile.js',
    'src/js/**/*.js'
  ], ['jshint', 'eslint']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});
