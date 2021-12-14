# 创建示例代码

[[toc]]

好的示例代码通常是最好的文档。即使你的段落和列表像蓝水一样清澈，程序员仍然更喜欢好的示例代码。毕竟，文本和代码是不同的语言，读者最终关心的是代码。试图用文本描述代码就像试图用英语解释一首意大利诗歌。

好的示例是**正确**和**简洁的**代码，读者可以 **快速理解** 并很容易的在**副作用很小**的情况下**重用**。

## 正确

示例代码应满足以下条件：

* 编译时不能出错。
* 执行它声称要执行的任务。
* 尽可能做好生产准备。例如，代码不应包含任何安全漏洞。
* 遵循特定于语言的约定。

示例代码是一个直接影响用户编写代码方式的机会。因此，示例代码应该设置使用产品的最佳方式。如果编码任务的方法不止一种，那么就按照团队认为最好的方式编码。如果您的团队没有考虑每种方法的优缺点，那么花点时间去考虑一下。

始终测试您的示例代码。随着时间的推移，系统会发生变化，示例代码可能会出错。准备像测试和维护其他代码一样测试和维护示例代码。

许多团队将他们的单元测试代码重用为示例程序，这有时是个坏主意。单元测试的主要目标是测试；示例程序的唯一目标是教育。

代码片段是示例程序的一部分，可能只有一行或几行。大量使用代码片段的文档经常会随着时间的推移而退化，因为团队往往不会像完整示例程序那样严格地测试代码片段。

### 运行示例代码

好的文档解释了如何运行示例代码。例如，您的文档可能需要告诉用户在运行示例之前执行以下活动：

* 安装某个库。
* 调整分配给某些环境变量的值。
* 在集成开发环境 (IDE) 中进行一些调整。

用户并不总是正确执行上述活动。在某些情况下，用户更喜欢直接在文档中运行或（试验）示例代码。（“单击此处运行此代码。”）

作者应该考虑描述示例代码的预期输出或结果，特别是对于难以运行的示例代码。

## 简明

示例代码应该简短，只包括必要的组件。当一个初学的 c 程序员想学习如何调用 `malloc` 函数时，给他一个简短的代码片段，而不是整个 Linux 源代码树。不相关的代码会分散你的听众的注意力，让他们感到困惑。但是，永远不要用不好的做法来缩短你的代码；永远要把正确性置于简洁性之上。

## 易于理解

遵循这些建议来创建清晰的示例代码。

* 选择描述性的类、方法和变量名称。
* 避免用难以解读的编程技巧来迷惑你的读者。
* 避免深度嵌套的代码。
* 可选的。使用粗体或彩色字体来吸引读者注意你的示例代码的特定部分。但是，过多的高亮显示意味着读者不会关注任何特别的东西。

### 练习

以下哪句话会是样本程序中更有帮助的一行代码？假设目标受众是刚接触go.so API的软件工程师。

1.  `MyLevel = go.so.Level(5, 28, 48)`
2.  `MyLevel = go.so.Level(rank=5, 28, 48)`
3.  `MyLevel = go.so.Level(rank=5, dimension=28, opacity=48)`

::: details 查看答案
答案3是这里的最佳选择。尽管使示例代码尽可能短也是一个优点，但省略参数名称会使新手更难学习。
:::

## 注释

思考以下关于示例代码中的注释的建议。

* 保持注释的简短，但是清晰的表达更优先。
* 避免为简单的代码写注释，但要记住，对你（专家）来说简单的东西对新人来说可能并不简单。
* 把你的写注释的精力集中在代码中任何不直观的地方。
* 当你的读者对某项技术非常有经验时，不要解释代码在做什么，而是解释代码为什么要这样做。

你应该把对代码的描述放在代码注释中，还是放在示例代码之外的文本（段落或列表）中？请注意，读者在复制和粘贴代码片段时，不仅会收集代码，还会收集任何嵌入的注释。所以，把任何属于粘贴的代码的描述放在代码注释中。相比之下，当你必须解释一个冗长或棘手的概念时，你通常应该把文本放在示例程序之前。

::: tip
注意：如果你为了使代码更短和更容易理解，导致示例代码不能直接应用到生产环境、或者代码质量不符合生产环境的要求。请在注释中解释你的决定。
:::

### 练习

您在下面的代码片段中的注释中看到了哪些问题？假设这些代码的目标读者是那些刚刚接触 `br` API，但对`stream(流)`概念有一定经验的程序员:

```c
/* Create a stream from the text file at pathname /tmp/myfile. */
mystream = br.openstream(pathname="/tmp/myfile", mode="z")
```

:::details 查看答案

这个注释有以下缺点：
* 注释详细描述了在代码中很直观的部分。
* 注释没有解释代码中不明显的部分，比如 `mode`参数指什么？`z` 的值是什么意思？

:::

## 可重用

为了便于读者重用示例代码，请提供以下内容:

* 运行示例代码所需的所有信息，包括所有依赖项和设置。 
* 有可行方式对代码进行扩展或自定义。

拥有易于理解的、简明的、可编译的示例代码是一个好的开始。但是，如果它破坏了你的读者的应用程序，他们就会不高兴。因此，在编写示例代码时，要考虑你的代码被集成到另一个程序中所引起的任何潜在的副作用。没有人想要不安全的或严重低效的代码。

## 例子与反例

除了向读者展示应该做什么之外，有时向读者展示不应该做什么也是明智的。例如，许多编程语言允许程序员在等号的两边留出空白。现在，假设你在写一门不允许在等号两边留白的语言（如bash）的教程。在这种情况下，同时展示一个好的例子和一个反例将使读者受益。比如说。


<span class="thumb-up material-icons"></span>

```bash
# A valid string assignment.
s="The rain in Maine." 
```

<span class="thumb-down material-icons"></span>

```bash
# An invalid string assignment because of the white space on either side of the
# equals sign.
s = "The rain in Maine." 
```

## 循序渐进

一个好的示例代码集展示了一系列的复杂性。

完全不熟悉某项技术的读者通常渴望得到简单的例子来入门。样品代码集中的第一个也是最基本的例子通常被称为 "Hello World "程序。在掌握了基础知识之后，工程师们想要更复杂的程序。一套好的示例代码提供了简单、适度和复杂的示例程序的健康范围。

### 练习

以下哪一项能更好的向新人介绍函数概念的教程？

1. The following set of functions:

    a. A function that takes no parameters and doesn't return anything.
    <br>
    一个不带参数且不返回任何值的函数。

    b. A function that takes one parameter but doesn't return anything.
    <br>
    接受一个参数但不返回任何值的函数。

    
    c. A function that takes one parameter and returns one value.
    <br>
    接受一个参数并返回一个值的函数。

    d. A function that takes three parameters and returns one value.
    <br>
    接受三个参数并返回一个值的函数。


2. The following set of functions:

    a. A function that takes three parameters and returns one value.
    <br>
    接受三个参数并返回一个值的函数。

3. The following set of functions:

    a. A function that takes one parameter and returns one value.
    <br>
    接受一个参数并返回一个值的函数。

    b. A function that takes three parameters and returns one value.
    <br>
    接受三个参数并返回一个值的函数。


::: details 查看答案

最好的答案是1。提供涵盖一系列复杂性的案例通常是最明智的选择，尤其是对于新手而言。不要急于编写非常复杂的示例程序，避开初学者渴望的初级和中级示例程序。
:::



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