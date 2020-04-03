/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var LinkedList = function (max) {
    this.head = null;
    this.tail = null;
    this.sum = null;
    this.count = 0;
    this.max = max;
}

var ListNode = function (val) {
    this.val = val;
    this.next = null;
}
LinkedList.prototype.add = function(val) {
    let node = new ListNode(val);
    if (this.head === null) {
        this.sum = val;
        this.head = node;
        this.tail = node;
        this.count = 1;
    } else if (this.count < this.max) {
        this.sum += val;
        this.tail.next = node;
        this.tail = this.tail.next;
        this.count++;
    } else if (this.count === this.max) {
        this.sum -= this.head.val;
        this.sum += val;
        this.head = this.head.next;
        this.tail.next = node;
        this.tail = this.tail.next;
    }
}
var maxSatisfied = function(customers, grumpy, X) {
    let grumpiness = 0;
    let satisfaction = 0;
    if (X === 1) {
        for (let i = 0; i < customers.length; i++) {
            if (grumpy[i] === 0) {
                satisfaction += customers[i];
            } else {
                grumpiness = Math.max(customers[i], grumpiness);
            }
        }
    } else {
        let list = new LinkedList(X);
        for (let i = 0; i < customers.length; i++) {
            if (grumpy[i] === 0) {
                satisfaction += customers[i];
                list.add(0);
            } else {
                list.add(customers[i]);
                grumpiness = Math.max(grumpiness, list.sum);
            }
        }
    }
    return satisfaction + grumpiness;
};
maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3);