# 列表和表格

[[toc]]

好的列表可以将技术上的混乱转化为有序的东西。技术读者通常都喜欢列表。因此，在写作时，要寻求机会将散文转化为列表。

## 选择正确的列表类型

以下类型的列表在技术写作中占主导地位：

* bulleted lists 项目符号列表
* numbered lists 编号列表
* embedded lists 嵌入式列表

对无需编号的项目使用项目符号列表，对需要编号的项目使用编号列表。换句话说：

* 如果您重新排列项目符号列表中的项目，列表的含义不会改变。
* 如果重新排列编号列表中的项目，则列表的含义会发生变化。

例如，我们制作了一个项目符号列表，因为重新排列其项目不会改变列表的含义：

> Bash 提供了以下字符串操作机制：
> 
> * 从字符串的开头删除子字符串
> * 将整个文件读入一个字符串变量

相比之下，下面的列表必须是编号列表，因为重新排列其项目会改变列表的含义：

> 执行以下步骤来重新配置服务器：
> 
> 1. 停止服务器。
> 2. 编辑配置文件。
> 3. 重新启动服务器。

一个**嵌入式列表**（有时称为**贯穿式列表**）包含塞在一个句子中的项目。例如，以下句子包含一个有四个项目的嵌入式列表。

>The llamacatcher API enables callers to create and query llamas, analyze alpacas, delete vicugnas, and track dromedaries.

一般来说，嵌入式列表是呈现技术信息的一种糟糕的方式。尝试将嵌入式列表转换为项目符号列表或编号列表。例如，您应该将包含嵌入列表的句子转换为以下段落：

>The llamacatcher API enables callers to do the following:
> * Create and query llamas.
> * Analyze alpacas.
> * Delete vicugnas.
> * Track dromedaries.

### 练习

将以下段落转换为一个或多个列表：

> Today at work, I have to code three unit tests, write a design document, and review Janet's latest document. After work, I have to wash my car without using any water and then dry it without using any towels.

::: details 查看答案

第一种答案：
>I must do the following at work today:
>
>* Code three unit tests.
>* Write a design document.
>* Review Janet's latest document.
>
>After work, I must do the following:
>
>* Wash my car without using any water.
>* Dry my car without using any towels.

另一种答案：
> I must do the following tasks today:
> 
> * At work:
>     * Code three unit tests.
>     * Write a design document.
>     * Review Janet's latest document.
> * After work:
>     1. Wash my car without using any water.
>     2. Dry my car without using any towels.

:::

## 保持列表项平行

有效列表与缺陷列表的区别是什么？有效列表是平行的；有缺陷的列表往往是不平行的。**平行**列表中的所有项目看起来都『属于』一个整体的。也就是说，平行列表中的所有项目都匹配以下参数：

* 语法
* 逻辑范畴
* 大写
* 标点

相反，**非平行**列表中至少有一项无法通过上述的一致性检查。

例如，以下列表是平行的，因为所有项目都是复数名词（语法）、可食用（逻辑范畴）、小写（大写），并且没有句点或逗号（标点符号）。

* carrots 胡萝卜
* potatoes 马铃薯
* cabbages 卷心菜

相比之下，以下列表在所有四个参数上都非常不平行：

* carrots 胡萝卜
* potatoes 马铃薯
* The summer light obscures all memories of winter.
<br>
夏日的阳光遮住了冬天的所有回忆。

以下列表是平行的，因为所有项目都是完整的句子，带有完整的句子大写和标点符号：

* 胡萝卜含有大量的维生素A。
* 土豆味道鲜美。
* 卷心菜提供大量的维生素 K。

列表中的第一项建立了一种模式，读者希望在后续项中看到这种模式的重复。

### 练习

以下列表是平行的还是非平行的？

* Broccoli inspires feelings of love or hate.
<br>西兰花能激发爱与恨的感觉。
* Potatoes taste delicious.
<br>土豆尝起来很美味
* Cabbages. 
<br>卷心菜

::: details 查看答案

该列表是非平行的。前两项是完整的句子，但第三项不是句子。（不要被第三项的大写和标点符号所迷惑。）

:::

### 练习

