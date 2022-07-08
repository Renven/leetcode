//封装链表类
function LinkedList() {
    //内部的类： 节点类
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    //属性
    this.head = null;
    this.length = 0;

    //追加方法
    //1.append方法
    LinkedList.prototype.append = function (data) {
        //1.创建新的节点
        var newNode = new Node(data)

        //2.判断是否添加的是第一个节点
        if (this.length == 0) { // 2.1是第一个节点
            this.head = newNode
        } else { // 2.2不是第一个节点
            //找到最后一个节点，并指向新的节点
            var current = this.head
            while (current.next) {
                current = current.next
            }

            //最后节点的next指向新的节点
            current.next = newNode
        }

        //3.length + 1
        this.length += 1
    }

    //2.toString方法
    LinkedList.prototype.toString = function () {
        //1.定义变量
        var current = this.head
        var listString = ""

        //2.循环获取一个个的节点
        while (current) {
            listString += current.data + " "
            current = current.next
        }

        return listString
    }

    //3.insert方法
    LinkedList.prototype.insert = function (position, data) {
        //1.对position进行越界判断
        if (position < 0 || position > this.length) return false

        //2.根据data创建newNode
        var newNode = new Node(data)

        //3.判断插入的位置是否是第一个
        if (position == 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            var index = 0
            var current = this.head
            var previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }
    }

    //4.get方法
    LinkedList.prototype.get = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) return null

        //2.获取对应的data
        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }

        return current.data
    }

    //5.indexOf方法 
    LinkedList.prototype.indexOf = function (data) {
        //1.定义变量
        var current = this.head
        var index = 0

        //2.开始查找
        while (current) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index += 1
        }

        //3.找到最后没有找到，返回-1
        return -1
    }

    //6.update方法
    LinkedList.prototype.update = function (position, newData) {
        //1.越界判断
        if (position < 0 || position >= this.length) return false

        //2.查找正确的节点
        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }

        //3.将position位置的node的data修改成newData
        current.data = newData
        return true
    }

    //7.removeAt方法
    LinkedList.prototype.removeAt = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) return null

        //2.判断是否删除的是第一个节点
        var current = this.head
        if (position == 0) {
            this.head = this.head.next
        } else {
            var index = 0
            var previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }

            //前一个节点的next指向， current的next即可
            previous.next = current.next
        }

        //3.length - 1
        this.length -= 1

        return current.data
    }

    //8.remove方法
    LinkedList.prototype.remove = function (data) {
        //1.获取data在列表中的位置
        var position = this.indexOf(data)

        //2.根据位置信息，删除节点
        return this.removeAt(position)
    }

    //9.isEmpty方法
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0
    }

    //10.size()方法
    LinkedList.prototype.size = function () {
        return this.length
    }
}