module.exports = {
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/molotov' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/auth': { page: '/auth' },
      '/auth/signup': { page: '/auth/signup' },
      '/auth/signup/confirm': { page: '/auth/signup/confirm' },
      '/auth/reset': { page: '/auth/reset' },
      '/dashboard': { page: '/dashboard' }
    }
  }
}
