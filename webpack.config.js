const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),	//указываем нашу папку
	entry: './script.js',
	output: {    // имя исх файла и путь
		filename:'script.js',
		path: path.resolve(__dirname, 'dist')       //resolve обьедеянет несоклько путей
		// dist куда будет лежать наш собранный проэк							
	},

	devServer: {
		hot: true,   //релоуд для перезагрузки
		static: {
			directory: './dist',
			watch: true
		}
	}

}