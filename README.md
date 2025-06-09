# vite6-template

## 项目运行
- Node.js 版本推荐：18+ (18.17.0)
- 包管理器推荐：pnpm (执行 `npm i -g pnpm`)

## 状态管理工具 zustand
使用参考 https://juejin.cn/post/7203262276572823609 


## 项目结构
```
├── public/                # 静态资源目录
├── src/
│   ├── assets/           # 静态资源（图片、字体、通用样式文件）
│   ├── components/        # 公共基础组件
│   ├── router/           # 路由配置
│   ├── store/            # 状态管理
│   └── views/            # 页面组件
├── index.html            # 入口HTML文件
├── README.md             # 项目说明文档
├── package.json          # 项目配置文件
├── tsconfig.json         # TypeScript配置文件
└── vite.config.ts        # Vite配置文件
```

## 技术栈
- Vite 6
- React 
- Rollup
- zustand

## 构建说明
- 使用最新版 Rollup + Vite 进行打包
- 动态导入支持：`src/components/LazyComponent/index.jsx`