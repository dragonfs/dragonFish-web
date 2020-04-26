
function TestPlugin() {

}


TestPlugin.prototype.apply = function(compiler) {

   // 设置回调来访问 compilation 对象：
  compiler.plugin("compilation", function(compilation) {
          
    // 现在，设置回调来访问 compilation 中的步骤：
    compilation.plugin("optimize", function() {
      console.log("编译完成！");
    });


  });

  compiler.plugin('done', function() {
    console.log('总体编译完成！');
  });
}

module.exports = {
    TestPlugin
}