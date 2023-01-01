// Linked Lists - Length & Count (6kyu)
// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}

function count(head, data) {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (current.data === data) count++;
    current = current.next;
  }
  return count;
}
