# Collection of the solutions
:::tip
This page collects a small selection of solutions to frequently asked questions from the posts in deepin forum. Some of the solutions provided in this page are a solution to the corresponding problem. They are not the only one and for reference only.
:::

## The time is not synchronized between Linux and Windows
:::tip Provenance
[https://bbs.deepin.org/post/253670 comment3](https://bbs.deepin.org/post/253670?postId=1438866)
:::
### Time and timezone config on Windows
Windows directly regard the CMOS time as the current display time, and does not convert according to the time zone. In this way, each time the system time zone is adjusted, the system will calculate the current time according to the adjusted time zone, after determining, it will also modify the time in CMOS (That is to say, each time the time zone is adjusted, after the Settings are saved, the CMOS time will also be changed by the operating system. You should note that after the different operating systems adjust the time, The CMOS time will also be changed, which is in common).
### Time and timezone config on Linux
In Linux and MacOS, the current mainboard CMOS time is used as the Greenwich Mean Time, and the current system time is determined according to the time zone set by the system. For example, if the time zone is set to GMT+08:00 Beijing timezone and the current CMOS time is 03:00, the system will add them together to show that the current system time displayed on the desktop is 11:00.
### Solutions
There are two way to solve the problem.

a. Let Windows use the way how Linux manages its time, that is to enable UTC on Windows;

b. Let Linux use the way how Windows manages ist time, that is to disable UTC on Linux.

My personal suggestion is to use the second way, for Windows is usually the main system. This modification is not recommended for Windows. However, I'll cover them all.

1. Enable UTC on Windows

Open the Run window (shortcut Win+R), then type regedit to launch the registry editor, And find the poositon `HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Control/TimeZoneInformation/` (you can paste it directly into the registry editor's address bar), Then add a key value of type `REG DWORD` called `RealTimeIsUniversal` with a key of `1`. The time returns to normal after the restart.

2. Disable UTC on deepin

Press Ctrl+Alt+T to open termminal, then input
```sh
sudo deepin-editor /etc/default/rcS
```
Locate the line that says `UTC=yes` and change it to `UTC=no`, then save the file using Ctrl+S for the change to take effect immediately. In this way the time synchronization issue between Windows and Linux can be solved.

3. Press Ctrl+Alt+T to open termminal, then press the following commads
```sh
timedatectl set-local-rtc 1
timedatectl
```

## Delete the needless kernels
:::tip Provenance
[https://bbs.deepin.org/post/253636?postId=1438575 Comment2](https://bbs.deepin.org/post/253636?postId=1438575)
:::
Show all the kernels in the system
```sh
sudo dpkg -l | grep "linux-header|linux-image"
```

Delete the needless kernels
```sh
sudo apt purge xxxxx
```

## Customize Screen scaling
:::tip Provenance
[https://bbs.chinauos.com/zh/post/9328 Comment2](https://bbs.chinauos.com/zh/post/9328)
:::
Run the following commands to install `dconf editor`
```sh
sudo apt install dconf-editor
```
Then find `window-scale` and change the value of it.

## Magnifier
:::tip Provenance
[https://bbs.deepin.org/post/253561?postId=1438805](https://bbs.deepin.org/post/253561?postId=1438805)
:::
`Super + +` to enable and magnify

`Super + -` to shrink

`Super + 0 `to disable

## Some appliccations goes wrong after join in deepin beta
:::tip Provenance
[https://bbs.deepin.org/zh/post/254022?postId=1442273 Comment7](https://bbs.deepin.org/zh/post/254022?postId=1442273)
:::
Run the following commands to update local warehouse index information
```sh
sudo rm -rf /var/lib/apt/lists
sudo apt update
```
and then try to reinstall.

## Clear the address bar history of deepin file manager
:::tip Provenance
[https://bbs.deepin.org/post/254424?postId=1445509 Comment3](https://bbs.deepin.org/post/254424?postId=1445509)
:::
Open `~/.config/deepin/dde-file-manager/dde-file-manager.obtusely.json`, and then delete the value of `SearchHistory`.