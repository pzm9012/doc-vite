# 在deepin上玩游戏
大多数Windows游戏并不能直接运行在deepin上，需要借助wine或是Proton这类兼容工具。本节主要收集部分Windows游戏在deepin上运行的教程，当然，其他Linux系统亦可参考。

## 运行原神
:::tip 出处
[https://bbs.deepin.org.cn/post/268240](https://bbs.deepin.org/zh/post/268240)，感谢[Amber](https://bbs.deepin.org.cn/user/285179)提供教程。
:::

1. 安装游戏本体。理论可以通过An anime game lancher下载 **（未经测试！）**，然后将它放在NTFS分区。

2. 在wine运行器中安装任意版本GE proton wine，在wine运行器主页“选择wine版本”栏的下拉菜单中会有具体路径。
![1-2-1.png](https://storage.deepin.org/thread/202308301730531280_%E6%88%AA%E5%9B%BE_deepin-wine-runner_20230830173002.png)

回到wine游戏助手，如图操作，填入路径即可。
![1-2-2.png](https://storage.deepin.org/thread/202308301733409725_%E6%88%AA%E5%9B%BE_lutris_20230830173217.png)
![1-2-3.png](https://storage.deepin.org/thread/202308301734095897_%E6%88%AA%E5%9B%BE_lutris_20230830173306.png)

3. 去深度商店或星火商店里下载wine游戏助手，然后打开它，首先点左上角+号，然后弹出的框中选‘‘在winegame网站搜索游戏’’（截图中我还省略了一步）然后在弹出的搜索框搜启动自定义游戏，点击搜索结果接着选最顶上那个“带完整DXDLL的64位wine7.1”，点安装。
![1-3-1.png](https://storage.deepin.org/thread/20230830172228638_202301121639407037_%E6%88%AA%E5%9B%BE_lutris_20230112163536.png)

然后选择“YuanShen.exe”所在路径，点继续，等它操作完成就可以啦
![1-3-2.png](https://storage.deepin.org/thread/202308301723191087_202301121641514647_%E6%88%AA%E5%9B%BE_lutris_20230112164141.png)

## 通过steam运行Windows游戏
:::tip 出处
[https://bbs.deepin.org.cn/post/277794](https://bbs.deepin.org.cn/post/277794)，感谢[Mr.Tree](https://bbs.deepin.org.cn/user/310436)提供教程

本教程以极品飞车17：最高通缉为例
:::
1. 在windows下安装好游戏。
2. 找到游戏所在路径，将游戏拷贝至deepin分区下面，建议放在`~/.deepinwine`下，此处作者放在桌面上。
![step2](https://storage.deepin.org/thread/202408270221574059_image.png)

3. 首先通过应用商店下载steam，安装完成后登录steam，进入“库”页面
![step3](https://storage.deepin.org/thread/202408270224442081_image.png)

4. 点击下方的 “添加游戏——添加非steam游戏”。
![step4](https://storage.deepin.org/thread/20240827022708319_image.png)

5. 点击浏览——选择游戏所在路径——找到游戏目录下的.exe文件——打开——添加所选程序。
![step5](https://storage.deepin.org/thread/202408270229081318_image.png)

6. 在库里找到刚添加的NFS13.exe——右键属性——兼容性——勾选强制使用特定Steam Play兼容性工具——选择Proton 9.0-2——然后关闭页面。
![step6](https://storage.deepin.org/thread/202408270233071883_image.png)

然后就可以通过Steam点击开始游戏，愉快的开始玩耍啦~