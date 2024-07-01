const format = require('./libs/format.js');
const compareVersion = require('./libs/compare_version.js');
const bytesToSize = require('./libs/byte_to_size.js');
const convertTime = require('./libs/convert_time.js');
const _ = require('lodash');
const moment = require('moment-timezone');

module.exports = {
  _: _,
  moment: moment,
  compareVersion: compareVersion,
  format: format,
  bytesToSize: bytesToSize,
  convertTime: convertTime,
  env: {
    image: process.env.YNNHEE_FUNC_CDN_IMAGE,
    video: process.env.YNNHEE_FUNC_CDN_VIDEO,
    audio: process.env.YNNHEE_FUNC_CDN_AUDIO,
    image_prefix: process.env.YNNHEE_FUNC_CDN_IMAGE_PREFIX,
    video_prefix: process.env.YNNHEE_FUNC_CDN_IMAGE_PREFIX,
    audio_prefix: process.env.YNNHEE_FUNC_CDN_IMAGE_PREFIX,
  }
};
