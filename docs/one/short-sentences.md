# 简短的句子

[[toc]]

软件工程师一般会尽量减少实现中的代码行数，理由如下:

* 较短的代码通常更容易被他人阅读。
* 较短的代码通常比长的代码更容易维护。
* 额外的代码行会带来额外的故障点。

事实上，同样的规则也适用于技术写作。

* 较短的文档比较长的文档阅读起来更快。
* 较短的文档通常比较长的文档更容易维护。
* 额外的文档行数会带来额外的故障点。

找到短文档的实现方法需要一些时间，但最终是值得的。短句子比长句子更有说服力，而且短句子通常比长句子更容易理解。

## 将每个句子集中在一个想法上

将每个句子集中在单一的想法、思想或概念上。就像程序中的语句执行单一任务一样，句子应该表达单一的想法。例如，下面这个很长的句子包含了多种思想：

>The late 1950s was a key era for programming languages because IBM introduced Fortran in 1957 and John McCarthy introduced Lisp the following year, which gave programmers both an iterative way of solving problems and a recursive way.
<br>
20世纪50年代末是编程语言的关键时期因为 IBM 在 1957 年引入了 Fortran 约翰-麦卡锡在第二年推出了 Lisp，这给程序员提供了解决问题的迭代方法和递归方法。

把这个长句子分解成一连串的单念句子，可以得到以下结果。

>The late 1950s was a key era for programming languages. IBM introduced Fortran in 1957. John McCarthy invented Lisp the following year. Consequently, by the late 1950s, programmers could solve problems iteratively or recursively.
<br>
20世纪50年代末是编程语言的关键时期。IBM 在1957年引入了 Fortran。第二年，John McCarthy 发明了 Lisp。因此，到20世纪50年代后期，程序员可以迭代或递归地解决问题。

### 练习
将下面这个过长的句子转换成一系列较短的句子。不要修改太多，只要最后有几个句子，而不是只有一个。

> in bash, use the if, then, and fi statements to implement a simple conditional branching block in which the if statement evaluates an expression, the then statement introduces a block of statements to run when the if expression is true, and the fi statement marks the end of the conditional branching block.

::: details 查看答案
In bash, use an if, then, and fi statement to implement a simple conditional branching block. The if statement evaluates an expression. The then statement introduces a block of statements to run when the if expression is true. The fi statement marks the end of the conditional branching block. (The resulting paragraph remains unclear but is still much easier to read than the original sentence.)

:::

## 将一些长句子转换为列表

在许多技术性的长句子里，都有一个渴望打破束缚的清单。例如，想想下面这句话:

>To alter the usual flow of a loop, you may use either a **break** statement (which hops you out of the current loop) or a **continue** statement (which skips past the remainder of the current iteration of the current loop).
<br>
要改变一个循环的常规流程，你可以使用break语句（跳出当前循环）或continue语句（跳过当前循环迭代的剩余部分）。

当你在一个长句子中看到连词 "or"(或) 时，考虑将该句子重构为一个圆点状的列表。当你在一个长句中看到一个嵌入的项目或任务列表时，考虑将该句子重构为一个带圆点或编号的列表。例如，前面的例子包含了连词 "or"，那么我们就把这个长句子转换成下面的列表。

要改变循环的通常流程，可以调用以下语句之一:

* break, which hops you out of the current loop.
<br>
break，它可以跳出当前循环。

* continue, which skips past the remainder of the current iteration of the current loop. 
<br>
continue，它可以跳出当前循环。

### 练习

把下面的句子改写成更短、更清晰的句子。确保你的答案包含一个列表。

1. To get started with the Frambus app, you must first find the app at a suitable store, pay for it using a valid credit or debit card, download it, configure it by assigning a value for the Foo variable in the /etc/Frambus file, and then run it by saying the magic word twice.
<br>
要开始使用 Frambus 应用程序，你必须首先在一个合适的商店找到该应用程序，使用有效的信用卡或借记卡支付，下载它，通过在/etc/Frambus 文件中为 Foo 变量指定一个值来配置它，然后通过说两次这个神奇的单词来运行它。

2. KornShell was invented by David Korn in 1983, then a computer scientist at Bell Labs, as a superset of features, enhancements, and improvements over the Bourne Shell (which it was backwards compatible with), which was invented by Stephen Bourne in 1977 who was also a computer scientist at Bell Labs.
<br>
KornShell 是 1983 年由大卫 · 科恩发明的，当时他是贝尔实验室的计算机科学家，作为 Bourne Shell 的超级功能、增强和改进(它向后兼容) ，这是由斯蒂芬 · 伯恩在1977年发明的，他同时也是贝尔实验室的计算机科学家。

