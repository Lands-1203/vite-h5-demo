# 手机端脚手架

## 使用 vite 搭建

- 内置 postcss，任何 css 插件请写到 vite.config.ts
- 搭建页面无需路由配置，在创建页面的时候创建一个 page.ts 文件，写入页面配置。
- 首页菜单配置在 app.json 文件中
- 如果页面没有特别指定页面地址将会按照页面目录自动生成路径
  - 如果没有指定父级路由会根据页面路径自动计算上下级关系
  - 如果某个页面的上级目录不存在 page.{ts|js}则会将该页面掷于祖级有 page.{ts|js}的目录下，直至根目录

初次启动项目前，安装npm包后执行npx husky install

## commit 格式

```
 [<emoji>] [revert: ?]<type>[(scope)?]: <message>

💥 feat(compiler): 添加 'comments' 选项
🐛 fix(compiler): 修复一些错误
📝 docs(compiler): 添加一些文档
🌷 UI(compiler): 更好的样式
🏰 chore(compiler): 对脚手架进行了一些更改
🌐 locale(compiler): 国际化
```
