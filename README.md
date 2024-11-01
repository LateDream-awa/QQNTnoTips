# QQNTnoTips
QQNT别用右下角游戏推送推送烦我好吗

## 食用方法
1. 安装 LiteLoaderQQNT本体：[LiteLoaderQQNT](https://github.com/mo-jinran/LiteLoaderQQNT)
2. [下载](https://github.com/XiaozhiSans/QQNTnoTips/releases)本插件源码包
3. 解压到`<你的LiteLoaderQQNT本体目录>/plugins/`目录下
4. 重启QQNT

## 原理
> 在窗口创建时，查找是否含有`.pic-notification[type="poster"]`元素
> - 如果有 则关闭窗口
> - 如果没有 则继续执行

## 感谢
- [LiteLoaderQQNT](https://github.com/mo-jinran/LiteLoaderQQNT)
