// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

declare interface ISystemJS {
    config(cfg: any);
}

declare var System: ISystemJS;

(function (global) {
    System.config({
        paths: {
            'lib': 'lib/'
        },
        map: {
            app: 'app',
            '@angular/core': 'lib:@angular/core.umd.js',
            '@angular/common': 'lib:@angular/common.umd.js',
            '@angular/compiler': 'lib:@angular/compiler.umd.js',
            '@angular/platform-browser': 'lib:@angular/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib:@angular/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib:@angular/http.umd.js',
            '@angular/router': 'lib:@angular/router.umd.js',
            '@angular/forms': 'lib:@angular/forms.umd.js',
            'rxjs': 'lib:rxjs'
        },
        packages: {
            
        },
    });
})(this);