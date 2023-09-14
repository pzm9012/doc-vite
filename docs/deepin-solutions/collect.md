# 收集
:::tip 说明
本文收集 deepin 论坛的一小部分帖子里的问题解决方案。内容仅供参考，请以实际情况为准。
:::
## 清理不需要的系统内核
:::tip 出处
见 [https://bbs.deepin.org/post/253636?postId=1438575](https://bbs.deepin.org/post/253636?postId=1438575) 2楼。
:::
查询当前系统的全部内核
```
sudo dpkg -l|egrep "linux-header|linux-image"
``` 

清理不需要的内核
```
sudo apt purge xxxxx
```

## 删除文件管理器“磁盘”中的百度网盘快捷方式
删除`/usr/share/dde-file-manager/extensions/appEntry`目录下的 .desktop 文件。

## 解决 UEngine 禁止安装来源不明的应用
终端执行以下命令：
```
/usr/bin/uengine launch.sh --package=org.anbox.appmgr --component=org.anbox.appmgr.AppViewActivity
```
或者安装并打开 UEngine 运行器，点击“打开 UEngine 应用列表”。

在面板中打开设置，进入“安全”，开启“未知来源（允许安装来自未知来源的应用）”，点击“确认”。

参考资料：[http://uengine-runner.gfdgdxi.top](http://uengine-runner.gfdgdxi.top)

## 自定义屏幕缩放
:::tip 出处
见 [https://bbs.chinauos.com/zh/post/9328](https://bbs.chinauos.com/zh/post/9328) 2楼。
:::
执行命令`sudo apt install dconf-editor`安装 dconf editor 并打开它，找到`window-scale`这一项进行修改。

## 放大镜
:::tip 出处
见 [https://bbs.deepin.org/post/253561?postId=1438805](https://bbs.deepin.org/post/253561?postId=1438805) 回复。
:::
Super + +，启用放大镜；

Super + -，缩小放大镜；

Super + 0，关闭放大镜。

## 加入内测后部分软件安装出现问题
:::tip 出处
见 [https://bbs.deepin.org/zh/post/254022?postId=1442273](https://bbs.deepin.org/zh/post/254022?postId=1442273) 7楼。
:::
执行 
```
sudo rm /var/lib/apt/lists/*
sudo apt update
```
更新本地仓库索引信息，再重新尝试安装。


## 调整安卓应用的宽高、默认横屏等显示参数
:::tip 出处
见 [https://bbs.deepin.org/zh/post/254022?postId=1442273](https://bbs.deepin.org/zh/post/254022?postId=1442273) 2楼。
:::
配置文件位置：/usr/share/uengine/appetc，每一个文件对应一个安卓应用，文件名是应用ID

![202304270812118054_image.png](./img/202304270812118054_image.png)

文件内容很简单：
```
verticalWidth 540 //竖屏宽
verticalHeighe 960 //竖屏高
horizontaltWidth 1280 //横屏宽，备选为1280
horizontaltHeighe 640 //横屏高 ，备选为720
verticalScreen 0 //设置默认横屏还是竖屏，1为竖屏，0为横屏
allowFullScreen 0 //设置是否允许全屏，1为允许，0为不允许
allowScreenSwitching 1 //设置是否允许横竖屏切换，1为允许，0为不允许
defaultFullScreen 0 //设置是否默认显示最大化，1为默认最大化，0为不是
```

## 清除文件管理器的地址栏历史
:::tip 出处
见 [https://bbs.deepin.org/post/254424?postId=1445509](https://bbs.deepin.org/post/254424?postId=1445509) 3楼。
:::
打开`~/.config/deepin/dde-file-manager/dde-file-manager.obtusely.json`，删除其中的`SearchHistory`项。

## 检查应用的开机启动情况
:::tip 出处
见 [https://bbs.deepin.org/post/253444](https://bbs.deepin.org/post/253444)。
:::
检查

systemctl list-unit-files

service --status-all

/etc/xdg/autostart 目录下

##  bash: cd: 参数太多
:::tip 出处
见 [https://bbs.deepin.org/post/254318](https://bbs.deepin.org/post/254318) 回复。
:::
如果是输入的路径中含有空格等特殊字符，需在相应文件夹名称的两侧加上`'`，如`.../'deepin 常用资源整理'/...`。

## 论坛 Markdown 编辑器`< >`符号未按原文显示
:::tip 出处
见 [https://bbs.deepin.org/post/254090?postId=1442569](https://bbs.deepin.org/post/254090?postId=1442569) 6楼。
:::
由于`<`符号在markdown和html中都有特殊含义，可以用`把网址包裹起来。

比如

`git clone https://<gitee_用户名>:<私人令牌>@gitee.com/<gitee_用户名>/notepad.git`

## 隐藏 Wayland 入口
:::tip 出处
见 [https://bbs.deepin.org/post/256684?postId=1466134](https://bbs.deepin.org/post/256684?postId=1466134) 6楼。
:::
终端执行 `dde-dconfig -a org.deepin.dde.lightdm-deepin-greeter -r org.deepin.dde.lightdm-deepin-greeter -k allowSwitchingToWayland --set -v false`。
​