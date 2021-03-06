module.exports = {
	devServer: {
		allowedHosts: [
			'.sse.codesandbox.io',
		],
		public: "http://0.0.0.0"
	},
	configureWebpack: {
		externals: [
			/^orbit-ui/,
		],
		output: {
			libraryTarget: 'amd',
			library: 'App',
		},
	},
};
