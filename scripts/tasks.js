require('shelljs/global');

exports.copyAssets = type => {
    rm('-rf', type);
    mkdir(type);
    cp(`chrome/manifest.json`, `${type}/manifest.json`);
    cp('-R', 'chrome/assets/*', type);
};
