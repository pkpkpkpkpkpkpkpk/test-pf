// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import errorHandler from '../util/errorHandler.js';
import beautify from 'gulp-jsbeautifier';

// Config
import { paths } from "../config";

// Task
export function views() {
  return src(paths.views.src)
    .pipe(plumber({errorHandler}))
    .pipe(beautify({ indent_size: 2 }))
    .pipe(dest(paths.views.dest))
}
