# 更多
## 清理不需要的系统内核
:::tip 出处
见 [https://bbs.deepin.org/post/253636](https://bbs.deepin.org/post/253636) 2楼。
:::
查询当前系统的全部内核
```
sudo dpkg -l|egrep "linux-header|linux-image"
``` 

清理不需要的内核
```
sudo apt purge xxxxx
```

## 放大镜
:::tip 出处
见 [https://bbs.deepin.org/zh/post/253561](https://bbs.deepin.org/zh/post/253561) 回复。
:::
Super + +，启用放大镜；

Super + -，缩小放大镜；

Super + 0，关闭放大镜。

## 检查应用的开机启动情况
:::tip 出处
见[https://bbs.deepin.org/post/253444](https://bbs.deepin.org/post/253444)。
:::
检查

systemctl list-unit-files

service --status-all

/etc/xdg/autostart 目录下