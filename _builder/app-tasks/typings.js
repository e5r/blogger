// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    path = require('path');

const TYPINGS_BIN = './node_modules/.bin/typings';
const TYPINGS_ARGS = 'install';

gulp.task('build.typings', shell.task([
    path.resolve(TYPINGS_BIN) + ' ' + TYPINGS_ARGS
]));
