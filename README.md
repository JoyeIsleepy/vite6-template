# 运行

node推荐：18+ (18.17.0)
安装命令推荐：pnpm (执行 npm i -g pnpm)


## 文件目录  
|-- public  (目录用于存放静态文件，例如 index.html 文件和图片等。)
|-- src  
  |-- assets 静态资源（包括图片，字体，通用样式文件）   
  |-- components 公共基础组件   
  |-- views (目录用于存放页面组件)  
|-- index.html 
|-- README.md  (说明文件)
|-- tsconfig.json
|-- vite.config.ts (vite配置文件 )
|-- router (目录用于存放路由文件)
|-- store  
|-- views (目录用于存放页面组件)  
|-- package.json  


### 打包采用了最新rolldown-vite，如有构建问题，可考虑这方面影响

### rollup/plugin-dynamic-import-vars 
src\components\LazyComponent\index.jsx 动态引入文件