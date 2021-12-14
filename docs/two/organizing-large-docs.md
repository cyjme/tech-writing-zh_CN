# 整理大型文档

您如何将大量信息手机整理成一个有凝聚力的文档或网站？或者，您如何将现有的杂乱文档或网站重新整理起来，使之成为一个更容易接近和有用的东西？下面的策略可以帮到你：

* 选择编写单个大型文档或一组文档
* 整理文件
* 添加导航
* 逐步披露信息

## 什么时候写大型文档

你可以将一组信息组织成较长的独立文件或一组较短的相互连接的文件。一组较短的相互连接的文件通常以网站、维基或类似的结构化格式发布。

有些读者对长文档的反应比其他人更积极些。考虑一下你的两个假设的读者的以下观点：

* Hong 发现阅读长文件很困难，而且会迷失方向。他更喜欢使用站点搜索来查找问题的答案。
* Rose 可以轻松浏览大型文档。她经常使用 Web 浏览器中的内置页面搜索功能来查找当前页面上的有用信息。

那么，您应该将您的材料组织成单个文档还是网站中的一组文档？请考虑以下准则：

* 当针对不熟悉主题的读者时，操作指南、介绍性概述和概念指南通常更适合作为较短的文档。例如，对您的主题完全陌生的读者可能很难记住许多新术语、概念和事实。请记住，您的读者可能正在阅读您的文档以快速了解该主题的总体概况。

* 深入的教程、最佳实践指南和命令行参考页面可以很好地用作较长的文档，尤其是针对已经对工具和主题有一定经验的读者时。

* 一个优秀的教程可以依靠叙述来引导读者完成长篇文档中的一系列相关任务。然而，即使是大型教程，有时也可以分解成更小的部分。

* 许多长篇文档并不是为了一口气阅读而设计的。例如，用户通常浏览参考页面以搜索命令或标志的解释。

本单元的其余部分将介绍一些可用于编写长篇文档的技巧，如编写教程和一些概念指南的技巧。

## 组织文档

本节提出了一些用于规划长文档的技巧，包括创建大纲和起草导语。在你完成了文件的第一稿后，你可以对照你的大纲和导语来审查它，以确保你没有遗漏任何你最初打算涵盖的内容。

### 制定文档大纲

从一个结构化的、高层次的大纲开始，可以帮助你对主题进行分组，确定哪里需要更多的细节。大纲可以帮助你在开始写作之前，转移主题。

你可能会发现，把大纲看作是你的文件的叙述是很有用的。写作大纲没有标准的方法，但以下指南提供了一些实用的提示，你可能会觉得有用。

* 在你要求你的读者执行一项任务之前，向他们解释他们为什么要这样做。例如，下面的要点说明了有关审核和改善网页无障碍访问的教程中的大纲部分：
    * 引入一个浏览器插件来审核网页的可访问性；说明读者将使用审计报告的结果来修复几个错误。
    * 列出运行插件和审核网页无障碍性的步骤。
* 将你的大纲的每个步骤限制为在描述一个概念或完成某个具体的任务。
* 构建您的大纲，以便您的文档在读者需要的时候引入相关信息。例如，当您的读者刚刚开始了解基础知识时，他们可能不需要（或想知道）文档的介绍部分中的项目历史。如果您觉得该项目的历史记录很有用，请在文档末尾包含指向此类信息的链接。
* 考虑解释一个概念，然后向读者展示如何在示例项目或他们自己的工作中应用它。在概念信息和实际步骤之间交替的文档，可能是一种特别吸引人的学习方式。
* 在你开始起草之前，与你的贡献者分享提纲。如果你和一个要审查和测试你的文件的贡献者团队一起工作，大纲就特别有用。
### 提纲练习

查看并更新以下长教程简介的高级大纲。要解决此练习，您可以执行以下任一操作：

* 重新排列现有主题。
* 添加您认为应该在介绍中出现的缺失主题。
* 删除您认为与介绍无关的任何主题。

```markdown
## The history of the project

Describes the history of the development of the project.

## Prerequisites

Lists concepts the reader should be familiar with prior to starting, as well as
any software or hardware requirements.

## The design of the system

Describes how the system works.

## Audience

Describes who the tutorial is aimed at.

## Setting up the tutorial

Explains how to configure your environment to follow the tutorial.

## Troubleshooting

Explains how to diagnose and solve potential problems that might occur when
working through the tutorial.

## Useful terminology

Lists definitions of terms that the reader needs to know to follow the
tutorial.
```


:::details 查看答案
以下是一个可能的解决办法:

```markdown
## Audience

Describes who the tutorial is aimed at.

## Prerequisites

Lists concepts the reader should be familiar with prior to starting, as well as
any software or hardware requirements.

## Setting up the tutorial

Explains how to configure your environment to follow the tutorial.

## Useful terminology

Lists definitions of terms that the reader needs to know to follow the
tutorial.
```

:::


### 介绍文档

如果你的文档的读者，在介绍中找不到文档的相关性，他们很可能会忽略它。为了给读者设置基本规则，建议提供包含以下信息的介绍：

* 文件涵盖哪些内容。
* 您希望读者拥有哪些前期知识。
* 文件未涵盖的内容。

请记住，您希望使文档易于维护，因此不要试图在介绍中涵盖所有内容。

以下段落展示了前面列表中的想法，作为一个名为 Froobus 的假设文档发布平台的概述：

