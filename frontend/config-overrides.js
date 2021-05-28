const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    webpack: function (config, env) {
        config.plugins.push(new BundleTracker({
            path: __dirname,
            filename: '../backend/apps/blog/webpack-stats.json',
          }),)
        return config;
    },
}