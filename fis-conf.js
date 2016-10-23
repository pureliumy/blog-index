/**
 * Created by Administrator on 2016/10/23 0023.
 */
// 所有的文件产出到 static/ 目录下
fis.match('*.png', {
    release: '/static/img/$0'
});
fis.match('*.psd',{
    release: "false"
});

// optimize
fis.media('prod')
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true //保持一个规则一个换行
        })
    });

// pack
fis.media('prod')
// 启用打包插件，必须匹配 ::package
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('*.css', {
        packTo: '/staitc/css/home.css'
    });

fis.set('project.ignore', [
    'output/**',
    '.git/**',
]);