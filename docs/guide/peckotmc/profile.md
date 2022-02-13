---
title: 注册并登录账户
---

# {{ $page.title }}

## 注册账户

由 Peckot Studios 的开发计划来看，您只需要在 Peckot 注册 **至多一个账户** 即可使用所有项目。

### 准备工作

注册账户之前，您需要准备以下工作：

1. 一个能够正常收发邮件的电子邮箱地址；
2. 一双勤劳的手和一个聪明的大脑。

### 开始注册

准备工作完成后就可以开始注册账户了：

#### 1.访问 Peckot Studios 的 [注册网页](https://peckot.com/auth/regsiter "点击跳转")；

跳转后，您应该看到了类似如下的页面：
![图片-网站注册](/images/guide.peckotmc.website-register.png)

#### 2.在此界面填写好您的个人信息，点击注册按钮即可；

另外，Peckot 还支持第三方账户接入的功能，若您曾经使用过页面下方所列出的网站并注册过账户，您可以点击下方按钮跳转到对应网页进行登录。

::: tip
若您是 Minecraft: Java Edition 的正版账户，可点击 [这里](https://peckot.com/auth/login "点击跳转") 直接登录；

当然，您在注册后仍然可以在仪表盘界面找到正版认证卡片进行认证 **(注册使用的邮箱需与正版账户邮箱一致)** ；

使用以上方法进行正版认证后您将获得 2888 皮肤站积分的奖励。
:::

#### 3.注册成功后网页会跳转至 [用户中心](https://peckot.com/user "点击跳转") 界面，如下图所示；

::: warning
若该页面出现图片所示的红框区域，您需要登录您的邮箱查阅由 Peckot 发送的一封验证邮件并点击其中的认证链接。
:::

![图片-网站用户中心](/images/guide.peckotmc.website-user.png)

#### 4.若您成功收到验证邮件并通过验证，恭喜！注册成功！

::: warning
若您没有收到验证邮件，请刷新网页或查阅"垃圾邮件"列表；

若您确认无法收到邮件是由我们引起的问题，请立即上报至 [Peckot Bugs](https://bugs.peckot.com "点击跳转")。
:::

## 登录账户

若您已经成功注册好账户，下面就开始尝试登录吧：

下面介绍了两种启动器的登录方式，其它启动器登录方式基本相同，这里不多做赘述。

::: warning
若您拥有 Minecraft: Java Edition 的正版账户，您可以使用正版登录后直接进入游戏并跳过该部分内容；

若您作为正版玩家坚持使用下文介绍的外置登录方式加入服务器，为了保证玩家账户的安全，您将不能再使用正版登录加入服务器，并且您在游戏内显示的皮肤将不可在 [Minecraft 官网](https://www.minecraft.net/zh-hans "点击跳转") 进行修改，而是使用 Peckot 所提供的 [皮肤站](https://peckot.com/skinlib "点击跳转") 进行修改。
:::

### 一、使用 PCL2 启动器 (Plain Craft Launcher 2) 进行登录

您可以在 [这里](https://peckot.lanzoui.com/s/PCL2 "点击跳转") 下载 PCL2 启动器正式版(公测版)；

> 想体验快照版本的 PCL2？点击 [这里](https://afdian.net/@LTCat "点击跳转") 跳转到 PCL2 的爱发电赞助页面。

#### 1.打开启动器，您应该看到类似如下界面：

![PCL2-主页](/images/guide.peckotmc.pcl2-menu.png)

#### 2.点击左下角的"版本选择"按钮(上图黑色箭头)来选择你将要设置外置登录的版本，再点击左下角的"版本设置"按钮(上图红色箭头)来进入版本设置界面；

::: tip
若您未安装任何游戏版本，您可以点击上方菜单栏的"下载"按钮来选择安装的游戏版本。
:::

![PCL2-版本设置](/images/guide.peckotmc.pcl2-version-settings.png)

#### 3.点击左侧菜单的"设置"并找到右侧最底部的"服务器选项"卡片，选择"登陆方式"为"第三方登录：Authlib-Injector"后填入以下信息：

```
认证服务器: https://peckot.com/api/yggdrasil
注册链接: https://peckot.com/auth/register
服务器名称: PeckotMC
自动进入服务器: mc.peckot.com[选填，填写后启动游戏将自动加入所填的服务器地址]
```

#### 4.返回启动器主页面，在左侧界面填入您在官网注册使用的邮箱及密码，点击启动游戏即可；

![PCL2-启动游戏](/images/guide.peckotmc.pcl2-launch-game.png)

#### 5.若您登录成功并出现了启动窗口，恭喜您！现在可以进入服务器啦！

![Minecraft-主页](/images/guide.peckotmc.minecraft-1.17.1.png)

### 二、使用 HMCL 启动器 (Hello Minecraft! Launcher) 进行登录

您可以点击[这里](https://peckot.lanzoui.com/s/HMCL "点击跳转")跳转到由 Peckot 整理上传的 HMCL 启动器文件。

#### 1.打开启动器，您应该看到类似如下界面：

![HMCL-主页](/images/guide.peckotmc.hmcl-menu.png)

#### 2.点击左上角的账户列表，并点击右下角的"+"按钮来添加账户；

![HMCL-添加账户](/images/guide.peckotmc.hmcl-add-profile.png)

#### 3.1.选择登录方式为"外置登录（authlib-injector）"，在认证服务器一栏点击右侧加号添加并填入以下信息：

```
https://peckot.com/api/yggdrasil
```

![HMCL-添加认证服务器](/images/guide.peckotmc.hmcl-add-auth-server.png)

#### 3.2.您还可以打开皮肤站用户中心找到"快速配置启动器"卡片，将按钮拖动至启动器来快速添加；

![HMCL-拖动按钮](/images/guide.peckotmc.hmcl-drag-btn.png)

#### 4.在下方输入您在皮肤站注册使用的邮箱地址和密码，完成后点击确定；

![HMCL-登录成功](/images/guide.peckotmc.hmcl-login-success.png)

#### 5.若启动器未向您提示错误并在账户列表中添加了您的角色，恭喜！登录成功！

## 登录失败？

若您尝试上述方式仍无法正常登录，可参见[常见问题解答](faq.html#启动器无法登录 "点击跳转")来排查问题。