
import path from 'path';
import fs from 'fs';

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function (dirent) {
    var filePath = path.join(currentDirPath, dirent.name);
    callback(filePath, dirent);
    if (dirent.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

export default walkSync;