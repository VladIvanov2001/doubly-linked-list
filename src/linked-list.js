const Node = require('./node');

class LinkedList {
    constructor() {
        this._head=null;
        this._tail=null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(!this._head){
            this._head=node;
            this._tail=node;
        }
        else{
            this._tail.next=node;
            node.prev = this._tail;
            this._tail=node;
        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let current = this._head;
        for(let i = 0 ; i < index;i++ ){
            current = current.next;
        }
        return current.data;
    }

    insertAt(index, data) {
        let current = this._head;
        for(let i = 0 ; i < index;i++ ){
            current = current.next;
        }
        let node = new Node(data);
        node.prev = current.prev;
        current.prev.next = node;
        node.next = current;
        current.prev = node;

    }

    isEmpty() {
        return this.length ? false : true;
    }

    clear() {

            this._head.data = null;
            this._tail.data = null;
            this.length = 0;

    }

    deleteAt(index) {
        let current = this._head;
        for(let i = 0 ; i < index;i++ ){
            current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }

    reverse() {
        let current = this._head;
        let prev = null;
        for (let i = 0; i < this.length; i++)
        {
            let temp = current.next;
            current.next = prev;
            current.prev = temp;
            prev = current;
            current = temp;
        }
        this._tail = this._head;
        this._head = prev;
    }

    indexOf(data) {
        let current = this._head;
        for (let i = 0 ; i<this.length; i++){
           if(current.data === data)
               return i;
           current = current.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
