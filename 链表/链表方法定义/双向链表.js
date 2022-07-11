//封装双向链表
function DoublyLinkedList() {
    //内部类: 节点类
    function Node(data) {
        this.data = data
        this.prev = null
        this.next = null
    }

    //属性
    this.head = null
    this.tail = null
    this.length = 0

    //常见的操作:方法
    //1.append方法
    DoublyLinkedList.prototype.append = function (data) {
        //1.根据data创建节点
        var newNode = new Node(data)

        //2.判断添加的是否是第一个节点
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        //3.length+1
        this.length += 1
    }.


    //2.将链表转成字符串形式
    //2.1 toString方法
    DoublyLinkedList.prototype.toString = function () {
        return this.backwardString()
    }

    //2.2 forwardString方法
    DoublyLinkedList.prototype.forwardString = function () {
        //1.定义变量
        var current = this.tail
        var resultsString = ""

        //2.依次向前遍历，获取每一个节点
        while (current) {
            resultString += current.data + " "
            current = current.prev
        }

        return resultSting
    }

    //2.3 backwardString方法
    DoublyLinkedList.prototype.backwardString = function () {
        //1.定义变量
        var current = this.head
        var resultString = ""

        //2.依次向后遍历，获取每一个节点
        while (current) {
            resultString += current.data + " "
            current = current.next
        }

        return resultString
    }

    //3.insert方法
    DoublyLinkedList.prototype.insert = function (position, data) {
        //1.越界判断
        if (position < 0 || position > this.length) return false

        //2.根据data创建新的节点
        var newNode = new Node(data)

        //3.判断原来的列表是否为空
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (position == 0) { // 3.1. 判断position是否为0
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            } else if (position == this.length) {
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {
                var current = this.head
                var index = 0

                while (index++ < position) {
                    current = current.next
                }

                //修改指针
                newNode.next = current
                newNode.prev = current.prev
                current.prev.next = newNode
                current.prev = newNode
            }
        }

        // 4.length+1
        this.length += 1

        return true
    }

    // 4.get方法
    DoublyLinkedList.prototype.get = function (position) {
        // 1.越界判断
        if (position < 0 || position >= this.length) return null

        //2.获取元素
        var current = this.head
        var index = 0

        while (index++ < position) {
            current = current.next
        }

        return current.data
    }

    // 5.indexOf方法
    DoublyLinkedList.prototype.indexOf = function (data) {
        // 1.定义变量
        var current = this.head
        var index = 0

        //2.查找和data相同的节点
        while (current) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index += 1
        }
        return -1
    }

    // 6.update方法
    DoublyLinkedList.prototype.update = function (position, newData) {
        // 1.越界的判断
        if (position < 0 || position >= this.length) return false

        // 2.寻找正确的节点
        var current = this.head
        var index = 0
        while (index++ < position) {
            current = current.next
        }

        // 3.修改找到节点的data信息
        current.data = newData

        return true
    }

    // 7.removeAt方法
    DoublyLinkedList.prototype.removeAt = function (position) {
        // 1.越界判断
        if (position < 0 || position >= this.length) return null

        // 2.判断是否只有一个节点
        var current = this.head
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            if (position == 0) { //判断是否删除的是第一个节点
                this.head.next.prev = null
                this.head = this.head.next
            } else if (position == this.length - 1) { //最后节点
                current = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {
                var index = 0

                while (index++ < position) {
                    current = current.next
                }

                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }

        // 3.length -1
        this.length -= 1

        return current.data
    }

    // 8.remove方法
    DoublyLinkedList.prototype.remove = function (data) {
        // 1.根据data获取下标值
        var index = this.indexOf(data)

        // 2.根据index删除对应位置的节点
        return this.removeAt(index)
    }

    // 9.isEmpty方法
    DoublyLinkedList.prototype.isEmpty = function () {
        return this.length == 0
    }

    // 10.size方法
    DoublyLinkedList.prototype.size = function () {
        return this.length
    }
}