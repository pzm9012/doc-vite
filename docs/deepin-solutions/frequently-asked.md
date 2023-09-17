# 高频问题
:::tip 说明
本文提供的解决方案有些是对应问题的一种处理方案，并非唯一，仅供参考。
:::
## [论坛发帖提问须知](/deepin-solutions/论坛发帖提问须知)

## 使用系统的问题
### 终端提示输入密码，输入时没有反应

输入密码时屏幕无回显，直接输入完按回车即可。
### Windows 系统盘里的文件带有小锁图标，变成只读无法修改

进入 Windows ，打开控制面板（Windows 11 请通过“Windows 工具”打开），进入“硬件和声音”>“电源选项”>“选择电源按钮的功能”，点击第3行“更改当前不可用的设置”（需要管理员），找到“关机设置”下的“启用快速启动”并取消勾选，点击“保存修改”。或者，每次先进入 Windows，再**重启**进入 deepin。
### 电脑安装多系统，deepin 的时间比 Windows 的晚 8 个小时

Windows 把电脑的硬件时间（RTC）看成是本地时间（本地时间 = RTC），Linux 则是把电脑的硬件时间看成 UTC 时间（本地时间 = RTC+8 = UTC+8）。
解决方法有让 Windows 使用 UTC 或让 deepin 按照 Windows 的方式管理时间。具体见[这里](/deepin-solutions/collect.html#linux-%E5%92%8C-windows-%E6%97%B6%E9%97%B4%E4%B8%8D%E5%90%8C%E6%AD%A5)。
### 开启无密码登录和自动登录后，进入桌面提示“您的登录密钥环未被解锁”

在终端执行`sudo rm -f ~/.local/share/keyrings/login.keyring`。
### 控制中心更新失败自查原因

打开终端，执行`sudo apt update && sudo apt full-upgrade`。
### 编辑右键菜单“新建文档”中的内容

修改 `~/.Templates/` 和 `/usr/share/templates/` 中的文件。
### 窗口特效无法开启

一个可能的原因是安装了华宇输入法。如果符合此情况，请改为安装其他输入法。
### 声卡没有声音的一个可能有用的解决方法(主要适用于 Intel 12/13代处理器的设备，对麦克风不起作用)

编辑 `/etc/default/grub` ， 在 `GRUB_CMDLINE_LINUX_DEFAULT` 这一行添加 `snd_hda_intel.dmic_detect=0` 。若在 Ubuntu 下声卡正常工作，可从 Ubuntu 的 `/lib/firmware/intel` 文件夹提取驱动，替换掉 deepin 下对应文件夹。 [原帖](https://bbs.deepin.org/post/248032)

## 第三方软件使用
### WPS Office 字体显示异常

安装[星火商店](https://www.spark-app.store)后从中获取“Win字体”软件包。或参见： [WPS页面显示问题](https://wiki.deepin.org/zh/WPS页面显示问题)。
### Firefox 显示过大 UI

打开`about:config`页面，选择我知道风险，把`browser.display.os-zoom-behavior`修改为 0。

[参考资料](https://blog.shenmo.tech/post/%E4%BF%AE%E5%A4%8D%E7%81%AB%E7%8B%90103%E7%89%88%E6%9C%AC%E5%B7%A8%E5%A4%A7%E8%BF%87%E5%A4%A7ui%E9%97%AE%E9%A2%98/)
### VSCode 使用原生标题栏

在设置中找到`Window: Title Bar Style`这一项，选择`custom`。
### Windows 应用内提示更新，点击更新后无反应

此为正常现象，请从应用商店获取推送的更新。若自行更新，请手动下载最新版安装程序后在对应的目录中运行。

## 软件安装
### 搜狗输入法（V23）

V23 预装 Fcitx5，与搜狗输入法（Fcitx4）暂不兼容。安装搜狗输入法前需先卸载 Fcitx5 输入法组件。

终端执行以下命令：
```
sudo apt purge fcitx*
sudo apt install "fcitx" fcitx-pinyin
```
完成后注销，重新登录。然后使用软件包安装器安装[搜狗输入法](https://shurufa.sogou.com/linux)。

[参考资料](https://bbs.deepin.org/post/253733)

## 值得了解的事情
- `sudo apt autoremove` 确认执行前一定要认真审阅将会移除的软件包列表，确定其中不含有系统组件，再进下一步操作，**务必不要随意执行**。
- V23 目前的 Wayland 模式尚有较多问题，如锁屏界面可控制电脑、任务栏存在缺陷等，**不建议日常使用**。