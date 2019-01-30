module.exports = {
  devServer: {
    public: "http://0.0.0.0"
  },
  configureWebpack: {
  	externals: [
  		/^orbit-ui/,
  	],
    output: {
    	libraryTarget: 'amd',
    },
  }
};
