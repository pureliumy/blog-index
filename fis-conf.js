/**
 * Created by Administrator on 2016/10/23 0023.
 */
fis.match('{/design/**,/**.md}',{
    release: false
});

fis.match('**', {
  deploy: [
    fis.plugin('skip-packed', {
      // 配置项
      skipPackedToPkg:  true,
      skipPackedToAIO: true,
      skipPackedToCssSprite: true,
    }),

    fis.plugin('local-deliver', {
      to: './output'
    })
  ]
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.{js,css,png}', {
  useHash: true
});

fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('::package', {
  postpackager: fis.plugin('loader')
});

fis.match('/static/**.css',{
    packTo: '/static/css/home.css'
});

fis.match('*.{css,less,scss}', {
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  })
});

fis.match('/**.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('::package', {
    deploy: [
        fis.match('/**.png',{
            release: '/static/img/home.png'
        })
    ]
});