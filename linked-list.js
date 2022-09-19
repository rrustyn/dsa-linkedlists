/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //update head if first in
    //update tail
    //move old end to point at val
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //set the added node next to be old head
    //replace the head
    //length plus 1
    let newNode = new Node(val);
    if (this.tail === null) this.tail = newNode;
    if (this.head !== null) newNode.next = this.head;
    this.head = newNode;
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    //save tail in a variable
    //traverse list to end
    //set previous node as tail
    //return og tail
    let current = this.head;
    let removed = this.tail.val;

    if (this.tail === this.head) {
      this.tail = this.head = null;
      this.length--;
      return removed;
    }

    while (current !== null) {
      if (current.next === this.tail) {
        current.next = null;
        this.tail = current;
        this.length--;
        return removed;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    //save head in variable
    //set new head = head.next
    //length --
    //if head = tail then head = tail = null + length--

    let removed = this.head.val;

    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.length--;
      return removed;
    }

    this.head = this.head.next;
    this.length--;
    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //set counter to 0
    //traverse, adding to counter
    //when counter = idx, return current.val
    //fail fast -> if idx > length throw Error

    if (idx >= this.length || idx < 0) throw new Error;

    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === idx) return current.val;
      current = current.next;
      count++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) throw new Error;
    //traverse to idx
    //save idx 
    //set to val

    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === idx) {
        current.val = val;
        break;
      }
      current = current.next;
      count++;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error;

    //create new Node
    //traverse to idx-1, save
    //save idx 
    //set previous next to newnode
    //set new node next to og idx

    let newNode = new Node(val);

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {

      let current = this.head;
      let count = 0;
      let prev;
      let following;

      while (current !== null) {
        if (count === idx - 1) prev = current;
        if (count === idx) {
          following = current;
          newNode.next = following;
          prev.next = newNode;
          this.length++;
          break;
        }
        current = current.next;
        count++;
      }
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) throw new Error;

    //traverse to idx-1, save
    //go to idx+1, save
    //set prev idx.next to idx+1
    //length--

    //if removing idx = 0, shift
    //if removing idx = this.length-1, pop

    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let current = this.head;
      let count = 0;
      let prev, following;

      while (current != null) {
        if (count === idx - 1) prev = current;
        if (count === idx) {
          prev.next = current.next;
          this.length--;
          return current.val;
        }
        current = current.next;
        count++;
      }

    }

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
