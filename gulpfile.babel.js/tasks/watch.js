/*
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
import gulp from 'gulp';
import { series } from 'gulp';

// Tasks
import { reload, serve } from './server';
import { styles } from './styles';
import { scripts } from './scripts';
import { views } from './views';
import { images } from './images';
import { fonts } from './fonts';

// Config
import { paths } from "../config";

function watchFiles() {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.scripts.watch, series(scripts, reload));
  gulp.watch(paths.views.watch, series(views, reload));
  gulp.watch(paths.images.src, series(images, reload));
  gulp.watch(paths.fonts.src, series(fonts, reload));
}

export const watch = series(
  serve,
  watchFiles
);
