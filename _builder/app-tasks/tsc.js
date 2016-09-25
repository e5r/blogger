// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    ts = require('gulp-typescript'),
    fs = require('fs');

const TSCONFIG_FILE = 'tsconfig.json';

gulp.task('build.tsc', [], function () {
    var tsConfig = JSON.parse(fs.readFileSync(TSCONFIG_FILE)),
        tsProject = ts.createProject(TSCONFIG_FILE),
        result = gulp.src(tsConfig.include).pipe(tsProject());

    result.js.pipe(gulp.dest('src'));
    result.dts.pipe(gulp.dest('src'));
});
