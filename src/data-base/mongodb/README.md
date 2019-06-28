## mongodb

- [1. 基本操作](./#1-基本操作)
    - [1.1 数据库和集合的基本操作](./#1.1-数据库和集合的基本操作)
    - [1.2 数据插入](./#1.2-数据插入)


### 1. 基本操作

#### 1.1 数据库和集合的基本操作
连接数据库：
```
> mongod --dbpath c:/mongodb/data
# mongod：这里需要把mongodb安装路径里面的bin配置到全局变量，不然就直接输入整个路径。例如安装到c:/mongodb，就把c:/mongodb/bin配置到全局变量的path路径上。
# c:/mongodb/data：数据存储的地方
```
数据库的基本操作：
```
[root] mongo          #命令行输入mongo进入MongoDB命令交互模式
> show dbs            #列出已有db
> use my_db           #如果my_db存在，则切换到my_db，如果不存在，则创建之
> db                  #显示当前db
> show dbs            #发现列表里面没有my_db，因为此时db里面没有实际数据或者集合哦

> db.createCollection("my_col")  #创建集合my_col
> db.my_col_new.insert({"name":"测试一下"})  #往集合my_col_new里面插入一条数据，如果集合不存在，会自动创建
> show collections    #列出改db下面所有的集合
> show tables         #功能跟show collections是一样的哦

> db.my_col.drop()    #删除集合my_col
> db.dropDatabase()   #删除当前数据库，执行之前用db命令确认一下当前数据库是不是你要删除的这个哦

```
#### 1.2 数据插入
```
> db.my_col.insert({"name":"xiaoming"})  #insert可以插入一条数据
> db.my_col.insert([{"name":"xiaoming"},{"name":"test_user"}])  #insert也可以插入多条数据，但是需要以列表(list[])的形式组织数据，否则只会添加第一个参数。例如db.my_col.insert({"name":"222"},{"name":"333"})，只会添加{"name":"222"}这一条数据

> db.my_col.insertOne({"name":"xiaoming"})  #insertOne只能插入一条数据
> db.my_col.insertMany([{"name":"xiaoming"}])  #insertMany可以插入一条或多条数据，但是必须以列表(list)的形式组织数据

> db.my_col.save([{"name":"xiaoming"},{"name":"test_user"}])  #如果不指定_id，save的功能与insert一样
> db.my_col.save({"_id":ObjectId("5d07461141623d5db6cd4d43"),"name":"xiaoming"})   #如果指定_id，mongodb就不为该条记录自动生成_id了，只有save可以指定_id，insert、insertOne、insertMany都不可以

```

#### 1.3 数据修改
##### 1.3.1 update
首先，看一下 update 的语法格式，请格外注意一些可选参数的值，这将直接影响你的修改结果：
```
db.collection.update(
   <query>,   #update的查询条件
   <update>,  #update的对象和一些更新的操作符等
   {
     upsert: <boolean>,  #可选，这个参数的意思是，如果不存在update的记录，是否插入objNew，true为插入，默认是false，不插入
     multi: <boolean>,   #可选，mongodb 默认是false，只更新找到的第一条记录，如果这个参数为true，就把按条件查出来多条记录全部更新
     writeConcern: <document>  #可选，抛出异常的级别
   }
)

```
MongoDB支持的WriteConncern选项如下

w: 数据写入到number个节点才向用客户端确认
+ {w: 0} 对客户端的写入不需要发送任何确认，适用于性能要求高，但不关注正确性的场景  
+ {w: 1} 默认的writeConcern，数据写入到Primary就向客户端发送确认
+ {w: “majority”} 数据写入到副本集大多数成员后向客户端发送确认，适用于对数据安全性要求比较高的场景，该选项会降低写入性能  

j: 写入操作的journal持久化后才向客户端确认
+ 默认为”{j: false}，如果要求Primary写入持久化了才向客户端确认，则指定该选项为true

wtimeout: 写入超时时间，仅w的值大于1时有效。
+ 当指定{w: }时，数据需要成功写入number个节点才算成功，如果写入过程中有节点故障，可能导致这个条件一直不能满足，从而一直不能向客户端发送确认结果，针对这种情况，客户端可设置wtimeout选项来指定超时时间，当写入过程持续超过该时间仍未结束，则认为写入失败。

假如有这样一张学生成绩表：
```
{
        "_id" : ObjectId("5d0751ef41623d5db6cd4d44"),
        "name" : "xiaoming",
        "class" : "c++",
        "score" : 60
}
{
        "_id" : ObjectId("5d0751ef41623d5db6cd4d46"),
        "name" : "xiaoming",
        "class" : "python",
        "score" : 95
}
```
xiaoming 同学发现老师把她的 c++ 课程分数录错了，需要修改为75分：
```
> db.my_col.update({"_id":ObjectId("5d0751ef41623d5db6cd4d44")},{$set:{"score":75}})
```
老师发现把 xiaoming 同学的名字录错了，需要全部修改过来：
```
> db.my_col.update({"name":"xiaoming"},{$set:{"name":"xming"}}) #这样是不对的，只会修改一条记录
> db.my_col.update({"name":"xiaoming"},{$set:{"name":"xming"}},{multi:true})  #这样才对
```
##### 1.3.2 save
save 方法通过传入的文档来替换已有文档。语法格式如下：
```
db.collection.save(
   <document>,   #文档数据
   {
     writeConcern: <document> #可选，抛出的异常级别
   }
)
```
还以上面那张学生成绩表为例：
```
> db.my_col.save({
         "_id" : ObjectId("5d0751ef41623d5db6cd4d44"), #指定_id，新的文档会将旧的文档覆盖
         "name" : "xming",
         "class" : "c++",
         "score" : 80
})
```

#### 1.4 数据删除
数据删除可以使用 deleteOne、deleteMany、remove，下面详细介绍。
##### 1.4.1 deleteOne 和 deleteMany
```
> db.my_col.deleteOne({"name":"xming"})  #删除xming的一条成绩记录
> db.my_col.deleteMany({"name":"xming"}) #删除xming的所有成绩记录
> db.my_col.deleteMany({})  #删除成绩表里面的所有内容
```
##### 1.4.2 remove(已过时)
首先还是来看语法格式：
```
db.collection.remove(
   <query>,    #可选，查询条件
   {
     justOne: <boolean>,  #可选，设置为true或者1，表示只删除一个文档，设置为false，表示删除所有匹配的文档，默认为false
     writeConcern: <document> #可选，抛出异常的级别
   }
)
```
删除 xming 的所有成绩记录：
```
> db.col.remove({"name":"xming"})
> db.repairDatabase()  #remove方法并不会真正释放空间，需要继续执行 db.repairDatabase() 来回收磁盘空间
> db.runCommand({ repairDatabase: 1 }) #与上一句等效，任意执行一句即可
```
remove 现在已经过时了现在官方推荐使用 deleteOne 和 deleteMany 方法。

#### 1.5 数据查询
数据查询的方法有 findOne 和 find，二者参数等用法一样，但是 findOne 只返回一条匹配的数据，find 返回全部的匹配数据，下面主要介绍 find 的用法。

##### 1.5.1 条件操作符
```
db.my_col.find({"score": 75}) //等于
db.my_col.find({"score": {$lt: 75}}) //小于(less than)
db.my_col.find({"score": {$lte: 75}}) //小于等于
db.my_col.find({"score": {$gt: 75}}) //大于(greater than)
db.my_col.find({"score": {$gte: 75}}) //大于等于
db.my_col.find({"score": {$ne: 75}}) //不等于(not equal)
```
##### 1.5.2 sort、limit 与 skip
以分数从高到低显示学生的 c++ 课程成绩，只显示第10名到第20名的学生：
```
> db.my_col.find({"class": "c++"}).sort({"score": -1}).skip(9).limit(11).pretty()
#sort：1为升序，-1为降序，默认升序
#limit：显示多少条数据
#skip：跳过多少条数据
```
##### 1.5.3 复合条件查询 and、or
and：find 方法可以传入多个键值对，每个键值对以逗号隔开，即常规 SQL 的 AND 条件  
查询 xiaoming 同学的 c++ 课程成绩：
```
> db.my_col.find({"name": "xiaoming", "class": "c++"})
```
查询分数在75到85分之间的成绩记录：
```
> db.my_col.find({"score": {$gt: 75, $lt: 85}})
```
or：MongoDB OR 条件语句使用了关键字 $or，语法格式如下：
```
> db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
)
```
查询 xiaoming 或 zhangsan 的课程成绩：
```
> db.my_col.find({$or: [{"name": "xiaoming"}, {"name": "zhangsan"}]})
```
and + or 复合查询：
查询 xiaoming 的 c++ 或者 python 课程的成绩：
```
> db.my_col.find({"name": "xiaoming", $or: [{"class": "c++"}, {"class": "python"}]})
```
##### 1.5.4 包含in、不包含nin、全部all
查询 xiaoming、zhangsan 和 lisa 的成绩：
```
> db.my_col.find({"name": {$in: ["xiaoming","zhangsan","lisa"]}})
```
查询除了 xiaoming、zhangsan 和 lisa 之外，其他人的成绩：
```
> db.my_col.find({"name": {$nin: ["xiaoming","zhangsan","lisa"]}})
```
all类似于in，不同的地方是，in只需要满足列表中的一个值即可，而all需要满足列表中的全部值。比如，有下面这样一张课程表，表示每个学生修的课程：
```
{
        "_id" : ObjectId("5d084f1541623d5db6cd4d4c"),
        "name" : "xiaoming",
        "course" : [
                "c++",
                "python",
                "java"
        ]
}
{
        "_id" : ObjectId("5d084f1c41623d5db6cd4d4d"),
        "name" : "lisa",
        "course" : [
                "c++",
                "python",
                "java"
        ]
}
{
        "_id" : ObjectId("5d084f4a41623d5db6cd4d4e"),
        "name" : "tom",
        "course" : [
                "c++",
                "python"
        ]
}
```
需要找出修了 c++ 和 java课程的学生：
```
> db.course.find({"course": {$all: ["c++", "java"]}}).pretty() # 用 all 操作符，表示需要满足 c++ 和 java两项
```

##### 1.5.5 判断字段是否存在 exists
比如，有下面一张表，表示学生信息：
```
{
        "_id" : ObjectId("5d08519a41623d5db6cd4d4f"),
        "name" : "xiaoming",
        "tel" : "138xxxxxxxx"
}
{
        "_id" : ObjectId("5d08531641623d5db6cd4d50"),
        "name" : "lisa"
}
{
        "_id" : ObjectId("5d08542e41623d5db6cd4d51"),
        "name" : "tom",
        "tel" : null
}
```
需要找出没有 tel 字段的学生：
```
> db.stu_info.find({"tel": {$exists: false}}) #字段不存在就用false，存在就用true
```

##### 1.5.6 空值处理 null
以上面的学生信息表为例，找出 tel 为空值的学生,只想找 tel 值为 null 的情况：：
```
> db.stu_info.find({"tel": {$in:[null], $exists:true}})
```

##### 1.5.7 取模运算 mod
查找学生成绩取模10 等于0 的数据（即100、90、80...等等）：
```
> db.my_col.find({"score": {$mod: [10, 0]}})
```

##### 1.5.8 正则匹配 regex
查询学生名字以a开头的学生成绩：
```
> db.my_col.find({"name": {$regex: /^a.*/}})
```

##### 1.5.9 获取查询结果条数 count
获取学生成绩记录的条数：
```
> db.my_col.find().count()
```
当使用 limit 方法限制返回的记录数时，默认情况下 count 方法仍然返回全部记录条数。如果希望返回限制之后的记录数量，要使用 count(true) 或者 count(非0)：
```
> db.my_col.find().count() // 4
> db.my_col.find().limit(1).count() // 4
> db.my_col.find().limit(1).count(true) // 1
```

#### 1.5.10 distinct
查询课程成绩表中所有学生的名单：
```
> db.my_col.distinct("name")
```

### 2 聚合aggregate
在MongoDB中，使用聚合框架可以对集合中的文档进行变换和组合，完成一些复杂的查询操作。聚合框架通过多个构件来创建一个管道(pipeline)，用于对一连串的文档进行处理。
```
> db.my_col.aggregate([
        {$match: {"name": "xiaoming"}},   #查找 xiaoming 同学的课程成绩
        {$project: {"_id":  0}},   #不需要_id字段
        {$sort: {"score":  -1, "class": 1}},  #按分数降序排序；同样分数的，按课程名字升序排序
        {$skip: 1},    #跳过一条数据
        {$limit: 1}    #只显示一条数据
])
```

#### 2.1 筛选$match
$match用于对文档集合进行筛选，之后就可以在筛选得到的文档子集上做聚合。"$match"可以使用所有常规的查询操作符("$gt"、"$lt"、"$in"等)。通常，在实际使用中应该尽可能将"$match"放在管道的前面位置。这样做有两个好处：一是可以快速将不需要的文档过滤掉，以减少管道的工作量；二是如果在投射和分组之前执行"$match"，查询可以使用索引。

#### 2.2 投射$project
$project可以从子文档中提取字段，可以重命名字段。例如，查找学生课程成绩，不显示 _id 字段，显示姓名、课程、成绩字段，同时将 name 字段重命名为 student_name：
```
> db.my_col.aggregate([
        {$project: {"_id": 0, "student_name": "$name", "core": 1, "class": 1}}
])
```

#### 2.3 分组$group
$group 类似于 sql 中的 group by，主要用于数据处理，比如，计算每个作者所写的文章数：
```
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   by_user: 'runoob.com'
},
{
   _id: ObjectId(7df78ad8902d)
   title: 'NoSQL Overview', 
   by_user: 'runoob.com'
},
{
   _id: ObjectId(7df78ad8902e)
   title: 'Neo4j Overview', 
   by_user: 'Neo4j'
}

> db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])
{
    "_id" : "runoob.com",
    "num_tutorial" : 2
},
{
    "_id" : "Neo4j",
    "num_tutorial" : 1
}
```
或者求多次成绩的总分，集合如下：
```
{
    "_id" : ObjectId("5d15c49474cfb024bdc2ad94"),
    "name" : "1",
    "score" : 90.0
},
{
    "_id" : ObjectId("5d15c49474cfb024bdc2ad95"),
    "name" : "1",
    "score" : 91.0
},
{
    "_id" : ObjectId("5d15c49474cfb024bdc2ad96"),
    "name" : "2",
    "score" : 70.0
}

> db.my_col.aggregate([ {$group: {_id: "$name",  total: {$sum: "$score"}}} ])
{
    "_id" : "2",
    "total" : 70.0
},
{
    "_id" : "1",
    "total" : 181.0
}
```
$sum 可以 替换成操作符 $avg、$min、$max，分别表示求平均成绩、最低成绩、最高成绩。

#### 2.4 拆分$unwind
$unwind 可以将数组中的每一个值拆分为单独的文档，比如有下面一条记录，记录了一篇博客以及下面的评论：
```
{
   "_id":ObjectId("5359f6f6ec7452081a7873d7"),
   "title":"这是一篇博客",
   "auth":"xiaoming",
   "comments":[
      {
          "author":"lisa",
          "date":ISODate("2019-01-01T17:52:04.148Z"),
          "text":"Nice post"
      },
      {
          "author":"tom",
          "date":ISODate("2019-01-01T17:52:04.148Z"),
          "text":"I agree"
      }
   ]
}
```
现在要找到 lisa 的评论，可以先使用 $unwind 将每条评论拆分为一个独立的文档，然后再进行 match 查询：
```
> db.blog.aggregate({"$unwind":"$comments"})
{
   "results":
       {
          "_id":ObjectId("5359f6f6ec7452081a7873d7"),
          "title":"这是一篇博客",
          "author":"xiaoming",
          "comments":{
               "author":"lisa",
               "date":ISODate("2019-01-01T17:52:04.148Z"),
               "text":"Nice post"
          }
       },
       {
          "_id":ObjectId("5359f6f6ec7452081a7873d7"),
          "title":"这是一篇博客",
          "author":"xiaoming",
          "comments":{
               "author":"tom",
               "date":ISODate("2019-01-01T17:52:04.148Z"),
               "text":"I agree"
          }
       }
}

> db.blog.aggregate([
        {"$unwind":"$comments"},
        {"$match":{"comments.author":"lisa"}}
])

```
### 3 索引
索引通常能够极大的提高查询的效率，如果没有索引，MongoDB在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构。  
```
db.collection.createIndex(
    {key1: option1, key2: option2},    #key为要创建索引的字段，option为创建索引的方式：1 为升序，-1 为降序，可以对多个字段创建索引，称为复合索引
    {
        background: <boolean>,  #可选，建索引过程会阻塞其它数据库操作，background 设置为 true 可指定以后台方式创建索引，默认值为 false
        unique: <boolean> #可选，建立的索引是否唯一。指定为true创建唯一索引。默认值为false
        name: <string> #可选，索引的名称。如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称
        sparse: <boolean> #可选，对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为true的话，在索引字段中不会查询出不包含对应字段的文档。默认值为 false
    }
)
```
对学生成绩表创建索引：
```
> db.my_col.createIndex({"score": 1}, {background: true})  #在后台创建
> db.my_col.getIndexes()   #查看集合索引
> db.my_col.totalIndexSize()  #查看集合索引大小
> db.my_col.dropIndex("索引名称")  #删除集合指定索引
> db.my_col.dropIndexes()  #删除集合所有索引
```



