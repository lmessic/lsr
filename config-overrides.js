const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
	addWebpackAlias({
		'@': path.resolve(__dirname, 'src')
	}),
	(config, env) => {
		// qiankun 关键配置：输出library，umd格式
		config.output.library = `sub-rehearse`;
		config.output.libraryTarget = 'umd';
		// 关闭 chunk 隔离问题（qiankun必备）
		config.output.chunkLoadingGlobal = `webpackJsonp_sub-rehearse`;
		config.output.publicPath = process.env.NODE_ENV === 'production' ? '/sub-rehearse/' : '/';

		if (env === 'development') {
			config.devServer = {
				...config.devServer,
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			};
		}

		return config;
	}
);
