// const gulp = require('gulp');
import gulp from 'gulp';

import GulpPug from 'gulp-pug';


import Sass from 'sass';
import GulpSass from 'gulp-sass';
const styleSass = GulpSass(Sass)


// import minify from 'gulp-minify';
import AutoPrefixer from 'gulp-autoprefixer';
import CssNano from 'gulp-cssnano';
import Rename from 'gulp-rename';

import Babel from 'gulp-babel';
import GulpUglify from 'gulp-uglify';
import GulpConcat from 'gulp-concat';

import ImageMin from 'gulp-imagemin';

// var browserSync = require('browser-sync').create();
import browserSync from 'browser-sync';

import { deleteAsync } from 'del';


const { src, dest, series, parallel } = gulp;


const html = () => {
    return gulp.src('src/pug/*.pug')
        .pipe(GulpPug())
        .pipe(gulp.dest('build'))
}



const styles = () => {
    return gulp.src('src/styles/**/*.scss')
        .pipe(styleSass().on('error', styleSass.logError))
        .pipe(AutoPrefixer())
        .pipe(CssNano())
        .pipe(Rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/styles'))
}

const scripts = () => {
    return gulp.src('src/scripts/*.js')
        .pipe(Babel({
            presets: ['@babel/env']
        }))
        .pipe(GulpUglify())
        .pipe(GulpConcat('main.min.js'))
        .pipe(gulp.dest('build/scripts'))
}


const images = () => {
    return gulp.src('src/images/*.*')
    .pipe(ImageMin())
    .pipe(gulp.dest('build/images'))
}


const server = () => {
    browserSync.init({
        server: {
            baseDir: './build'
        },
        //port
    });


    browserSync.watch('build', browserSync.reload)
}

const watch = () => {
    gulp.watch('src/pug/**/*.pug', html);
    gulp.watch('src/styles/**/*.scss', styles);
    gulp.watch('src/scripts/**/*.js', scripts);
    gulp.watch('src/images/*.*', images);
}

const deleteBuild = (cb) => {
    deleteAsync(['build/**']).then(() => cb());
}

export default series(
    deleteBuild,
    parallel(html, styles, scripts, images),
    parallel(server, watch)
)