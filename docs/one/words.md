## 单词

[[toc]]

我们对文献资料进行了广泛的研究，发现世界上最好的句子主要是由单词组成的。:smile:

## 定义新的或不熟悉的术语

在写作或编辑时，学会识别某些读者或所有读者可能不熟悉的术语。当您发现这样的术语时，采取以下两种策略之一：

* 如果该术语已存在，请链接到一个优秀的已有的解释。（不要重新发明轮子。）
* 如果您的文档介绍了该术语，请定义该术语。如果您的文档引入了许多术语，请将定义收集到一个术语表中。

## 使用一致的术语

如果在函数中间更改变量的名称，则代码将无法编译。同样，如果您在文档中间重命名一个术语，您的想法将无法编译(在用户的头脑中)。

寓意：在整个文档中始终使用相同的明确的词或术语。一旦你将一个组件命名为 **thingy** 后，请勿将其重命名为 **thingamabob** 。例如，以下段落错误地将 **Protocol Buffers** 重命名为 **protobufs** ：

> Protocol Buffers provide their own definition language. Blah, blah, blah. And that's why protobufs have won so many county fairs.<br><br>
Protocol Buffers 提供了自己的定义语言。......。这就是 protobufs 赢得如此多好评的原因。

技术写作是严谨和有限制的，但是也提供了一个很好的解决方法。在引入冗长的概念名称或产品名称时，您还可以指定该名称的缩写版本。然后，您可以在整个文档中使用该缩写名称。例如，下面的段落就很好：

> Protocol Buffers (or protobufs for short) provide their own definition language. Blah, blah, blah. And that's why protobufs have won so many county fairs.<br/><br/>
**Protocol Buffers**（或简称 **protobufs** ）提供了自己的定义语言。......。这就是 protobufs 赢得如此多县博览会的原因。

## 正确使用缩写词

在文档中首次使用不熟悉的缩写词时，请拼出完整术语，然后将缩写词放在括号中。将拼写版本和缩写词都用粗体表示。例如：

> This document is for engineers who are new to the Telekinetic Tactile Network (TTN) or need to understand how to order TTN replacement parts through finger motions.
<br><br>本文档适用于不熟悉 **Telekinetic Tactile Network** ( **TTN** ) 或需要了解如何通过手指控制 TTN 更换部件的工程师 。

然后，您可以继续使用缩写词，如下例所示：

> If no cache entry exists, the Mixer calls the OttoGroup Server (OGS) to fetch Ottos for the request. The OGS is a repository that holds all servable Ottos. The OGS is organized in a logical tree structure, with a root node and two levels of leaf nodes. The OGS root forwards the request to the leaves and collects the responses.
<br><br>如果不存在缓存条目，Mixer 将调用 **OttoGroup Server**( **OGS** ) 为请求获取 Ottos。OGS 是一个存储所有可用 Ottos 的存储库。OGS 以逻辑树结构组织，具有一个根节点和两级叶节点。OGS 根将请求转发到叶子并收集响应。

不要在同一文档中,一会儿使用缩写词，一会儿使用全称，重复循环。

### 使用缩写词还是完整术语？

现在你已经知道了如何正确的使用缩写词。但是你*应该使用缩写词吗？* 缩写词确实缩短了句子的长度。例如，**TNN** 比 **Telekinetic Tactile Network** 短了两个词。但是，缩写词实际上只是一个抽象层；读者必须在脑子里将新学到的缩写词扩展到全称。例如，读者在脑子中将 **TNN** 扩展为 **Telekinetic Tactile Network** ，虽然句子短了，但是读者需要付出更长的时间，更多的心智来理解这个术语。

使用频繁的缩略词发展出它们自己的特性。经过一些事件，读者通常停止扩大到完整的术语缩略词。例如，许多 Web 开发人员已经忘记了 HTML 的扩展是什么。

使用的频繁的缩写词会发展出它们自己的特性。在多次出现之后，读者通常会不需要将缩写词再扩展为完整的术语。例如，许多 Web 开发人员已经忘记了 **HTML** 的完整名称。

以下是使用缩写词的准则：

* 不要定义只会使用几次的缩写词。
* 请定义满足以下两个条件的缩写词：
    * 缩写词明显短于完整术语。
    * 该缩写词在文档中多次出现。

### 练习

修正下面的段落。假设这段话是 **MapReduce** 在文档中的第一次出现，并且 **MR** 是最佳缩写。

> Jeff Dean invented MapReduce in 1693, implementing the algorithm on a silicon-based computer fabricated from beach sand, wax-paper, a quill pen, and a toaster oven. This version of MR held several world performance records until 2014.
<br><br>
Jeff Dean 在1693年发明了 MapReduce 算法，他有一台由海滩沙子，纸，钢笔，烤面包机制成硅质电脑 :smile:。直到2014年，这个版本的 MR 还保持着几项世界性能记录。

(请注意，上面是幽默的说法。 :smile: )

