# Frequently-asked Questions
:::tip
The solutions we mentioned are not the only way to solve the problems. It is for reference only.
Use the outline to find questions on this page.
:::

## Posting & Questioning on deepin Forum
[See This Page](/en/deepin-solutions/how-to-question)

## Problems Using deepin
### The terminal prompts for a password, but nothing happens when I enter it.
There is no echo on the screen when entering the password. Just press Enter after entering the password.

### The files in the Windows system disk have a small lock icon and become read-only and cannot be modified.
Enter Windows, open the Control Panel (for Windows 11, please open it through "Windows Tools"), go to ```"Hardware and Sound" > "Power Options" > "Choose what the power buttons do"```, click on line 3 ```Change settings that are currently unavailable (Administrator required)```, find ```Enable Fast Startup``` under ```Shutdown Settings``` and uncheck it, click ```Save Changes```. Or, enter Windows first every time, and then restart to enter deepin.

### When multiple systems are installed on the computer, the time of deepin is 8 hours later than that of Windows.
Windows regards the computer's hardware time (RTC) as local time (local time = RTC), while Linux regards the computer's hardware time as UTC time (local time = RTC+8 = UTC+8). The solution is to let Windows use UTC or let deepin manage time the way Windows does. [See here for details].

### After turning on passwordless login and automatic login, it prompts "Your login keyring has not been unlocked" when entering the desktop.
Execute in terminal `sudo rm -f ~/.local/share/keyrings/login.keyring`.

### Self-examination of reasons for control center update failure.
Open a terminal and execute sudo apt update && sudo apt full-upgrade.

### Edit the content in the right-click menu "New Document"
Modify files in `~/.Templates/` and `./usr/share/templates/`

### Window special effects cannot be turned on
One possible reason is the installation of Huayu input method. If this is the case, please install another input method instead.

### A potentially useful solution for no sound from the sound card (mainly applicable to devices with Intel 12/13 generation processors, does not work with microphones)
Edit `/etc/default/grub`, `GRUB_CMDLINE_LINUX_DEFAULT`, add this line `snd_hda_intel.dmic_detect=0`. If the sound card works normally under Ubuntu, you can extract the driver from the Ubuntu `/lib/firmware/intelfolder` and replace the corresponding folder under deepin. 

[Original post](https://bbs.deepin.org/post/248032)

### Browser web page translation is not available
> (For people in China)

Web page translation uses Google Translate, and you can install a translation extension yourself instead.

## Use of third-party software
### WPS Office fonts display abnormally
Get the "Win Fonts" package from [Spark Store](https://www.spark-app.store) after installing it . Or see: [WPS page display problem](https://wiki.deepin.org/zh/WPS页面显示问题).

### Firefox displays too large UI
Open `about:config` the page, select "I knnow the risks", and change `browser.display.os-zoom-behavior` to 0.

[References](https://blog.shenmo.tech/post/%E4%BF%AE%E5%A4%8D%E7%81%AB%E7%8B%90103%E7%89%88%E6%9C%AC%E5%B7%A8%E5%A4%A7%E8%BF%87%E5%A4%A7ui%E9%97%AE%E9%A2%98/)

### Delete the Baidu Netdisk shortcut in the file manager "Disk"
Delete the `.desktop` file in `/usr/share/dde-file-manager/extensions/appEntry`.

### VSCode uses native title bar
Find this item in settings Window: `Title Bar Style` and select `custom`.

### Windows application does not respond when starting
Delete the folder corresponding to the application in the folder in the home directory `.deepinwine` (the application data may be deleted, but WeChat and QQ chat records and files will not be affected), and then try to restart the application again.

The folder `.deepinwine` is a hidden item. Press Ctrl+H in the file manager to display hidden files. Take WeChat as an example, delete `~/.deepinwine/Deepin-WeChat/`.

### Windows app prompts for update, but nothing happens after clicking update
This is normal, please get pushed updates from the app store. If you update by yourself, please manually download the latest version of the installation program and run it in the corresponding directory.

## Software Installation
### Sogou input method (V23)
V23 is pre-installed with Fcitx5 and is currently not compatible with Sogou input method (Fcitx4). Before installing Sogou input method, you need to uninstall the Fcitx5 input method component.

Execute the following commands in the terminal:
``` sh
sudo apt purge fcitx*
sudo apt install "fcitx" fcitx-pinyin
```

When finished, log out and log in again. Then use the software package installer to install [Sogou input method](https://shurufa.sogou.com/linux). Other third-party input method is the same.

[References](https://bbs.deepin.org/post/253733)

### Solve the problem that UEngine prohibits the installation of applications from unknown sources
Execute the following commands in the terminal:
``` sh
/usr/bin/uengine launch.sh --package=org.anbox.appmgr --component=org.anbox.appmgr.AppViewActivity
```
Or install and open the UEngine runner, click "Open UEngine application list".

Open settings in the panel, go to "Security", turn on "Unknown Sources (Allow installation of apps from unknown sources)", and click "Confirm".

References: [http://uengine-runner.gfdgdxi.top](http://uengine-runner.gfdgdxi.top)

## Something worth knowing
- Before running `sudo apt autoremove`, please check out the list of software packages that will be removed to ensure that they do not contain system components. **Avoid running it arbitrarily**.
- Deepin is now developing its wayland compositor "Treeland" on V23, and its entrence is temporarily closed. If you want to have a try and can take risks, install "dcc-insider-plugin" by apt and choose "treeland/ddm" in dde-control-center.