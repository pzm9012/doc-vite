# 解决方案收集
:::tip 说明
本文收集 deepin 论坛的一小部分帖子里的问题解决方案。本文提供的解决方案有些是对应问题的一种处理方案，并非唯一，仅供参考。
:::

## Linux 和 Windows 时间不同步
:::tip 出处
见 [https://bbs.deepin.org/post/253670?postId=1438866](https://bbs.deepin.org/post/253670?postId=1438866) 3楼。
:::
###  一、 Windows的时间和时区

Windows操作系统直接把CMOS时间认定为当前显示时间，不根据时区转换。这样每调整一次系统时区，系统会根据调整的时区来计算当前时间，确定后，也就同时修改了CMOS内的时间（即每调整一次时区，设置保存后，CMOS时间也将被操作系统改变一次，注意不同操作系统调整时间后，也会同时改变CMOS时间，这一点是共通的）。

### 二、 Linux的时间和时区

Linux和苹果操作系统以当前主板CMOS内时间做为格林威治标准时间，再根据系统设置的时区来最终确定当前系统时间（如时区设置为GMT+08:00北京时间时以及当前CMOS时间为03:00，那么系统会将两个时间相加得出显示在桌面的当前系统时间为11:00）

### 三、 问题解决

解决的办法有两个

让Windows使用Linux的时间管理方式，就是启用UTC（世界协调时）

让Linux按照Windows的方式管理时间，就是让Linux禁用UTC（世界协调时）

个人建议第二种，因为通常Windows是主系统，不推荐对Windows进行这种修改，不过我还是都介绍一下：

1. 在Windows下启用UTC

打开运行窗口（快捷键Win+R），然后输入regedit启动注册表编辑器，并找到`HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/TimeZoneInformation/`位置（可以直接粘贴进注册表编辑器地址栏），然后添加一项类型为`REG_DWORD`的键值，命名为`RealTimeIsUniversal`，值为 `1` 。重启后时间即回复正常

2. 在deepin下关闭UTC

这个用这个方法是我比较推荐的：按Ctrl+Alt+T调出终端，输入：
```sh
sudo deepin-editor /etc/default/rcS
```
找到`UTC=yes`这一行，改成`UTC=no`然后Ctrl+S保存即可，时间修改立即生效。这样就可以解决Windows与Linux双系统时间同步问题了。

3. (推荐)

在Linux下打开终端，依次输入以下命令：
```sh
timedatectl set-local-rtc 1
timedatectl
```

## 清理不需要的系统内核
:::tip 出处
见 [https://bbs.deepin.org/post/253636?postId=1438575](https://bbs.deepin.org/post/253636?postId=1438575) 2楼。
:::
查询当前系统的全部内核
```sh
sudo dpkg -l | grep "linux-header|linux-image"
``` 

清理不需要的内核
```sh
sudo apt purge xxxxx
```

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
```sh
sudo rm /var/lib/apt/lists/*
sudo apt update
```
更新本地仓库索引信息，再重新尝试安装。

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

## 安装 Sound Open Firmware
:::warning 提示
建议使用deepin23及以上系统版本

有些已在 SOF 中支持的声卡可手动安装最新的固件来尝试使声卡可用。由于硬件多样，声卡可能无法完全正常工作（如麦克风无法使用、仅  3.5mm 耳机接口可用等）。
:::
:::tip 参考资料
- [https://bbs.deepin.org/post/245513?offset=0&postId=1399406](https://bbs.deepin.org/post/245513?offset=0&postId=1399406)
- [https://bbs.deepin.org/post/238558?offset=0&postId=1399543](https://bbs.deepin.org/post/238558?offset=0&postId=1399543)
:::
1. 前往 [https://github.com/thesofproject/sof-bin/releases](https://github.com/thesofproject/sof-bin/releases) 下载 sof-bin-vx.x.x.tar.gz 文件。
2. 准备一个存放备份的文件夹，终端执行以下命令：（自行替换备份路径）
```sh
sudo mv /lib/firmware/intel/sof* /path/to/backup/folder/
```
3. 解压下载的文件，在解压后文件所在的目录里打开终端，执行：
```sh
sudo ./install.sh
```
4. 重启系统后即可生效。

## 将 Scroll Lock 键映射为键盘灯开关
:::tip 出处
见 [https://bbs.deepin.org/zh/post/262357?postId=1516951](https://bbs.deepin.org/zh/post/262357?postId=1516951)。
:::
将以下文件保存为`a.sh`，然后在同目录下在右键中端中打开，执行`sudo chmod +x a.sh && sudo ./a.sh`
```sh
#!/bin/bash
status=/tmp/keyboard_led_status  
if [[ ${1} == "on" ]] || [[ ! -e ${status} ]]; then  
    xset led named 'Scroll Lock' && echo "on" > ${status}  
else  
    xset -led named 'Scroll Lock' && rm -f ${status}  
fi
```

## 间接使手写输入法
:::tip 出处
见 [https://bbs.deepin.org/post/241747?postId=1366668](https://bbs.deepin.org/post/241747?postId=1366668) 7楼。
:::
用这个在线版的手写识别系统：[https://teshuzi.com/zh/handwriting/](https://teshuzi.com/zh/handwriting/)    一个一个的手动复制手写识别的字（点击就可以复制），再粘贴到相应的需要输入的地方

## deepin23缺少openssl-1.1.so
:::tip 出处
[https://bbs.deepin.org.cn/post/277536](https://bbs.deepin.org.cn/post/277536)，感谢[greenery](https://bbs.deepin.org.cn/user/296759)提供教程
:::
终端执行以下命令
```sh
wget https://github.com/openssl/openssl/releases/download/OpenSSL_1_1_1w/openssl-1.1.1w.tar.gz

tar -xvf openssl-1.1.1w.tar.gz
cd openssl-1.1.1w
sudo mkdir /usr/local/lib/openssl-1.1
./config --prefix=/usr/local/lib/openssl-1.1 --openssldir=/usr/local/lib/openssl-1.1 shared zlib
sudo apt-get install zlib1g-dev
make

sudo cp libcrypto.so.1.1 libssl.so.1.1 /usr/local/lib/openssl-1.1
sudo link /usr/local/lib/openssl-1.1/libcrypto.so.1.1 /usr/lib/x86_64-linux-gnu/libcrypto.so.1.1
sudo link /usr/local/lib/openssl-1.1/libssl.so.1.1 /usr/lib/x86_64-linux-gnu/libssl.so.1.1
```
注意一定不要使用make install安装

当然也可以从星火商店源安装，安装星火商店后终端执行如下命令
```sh
sudo aptss isntall libssl1.1
```