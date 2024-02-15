// import 'dotenv/config';
// export const ApiUrl = 'https://api.themoviedb.org/3';
// export const Apikey = 'b718da4e14bc2a5ec72d6c398b6d4812';
// export const ApiImg = 'https://image.tmdb.org/t/p/';
import { env } from '@dotenv-run/core';
env({
  root: '../../../',
  verbose: true,
  files: ['.env'],
});
export const ApiUrl = process.env['APIURL'];
export const Apikey = process.env['APIKEY'];
export const ApiImg = process.env['IMGURL'];

export const IMAGES_SIZES = {
  small: `${ApiImg}/w185`,
  medium: `${ApiImg}/w342`,
  large: `${ApiImg}/original`,
};
