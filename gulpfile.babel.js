import gulp from "gulp";
import browserSync from "browser-sync";

const bs = browserSync.create();

gulp.task('watch', () => {
    bs.init({
        server: ['src'],
        cors: true,
        port: 3000
    });
    gulp.watch(['src/**/*.css'], browserSync.reload);
    gulp.watch(['src/**/*.html'], browserSync.reload);
});
