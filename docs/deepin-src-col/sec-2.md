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

