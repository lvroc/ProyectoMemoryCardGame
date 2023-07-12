const {series}  = require('gulp');
const gulp =require('gulp');
const rollup = require('rollup');
const clean = require('gulp-clean');

const browsersync = require('browser-sync');
const server = browsersync.create();

gulp.task('clean', ()=>{
    return gulp.src('node_modules').pipe(clean());
});

function reloadServer(){
    server.reload();
}


function runServer(){
    server.init({
        server:{
            baseDir:'.'
        }
    });
}
    


function watchingFiles(){
    gulp.watch('*.html',reloadServer);
    gulp.watch('css/',{events:'all'},reloadServer);
    gulp.watch('js/', {
        events: 'all'
    }, reloadServer);
}

exports.bundle = () => {
    console.log('Running bundle function');
}

exports.play = () =>  {
    console.log('Running game...');
    runServer();
    watchingFiles();
};

/* exports.play = series(runServer,watchingFiles); */



/*
    comandos npm run clean , esta en scripts
*/