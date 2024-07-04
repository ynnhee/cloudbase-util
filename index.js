const format = require('./libs/format.js');
const compareVersion = require('./libs/compare_version.js');
const bytesToSize = require('./libs/byte_to_size.js');
const convertTime = require('./libs/convert_time.js');
const _ = require('lodash');
const crypto = require('crypto');
const moment = require('moment-timezone');
const env = {
  image: process.env.YNNHEE_FUNC_CDN_IMAGE,
  video: process.env.YNNHEE_FUNC_CDN_VIDEO,
  audio: process.env.YNNHEE_FUNC_CDN_AUDIO,
  avatar: process.env.YNNHEE_FUNC_CDN_AVATAR,
  image_prefix: process.env.YNNHEE_FUNC_CDN_IMAGE_PREFIX,
  avatar_prefix: process.env.YNNHEE_FUNC_CDN_AVATAR_PREFIX,
  video_prefix: process.env.YNNHEE_FUNC_CDN_VIDEO_PREFIX,
  audio_prefix: process.env.YNNHEE_FUNC_CDN_AUDIO_PREFIX,
}

module.exports = {
  _: _,
  moment: moment,
  compareVersion: compareVersion,
  format: format,
  bytesToSize: bytesToSize,
  convertTime: convertTime,
  getImageUrl: function (fid) {
    return format(env.image, { fid: fid })
  },
  getVideoUrl: function (fid) {
    return format(env.video, { fid: fid })
  },
  getAudioUrl: function (fid) {
    return format(env.audio, { fid: fid })
  },
  resetAvatarUrl: function (user_info) {
    if (user_info && _.isString(user_info.avatarUrl) && user_info.avatarUrl.includes('/miniprogram/') && user_info.avatarUrl.includes('/avatar/')) {
      const regex = /(https?:\/\/[^\/\s]+)(?:\/([^\?\s]*))?(\?.*)?/g;
      user_info.avatarUrl = user_info.avatarUrl.replace(regex, (match, protocolAndDomain, path, query) => {
        return format(env.avatar, { fid: path })
      });
    }
    return user_info
  },
  getEncrypt: function (data, secretKey) {
    let encry = '';
    try {
      const algorithm = 'aes-256-cbc';
      const iv = crypto.randomBytes(16);
      let cipher = crypto.createCipheriv(algorithm, secretKey, iv);
      let encrypted = cipher.update(data);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      encry = Buffer.concat([iv, encrypted]).toString('base64');
    } catch (err) {
      console.error('cloudbase-util.getEncrypt', err)
    }
    return encry;
  },
  env: env
};
