/*
 * @title Build
 * @description A task to compile production code.
 */

// Dependencies
import { series, parallel } from 'gulp';

// Tasks
import { clean } from './clean';
import { styles } from './styles';
import { scripts } from './scripts';
import { views } from './views';
import { images } from './images';
import { fonts } from './fonts';

export const build = series(
  clean,
  parallel(styles, scripts, views, images, fonts)
);