::: details 查看答案
第一句

Take the following steps to get started with the Frambus app:
采取以下步骤开始使用 Frambus 应用程序:

1.Find the app at a suitable store.
<br>
在一个合适的商店找到应用程序。

2. Pay for the app using a valid credit or debit card.
<br>
使用有效的信用卡或借记卡支付应用程序。

3. Download the app.
<br>
下载应用程序

4. Configure the app by assigning a value for the Foo variable in the /etc/Frambus file.
<br>
通过在/etc/Frambus 文件中为 Foo 变量分配一个值来配置应用程序。

5. Run the app by saying the magic word twice.
<br>
通过说两遍这个神奇的单词来运行这个应用程序。


第二句

The following two Bell Labs computer scientists invented popular shells:
<br>
以下两位贝尔实验室的计算机科学家发明了流行的外壳:

1. Stephen Bourne invented the Bourne Shell in 1977.
<br>
斯蒂芬 · 伯恩在1977年发明了 Bourne Shell。

2. David Korn invented the KornShell in 1983.
<br>
大卫 · 科恩在1983年发明了 KornShell。

The KornShell is a backwards-compatible superset of the Bourne Shell, containing many improvements over the older shell.
<br>
KornShell 是 Bourne Shell 的向后兼容超集，包含对旧 Shell 的许多改进。
:::

## 删除或减少无关的词

许多句子含有填充词---文字中的垃圾食品，它们占用篇幅而不滋养读者。例如，看看你是否能在下面的句子中发现不必要的单词:

> An input value greater than 100 causes the triggering of logging.
<br>
大于100的输入值会触发日志记录。

使用 **tiggers** 代替 **causes the triggering** 可以让句子更短一些:

> An input value greater than 100 triggers logging.
<br>
大于100的输入值触发日志记录。

多加练习，你会发现多余的词语，并在删除或减少它们时感受到巨大的快乐。例如，思考下面这句话:

> This design document provides a detailed description of Project Frambus.
<br>
本设计文档提供了对 Project Frambus 的详细描述。

短语提供了对动词描述(或动词细节)的缩减的详细描述，所以结果可以是:

>This design document describes Project Frambus.
<br>
本设计文档描述了 Project Frambus。

下表建议替换一些常见的臃肿的词语:
| Wordy 啰嗦/冗长                          | Concise  简短 |
| ---------------------------------------- | ------------- |
| at this point in time 在这个时候         | now 现在      |
| determine the location of 确定... 的位置 | find 找到     |
| is able to 能够                          | can 可以      |


### 练习
缩短下列句子，但不改变其意思:

1. In spite of the fact that Arnold writes buggy code, he writes error-free documentation.
<br>
尽管 Arnold 编写了错误代码，但他编写了零错误的文档。

2. Changing the sentence from passive voice to active voice enhances the clarification of the key points.
<br>
将句子由被动语态改为主动语态有助于澄清要点。

3. Determine whether Rikona is able to write code in COBOL.
<br>
确定 Rikona 是否能够用 COBOL 编写代码。

4. Frambus causes the production of bugs, which will be chronicled in logs by the LogGenerator method.
<br>
Frambus 导致产生 bug，这些 bug 将通过 LogGenerator 方法记录在日志中。

::: details 查看答案

以下是一些可能的解决方案:

1. Although Arnold writes buggy code, he writes error-free documentation.
<br>
尽管 Arnold 编写了错误代码，但他编写的文档没有错误。
<br>
或: Arnold writes buggy code. However, he writes error-free documentation.
<br>
Arnold 写了错误代码。但是，他编写了无错误的文档。

2. Changing the sentence from passive voice to active voice clarifies the key points.
<br>
将句子从被动语态改为主动语态可以澄清要点。

3. Determine whether Rikona can code in COBOL.
<br>
确定 Rikona 是否可以使用 COBOL 进行编码。

4. Frambus produces bugs, which the LogGenerator method logs.
<br>
Frambus 会产生 LogGenerator 方法记录的 bug。

:::

## 减少从句（可选）

从句是一个独立的逻辑片段，它包含一个主语和一个动作。每个句子都包含以下内容。
* 一个主句
* 零个或多个从句

从句修饰主句中的意思。顾名思义，从句不如主句重要。例如，思考下面这句话:

>Python is an interpreted programming language, which was invented in 1991.
><br>
>Python 是1991年发明的一种解释型编程语言。
><br>
>* 主句: Python is an interpreted programming language
>* 从句: which was invented in 1991

你通常可以通过引导从句的单词来识别它们。下面的列表(不完整)显示了引入从句的常用词:

