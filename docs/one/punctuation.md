# 标点符号（可选）


这个可选单元提供了标点符号的快速复习。

## 逗号

编程语言对标点符号有明确的规定。相比之下，英语中关于逗号的规则就显得有些模糊了。作为一项指导原则，在句子中的自然停顿的地方插入逗号。对于喜欢音乐的人来说，如果句号是一个完整的音符休止符，那么逗号可能是一个半音符或四分之一音符的停顿。换句话说，逗号的停顿要比句号的停顿短。例如，如果您大声朗读以下句子，您可能会在单词*just*之前短暂停顿一下：

>C behaves as a mid-level language, just a couple of steps up in abstraction from assembly language.
<br>
C 是一种中级语言，只是从汇编语言中抽象出几步而已。

有些情况*需要*逗号。例如，使用逗号分隔嵌入列表中的项目，如下所示：

>Our company uses C++, Python, Java, and JavaScript.
<br>（注：中文中一般使用顿号）
我们公司使用 C++、Python、Java 和 JavaScript。

您可能想知道列表的最后一个逗号，即插入在项目 N-1 和 N 之间的逗号。这个逗号——被称为**连续逗号**或**牛津逗号**——是有争议的。我们建议提供最后一个逗号，因为技术写作需要选择最不模糊的解决方案。换句话说，我们实际上更喜欢通过将嵌入列表转换为项目符号列表来规避这一争议。

在表达条件的句子中，在条件和结果之间加一个逗号。例如，以下两个句子在正确的位置提供了逗号：

> If the program runs slowly, try the --perf flag.
>
> 如果程序运行缓慢，请尝试`--perf`标记。
>
> If the program runs slowly, then try the --perf flag.
>
> 如果程序运行缓慢，则尝试`--perf`标记。

你也可以在一对逗号之间插入一个简短的定义或者题外话，如下：

> Python, an easy-to-use language, has gained significant momentum in recent years.
> 
> Python，一种易于使用的语言，近年来获得了显着的发展势头。

最后，避免使用逗号将两个独立的想法粘贴在一起。例如，以下句子中的逗号犯了标点符号的重罪，称为逗号拼接。

<span class="thumb-down material-icons">错误用法</span>

> Samantha is a wonderful coder, she writes abundant tests.
> 
> Samantha 是一位出色的编码员，她编写了大量测试。

使用句号而不是逗号来分隔两个独立的想法。例如：

<span class="thumb-up material-icons">推荐用法</span>

> Samantha is a wonderful coder. She writes abundant tests.
> 萨曼莎是一位出色的编码员。她编写了大量的测试。

### 练习

在适当的地方为以下段落添加逗号：

> Protocol Buffers sometimes known as protobufs are our team's main structured data format. Use Protocol Buffers to represent store and transfer structured data. Unlike XML Protocol Buffers are compiled. Consequently clients transmit Protocol Buffers efficiently which has led to rapid adoption.

提示：大声朗读文章，并在你听到短暂停顿的任何地方加一个逗号。

::: details 查看答案
> Protocol Buffers, sometimes known as protobufs, are our team's main structured data format. Use Protocol Buffers to represent, store, and transfer structured data. Unlike XML, Protocol Buffers are compiled. Consequently, clients transmit Protocol Buffers efficiently, which has led to rapid adoption.
:::

## 分号

句号将不同的想法分开；分号则将高度相关的想法结合起来。例如，注意以下句子中的分号是如何将第一个和第二个想法结合起来的。


<span class="thumb-up material-icons">推荐用法</span>

>Rerun Frambus after updating your configuration file; don't rerun Frambus after updating existing source code.
> 
> 更新配置文件后重新运行 Frambus；更新现有源代码后不要重新运行 Frambus。

在使用分号之前，先问问自己，如果你把想法转移到分号的两侧，这个句子是否仍然有意义。例如，反转前面的例子仍然会产生一个*有效的*句子：

> Don't rerun Frambus after updating existing source code; rerun Frambus after updating your configuration file.
> 
> 更新现有源代码后不要重新运行 Frambus；更新配置文件后重新运行 Frambus。

