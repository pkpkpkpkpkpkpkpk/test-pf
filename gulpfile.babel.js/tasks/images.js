// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import changed from "gulp-changed";
import imagemin from 'gulp-imagemin';
import errorHandler from '../util/errorHandler.js';

// Config
import { paths } from "../config";

// Task
export function images() {
  return src(paths.images.src)
    .pipe(plumber({errorHandler}))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(changed(paths.fonts.dest))
    .pipe(dest(paths.images.dest));
}
