# 常见问题
:::tip 说明
本文收集 deepin 论坛的一小部分经常问的问题及解决方案。由于摘自个别帖子，不保证解决方案的可行性。
:::

## 启用 treeland
### 方案1
终端执行 `sudo apt install dcc-insider-plugin` ，然后前往“控制中心>更新>技术预览”选择。
### 方案2
终端中输入以下命令即可进入
```sh
sudo apt update && sudo apt install treeland
sudo systemctl enable ddm -f
sudo reboot
```

## 禁用treeland
### 方案1
执行以下命令：
```sh
sudo systemctl disable ddm.service
sudo systemctl enable lightdm.service
```
### 方案2
TreeLand 环境下，按`Super + L`可以进入锁屏界面，右下角有个菜单按钮，点击后可以选择返回默认模式，会自动重启并恢复 LightDM

## 终端执行`su`显示`su: 鉴定故障`
改用`sudo su`命令。

## 在deepin上玩游戏
见 [这个页面](/deepin-solutions/games)

## 修改应用在启动器中的分类
打开 `/usr/share/applications`，右击窗口内空白处，选择“以管理员身份打开”。右击要修改的应用的 .desktop 文件，选择“打开方式”>“文本编辑器”，修改`Categories=`后面的内容。

## deepin23软件包名汇总
:::tip 出处
[https://bbs.deepin.org.cn/post/275654](https://bbs.deepin.org.cn/post/275654)，感谢[阿尼樱奈奈](https://bbs.deepin.org.cn/user/296995)整理
:::

### 包名
#### 玲珑包

玲珑包名|对应deb包名|应用名称
-------|-------|-------
org.dde.calendar|dde-calendar|日历
org.deepin.browser|org.deepin.browser|浏览器
org.deepin.mail|deepin-mail|邮箱

#### deb包

deb包名 |	应用名称
-------|-------
dde-file-manager|文件管理器
deepin-app-store|应用商店
deepin-music|音乐
deepin-movie|影院
deepin-terminal|终端
deepin-screen-recorder|截图录屏
deepin-image-viewer|看图
deepin-album|相册
libreoffice-writer|LibreOffice Writer
libreoffice-base|LibreOffice Base
libreoffice-calc|LibreOffice Calc
libreoffice-draw|LibreOffice Draw
libreoffice-impress|LibreOffice Impress
libreoffice-math|LibreOffice Math
libreoffice|LibreOffice
deepin-draw|画板
deepin-reader|文档查看器
deepin-editor|文本编辑器
org.deepin.downloader|下载器
deepin-feedback|用户反馈
deepin-home|深度之家
deepin-manual|帮助手册
simple-scan|文档扫描仪
deepin-system-monitor|系统监视器
deepin-boot-maker|启动盘制作工具
deepin-devicemanager|设备管理器
deepin-log-viewer|日志收集工具
dde-printer|打印管理器
dde-desktop|计算机
deepin-deb-installer|软件包安装器
deepin-calculator|计算器
deepin-font-manager|字体管理器
deepin-compressor|归档管理器
deepin-diskmanager|磁盘管理器
dde-introduction|欢迎
deepin-camera|相机
com.deepin.gomoku|五子棋
com.deepin.lianliankan|连连看
dde-cooperation|跨端协同
dde-control-center|控制中心
deepin-unioncode|Deepin Union Code
fcitx5|Fcitx 5 输入法

### 操作
#### 安装
deb：应用商店安装，或者终端执行：`sudo apt install <包名>`（如：sudo apt install deepin-music）

玲珑：应用商店（目前可能失败）或Jokul自制的玲珑商店安装，或者终端执行：`ll-cli install <玲珑包名>`

#### 卸载
deb：应用商店卸载，启动器右键应用图标卸载，或者终端执行`sudo apt remove <包名>`或 `sudo apt purge <包名>`（如：sudo apt purge deepin-music）

玲珑：应用商店或Jokul自制的玲珑商店卸载，启动器右键应用图标卸载，或者终端执行`ll-cli uninstall <玲珑包名>`

注意：卸载自带应用时需谨慎，部分自带应用涉及到系统，卸载后可能会导致系统异常；还有在输入命令时，注意install/remove/purge/uninstall和包名之间的空格