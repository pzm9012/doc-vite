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
