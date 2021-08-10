#### vue学习掉坑记录

0. <font color=red> (!important) 写完实现在用5分钟考虑可能的bug</font>

1. webpack的dev-server和webpack的publicPath并不相同，webpack的publicPath为"./"要给dev-server单独指定publicPath为"/"
2. vue-style-loader已经过时，使用vue-loader内置了其功能，不必修改style-loader为vue-style-loader
    以下为npm官网原话：
    
        vue-style-loader Build Status npm package
        This is a fork based on style-loader. Similar to style-loader, you can chain it after css-loader to dynamically inject CSS into the document as style tags. However, since this is included as a dependency and used by default in vue-loader, in most cases you don't need to configure this loader yourself.

3. 数组元素删除：连续元素 => arr.splice()
                间断元素 => arr = arr.filter();

4. 不要用子组件修改父组件的数据

5. 在git管理项目前创建.gitignore文件