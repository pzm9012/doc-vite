# Common Problems
::: tip
This page collects a small selection of frequently asked questions and solutions to them from deepin forum. For excerpting from individual posts, the feasibility of solutions is not guaranteed.
:::

## Enable Treeland
Run the following commads in deepin-terminal
```sh
sudo apt update && sudo apt install treeland
sudo systemctl enable ddm -f
sudo reboot
```

## Disable Treeland
Run the following commads in deepin-terminal
```sh
sudo systemctl disable ddm.service
sudo systemctl enable lightdm.service
```
Or press `super + L` to enter the lock screen. Click the menu button in the lower right corner, and you can return to the default mode, which will automatically restart to LightDM.

## The terminal outputs `su: identifies the fault` after running `su` commad.
Use the `sudo su` command instead.

## Change the category of an application in launchpad
Use dde-file-manager to open the directory `/user/share/applications`. Right-click on the blank place, finding and clicking "open in terminal" in the menu. Then input `sudo deepin-editor xxx.desktop (xxx is the application name)` in terminal and modify the field after the `Categories=`.