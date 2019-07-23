## 知识小点

### 使用 Prettier格式化代码

1. 安装prettier
```
npm install --save-dev --save-exact prettier
```
2. 在项目根目录创建 .prettierrc 文件，内容如下
```js
{
  "printWidth": 80,//单行最大长度,推荐（单行）不超过80个字符的coding方式
  "tabWidth": 2,//设置工具每一个水平缩进的空格数
  "semi": true,//在语句末尾添加分号；
  "singleQuote": true,//使用单引号而非双引号；
  "jsxSingleQuote": false,
  "trailingComma": "none",//在任何可能的多行中输入尾逗号。尾逗号[a,b,c,d,] 数组项d后面的逗号就是尾逗号。
  "bracketSpacing": true,//在对象字面量声明所使用的的花括号后（{）和前（}）输出空格。例如{   foo: bar  }
  "jsxBracketSameLine": false,//在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行
  "arrowParens": "avoid"//为单行箭头函数的参数添加圆括号。" avoid ":尽可能不添加圆括号，示例：x => x；" always " - 总是添加圆括号，示例： (x) => x
}
```

3. 安装vs code的插件Prettier - Code formatter， 格式化某个文件时，在打开文件的当前页按shift + alt + f。

