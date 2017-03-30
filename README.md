#项目思路:

*1.用户进入预约页面，验证通过之后点击提交按钮提交数据到数据库<br>  


*2.后台预约界面从数据库获取数据添加到后台页面<br>  


*3.考虑到服务器问题这里用json代替实现简单的数据交互<br>   


####工作流程   


*1.首先假设你已安装node.js<br>   
cd desktop->   
mkdir demo-xdf->   
cd demo-xdf->   
npm init(创建page.json文件)->   
npm install express --save 


*2.目录结构：<br>   

├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

7 directories, 9 files  


*3.app.js文件配置路由public文件夹中添加项目文件<br>   

*4.MySQL数据库的连接以后后台页面实现数据的增、删等功能<br>  


* * *   

#####测试方案    


[预约界面预览地址：]( https://wang-pengju.github.io/demo-xdf/public/index.html)https://wang-pengju.github.io/demo-xdf/public/index.html<br>   


[后台界面预览地址：](https://wang-pengju.github.io/demo-xdf/public/admin.html)https://wang-pengju.github.io/demo-xdf/public/admin.html<br>    


####数据保存格式说明<br>   

json格式<br>    

####此版本实现的功能点 <br>   

*1.用运node.js生成express框架<br>   

*2.mysql的使用<br>   

*3.后台数据添加删除功能<br>   
