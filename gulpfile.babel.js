import gulp from "gulp";
import browserSync from "browser-sync";

gulp.task('watch', () => {
    browserSync({
        server: ['src'],
        cors: true,
        port: 3000
    });
    gulp.watch(['src/**/*.css'], browserSync.stream());
    gulp.watch(['src/**/*.html'], browserSync.reload);
});
