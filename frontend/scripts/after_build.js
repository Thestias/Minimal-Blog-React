/*
This script is to be run instead of the common react-app build or react-app-rewired build, it checks that 
the paths:
    ./build
    ../backend/apps/blog/static
don't exist, and if they do a backup it's made by adding '_backup' to the path's name, and if a '_backup' folder already
exists then it's deleted.
Then, the ACTUAL react-app-rewired build or react-app build it's ran
Finally the new build files are moved to the Django Blogs app.
*/

// TODO: Need to also backup the webpack-loader.json

const fs_extra = require('fs-extra')
const fs = require('fs');
const { execSync } = require('child_process')

function checkFolder(folderPath) {
    // Throw error if folder path doesn't exist
    if (!folderPath) throw Error('folder path is required');

    // Check folder exists in the path using `fs.existsSync`
    const isFolderExist = fs.existsSync(folderPath);
    return isFolderExist;
};

const build_path = './build'
const static_path = '../backend/apps/blog/static'

function remove_rename(path) {
    if (checkFolder(path)) {
        if (checkFolder(path + '_backup')) {
            fs.rmSync(path + '_backup', { recursive: true, force: true }, (err) => console.log('remove_rename() rm :: ' + err))
            fs.rename(path, path + '_backup', (err) => { if (err) { console.log('remove_rename() rename :: ' + err) } })
        } else {
            fs.rename(path, path + '_backup', (err) => { if (err) { console.log('remove_rename() rename :: ' + err) } })
        }
    }
}

remove_rename(build_path)
remove_rename(static_path)

try {
    execSync('npm run build').toString()
    fs_extra.move(build_path + '/static', static_path)
        .then(() => {
            console.log('Folder "static" from build moved successfully!')
        })
        .catch(err => {
            console.error('move_static_folder :: ' + err)
        })
}
catch (error) {
    console.log(error.message); // Holds the message you typically want.
    console.log(error.stderr.toString());  // Holds the stderr output. Use `.toString()`.
    console.log(error.stdout.toString());  // Holds the stdout output. Use `.toString()`.
}