分号前后的表达的必须是语法完整的句子。例如，下面的分号是不正确的，因为分号后面的段落是一个[从句](/one/short-sentences#reduce_subordinate_clauses_optional)，而不是一个完整的句子：


<span class="thumb-down material-icons">错误用法</span>

> Rerun Frambus after updating your configuration file; not after updating existing source code.
> 
> 更新配置文件后重新运行 Frambus；而不是在更新现有源代码之后。

<span class="thumb-up material-icons">推荐用法</span>

>Rerun Frambus after updating your configuration file, not after updating existing source code.
> 
> 在更新配置文件后重新运行 Frambus，而不是在更新现有源代码之后。

几乎所有的情况下都应该是使用逗号，而不是分号，来分隔嵌入式列表中的项目。例如，以下对分号的使用是不正确的。

<span class="thumb-down material-icons">错误用法</span>

> Style guides are bigger than the moon; more essential than oxygen; and completely inscrutable. 
>
> 风格指南比月亮还大；比氧气更重要；并且完全高深莫测。

正如本课前面提到的，技术写作通常更喜欢项目符号列表而不是嵌入列表。但是，如果您真的更喜欢嵌入式列表，请使用逗号而不是分号来分隔项目，如下例所示：

<span class="thumb-up material-icons">推荐用法</span>

> Style guides are bigger than the moon, more essential than oxygen, and completely inscrutable. 
> 
> 风格指南比月亮大，比氧气更重要，完全高深莫测。

许多句子在分号之后立即放置一个过渡词或短语。在这种情况下，应在过渡词后加一个逗号。请注意下面两个例子中过渡词后面的逗号。

> Frambus provides no official open source package for string manipulation; however, subsets of string manipulation packages are available from other open source projects.
>
> Frambus 没有提供用于字符串操作的官方开源包；但是**，**字符串操作包的子集可以从其他开源项目中获得。

> Even seemingly trivial code changes can cause bugs; therefore, write abundant unit tests.
> 
> 即使看似微不足道的代码更改也可能导致错误；因此**，**编写丰富的单元测试。

### 练习

您可以用分号替换以下哪个句点或逗号？
1. Python is a popular programming language. The C language was developed long before Python.
<br>
Python 是一种流行的编程语言。C 语言早在 Python 之前就被开发出来了。

2. Model learning for a low value of X appears in the top illustration. Model learning for a high value of X appears in the bottom illustration.
<br>
X 值较低的模型学习出现在顶部插图中。高值 X 的模型学习出现在底部插图中。

3. I'm thankful for my large monitor, powerful CPU, and blazing bandwidth.
<br>
我感谢我的大显示器、强大的 CPU 和惊人的带宽。

:::details 查看答案
1. You may not convert the period in #1 to a semicolon because the two sentences are only vaguely related.
2. You may replace the period in #2 with a semicolon because the two sentences are so highly related.
3. You may not convert the commas in #3 to semicolons. Use commas to separate items in an embedded list.
:::

## 破折号

破折号是引人注目的标点符号，具有丰富的标点符号意义。短划线代表比逗号更长的停顿。如果逗号是四分音符休止符，那么破折号就是半音符休止符。例如：

> C++ is a rich language—one requiring extensive experience to master.
> 
> C++ 是一种丰富的语言——需要丰富的经验才能掌握。


作家有时会用一对破折号来分隔题外话，如下面的例子。
> **Protocol Buffers**—often nicknamed **protobufs**—encode structured data in an efficient yet extensible format.
>
> **Protocol** Buffers——通常被称为**protobufs**--以一种高效但可扩展的格式对结构化数据进行编码。

在前面的例子中，我们可以用逗号而不是破折号吗？当然可以，为什么我们要选择破折号而不是逗号呢？感觉。艺术。经验。

### 破折号和连字符

考虑下表所示的横向标点符号：

| Name   | 标识 | 相对宽度                    |
| ------ | ---- | --------------------------- |
| em-dash | —    | 最宽（通常是字母的长度`m`） |
| en-dash | –    | 中（通常是字母的长度`n`）   |
| hyphen | -    | 最窄                        |

一些风格指南建议在某些用途中使用**en-dash**。但是在 [谷歌风格指南](https://developers.google.com/style/dashes#en-dashes)，提供了有关**en-dash**以下生硬的建议：

> Don't use.
> 不要用。

**Hyphens**很棘手。在技​​术写作中，连字符连接某些复合术语中的单词，例如：

* self-attention
* N-gram

令人困惑的是，三个字的复合词往往在第一个和第二个词之间包含一个连字符，但在第二个和第三个词之间不包含。例如。

* decision-making system
* floating-point feature

如果对连字符有疑问，请查阅字典、词汇表或样式指南。

::: tip
**注意：** 如果您查阅多个关于连字符的字典、词汇表或样式指南，您可能会遇到不一致的情况。
:::

## 括号

使用括号来保持次要的观点和题外话。括号告诉读者其中的文字并不重要。因为括号内的文字并不重要，所以有些编辑认为需要用括号的文字不应该出现在文档中。作为一种妥协，在技术写作中尽量减少括号的使用。

有关句点和括号的规则并不总是很清楚。以下是标准规则：

* 如果一对括号包含整个句子，则句号位于右括号内。
* 如果一对括号在句子末尾，但不包含完整的句子，则句号就在右括号之外。

例如：

>(Incidentally, Protocol Buffers make great birthday gifts.)
> <br>
>（顺便说一句，Protocol Buffers 是很棒的生日礼物。）
> <br>
> <br>
>Binary mode relies on the more compact native form (described later in this document).
> 
> 二进制模式依赖于更紧凑的本机形式（本文档稍后介绍）。

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<style>
    .thumb-up:before{
        content: 'thumb_up';
        color: green;
        margin-right: 5px;
    }
    .thumb-down:before{
        content: 'thumb_down';
        color: red;
        margin-right: 5px;
    }
</style>