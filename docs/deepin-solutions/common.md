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
TreeLand 环境下，按 Super + L 可以进入锁屏界面，右下角有个菜单按钮，点击后可以选择返回默认模式，会自动重启并恢复 LightDM

## 终端执行`su`显示`su: 鉴定故障`
改用`sudo su`命令。

## 在deepin上玩游戏
见 [这个页面](/deepin-solutions/games)

## 修改应用在启动器中的分类
打开 `/usr/share/applications`，右击窗口内空白处，选择“以管理员身份打开”。右击要修改的应用的 .desktop 文件，选择“打开方式”>“文本编辑器”，修改`Categories=`后面的内容。