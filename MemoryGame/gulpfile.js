const {series}  = require('gulp');
const gulp =require('gulp');
const rollup = require('rollup');
const clean = require('gulp-clean');

const browsersync = require('browser-sync');
var exec = require('child_process').exec;
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
function firebase(cb){
    exec('firebase deploy', function (err,stdout,stderr){
        console.log(stdout);
        console.log(stderr);
    })
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

//to deploy game to firebase run gulp deploy

exports.deploy = () =>{
    firebase();
};

/* exports.play = series(runServer,watchingFiles); */



/*
    comandos npm run clean , esta en scripts
*/