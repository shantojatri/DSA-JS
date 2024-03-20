class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head=null) {
        this.head = head;
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) { 
            count++;
            current = current.next;
        }

        return count;
    }

    addAt(index, data) { 
        if (index < 0 || index > this.size()) {
            console.error('Invalid Index');
            return;
        }

        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
            
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {         
        if (!this.head) { 
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    removeAt() {
        if (index < 0 || index > this.size()) {
            console.error('Invalid Index');
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
            
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    printList() {
        let current = this.head;


        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.addFirst(5);
ll.addFirst(13);
ll.addFirst(17);
ll.addLast(8);
ll.removeFirst();
ll.removeLast();

ll.printList();
console.log("Size: ",  ll.size());




