title: "SQLite基本操作"
date: 2015-03-13 12:54:24
tags: [Android, SQL]
---

**Sqlite**是一种比较常用的关系型数据库，也是Android开发中内置的数据库，在这里我主要学习使用这一数据库，进行一些简单的例如增删改查等操作。

<!-- more -->

---

###开始使用Sqlite
1. 新建一个数据库文件 (*e.g. sunshine.db*) 并打开 *sqlite3* 命令行。
`sqlite3 sunshine.db`
2. 得到所有命令列表。
`.help` 
3. 列出所有的数据库。这会显示一个数据库 *main* 并所在电脑中的位置路径，在我的电脑中的位置为 *C:\Sqlite\sunshine.db* 。
`.database`

> 在一个应用中可以使用多个数据库文件，在这里只使用了一个。

###创建表
1. 使用 **CREATE TABLE statement** 命令来创建一个表，在这里我要创建一个名为*weather*的表。创建表时每一列由逗号隔开，每一列的名字和数据类型都由自己决定。
`CREATE TABLE weather( _id INTEGER PRIMARY KEY, date TEXT NOT NULL, min REAL NOT NULL, max REAL NOT NULL, humidity REAL NOT NULL, pressure REAL NOT NULL);`
数据类型详细信息 [Sqlite data type](http://www.tutorialspoint.com/sqlite/sqlite_data_types.htm)。
2.  使用下面的命令来列出所有的表，确认*weather*表已经被创建。
`.tables`
3. 使用 **SELECT statement** 命令返回表中的所有行。***表示所有的行。
`SELECT * FROM weather`
4. 在任何时候都可以来查看创建表时的语句。
`.schema`

###添加数据
1. 使用**INSERT statement**命令向表中添加数据。
`INSERT INTO weather VALUES(1, '20140625', 16, 20, 0,1029)`
2. 打开结果显示中显示列的命名。
`.header on`

###查询数据
查询主要使用到**WHERE**命令。
`SELECT * FROM weather WHERE date == 20140626;`
`SELECT _id,date,min,max FROM weather WHERE date > 20140625 AND date < 20140628;`
`SELECT * FROM weather WHERE min >= 18 ORDER BY max ASC;`
还有可能使用到的操作[This link](http://www.tutorialspoint.com/sqlite/sqlite_operators.htm)。

###更新数据
使用**UPDATE statement**命令来更新符合要求的行。
`UPDATE weather SET min = 0, max = 100 where date >= 20140626 AND date <= 20140627;`

###删除数据
使用**DELETE statement**命令来删除行。
`DELETE FROM weather WHERE humidity != 0;`

###添加字段
有时候需要在已经存在的表中添加一个字段，这时候就需要用到**ALTER TABLE statement**命令了。
`ALTER TABLE weather ADD COLUMN description TEXT NOT NULL DEFAULT 'Sunny';`
> 注意: 一般情况下，是不允许删除表中的某一个字段的，因为这会删除数据而且可能会有别的表依赖于这个字段。可以将那个字段设置为*null*

###删除表
使用**DROP TABLE statement**命令来删除表。
`DROP TABLE weather;`

登录网址[This link](http://www.sqlite.org/cli.html) 查看更多。

最后输入`.quit`退出操作。