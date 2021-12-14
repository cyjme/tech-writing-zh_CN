# 需要掌握的基础语法概念（可选）

[[toc]]

本章提供的语法概念刚好够理解本课程的其余部分。如果您已经掌握了这些概念，请转到[单词](/tech-writing/one/words.html)。否则，请继续阅读。

为了简单起见，本章节走了一些捷径；语法主题实际上比本单元所阐述的要复杂得多。

语言学者对 "词性的数量和类别" 意见并不统一。下表重点介绍了与本课程相关的词性:

| 词性   | 定义                                 | 例子                                               |
| ------ | ------------------------------------ | -------------------------------------------------- |
| 名词   | 人、地点、概念或事物                 | **小明**参加**比赛**。                             |
| 代词   | 代替另一个名词（或更大的范围）的名词 | 小明参加比赛。**他**喜欢竞争。                     |
| 形容词 | 修饰名词的词或词组                   | 小明穿着**蓝色的**鞋子。                           |
| 动词   | 动作词或短语                         | 小明**参加**比赛。                                 |
| 副词   | 修饰动词、形容词或其他副词的词或短语 | 小明跑得**很慢**。                                 |
| 介词   | 指定两个名词位置关系的词或词组       | 小明的运动鞋很少**在**他的架子上。                 |
| 连词   | 连接两个名词或短语的词               | 小明的奖杯**和**缎带只存在于他的想象中。           |
| 过渡   | 连接两个句子的单词或短语             | 山姆每周都跑一次比赛，**然而**，他比赛的成绩很差。 |


## 名词

名词代表人、地点或事物。**朱迪**、**南极洲**和 **锤子**都是名词，但诸如**健壮** 和**完美**等无形的概念也是名词。在以下示例段落中，我们将名词格式化为粗体：

> 在**框架**，想要修改一个**对象**，必须拷贝所有基础**值**。代码库中的**协议**非常庞大，因此复制**协议**的代价高得令人无法接受。<br><br>
In the **framework**, an **object** must copy any underlying **values** that the **object** wants to change. The protos in the codebase are huge, so copying the protos is unacceptably expensive.

在编程中，您可能将类和变量视为程序的名词。

### 练习

找出下面这一段文字中的六个名词：
> C enables programmers to control pointers and memory. Great power brings great responsibility.

::: details 点击查看答案
**C** enables **programmers** to control **pointers** and **memory**. Great **power** brings great **responsibility**.
:::

现在假设第二句话如下:

> Great control brings great responsibility.

"control" 是动词还是名词？

在这句话中，"control" 是一个名词，尽管上一句话中的 "control" 是动词。英语中的很多单词在某些上下文中充当名词，在另一些上下文中充当动词。

## 代词

代词是指代某个名词的名词。例如，观察以下两个句子：

> Janet writes great code. **She** is a senior staff engineer.

在前面的示例中，第一句话将**Janet**确立为名词。第二句用代词**She**替换了名词**Janet**。

在以下示例中，代词**This**替换了整个句子：

> Most applications aren't sufficiently tested. **This** is poor engineering.

### 练习

找出下列段落中的三个代词：

> The cafeteria featured peashew butter and pluot jam on pumperye toast. Employees found it awesome and wished they could eat this every day.

::: details 点击查看答案
The cafeteria featured peashew butter and pluot jam on pumperye toast. Employees found **it** awesome and wished **they** could eat **this** every day.
:::

## 动词

动词是表示动作的词或短语。当您想要表示两个名词(参与者和目标)之间的关系时，动词可以完成这项工作。动词标识参与者对目标做了什么。

每个句子必须至少包含一个动词。例如，以下每个句子都包含一个动词：

* Sakai **prefers** pasta.
* Rick **likes** the ocean.
* Smurfs **are** blue.
* Jess **suffers** from allergies.

有些句子，例如下面这些，包含多个动词：

* Nala **suffers** from allergies and **sneezes** constantly.
* The program **runs** slowly but **fails** quickly.

根据时态和变化情况，一个动词可以由一个词或多个词组成。例如:

* Tina **was eating** breakfast a few hours ago.
* Tina **is eating** lunch right now.
* Tina **will eat** dinner tonight at 7:00.

### 练习

找出下列段落中的动词：

> Samantha is coding Operation Bullwinkle in C++. This project currently consumes over 80,000 lines of code. She previously used Python, but recently gravitated to C++. Samantha leads a team of four software engineers, which will grow to six software engineers next quarter.

