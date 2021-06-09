/*
This script is to be run instead of the common react-app build or react-app-rewired build, it checks that 
the path ../backend/apps/blog/static is empty and if it isnt makes a backup and then moves 
the new CRA build files there
*/

// TODO: Need to also backup the webpack-loader.json

const fs_extra = require('fs-extra')
const fs = require('fs');
const { execSync } = require('child_process')

const folder_source = './build/static'
const folder_destination = '../backend/apps/blog/static'

// Utilities

function checkFolder(folderPath) {
    // Throw error if folder path doesn't exist
    if (!folderPath) throw Error('folder path is required');

    // Check folder exists in the path using `fs.existsSync`
    const isFolderExist = fs.existsSync(folderPath);
    return isFolderExist;
};

function move_build_static() {
    fs_extra.move(folder_source, folder_destination)
        .then(() => {
            console.log('Folder "static" from build moved successfully!')
        })
        .catch(err => {
            console.error(err)
        })
}

function make_backup_and_delete(path) {
    if (checkFolder(path)) {
        if (checkFolder(path + '_backup')) { fs.rm(path + '_backup', { recursive: true }) }
        else { fs.rename(path, path + '_backup', (err) => console.log(err)) }
    }
}


const static_path = '../backend/apps/blog/static'

make_backup_and_delete('./build')
make_backup_and_delete(static_path)

execSync('npm run build')

make_backup_and_delete(static_path)
move_build_static()
