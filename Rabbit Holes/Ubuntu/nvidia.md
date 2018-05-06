# Summary
After running `sudo apt install nvidia-current`, my PC had some very strange issues.

Whenever I tried to login, I would get stuck in a login loop and be logged out immediately.

Apparently, my issues with unresponsive keyboard/mouse are also related to the nvidia drivers having issues with Ubuntu 16.04.

# Relevant SO Questions
* [Exhibit A](https://askubuntu.com/questions/762831/ubuntu-16-stuck-in-login-loop-after-installing-nvidia-364-drivers)
* [Exhibit B](https://askubuntu.com/questions/760934/graphics-issues-after-while-installing-ubuntu-16-04-16-10-with-nvidia-graphics/762607#762607)

# Solution
1. Enter the TTY: Ctrl+Alt+(F1-F6)
2. `sudo apt purge nvidia-*` to clear all your existing nvidia drivers.
3. `sudo apt autoremove` to clean up anything left.
4. `sudo add-apt-repository ppa:graphics-drivers/ppa`
5. `sudo ubuntu-drivers list` to view your list of drivers.
6. `sudo ubuntu-drivers autoinstall` installs the driver for your nvidia graphics card in a way that doesn't cause issues.
7. Exit the TTY: Ctrl+Alt+F7
8. Ctrl+Alt+PrintScreen+REISUB

# Additional Actions
* `sudo apt purge xorg-* xserver-xorg; sudo apt install xorg xorg-core xserver-xorg; sudo dpkg-reconfigure xorg`
    * I'm not sure what this does, frankly, but it was recommended. I'm hoping it fixes my issues with my occasionally unresponsive input devices.