* which 哪个
* that 那个
* because 因为
* whose 谁的
* until 直到
* unless 除非
* since 自从

有些从句以逗号开头，但有些不是。例如，下面句子中突出显示的从句以 because 开头，不包含逗号:

>I prefer to code in C++ **because** I like strong data typing.
<br>
我喜欢用 c++ 编写代码因为我喜欢强数据类型。

When editing, scrutinize subordinate clauses. Keep the one sentence = one idea formula in mind. Do the subordinate clauses in a sentence extend the single idea or do they branch off into a separate idea? If the latter, consider dividing the offending subordinate clause(s) into separate sentences.

编辑文字时，仔细检查从句。记住：一句话 = 一个想法的公式。句子中的从句是扩展了单一的概念，还是形成一个单独的概念？如果是后者，可以考虑将从句分成不同的句子。

### 练习

判断哪些句子包含应该分成单独句子的从句。(不用重写句子，只需要确定应该重写的句子。)

1. Python is an interpreted language, which means that the language can execute source code directly.
<br>
Python 是一个直译语言语言，这意味着该语言可以直接执行源代码。

2. Bash is a modern shell scripting language that takes many of its features from KornShell 88, which was developed at Bell Labs.
<br>
是一个现代的 shell/脚本语言，它的许多特性来自于贝尔实验室开发的 KornShell 88。

3. Lisp is a programming language that relies on Polish prefix notation, which is one of the systems invented by the Polish logician Jan Łukasiewicz.
<br>
Lisp 是一种依赖于波兰语前缀表示法的编程语言，这是波兰逻辑学家 Jan ukasiewicz 发明的系统之一。

4. I don't want to say that Fortran is old, but only radiocarbon dating can determine its true age.
<br>
我不想说 Fortran 很古老，但只有放射性碳定年法才能确定它的真实年龄。

::: details 查看答案
我们将从句加了阴影。

1. Python is an interpreted language,<span class="blue-span"> which means that the language can execute source code directly.</span> 
<br>
Python 是一个直译语言语言，这意味着该语言可以直接执行源代码。
<br>
<br>
**这个句子中的从句延伸了主要思想，所以这个句子本身就很好。**

2. Bash is a modern shell scripting language <span class="blue-span">that takes many of its features from KornShell 88,</span> <span class="yellow-span">which was developed at Bell Labs.</span>
<br>
Python 是一个现代的 shell/脚本语言，它的许多特性来自于贝尔实验室开发的 KornShell 88。
<br>
<br>
第一个从句扩展了主要思想，但第二个从句则走向了另一个方向。把这个句子一分为二。

3. Lisp is a programming language <span class="blue-span">that relies on Polish prefix notation,</span> <span class="yellow-span">which is one of the systems invented by the Polish logician Jan Łukasiewicz.</span> 
<br>
Lisp 是一种依赖于波兰语前缀表示法的编程语言，波兰语逻辑学家 Jan ukasiewicz 发明了波兰语前缀表示法。
<br>
<br>
第一个从句显然对这个句子很重要，但是第二个从句使读者离主句太远了。把这个句子一分为二。

4. I don't want to say that Fortran is old, <span class="blue-span">but only radiocarbon dating can determine its true age.</span> 
<br>
我不想说 Fortran 很古老，但只有放射性碳定年法才能确定它的真实年龄。
<br>
<br>
从句对这个句子很重要，所以这个句子本身就很好。

:::


## 区分 **that** 和 **which**

**That** 和 **Which** 都引入了从句，它们之间有什么区别呢？在某些国家，这两个词几乎是可以互换的。但美国的一些敏感的读者会愤怒地指出，你又把这两个词混淆了。

在美国，将 **which** 用于非必要的从句，而将 **that** 用于句子中不能缺少的重要从句。例如，下面这个句子的关键信息是Python是一种解释性语言；如果没有 *Guido van Rossum invented*，这个句子依然是完整的。

> Python is an interpreted language, which Guido van Rossum invented.
<br>
Python是一种解释型语言，是Guido van Rossum发明的。

相比之下，下面这句话要求 *don't involve linear algebra* 必须存在:
> Fortran is perfect for mathematical calculations that don't involve linear algebra.
<br>
Fortran 非常适用于不涉及线性代数的数学计算。

如果你大声朗读一个句子，听到从句前有一个停顿，那么就用 which。如果你没有听到停顿，就用 that。回过头来，读一读前面的两个例句。你听到第一句中的停顿了吗？

在 **which** 前加一个逗号，在 **that** 前不要加逗号。

<style>
.blue-span {
    background-color: #B3E5FC;
    color: #01579B;
}
.yellow-span {
    background-color: #FFF9C4;
    color: #984A06;
}
</style>