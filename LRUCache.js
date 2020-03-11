/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.loc = new Map();
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cap = capacity;
};

var ListNode = function(key) {
    this.val = key;
    this.prev = null;
    this.next = null;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.loc.get(key) === undefined) {
        return -1;
    } else if (this.loc.get(key).next === null) {
        return this.map.get(key);
    } else if (this.loc.get(key).prev === null) {
        this.head = this.loc.get(key).next;
        this.head.prev = null;
        let prevTail = this.tail;
        prevTail.next = this.loc.get(key);
        this.loc.get(key).prev = prevTail;
        this.loc.get(key).next = null;
        this.tail = this.loc.get(key);
        return this.map.get(key);
    } else {
        let before = this.loc.get(key).prev;
        let after = this.loc.get(key).next;
        before.next = after;
        after.prev = before;
        let prevTail = this.tail;
        prevTail.next = this.loc.get(key);
        this.loc.get(key).prev = prevTail;
        this.loc.get(key).next = null;
        this.tail = this.loc.get(key);
        return this.map.get(key);
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.map.has(key)) {
        if (this.size < this.cap) {
            this.map.set(key, value);
            this.size++;
            if (this.head === null) {
                this.head = new ListNode(key);
                this.tail = this.head;
            } else {
                let node = new ListNode(key);
                let prevTail = this.tail;
                prevTail.next = node;
                node.prev = prevTail;
                this.tail = node;
            }
            this.loc.set(key, this.tail);
        } else {
            this.map.delete(this.head.val);
            this.loc.delete(this.head.val);
            this.map.set(key, value);
            if (this.cap === 1) {
                this.head = this.tail = new ListNode(key);
                this.loc.set(key, this.head);
            } else {
                let prevHead = this.head;
                this.head = prevHead.next;
                prevHead.next = null;
                this.head.prev = null;
                let prevTail = this.tail;
                let node = new ListNode(key);
                prevTail.next = node;
                node.prev = prevTail;
                this.tail = node;
                this.loc.set(key, this.tail);
            }
        }
    } else {
        this.map.set(key, value);
        this.get(key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
