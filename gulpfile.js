const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Static server
function bs() {
    sassBuild();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", sassBuild);
    watch("./sass/**/*.scss", sassBuild);
};

function sassBuild() {
    return src("./sass/**/*.sass", "./sass/**/.scss")
        .pipe(sass())
        .pipe(dest("./style/"))
        .pipe(browserSync.stream());
}

exports.serve = bs;