title: "初识Golang"
date: 2015-03-13 12:48:06
tags: [Golang, Android]
---

**Go**是Google开发的一种编译型，可平行化，并具有垃圾回收功能的编程语言。现在支持开发一些简单的Android应用，今天我就在这初步认识并使用一下这个go语言。

<!-- more -->

---

##1. 安装配置环境
我的是windows 64位系统环境，在[这个链接](https://golang.org/dl/)下下载与系统相对应的安装包。安装完成后还需要配置一下系统的环境变量，如默认的安装地址是`c:\go`，所以在**PATH**中添加`c:\go\bin`即可，环境就算是配置完成了。
在cmd中输入`go version`显示版本号验证环境配置完成。
再准备一个自己用着习惯的文本编辑器，就可以开始go语言编程了，我在这使用的是**Sublime Text**。

##2. Hello world!
相信大部分程序员一个程序是打印一句Hello world，这就是我的第一个go程序。
新建*herewego.go*，输入：
```go
package main

import "fmt"

func main() {

    fmt.Println("Hello world")
    
}
```
在命令行中输入
`go run herewego.go`
Hello world 就成功打印到屏幕上了