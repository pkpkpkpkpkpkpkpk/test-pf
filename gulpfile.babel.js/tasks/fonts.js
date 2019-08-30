// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import changed from "gulp-changed";
import errorHandler from '../util/errorHandler.js';

// Config
import { paths } from "../config";

// Task
export function fonts() {
  return src(paths.fonts.src)
    .pipe(plumber({errorHandler}))
    .pipe(changed(paths.fonts.dest))
    .pipe(dest(paths.fonts.dest));
}
