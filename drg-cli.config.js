/*
 * @Description: 
 * @Author: ypeng
 * @Date: 2020-05-26 16:54:10
 * @LastEditors: ypeng
 */ 

 module.exports = {
    html: {
      /**
       * 启用 preload
       * 构建项目自动加入preload方案
       */
      preload: true,
      /**
       * 启用 prefetch
       * 构建项目自动加入prefetch方案
       */
      prefetch: true,
    },
    tsconfig: {
      rewrite: true, //是否使用业内最佳实践覆盖tsconfig.json配置
    },
    paths: {
      appIndexHtml: './template/index.html', // HTML模板
    //   appSrc: './src', //源码目录（源码目录外的文件cejt不做编译处理）
    //   appIndexJs: './src', //入口JS
      svgIconPath: '',
      // appPublic: 'src/www' //静态资源目录
    },
    eslint: {
      available: true, //开启eslint
      // cache: false, //启用配置缓存，如果新配置不起作用请先设置为false
      // useEslintrc: true, //使用项目中eslintrc配置
      // extends: [] //默认使用的eslint规则
    },
  };
  