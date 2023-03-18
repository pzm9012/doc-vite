---
title: 二、系统
---
# 二、系统
## 2.1 系统安装
> 安装 [deepin 20.4](https://bbs.deepin.org/post/230585) 之后的版本，安装器能自动识别已有 EFI 分区，无需再另外手动创建。

1. **安装教程（官方）**：[https://www.deepin.org/zh/installation/](https://www.deepin.org/zh/installation/)
2. win10下的Deepin双系统安装小白教程：[https://bbs.deepin.org/zh/post/197659](https://bbs.deepin.org/zh/post/197659)  [金山文档转存链接](https://kdocs.cn/l/svDZBaMvvQtQ)
3. 如何安装deepin-windows双系统：[https://bbs.deepin.org/zh/post/222739](https://bbs.deepin.org/zh/post/222739)
4. 系统安装教程：[https://bbs.deepin.org/zh/post/226286](https://bbs.deepin.org/zh/post/226286)
5. 双系统安装及手动分区方法：[https://bbs.deepin.org/zh/post/226463](https://bbs.deepin.org/zh/post/226463)
6.  关于safe graphics安装选项，我想讲个故事：[https://bbs.deepin.org/post/247618](https://bbs.deepin.org/post/247618)
7. 11代Intel新硬件安装深度：[https://bbs.deepin.org/zh/post/220443](https://bbs.deepin.org/zh/post/220443)
8. 不知道怎么分区的看过来：[https://bbs.deepin.org/zh/post/194267](https://bbs.deepin.org/zh/post/194267)
9. 关于装系统出现代码花屏解决方法，grub引导：[https://bbs.deepin.org/zh/post/196084](https://bbs.deepin.org/zh/post/196084)
10. 判断BIOS的启动模式和磁盘分区格式：[https://bbs.deepin.org/zh/post/225766](https://bbs.deepin.org/zh/post/225766)
11. 自定义安装后如何给分区分配卷标/盘符：[https://bbs.deepin.org/zh/post/207279](https://bbs.deepin.org/zh/post/207279)
12. [Ventoy]基于vtoyboot插件实现[Linux to Go]：[https://bbs.deepin.org/post/245517](https://bbs.deepin.org/post/245517)
13. 即插即用的deepin系统【 Linux to Go 】 deepin V23：[https://bbs.deepin.org/post/245547](https://bbs.deepin.org/post/245547)
14. Linux逻辑卷管理（LVM）系统折腾者的利器-分分钟再加一个Linux：[https://bbs.deepin.org/zh/post/227941](https://bbs.deepin.org/zh/post/227941)
15. 把 Deepin Linux 安装到“带区卷软阵列+逻辑卷（RAID0+LVM）”上：[https://bbs.deepin.org/zh/post/227880](https://bbs.deepin.org/zh/post/227880)
16. 无需命令行，双系统加密安装deepin的解决方案：[https://bbs.deepin.org/zh/post/215392](https://bbs.deepin.org/zh/post/215392)
17. 通过PXE批量部署安装Deepin V20【视频教程】：[https://bbs.deepin.org/zh/post/207368](https://bbs.deepin.org/zh/post/207368)
18. 我的Deepin初始化脚本：[https://bbs.deepin.org/post/228930](https://bbs.deepin.org/post/228930)
19. 【建议】使用Btrfs分区方案：[https://bbs.deepin.org/zh/post/238188](https://bbs.deepin.org/zh/post/238188)
20. 在 VMware Workstation 虚拟机中安装：需要把“增强型键盘”设为“必需”（启用）。未安装增强型键盘驱动的需要运行VMware安装程序来安装它。
21. VirtualBox 选5.18内核安装失败：[https://bbs.deepin.org/zh/post/248459](https://bbs.deepin.org/zh/post/248459)
22. 双系统安装时为什么要先安装Windows再安装Linux：[https://bbs.deepin.org/post/252461](https://bbs.deepin.org/post/252461)
23. 保留home分区安装v23的方法：[https://bbs.deepin.org/post/251174](https://bbs.deepin.org/post/251174)

### 2.1.1 在 U 盘上安装 deepin
> 建议在 USB 3.0 或以上的 U 盘中安装 deepin，启动时使用电脑的 USB 3.0 接口，否则会出现卡顿情况。U 盘存储空间至少为 20GB。

1. [grub实现]U盘引导多个linux镜像安装,同时支持BIOS和UEFI模式：[https://my.oschina.net/abcfy2/blog/491140](https://my.oschina.net/abcfy2/blog/491140)
2. 关于 Linux/Deepin to go 的一些心得：[https://bbs.deepin.org/zh/post/224084](https://bbs.deepin.org/zh/post/224084)
3. 简单6步，把deepin装进口袋：[https://bbs.deepin.org/zh/post/224438](https://bbs.deepin.org/zh/post/224438)
4. Deepin装在 vhd/vdi 中使用：[https://bbs.deepin.org/zh/post/209674](https://bbs.deepin.org/zh/post/209674)

### 2.1.2 在 Android™ 手机上安装 deepin
芜湖~手机上安装deepin教程来啦！：[https://b23.tv/IMmMSR4](https://b23.tv/IMmMSR4)

### 2.1.3 在 Windows® Subsystem of Linux（WSL）中安装 deepin

1. WSL Deepin：[https://bbs.deepin.org/zh/post/206395](https://bbs.deepin.org/zh/post/206395)
2. wsl2安装deepinV23 preview：[https://bbs.deepin.org/zh/post/241212](https://bbs.deepin.org/zh/post/241212)
3. Deepin GNU/Linux的WSL 2发行版：[https://bbs.deepin.org/post/246111](https://bbs.deepin.org/post/246111)

## 2.2 系统启动和引导

1. 启动显示BusyBox … built-in shell(ash) ：[https://blog.csdn.net/bless_you0_0/article/details/100513210](https://blog.csdn.net/bless_you0_0/article/details/100513210)    [https://www.cnblogs.com/lbhqq/p/6964746.html](https://www.cnblogs.com/lbhqq/p/6964746.html)
2. 谁动了我的 Grub？Grub 进入命令行解决：[https://bbs.deepin.org/zh/post/210805](https://bbs.deepin.org/zh/post/210805)
3. 华为、荣耀笔记本双系统无法正常引导Windows解决办法：[https://bbs.deepin.org/zh/post/205701](https://bbs.deepin.org/zh/post/205701)
4. grub修复：[https://bbs.deepin.org/zh/post/222216](https://bbs.deepin.org/zh/post/222216) （这里的修复只适用于部分情况）
5. 无法开机，提示You are in emergency mode ... Cannot open access：[https://bbs.deepin.org/zh/post/237419](https://bbs.deepin.org/zh/post/237419)
6. GPT分区下DEEPINV20.6添加win7（MBR）启动：[https://bbs.deepin.org/post/240727](https://bbs.deepin.org/post/240727)
7. 你的deepin启动耗时分析有看过么：[https://bbs.deepin.org/post/247588](https://bbs.deepin.org/post/247588)
8. 试用UEFI直接引导内核+去除开机跑日志：[https://bbs.deepin.org/zh/post/248745](https://bbs.deepin.org/zh/post/248745)

## 2.3 系统内核

1. 双内核使用说明：[https://bbs.deepin.org/zh/post/216952](https://bbs.deepin.org/zh/post/216952)
2. 操作系统的内核到底是什么：[https://bbs.deepin.org/zh/post/229142](https://bbs.deepin.org/zh/post/229142)
3. deepin20.5+Linux内核5.18稳定版：[https://bbs.deepin.org/zh/post/237619](https://bbs.deepin.org/zh/post/237619)
4. 如何编译安装Linux内核：[https://www.cnblogs.com/harrypotterjackson/p/11846222.html](https://www.cnblogs.com/harrypotterjackson/p/11846222.html)
5. 编译内核5.18.8解决了我好多问题：[https://bbs.deepin.org/zh/post/239766](https://bbs.deepin.org/zh/post/239766)
6. 5条命令安装最新Linux kernel！**（Xanmod版）**：[https://bbs.deepin.org/post/240628](https://bbs.deepin.org/post/240628)
7.  V23安装linux 6.1.0 内核：[https://bbs.deepin.org/post/247537](https://bbs.deepin.org/post/247537)

## 2.4 问题解决

1. ~~deepin和windows双系统时间不同步的解决方法：~~[~~https://bbs.deepin.org/zh/post/220213~~](https://bbs.deepin.org/zh/post/220213)（最佳的方案是**把 Windows 的时间标准改成 UTC**，要改注册表；因为只有 Windows 默认的时间标准是本地时间，除 Windows 之外的绝大多数操作系统都默认为 UTC ——[@SamLukeYes]()）
2. 用snapd安装软件后出现多个磁盘：[https://bbs.deepin.org/zh/post/203517](https://bbs.deepin.org/zh/post/203517) （解决方法在7楼）
3. 终于干掉snapd分区了：[https://bbs.deepin.org/zh/post/213673](https://bbs.deepin.org/zh/post/213673)
4. 出现I/O或者blk报错的简易解决方法：[https://bbs.deepin.org/zh/post/224416](https://bbs.deepin.org/zh/post/224416)
5. dde-control-center的快捷键设置无法拉起deepin-screen-recorder：[https://bbs.deepin.org/zh/post/227910](https://bbs.deepin.org/zh/post/227910)
6. 禁止kwin的自动关闭3D窗管的方法：[https://bbs.deepin.org/zh/post/232810](https://bbs.deepin.org/zh/post/232810)
7. 还在为没有公钥导致的无法更新而烦恼吗？这里有解决方案：[https://bbs.deepin.org/zh/post/237312](https://bbs.deepin.org/zh/post/237312)
8. deepin忘记密码怎么办？--Live系统一步修改用户密码：[https://bbs.deepin.org/zh/post/238135](https://bbs.deepin.org/zh/post/238135)  （注意：任何能使用你电脑的人都可以这样重设密码，因此请采取合适措施来保护数据安全）
9.  开机以后任务栏正下方的图标会以一定概率全部消失：[https://bbs.deepin.org/zh/post/244330](https://bbs.deepin.org/zh/post/244330)
10. 关于十二代U的问题解决：[https://bbs.deepin.org/post/245513](https://bbs.deepin.org/post/245513)
11. Deepin V23 Alpha 安装应用商店教程：[https://bbs.deepin.org/post/246010](https://bbs.deepin.org/post/246010)
12. 最小化，最大化，关闭的按钮不见了：[https://bbs.deepin.org/post/236787](https://bbs.deepin.org/post/236787)
13. 开机显示tty1 xxx-PC login:：[https://bbs.deepin.org/post/247479](https://bbs.deepin.org/post/247479)
14. Linux 下恢复误删文件：[https://bbs.deepin.org/zh/post/243925](https://bbs.deepin.org/zh/post/243925)
15. Linux 下固态硬盘恢复误删除文件：[https://bbs.deepin.org/post/244995](https://bbs.deepin.org/post/244995)
16. 个别符号（比如“属于”“不等式”）显示错误：星火商店下载  spk://store/tools/symbol-fonts
17. 如何去除 update-grub 报错“get rootb uuid error”：[https://bbs.deepin.org/post/250728](https://bbs.deepin.org/post/250728)
18. V23 使用KODI无法正常打开的临时解决方案：[https://bbs.deepin.org/post/251175](https://bbs.deepin.org/post/251175)
19. birdtray——为ThunderBird邮箱客户端添加托盘区小图标：[https://bbs.deepin.org/post/251789](https://bbs.deepin.org/post/251789)
20. 魔改suspend.target解决Deepin睡眠休眠问题：[https://bbs.deepin.org/post/253413](https://bbs.deepin.org/post/253413)

## 2.5 系统使用

1. deepin的bilibili个人空间：[https://space.bilibili.com/137324885](https://space.bilibili.com/137324885) （前往查看更多官方教程）
2. Deepin 自用优化：[https://bbs.deepin.org/zh/post/245085](https://bbs.deepin.org/zh/post/245085)

### 2.5.1 桌面环境

1. 在Linux中创建应用图标：[https://bbs.deepin.org/zh/post/225323](https://bbs.deepin.org/zh/post/225323)
2. 安装gnome：[https://bbs.deepin.org/zh/post/207834](https://bbs.deepin.org/zh/post/207834)（见回复）
3. 通过外部应用实现的热区：omd-requ：[https://bbs.deepin.org/zh/post/226623](https://bbs.deepin.org/zh/post/226623)
4. 在Linux下配置人脸识别：[https://bbs.deepin.org/zh/post/224848](https://bbs.deepin.org/zh/post/224848)
5. 深度Linux Deepin设置分辨率为1920x1080：[https://www.jianshu.com/p/89a1bf1905d8](https://www.jianshu.com/p/89a1bf1905d8)
6. 手把手教你用deepin20——多任务视图与窗口技巧：[https://bbs.deepin.org/post/233111](https://bbs.deepin.org/post/233111)
7. better-dde: 让 DDE 更美好：[https://bbs.deepin.org/zh/post/237746](https://bbs.deepin.org/zh/post/237746)
8. deepin使用KDE桌面：[https://bbs.deepin.org/zh/post/239596](https://bbs.deepin.org/zh/post/239596)
9. deepin使用xfce4桌面：[https://bbs.deepin.org/zh/post/239619](https://bbs.deepin.org/zh/post/239619)
10. 退出桌面后如何再次回到桌面登录模式：[https://bbs.deepin.org/zh/post/248488](https://bbs.deepin.org/zh/post/248488)

### 2.5.2 应用处理

1. 删除卸载残留的应用配置：[https://bbs.deepin.org/zh/post/227702](https://bbs.deepin.org/zh/post/227702)
2. 在dde File Manager的较上端加入菜单项（类似深度压缩）：[https://bbs.deepin.org/zh/post/229467](https://bbs.deepin.org/zh/post/229467)
3. deb软件包安装卸载失败修复教程：[https://bbs.deepin.org/zh/post/217421](https://bbs.deepin.org/zh/post/217421)
4. deepin中Typora无法设置为默认程序的解决办法：[https://blog.csdn.net/Charley_Leo/article/details/107091222](https://blog.csdn.net/Charley_Leo/article/details/107091222)
5. deepin更新提示缺少release文件：[https://bbs.deepin.org/post/238809](https://bbs.deepin.org/post/238809)
6. deepin如何搭建本地软件源：[https://bbs.deepin.org/zh/post/239722](https://bbs.deepin.org/zh/post/239722)
7. 浏览器鼠标滑动太慢？ 一个插件解决所有问题——SmoothScroll：[https://bbs.deepin.org/post/242460](https://bbs.deepin.org/post/242460)
8. 连续输错密码无法登录？解决办法：[https://bbs.deepin.org/post/243165](https://bbs.deepin.org/post/243165)
9. 开源的玲珑 deepin20编译版本 先享版本：[https://bbs.deepin.org/post/246491](https://bbs.deepin.org/post/246491)
10. 求GUI软件包管理器：[https://bbs.deepin.org/post/248099](https://bbs.deepin.org/post/248099)
11. 使用UOS安装器安装deb包后直接启动界面程序：[https://bbs.deepin.org/zh/post/248400](https://bbs.deepin.org/zh/post/248400)
12. linux下彻底删除软件及配置文件：[https://blog.csdn.net/weixin_41549393/article/details/118389787](https://blog.csdn.net/weixin_41549393/article/details/118389787)
13. 希望能有一个更好用得软件包及依赖下载工具：[https://bbs.deepin.org/zh/post/248422](https://bbs.deepin.org/zh/post/248422)  （见19楼）

### 2.5.3 输入法

1. 创作自己的输入法皮肤(**适用于旧版fcitx**)：[https://bbs.deepin.org/zh/post/210018](https://bbs.deepin.org/zh/post/210018)
2. 安装及使用Rime输入法--中州韵输入法：[https://bbs.deepin.org/zh/post/207410](https://bbs.deepin.org/zh/post/207410)
3. 手动编绎fcitx5教程：[https://bbs.deepin.org/zh/post/208959](https://bbs.deepin.org/zh/post/208959)
4. Deepin 20.3上使用Fcitx5的方法：[https://bbs.deepin.org/post/224852](https://bbs.deepin.org/post/224852) （个人推荐）
5. deepin正式版/uos家庭版安装fcitx5：[https://bbs.deepin.org/zh/post/223758](https://bbs.deepin.org/zh/post/223758)
6. fcitx5输入法使用技巧&简约皮肤分享：[https://bbs.deepin.org/zh/post/223743](https://bbs.deepin.org/zh/post/223743)
7. deepin深度简约 fcitx5主题：[https://bbs.deepin.org/zh/post/228832](https://bbs.deepin.org/zh/post/228832)
8. 中州韵98五笔助手：[https://bbs.deepin.org/zh/post/231400](https://bbs.deepin.org/zh/post/231400)
9. 输入法不跟随光标：[https://bbs.deepin.org/zh/post/231849](https://bbs.deepin.org/post/231849)
10. 在deepin上使用fcitx5输入法：[https://bbs.deepin.org/zh/post/243632](https://bbs.deepin.org/zh/post/243632)（个人推荐）
11. 安装了fcitx5输入法就无法安装其它输入法 的解决方法：[https://bbs.deepin.org/post/246805](https://bbs.deepin.org/post/246805)
12. 制作 fcitx5 的自定义词库：[https://bbs.deepin.org/post/253191](https://bbs.deepin.org/post/253191)
13. 输入法用shift 切换中英文：[https://bbs.deepin.org/post/252988](https://bbs.deepin.org/post/252988)
14. 中州韵98五笔助手：中州韵参数与词库管理的可视化工具：[https://bbs.deepin.org/post/251845](https://bbs.deepin.org/post/251845)

### 2.5.4 性能

1. 交换空间：[https://wiki.archlinux.org/title/Swap_(简体中文)](https://wiki.archlinux.org/title/Swap_(简体中文)) （适用于deepin，安装系统后可按“交换文件”部分设置swap）
2. 对小内存用户的使用建议 防卡设置：[https://bbs.deepin.org/zh/post/199563](https://bbs.deepin.org/zh/post/199563) （文件所在位置为/usr/lib/sysctl.d/deepin.conf ，要以管理员身份打开）
3. 为什么空闲时CPU睿频起飞：[https://bbs.deepin.org/zh/post/222430](https://bbs.deepin.org/zh/post/222430)
4. 解决Deepin下CPU不能自主降频问题：[https://bbs.deepin.org/zh/post/194744](https://bbs.deepin.org/zh/post/194744)
5. deepin桌面卡死处理：[https://bbs.deepin.org/zh/post/225151](https://bbs.deepin.org/zh/post/225151)
6. 启动wine qq时偶发性使桌面崩溃：[https://bbs.deepin.org/zh/post/207380](https://bbs.deepin.org/zh/post/207380)
7. 性能与功耗之间的权衡与调整第三版：[https://bbs.deepin.org/zh/post/223793](https://bbs.deepin.org/zh/post/223793)
8. nvidia显卡firefox硬解在线视频：[https://bbs.deepin.org/zh/post/233052](https://bbs.deepin.org/zh/post/233052)
9. deepin如何给根目录扩容：[https://bbs.deepin.org/zh/post/237402](https://bbs.deepin.org/zh/post/237402)
10. 替 swap 辩护：常见的误解：[https://bbs.deepin.org/zh/post/242907](https://bbs.deepin.org/zh/post/242907)
11. 用 ZRAM 替代 SWAP，榨干内存的每一分价值：[https://bbs.deepin.org/post/247916](https://bbs.deepin.org/post/247916)
12. 改善intel iris xe集显低压轻薄本的核显性能释放技巧：[https://bbs.deepin.org/post/246471](https://bbs.deepin.org/post/246471)
13. 获取进程处理器及内存占用等信息：[https://bbs.deepin.org/post/247373](https://bbs.deepin.org/post/247373)

### 2.5.5 命令与终端

1. 使用过的一些命令分享：[https://bbs.deepin.org/zh/post/223660](https://bbs.deepin.org/zh/post/223660)
2. 以root权限运行命令配置无需输入密码（sudo和pkexec）：[https://bbs.deepin.org/zh/post/229374](https://bbs.deepin.org/zh/post/229374)
3. apt和apt-get的区别：[https://bbs.deepin.org/zh/post/208702](https://bbs.deepin.org/zh/post/208702)
4. 查看系统安装的日期与时间：[https://bbs.deepin.org/zh/post/229311](https://bbs.deepin.org/zh/post/229311)
5. 手把手教你装zsh，所有github链接都换成了gitee，包你安装顺利：[https://bbs.deepin.org/zh/post/237774](https://bbs.deepin.org/zh/post/237774)
6. 使用fish代替bash，真好用：[https://bbs.deepin.org/zh/post/238189](https://bbs.deepin.org/zh/post/238189)
7. 使用alias简化命令：[https://bbs.deepin.org/zh/post/239361](https://bbs.deepin.org/zh/post/239361)
8. 一个系统安装包配置脚本 autosetup for Deepin OS：[https://bbs.deepin.org/post/241041](https://bbs.deepin.org/post/241041)
9. 写了个脚本，让apt-ftparchieve也能增量扫描更新deb仓库：[https://bbs.deepin.org/post/242570](https://bbs.deepin.org/post/242570)
10.  命令行怎么修改语言：[https://bbs.deepin.org/post/247451](https://bbs.deepin.org/post/247451)
11. transhell——一个让bash脚本可以国际化的方案：[https://bbs.deepin.org/post/249136](https://bbs.deepin.org/post/249136)
12. 一些命令：[https://bbs.deepin.org/post/250551](https://bbs.deepin.org/post/250551)（有些解释不太对，请看帖子下大佬们的补充）

### 2.5.6 文件处理

1. 不安装任何软件实现局域网快速共享文件：[https://bbs.deepin.org/zh/post/209250](https://bbs.deepin.org/zh/post/209250)
2. 如何设置共享文件，windows访问deepin共享文件方法：[https://bbs.deepin.org/zh/post/195192](https://bbs.deepin.org/zh/post/195192)
3. deepin下如何访问Windows共享资料：[https://bbs.deepin.org/zh/post/208246](https://bbs.deepin.org/zh/post/208246)
4. Linux桌面环境与Win10之间共享文件夹的互相访问：[https://www.jianshu.com/p/f872fe1d02dc](https://www.jianshu.com/p/f872fe1d02dc)
5. 回收站无法清空的解决方法：[https://bbs.deepin.org/zh/post/205839](https://bbs.deepin.org/zh/post/205839)
6. 开机自动挂载webdav：[https://bbs.deepin.org/zh/post/229044](https://bbs.deepin.org/zh/post/229044)
7. FTP服务搭建（vsftpd配置使用）：[https://blog.csdn.net/babyfengfjx/article/details/122837362](https://blog.csdn.net/babyfengfjx/article/details/122837362)
8. 使用docker拉取CloudDrive镜像实现把网盘挂载到系统：[https://bbs.deepin.org/zh/post/237552](https://bbs.deepin.org/zh/post/237552)
9. 格式化硬盘后文件管理器显示62.3G占用：[https://bbs.deepin.org/post/238570](https://bbs.deepin.org/post/238570)
10. 一篇分权共享 samba 文件夹的水贴：[https://bbs.deepin.org/zh/post/239448](https://bbs.deepin.org/zh/post/239448)
11. Deepin20访问WINDOWS10共享盘并获取读写权限心路历程：[https://bbs.deepin.org/post/245662](https://bbs.deepin.org/post/245662)

### 2.5.7 其他

1. 在deepin上使用LaTeX：[https://bbs.deepin.org/zh/post/229734](https://bbs.deepin.org/zh/post/229734)
2. 一句命令行安装live系统 解决手动分区无备份还原系统等问题：[https://bbs.deepin.org/zh/post/215165](https://bbs.deepin.org/zh/post/215165)
3. Windows ssh 客户端 PuTTY 正向与反向流量转发（转）：[https://bbs.deepin.org/zh/post/230148](https://bbs.deepin.org/zh/post/230148)
4. deepin下ssh常用网络功能：[https://bbs.deepin.org/zh/post/231835](https://bbs.deepin.org/zh/post/231835)
5. 桌面固定网络驱动器的教程视频-适用群晖、威联通NAS/共享文件夹：[https://bbs.deepin.org/zh/post/231878](https://bbs.deepin.org/zh/post/231878)
6. 助力轻松修改你的系统用户名：[https://bbs.deepin.org/zh/post/232575](https://bbs.deepin.org/zh/post/232575)
7. 深度文件管理器改造小记：[https://bbs.deepin.org/zh/post/237345](https://bbs.deepin.org/zh/post/237345)
8. 找了很久的 while 无限循环终于解决了输入判断的问题：[https://bbs.deepin.org/zh/post/236712](https://bbs.deepin.org/zh/post/236712)
9. 自定义控制中心的关于本机：[https://bbs.deepin.org/zh/post/237500](https://bbs.deepin.org/zh/post/237500)
10. 如何设置锁屏时间为3min?：[https://bbs.deepin.org/zh/post/237606](https://bbs.deepin.org/zh/post/237606)
11. 控制中心 VPN 网关只能输入 IP 地址很反人类？试试这个：[https://bbs.deepin.org/zh/post/238342](https://bbs.deepin.org/zh/post/238342)
12. 当linux杀毒软件遇到windows病毒——几款linux杀毒软件测试：[https://bbs.deepin.org/zh/post/239285](https://bbs.deepin.org/zh/post/239285)
13. gocron定时任务：[https://bbs.deepin.org/zh/post/239475](https://bbs.deepin.org/zh/post/239475)
14. deepin使用再生龙Clonezilla做备份还原：[https://bbs.deepin.org/zh/post/239899](https://bbs.deepin.org/zh/post/239899)
15. 浅谈Deepin备份恢复：[https://bbs.deepin.org/post/241469](https://bbs.deepin.org/post/241469)
16. 一次完整的系统盘恢复经历：[https://bbs.deepin.org/post/242956](https://bbs.deepin.org/post/242956)
17. 想问下应用商店是怎么只获取用户安装的应用的：[https://bbs.deepin.org/zh/post/227355](https://bbs.deepin.org/zh/post/227355)
18. 深度商店巨量垃圾图标缓存位置：[https://bbs.deepin.org/zh/post/244113](https://bbs.deepin.org/zh/post/244113)
19. 如何删除文件管理器内多出来的百度网盘、抖音等图标：[https://bbs.deepin.org/post/245100](https://bbs.deepin.org/post/245100)
20. btrfs文件系统的创建、挂载、调整：[https://bbs.deepin.org/post/246616](https://bbs.deepin.org/post/246616)
21. 分享几例 Linux 环境变量故障的解决：[https://bbs.deepin.org/post/246288](https://bbs.deepin.org/post/246288)
22. 今天写写有关deepin的网络安全：[https://bbs.deepin.org/post/246674](https://bbs.deepin.org/post/246674)
23. 如何获取对应系统日志：[https://bbs.deepin.org/post/247764](https://bbs.deepin.org/post/247764)
24. 在deepin上使用容器扩展生态（支持图形软件甚至桌面环境）：[https://bbs.deepin.org/post/248123](https://bbs.deepin.org/post/248123)
25. 常用快捷键整理：[https://bbs.deepin.org/zh/post/243512](https://bbs.deepin.org/zh/post/243512)
26. 怎么取消Alt+空格的快捷键：[https://bbs.deepin.org/post/248391](https://bbs.deepin.org/post/248391)
27. Deepin默认的时区设置浏览器不认导致变慢解决方法：[https://bbs.deepin.org/zh/post/253239](https://bbs.deepin.org/zh/post/253239)  （概括：改为上海时间）

## 2.6 系统美化
### 2.6.1 壁纸

1. 壁纸与屏保--让你的deepin更好用：[https://bbs.deepin.org/zh/post/225531](https://bbs.deepin.org/zh/post/225531)
2. 让Deepin吃上macOS的动态壁纸：[https://bbs.deepin.org/zh/post/206933](https://bbs.deepin.org/zh/post/206933)
3. deepin上超好用的动态壁纸软件-幻梦动态壁纸：[https://bbs.deepin.org/zh/post/220785](https://bbs.deepin.org/zh/post/220785)
4. 幻梦动态壁纸,DIY系统版：[https://bbs.deepin.org/zh/post/228082](https://bbs.deepin.org/zh/post/228082)
5. 发现deepin登陆壁纸寻找逻辑：[https://bbs.deepin.org/zh/post/227912](https://bbs.deepin.org/zh/post/227912)
6. 觉得启动器背景太丑？试试这个：[https://bbs.deepin.org/zh/post/237678](https://bbs.deepin.org/zh/post/237678)
7. 教你怎样自己制作暗色壁纸：[https://bbs.deepin.org/zh/post/238967](https://bbs.deepin.org/zh/post/238967)
8. 壁纸软件更新，一小波新功能：[https://bbs.deepin.org/post/246416](https://bbs.deepin.org/post/246416)（[GitHub](https://github.com/ambition-echo/earth_wallpaper)）
9. 壁纸管理软件 One Wallhaven：[https://bbs.deepin.org/post/245752](https://bbs.deepin.org/post/245752)
#### 2.6.1.1 壁纸图片

1. 壁纸汇总：[https://gfdgd-xi.github.io/deepin.background.github.io/](https://gfdgd-xi.github.io/deepin.background.github.io/) （感谢 [@gfdgd xi](https://bbs.deepin.org/user/239113)）
2. deepin壁纸（官方）：[https://bbs.deepin.org/zh/post/209087](https://bbs.deepin.org/zh/post/209087)
3. deepin主题壁纸分享！（已上架应用商店）：[https://bbs.deepin.org/post/243280](https://bbs.deepin.org/post/243280)
4. 官方壁纸分享！（第三期）：[https://bbs.deepin.org/post/241486](https://bbs.deepin.org/post/241486)
5. Zorin OS 壁纸：[https://bbs.deepin.org/zh/post/219669](https://bbs.deepin.org/zh/post/219669)
6. 两张失散已久的壁纸：[https://bbs.deepin.org/zh/post/223085](https://bbs.deepin.org/zh/post/223085)
7. 从微博搬过来的两张壁纸：[https://bbs.deepin.org/zh/post/215923](https://bbs.deepin.org/zh/post/215923)
8. 一个果里果气的桌面——CuteFish Desktop：[https://bbs.deepin.org/zh/post/223226](https://bbs.deepin.org/zh/post/223226)
9. deepin 20.4& Cutefish OS 0.8壁纸：[https://bbs.deepin.org/zh/post/231497](https://bbs.deepin.org/zh/post/231497)
10. deepin壁纸大赛优质壁纸分享：[https://bbs.deepin.org/zh/post/236372](https://bbs.deepin.org/zh/post/236372)
11. 壁纸分享，定时更新：[https://bbs.deepin.org/zh/post/239742](https://bbs.deepin.org/zh/post/239742)
12. Deepin味的Ubuntu壁纸：[https://bbs.deepin.org/post/244310](https://bbs.deepin.org/post/244310)
13. 比较简约的壁纸：[https://bbs.deepin.org/post/244873](https://bbs.deepin.org/post/244873)
14. 华芯-壁纸分享一：[https://bbs.deepin.org/post/245440](https://bbs.deepin.org/post/245440)
15. 兔年壁纸来啦！（内含特别款）：[https://bbs.deepin.org/post/251092](https://bbs.deepin.org/post/251092)
16. 蹭下热度，分享个流浪deepin的壁纸设计-已更新：[https://bbs.deepin.org/post/250827](https://bbs.deepin.org/post/250827)
17. 用AI画了张deepin飞船的壁纸图片，你打几分？：[https://bbs.deepin.org/post/251891](https://bbs.deepin.org/post/251891)
18. 高清壁纸分享第3期：[https://bbs.deepin.org/post/253308](https://bbs.deepin.org/post/253308)

### 2.6.2 程序窗口

1. 一行命令美化标题栏大额头，可设置任意高度和任意颜色：[https://bbs.deepin.org/zh/post/197036](https://bbs.deepin.org/zh/post/197036)
2. 定制版最大化最小化关闭按钮：[https://bbs.deepin.org/zh/post/210071](https://bbs.deepin.org/zh/post/210071)
3. 将菜单显示在标题栏上：[https://bbs.deepin.org/zh/post/224774](https://bbs.deepin.org/zh/post/224774)
4. 第三方应用圆角适配，移植于cutefish：[https://bbs.deepin.org/zh/post/226223](https://bbs.deepin.org/zh/post/226223)
5. 分享一种缩小应用标题栏（额头）高度的方法：[https://bbs.deepin.org/zh/post/234783](https://bbs.deepin.org/zh/post/234783)

### 2.6.3 Dock、顶栏

1. dde-top-panel 顶栏程序+全局菜单 (V20)：[https://bbs.deepin.org/zh/post/195128](https://bbs.deepin.org/zh/post/195128)
2. 定制的dde-dock分享：[https://bbs.deepin.org/zh/post/224228](https://bbs.deepin.org/zh/post/224228)
3. Linux桌面最轻量的Dock之Plank：[https://bbs.deepin.org/zh/post/215170](https://bbs.deepin.org/zh/post/215170)
4. Deepin 上的实时网速推荐 lfxNet（重构 lfxSpeed ）：[https://bbs.deepin.org/zh/post/213210](https://bbs.deepin.org/zh/post/213210)
5. 个性化随机启动器图标：[https://bbs.deepin.org/post/242038](https://bbs.deepin.org/post/242038)
6. 更改启动器图标为deepin的logo：[https://bbs.deepin.org/post/252819](https://bbs.deepin.org/post/252819)

### 2.6.4 字体

1. 如何在deepinOS上加入方正字体：[https://bbs.deepin.org/zh/post/228540](https://bbs.deepin.org/zh/post/228540)
2. 超1000款UOS字体包：链接: [https://cloud.189.cn/t/uyeuQjU3IBZz](https://cloud.189.cn/t/uyeuQjU3IBZz) 密码: dr0l
3. 华为鸿蒙中文字体DEB包：[https://bbs.deepin.org/zh/post/221591](https://bbs.deepin.org/zh/post/221591)
4. 更换系统默认中文字体的技巧：[https://bbs.deepin.org/zh/post/237625](https://bbs.deepin.org/zh/post/237625)
5. oooooomygosh 得意黑字体：[https://bbs.deepin.org/post/246007](https://bbs.deepin.org/post/246007)（[GitHub](https://github.com/atelier-anchor/smiley-sans)）
6. 荣耀字体推荐：[https://bbs.deepin.org/post/246866](https://bbs.deepin.org/post/246866)
7. [deb]荣耀字体 HONOR Sans CN 简体中文版 v1.02 下载：[https://bbs.deepin.org/post/247323](https://bbs.deepin.org/post/247323)
8. [deb]阿里妈妈东方大楷：[https://bbs.deepin.org/zh/post/248908](https://bbs.deepin.org/zh/post/248908)
9. [deb]标小智龙珠体(带圆点的卡通字体)：[https://bbs.deepin.org/post/250691](https://bbs.deepin.org/post/250691)
10. [deb]Sarasa 更纱黑体 0.40.0（中文字体）：[https://bbs.deepin.org/post/251008](https://bbs.deepin.org/post/251008)
11. [deb]思源黑体/宋体/ SC/CN 版、等宽版 下载：[https://bbs.deepin.org/post/251539](https://bbs.deepin.org/post/251539)

### 2.6.5 其他

1. 【Mac布局美化】美化无止境，只要肯折腾：[https://bbs.deepin.org/zh/post/196796](https://bbs.deepin.org/zh/post/196796)
2. ~~Bloom Origin 图标提取分享：~~[~~https://bbs.deepin.org/zh/post/223230~~](https://bbs.deepin.org/zh/post/223230)（这里的图标包有些许 BUG，建议直接使用来自星火应用商店的 Blossom 图标）
3. 图标主题的继承关系：[https://bbs.deepin.org/zh/post/203946](https://bbs.deepin.org/zh/post/203946)
4. deepin美化系列教程（五）：[https://bbs.deepin.org/zh/post/227803](https://bbs.deepin.org/zh/post/227803)
5. Win11开机logo(plymouth主题包)：[https://bbs.deepin.org/post/241268](https://bbs.deepin.org/post/241268)
6. 图标主题分享：deepin icon 2022：[https://bbs.deepin.org/post/245970](https://bbs.deepin.org/post/245970)
7. 自用 rEFInd 美化主题 【强烈推荐】：[https://bbs.deepin.org/post/250648](https://bbs.deepin.org/post/250648)
8. V23Alpha2支持自定义主题色了，分享一些个人觉得好看的颜色：[https://bbs.deepin.org/post/251239](https://bbs.deepin.org/post/251239)
9. 如何换掉deepin的开机动画，改成静态流浪地球2moss图：[https://bbs.deepin.org/post/250646](https://bbs.deepin.org/post/250646)

## 2.7 系统有关介绍

1. 你好，deepin：[https://bbs.deepin.org/zh/post/223462](https://bbs.deepin.org/zh/post/223462)
2. 深度桌面环境介绍：[https://bbs.deepin.org/zh/post/213341](https://bbs.deepin.org/zh/post/213341)
3. 分享那些可能被你忽略的deepin自带工具：[https://bbs.deepin.org/zh/post/227223](https://bbs.deepin.org/zh/post/227223)
4. 20.2.3新功能展示——OCR文字识别：[https://bbs.deepin.org/zh/post/225260](https://bbs.deepin.org/zh/post/225260)
5. 万众7待，焕新出发，deepin新版商店为你而来：[https://bbs.deepin.org/zh/post/222677](https://bbs.deepin.org/zh/post/222677)
6. 全新的图标主题，就静静地欣赏，细细的品味：[https://bbs.deepin.org/zh/post/223494](https://bbs.deepin.org/zh/post/223494)
7. 20.3新版本特性介绍（一）全局搜索：[https://bbs.deepin.org/zh/post/228676](https://bbs.deepin.org/zh/post/228676)
8. 20.3新版本特性-文件管理器：[https://bbs.deepin.org/zh/post/230030](https://bbs.deepin.org/zh/post/230030)
9. 20.4新版本特性①藏宝箱：[https://bbs.deepin.org/zh/post/231326](https://bbs.deepin.org/zh/post/231326)
10. 20.4新版本特性②安装器：[https://bbs.deepin.org/zh/post/231570](https://bbs.deepin.org/zh/post/231570)
11. 【视频】怀一腔孤勇，筑梦前行：[https://bbs.deepin.org/zh/post/231100](https://bbs.deepin.org/zh/post/231100)
12. 20.4深度使用体验：[https://bbs.deepin.org/zh/post/231912](https://bbs.deepin.org/zh/post/231912)
13. deepin 20.5——人脸解锁背后的那些事：[https://bbs.deepin.org/zh/post/234359](https://bbs.deepin.org/zh/post/234359)
14. 20.6 deepin文字识别突然变得好用了？OCR升级的秘密在这里：[https://bbs.deepin.org/zh/post/238149](https://bbs.deepin.org/zh/post/238149)

## 2.8 Live 系统/环境

1. 浅探 deepin Live 和修复 Linux 引导：[https://www.yuque.com/pzm9012/ct5ume/ihc99w](https://www.yuque.com/pzm9012/ct5ume/ihc99w)
2. Deepin Community Live CD 1.6.0：[https://bbs.deepin.org/post/247602](https://bbs.deepin.org/post/247602)
3. Deepin Community Live CD Install 1.7.0：[https://bbs.deepin.org/post/247643](https://bbs.deepin.org/post/247643)
4. 用ventoy运行deepin不用安装到硬盘的方法：[https://bbs.deepin.org/zh/post/223203](https://bbs.deepin.org/zh/post/223203)