const path = require('path');
module.exports = {
	mode: "development",
	entry: { main: './js/index.js' },
	output: {
		path: path.resolve(__dirname, 'js'),
		filename: 'main.js'
	},
	watch: true,
	
	devtool: "source-map"
}