以下列表是平行的还是非平行的？

* The red dots represent sick trees.
<br>红点代表生病的树木。

* Immature trees are represented by the blue dots.
<br>未成熟的树木用蓝点表示。

* The green dots represent healthy trees.
<br>绿点代表健康的树木。

::: details 查看答案
这是一个非平行列表。第一项和第三项是主动语态，而第二项是被动语态。
:::

## 用祈使动词作为有序列表的开始

使用祈使动词作为有序列表中的所有项目的开始。**祈使动词**是一个命令，例如**open（打开）**或**start（启动）**。请注意以下有序列表中的所有项目都是以祈使动词开头：

1. Download the Frambus app from Google Play or iTunes.
2. Configure the Frambus app's settings.
3. Start the Frambus app.

下面的编号列表不是并列的，因为其中两个句子是以祈使动词开头，但第三项不是：

1. Instantiate the Froobus class.
2. Invoke the Froobus.Salmonella() method.
3. The process stalls.

### 练习

使以下列表平行。确保结果列表中的每个元素都以祈使动词开头：

1. Stop Frambus
2. The key configuration file is /etc/frambus. Open this file with an ASCII text editor.
3. In this file, you will see a parameter named Carambola, which is currently set to the default value (32). Change this value to 64.
4. When you are finished setting this parameter, save and close the configuration file
5. now, start Frambus again.

::: details 查看答案

1. Stop Frambus.
2. Open the key configuration file, /etc/frambus, with an ASCII text editor.
3. Change the Carambola parameter from its default value (32) to 64.
4. Save and close the configuration file.
5. Restart Frambus.

:::


## 适当地使用标点符号

如果列表项是一个句子，请使用句子大写和标点符号。否则，不要使用大写和标点符号。例如，下面的列表项是一个句子，所以 Most 使用大写 M，并在句末加上句号:

* Most carambolas have five ridges. 
<br>
大多数杨桃有五个脊

然而，下面的列表项目不是句子，所以 the 中的 t 使用小写，省略句号：

* the color of lemons
<br>
柠檬的颜色

## 创建有效的表格

分析人员往往喜欢表格。在一个包含多个段落和一个表格的页面中，工程师们的眼睛会聚焦到表格。

在创建表格时，请考虑以下准则：

* 用一个有意义的标题来标记每一列。不要让读者猜测每一列的内容。
* 避免在一个表格单元中放太多的文字。如果一个表格单元格容纳超过两句话，问问自己这些信息是否属于其他格式。
* 虽然不同的列可以容纳不同类型的数据，但要保持各列平行。例如，表格中的同一列，不应混合写入数字 和 马戏团演员。

::: tip
注意：有些表格并不能在所有的形式因素中都呈现得很好。例如，一个在你的笔记本电脑上看起来很好的表格，在你的手机上可能看起来很糟糕。
:::

## 介绍每个列表和表格

我们建议在引入每个列表和表格的时候，用一句话向读者介绍它们。换句话说，用冒号作为结尾的句子给出列表或表格的上下文。

虽然不是强制要求，但是我们建议你把这个词 `following（以下）`用到引言中。例如，思考以下句子：

>The following list identifies key performance parameters:
<br>
以下列表确定了关键性能参数:
<br>
<br>
Take the following steps to install the Frambus package:
<br>
采取以下步骤安装 Frambus 包:
<br>
<br>
The following table summarizes our product's features against our key competitors' features:
<br>
下表总结了我们产品的特点和主要竞争对手的特点:

### 练习

为下表写一个介绍型句子：


| Languages | Inventor          | Year Introduced | Key Feature |
| :-------- | :---------------- | :-------------- | :---------- |
| Lisp      | John McCarthy     | 1958            | recursion   |
| C++       | Bjarne Stroustrup | 1979            | OOP         |
| Python    | Guido van         | Rossum          | 1994        | simplicity |

::: details 查看答案
> The following table contains a few key facts about some popular programming languages:
<br>
下表包含了一些关于一些流行编程语言的关键事实:

>The following table identifies the inventor, year of invention, and key feature of three popular programming languages:
<br>
下表列出了三种流行编程语言的发明者、发明年份和主要特点:

:::