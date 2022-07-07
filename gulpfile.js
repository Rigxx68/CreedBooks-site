var gulp = require('gulp'); //подключаем Gulp к нашему проекту
const sass = require('gulp-sass')(require('sass')); //Подключаем Scss пакет
const pug = require('gulp-pug');

gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем все scss файлы из папки sass и дочерних, если таковые будут
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результаты в папку app/css
});

gulp.task('pug', function () {
    return gulp.src('*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
    gulp.watch('*.pug', gulp.parallel('pug'));
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
    //gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    //gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});
gulp.task('default', gulp.parallel('sass', 'watch', 'pug'));

