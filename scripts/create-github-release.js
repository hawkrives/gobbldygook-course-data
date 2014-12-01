var vinyl = require('vinyl-fs');
var release = require('github-release');
var pkg = require('../package.json');

var sourcePath = '../dist/data.tar.gz';

vinyl(sourcePath)
	.pipe(githubRelease(pkg));