::: details 查看答案
Samantha **is coding** Operation Bullwinkle in C++. This project currently **consumes** over 80,000 lines of code. She previously **used** Python, but recently **gravitated** to C++. Samantha **leads** a team of four software engineers, which **will grow** to six software engineers next quarter.
:::

## 形容词和副词

形容词修饰名词。例如，在下面的段落中，注意形容词如何修饰后面的名词:
>Tom likes red balloons. He prepares delicious food. He fixed eight bugs at work.

>汤姆喜欢**红**气球。他准备了**美味的**食物。他在工作中修复了 **八个**错误。

大多数副词修饰动词。例如，请注意以下句子中的副词（**Effective**）如何修饰动词（**fix**）：

* Jane **efficiently** fixes bugs.

* Jane**有效地**修复了错误。

副词不一定紧挨着它们的动词。例如，在下面的句子中，副词（**Effective**）与动词（**fix**）相距两个词：

> Jane fixes bugs efficiently.

> Jane**有效地**修复了错误。

副词也可以修饰形容词或其他副词。

### 练习

找出以下段落中的四个形容词：

> Engineering is a great career for a brilliant mind. I know a clever engineer who could excel at any intellectual task.

> 工程学对于一个聪明的人来说是一个伟大的职业。我认识一个聪明的工程师，他能胜任任何智力方面的工作。

::: details 查看答案
> Engineering is a **great** career for **brilliant** minds. I know a **clever** engineer who could excel at any **intellectual** task.
:::

## 介词

介词指定两个事物之间的关系。一些介词可以回答这个问题:

* 这个东西相对于另一个东西在哪里? <br/>Where is this thing relative to that other thing? 

例如：

* 子菜单**位于**菜单**下方**。<br/>The submenu lies **under** the menu.

* 定义出现**在**术语的**旁边**。<br/>The definition appears **next to** the term.

* `print`函数**属于**主例程。<br/>The `print` function falls **within** the main routine.

其他介词可以回答这个问题:

* 这个事件与另一个事件什么时候相关?<br/>Whee is this event relative to that other event?

例如：

* 程序**在**评估减法运算**之前**评估加法运算。<br/> The program evaluates the addition operation **before** evaluating the subtraction operation.

* cron守护程序**在**每周二中午执行脚本。<br/> The cron daemon executes the script every Tuesday **at** noon.

一些介词（例如，**by**和**of**）回答所属关系的问题。例如，以下句子使用 **by**将一本书与其作者联系起来：

* Kernighan 和 Richie 写的\<\<The C Programming Language\>\> 依然很受欢迎. <br/>The C Programming Language by Kernighan and Richie remains popular.

::: tip 注意
一些英语单词分为多个语法类别。例如，虽然**under**通常是介词，但**根据**上下文，**under**也可以用作副词或形容词。
:::


### 练习


找出以下段落中的两个介词：
>参数可以选择性地出现在 URL 中的路径之后。<br>Parameters may optionally appear within a URL, after the path.

::: details 查看答案
* 参数可以选择性地出现**在** URL 中的路径**之后**。<br/>Parameters may optionally appear **within** a URL, **after** the path.
:::

## 连接词和过渡词
连接词连接短语或句子中的名词; 过渡词连接句子本身。

最重要的连词如下:

* and<br>和
* but<br>但是
* or<br>或

例如，在下面的句子中，`and`将 `code`与`documentation`连接起来，`but`将句子的前半部分与后半部分连接起来。

>Natasha writes great internal code and documentation but seldom works on open-source projects.<br><br>
Natasha 编写了很棒的内部代码和文档，但很少在开源项目中工作。

技术写作中最重要的过渡词如下:

* however <br>然而
* therefore <br>因此
* for example <br>例如

例如，在下面的文章中，注意过渡词是如何连接和语境化句子的:

>Juan is a wonderful coder. However, he rarely writes sufficient tests. For example, Juan coded a 5,000 line FFT package that contained only a single 10-line unit test.<br><br>
Juan 是一个优秀的程序员。然而，他很少编写足够的测试。例如，Juan 编写了一个5,000行 FFT 包，其中只包含一个10行单元测试。

### 练习
在横线处填写最合适的过渡词:

>Barbara typically studies problems for a long time before writing the first line of code. _____________, she spontaneously coded a method the other day when she was suddenly inspired.
<br><br>
Barbara 通常在编写第一行代码之前花很长时间研究问题。______________， 前几天她突然灵感迸发时，她自发地编写了一个方法

::: details 查看答案
However <br>
然而
:::
