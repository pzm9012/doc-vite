# 更多
## 清理不需要的系统内核
:::info
出处：[https://bbs.deepin.org/post/253636](https://bbs.deepin.org/post/253636) 2楼。
:::
查询当前系统的全部内核
```
sudo dpkg -l|egrep "linux-header|linux-image"
``` 

清理不需要的内核
```
sudo apt purge xxxxx
```
