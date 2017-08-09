// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var PathMap = require( 'sfco-path-map' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var PATHS = new PathMap( {
	src: './src',
	srcStyles: '{{src}}/styles',
	srcScripts: '{{src}}/scripts',
	srcAssets: '{{src}}/assets',
	dist: './dist',
	distStyles: '{{dist}}/css',
	distScripts: '{{dist}}/js',
	distAssets: '{{dist}}/assets',
} );

// --------------------------------------------------
// DEFINE FUNCTIONS
// --------------------------------------------------
/**
 * Given 2x path patterns, function copies the matched files/folders from one location to the other.
 *
 * @param {string} from
 * @param {string} to
 */
function migrate( from, to ) {
	gulp.src( from ).pipe( gulp.dest( to ) );
}

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
/**
 * Wrapper around any/all tasks to be executed when `gulp` is run.
 */
gulp.task( 'default', function() {
	console.log( '\n\n' );
	console.log( 'Whoops! This project does not support the "defualt" Gulp task. Execute the "build" task by running `npm run build`.' );
	console.log( '\n\n' );
} );

/**
 * Wrapper around any/all tasks to be executed as part of build process.
 */
gulp.task( 'build', [ 'styles', 'scripts', 'views', 'assets', 'manifest' ] );

/**
 * Wrapper around any/all style-related tasks.
 */
gulp.task( 'styles', function() {
	gulp.src( `${PATHS.srcStyles}/styles.scss` )
		.pipe( sass( {
			outputStyle: 'expanded',
		} ) )
		.pipe( gulp.dest( PATHS.distStyles ) );
} );

/**
 * Wrapper around any/all script-related tasks.
 */
gulp.task( 'scripts', function() {
	migrate( `${PATHS.srcScripts}/**/*.js`, PATHS.distScripts );
} );

/**
 * Wrapper around any/all 'view'-related tasks.
 */
gulp.task( 'views', function() {
	migrate( `${PATHS.src}/**/*.html`, PATHS.dist );
} );

/**
 * Wrapper around any/all asset-related tasks.
 */
gulp.task( 'assets', function() {
	migrate( `${PATHS.srcAssets}/*`, PATHS.distAssets );
} );

/**
 * Wrapper around any/all 'manifest'-related tasks.
 */
gulp.task( 'manifest', function() {
	migrate( `${PATHS.src}/manifest.json`, PATHS.dist );
} );