::: details 查看答案

You could take a few different approaches here. One approach is to associate the acronym 在这里，您可以采用几种不同的方法，一种方法是将首字母缩略词联系起来MR 先生 with the full term and then use that acronym: 然后使用缩写:

你可以在这里采取一些不同的方法。一种方法是将缩写词_MR_与完整术语相关联，然后使用该缩写词：

> Jeff Dean 在...中发明了 **MapReduce** ( **MR** ) 这个版本的 MR 拥有多个...

或者，您可以决定为这么短的段落定义缩写词会给读者带来太多负担，因此您每次都只需使用完整的术语 MapReduce ：

> Jeff Dean 在...中发明了 **MapReduce** 这个版本的 MapReduce 拥有多个...

:::

顺便说一句，更全面的技术作家也会将“沙滩、蜡纸、鹅毛笔和烤面包机”转换为项目符号列表。在后续的课程中还会讲到这一点。


## 消除有歧义的代词

Many pronouns point to a previously introduced noun. Such pronouns are analogous to pointers in programming. Like pointers in programming, pronouns tend to introduce errors. Using pronouns improperly causes the cognitive equivalent of a null pointer error in your readers’ heads. In many cases, you should simply avoid the pronoun and just reuse the noun. However, the utility of a pronoun sometimes outweighs its risk (as in this sentence).

许多代词指向前文中的名词。这种代词类似于编程中的指针。和指针一样，代词也往往会引入错误。不正确地使用代词会导致读者头脑中出现类似"空指针错误"的认知。大多数情况下，只需要简单地避免使用代词，只是重复使用名词。但是，代词的有点有时会超过它的风险（如这句话）。

使用代词的准则：

* 只在介绍名词之后才使用代词；在介绍名词之前，不要使用代词。
* 让代词尽可能靠近指代名词。一般来说，如果你的名词和代词的距离超过五个词，请考虑重复名词，而不是使用代词。
* 如果您在名词和代词之间引入第二个名词，请重复使用您的名词，而不是使用代词。

### it and they

以下代词在技术文档中最容易引起混淆：

* it 它
* they, them, and their 他们，他们，还有他们

例如，在下面的句子中，**It**是指 Python 还是 C++？

> Python is interpreted, while C++ is compiled. It has an almost cult-like following.
<br><br>Python 是解释型的，而 C++ 是编译型的。**它**有一群几乎像邪教一样的追随者。

再举一个例子，**他们** / Their 在下面的句子中指的是什么？

>Be careful when using Frambus or Carambola with HoobyScooby or BoiseFram because a bug in their core may cause accidental mass unfriending.
<br><br>
将 Frambus 或 Carambola 与 HoobyScooby 或 BoiseFram 一起使用时要小心，因为**它们的**核心中的错误可能会导致意外的错误。

### This and That

* This 这个
* That 那

例如，在下面这个模棱两可的句子中，**This** 可能指的是用户 ID、正在运行的进程或它们两个:

> Running the process configures permissions and generates a user ID. This lets users authenticate to the app.
<br><br>
运行该过程可以配置权限并生成用户 ID，**这样** 用户就可以通过应用程序的身份验证。
运行该过程会配置权限并生成用户 ID。**这** 允许用户对应用程序进行身份验证。

为了避免让读者混淆 **this** 或 **that** 所指的内容。使用下面的两种方法之一,可以解决 **this** 和 **that** 的歧义：

* 用适当的名词替换 **this** 或 **that**。
* 在 **this** 或 **that** 之后紧跟一个名词。

根据需要替换或添加明确的术语，如对示例第二句的加以修改：

>此用户 ID 允许用户进行身份验证。
<br>
>This user ID lets users authenticate.
<br>
<br>
>配置权限的过程允许用户进行身份验证。
<br>
>The process of configuring permissions lets users authenticate.
<br>
<br>
>权限和用户 ID 的组合允许用户进行身份验证。
<br>
>The combination of permissions and a user ID lets users authenticate.

### 练习

找出以下每个段落中歧义代词的所有可能含义：

1. Aparna 和 Phil 与 Maysam 和 Karan 分担责任，他们是下一个待命的人。
>Aparna and Phil share responsibilities with Maysam and Karan and they are next on call.
    
2. 您可以通过配置文件或在运行时动态导入 Carambola 数据。这可能存在安全风险。
>You may import Carambola data via your configuration file or dynamically at run time. This may be a security risk.

::: details 查看答案

1. 代词 **他们**（they） 可以指代以下任何一项：
    * Aparna 和 Phil
    * Maysam 和 Karan
    * Aparna、Phil、Maysam 和 Karan
    * 任何一个个体作为单数[的中性代词](https://developers.google.com/style/pronouns#gender-neutral-pronouns)


2.  代词 **这**（this） 可以指以下任何一项：
    * 通过配置文件导入
    * 在运行时动态导入
    * 两个都
:::