```text
This document explains how to publish Markdown files using the Froobus system.
Froobus is a publishing system that runs on a Linux server and converts
Markdown files into HTML pages. This document is intended for people who are
familiar with Markdown syntax. To learn about the syntax, see the Markdown
reference. You also need to be comfortable running simple commands in a
Linux terminal. This document doesn't include information about installing or
configuring a Froobus publishing system. For information on installing Froobus,
see Getting started. 
```
完成初稿后，对照你在概述中设定的期望，检查你的整个文件。你的介绍是否对你所涉及的主题提供了准确的概述？你可能会发现，把这种审查看作是一种文件质量保证（QA）的形式是很有用的。

### 练习

在本练习中，请查看并修订以下介绍，以获得一种假设的编程语言的最佳实践指南，该语言名为F@.删除您认为在此上下文中不相关的任何信息，并添加您认为缺少的任何信息。

```markdown
This guide lists best practices for working with the F@ programming language.
F@ was developed in 2011 as an open source community project. This guide
supplements the F@ style guide. In addition to the best practices in this guide,
make sure you also install the F@ command-line linter and run it on your code.
The programming language is widely adopted in the health industry. If you have
suggestions for additions to the list of best practices, file an issue in the
F@ documentation repository.
```
:::details 查看答案
以下是一种可能的解决方案：
```text
This guide lists best practices for working with the F@ programming language.
Before you review this guide, complete the introductory tutorial for new F@
developers. This guide supplements the F@ style guide. In addition to the best
practices in this guide, make sure you also install the F@ command-line linter
and run it on your code. If you have suggestions for additions to the list of
best practices, file an issue in the F@ documentation repository.
```
:::

## 添加导航

为你的读者提供导航和指示，确保他们能够找到他们正在寻找的东西和他们需要的信息。

清晰的导航包括：

* 引言和摘要部分
* 一个清晰的、符合逻辑的主题发展
* 帮助用户理解主题的标题和副标题
* 显示用户在文档中位置的目录菜单
* 相关资源或更多深入资料的连结
* 链接到接下来要学的内容

下面几节的提示可以帮助你规划文档中的标题。

### 倾向于基于任务的标题

选择一个能描述你的读者正在进行的任务的标题。避免使用不熟悉的术语或工具的标题。例如，假设你正在记录创建一个新网站的过程。为了创建该网站，读者必须初始化Froobus框架。为了初始化Froobus框架，读者必须运行carambola命令行工具。乍一看，在说明中添加以下任一标题似乎是合乎逻辑的。

* 运行 carambola 命令
* 初始化 Froobus 框架

除非你的读者对这一主题的术语和概念已经非常有经验，否则一个更熟悉的标题可能更合适，比如创建网站。

### 在每个标题下提供正文
大多数读者都希望在每个标题下至少有一个简短的介绍，以提供一些背景。避免在第二级标题之后立即放置第三级标题，如下例所示:

```markdown
## Creating the site
### Running the carambola command
```

在这个例子中，一个简短的介绍可以帮助读者确定方向。

```markdown
## Creating the site

To create the site, you run the `carambola` command-line tool. The command
displays a series of prompts to help you configure the site.

### Running the carambola command
```


### 标题练习
帮助读者浏览你的文档有助于他们找到成功使用你的工具所需的信息。通常，一个清晰的、组织良好的目录或大纲就像一张地图，帮助你的用户浏览你的工具的功能。

在这个练习中，请改进以下大纲。你可以重新排列、添加和删除主题，也可以创建二级条目。

```text
About this tutorial
Advanced topics
Build the asset navigation tree
Define resource paths
Defining and building projects
Launch the development environment
Defining and building resources
What's next
Define image resources
Audience
See also
Build an image resource
Define an image project
Build an image project
Setting up the tutorial
Select the tutorial asset root
About this guide
```
::: details 查看答案
```markdown
## About this tutorial

### Audience

### About this guide

### Advanced topics

## Setting up the tutorial

### Select the tutorial asset root

### Launch the development environment

### Build the asset navigation tree

### Define resource paths

## Defining and building resources

### Define image resources

### Build an image resource

## Defining and building projects

### Define an image project

### Build an image project

## Defining and building databases

### Define a database

### Build a database

## Pushing, publishing, and viewing a database

### Push a database

### Publish a database

### View a database

## Configuring display rules for point data

### Define, configure, and build vector data

## See also

### Sample data files

## What's next
```
:::

## 循序渐进地披露信息


学习新的概念、想法和技术，对于许多能够按照自己的节奏阅读文件的读者来说，是一种有益的经历。然而，过快地面对太多的新概念和指示会让人不知所措。读者更有可能接受较长的文件，在他们需要的时候逐步向他们透露新信息。以下技巧可以帮助你在文件中纳入渐进式披露。

* 在可能的情况下，尝试在依赖新术语和概念的说明附近引入这些术语和概念。

* 打破大段的文字墙。为了避免在一页纸上出现多个大段的文字，应在适当的时候引入表格、图表、列表和标题。

* 分解大量的系列步骤。如果你有一个特别长的复杂步骤清单，试着把它们重新排列成较短的清单，解释如何完成子任务。

* 从简单的例子和说明开始，逐步增加更有趣和复杂的技术。例如，在创建表单的教程中，首先解释如何处理文本响应，然后介绍其他技术来处理多选、图像和其他响应类型。
