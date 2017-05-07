const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const drupalBreakpoints = require('drupal-breakpoints-scss')
const sourcemaps= require('gulp-sourcemaps')
 
gulp.task('task', function () {
  return gulp.src('./custom_theme.breakpoints.yml')
    .pipe(drupalBreakpoints.ymlToScss())
    .pipe(rename('_breakpoints.scss'))
    .pipe(gulp.dest('./scss'))
})


gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
                //outputStyle: 'compressed',
                outputStyle: 'nested',
                precision: 10,
                onError: function (err) {
                    notify().write(err);
                }
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(filter('scss**/*.css'))
        .pipe(browserSync.reload({stream:true}));
});