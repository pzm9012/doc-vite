# 浅探 deepin Live 和修复 Linux 引导
> 本文的其他发布平台：[deepin Wiki](https://wiki.deepin.org/zh/04_%E6%8C%89%E5%90%AF%E5%8A%A8%E9%A1%BA%E5%BA%8F%E5%88%92%E5%88%86/00_%E7%B3%BB%E7%BB%9F%E5%90%AF%E5%8A%A8%E5%89%8D/01_%E5%90%AF%E5%8A%A8%E9%A1%B9%E7%9B%B8%E5%85%B3/%E6%B5%85%E6%8E%A2deepin-Live%E5%92%8C%E4%BF%AE%E5%A4%8DLinux%E5%BC%95%E5%AF%BC)、[语雀](https://www.yuque.com/pzm9012/ct5ume/ihc99w)
> （教程仅供参考，请以实际情况为准。）
本文是我综合网络上的几篇教程和自己不久前用 LiveCD 修复 UOS 引导的经历写成的，前半部分是对 deepin Live 的说明，后半部分是修复 Linux 引导的可能方法。
## 准备
你需要有一个存储空间足够大的、能被制作成启动盘的 U 盘或其他移动存储设备（推荐8 GB或更大，USB 3.0 或以上）。建议使用能多系统启动的 Ventoy ：在官网[下载 Ventoy](https://ventoy.net/cn/download.html)，解压后运行，安装 Ventoy 到 U 盘中（ U 盘会被清空，请提前迁移好其中的文件），再复制镜像进去（或者直接引导启动本地硬盘上的镜像文件）（详细介绍请阅读[文档](https://ventoy.net/cn/doc_news.html)）。制作后 U 盘存储文件的功能基本不受影响。如果是制作常规的（单系统）启动盘，可以使用Rufus（仅 Windows 版）、Etcher等软件（下载不了？我转存了一份：https://pan.hechuanyun.xyz/s/KzghL 或者 https://cloud.189.cn/web/share?code=EbU3auiem2ue（访问码：h4sf））。

拓展阅读：[deepin下用Ventoy装Windows](https://www.yuque.com/pzm9012/ct5ume/uf10gv)

Live 系统一般是用来体验或者修复本地 Linux 的，部分功能可能不正常，对闭源显卡驱动可能缺少支持，关机之后**数据不保留**（部分 Linux 支持使用 Persistence 保存数据以供下次使用，deepin 镜像无此功能）。使用 U 盘上的 Live 系统时，**关机之前切勿拔下 U 盘。**

本文只讲述 ISO 镜像形式的 Live 系统，安装到本地的 Live 的有关信息请阅读其他教程。

## 一、进入deepin live

### 1.1 通过 deepin 安装镜像进入 Live 
首先，制作一个 deepin 安装镜像的启动盘，然后重启电脑，按启动热键进启动菜单，选择从 U 盘启动。

UEFI 启动（现在的大部分电脑）：当任意一个“Install Deepin”高亮时（新电脑建议选择 kernel 内核版本较高的选项），按 e ，然后用方向键移动光标，删去 'livecd-installer'  （也有人认为是删去“-installer ”），后面的代码改为 'locales=zh_CN.UTF-8' （s不要漏了，若一样则不用改），按 F10 进入。
