module.exports = {
  settings: {
    runtime: {
      applicationName: 'Chimphub',
      port: 8000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      routes: 'src/routes.js',
    },
    dev: {
      browsersync: {
        options: {
          open: true,
        },
      },
    },
  },
};
