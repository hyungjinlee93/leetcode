/**
 * Initialize your data structure here.
 */
// var ListNode = function (time, count) {
//     this.time = time;
//     this.count = count;
//     this.next = null;
//     this.prev = null;
// }
var HitCounter = function() {
    this.times = [];
    this.counts = {};
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.times.push(timestamp);
    this.counts[timestamp] = this.times.length;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    return this.binarySearch(timestamp) - this.binarySearch(timestamp - 300);
};

HitCounter.prototype.binarySearch = function(timestamp) {
    if (this.times.length === 0 || timestamp < this.times[0]) {
        return 0;
    } else if (this.counts[timestamp] !== undefined) {
        return this.counts[timestamp]
    } else if (timestamp > this.times[this.times.length - 1]) {
        return this.counts[this.times[this.times.length - 1]];
    } else {
        let l = 0, r = this.times.length - 1;
        let m = Math.floor(this.times.length / 2);
        while (this.times[m] !== timestamp && !(this.times[m]< timestamp && timestamp < this.times[m + 1])) {
            if (this.times[m] > timestamp) {
                r = m;
            } else {
                l = m;
            }
            m = Math.floor((l + r) / 2);
        }
        return this.counts[this.times[m]];
    }
}

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
