/**
 * 2. Add Two Numbers (Medium)
 * https://leetcode.com/problems/add-two-numbers/
 *
 * Dadas dos listas enlazadas no vacías que representan enteros no negativos
 * en orden inverso, retorna una nueva lista enlazada con la suma.
 *
 * Estrategia: recorremos ambas listas al mismo tiempo sumando los valores
 * disponibles y el acarreo. Cada nodo nuevo guarda sum % 10, y el nuevo
 * acarreo es Math.floor(sum / 10).
 * Complejidad: O(max(n, m)) en tiempo y O(max(n, m)) en espacio.
 */
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    const value1 = l1?.val ?? 0;
    const value2 = l2?.val ?? 0;
    const sum = value1 + value2 + carry;

    current.next = new ListNode(sum % 10);
    current = current.next;
    carry = Math.floor(sum / 10);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummyHead.next;
}

function arrayToList(values: number[]): ListNode | null {
  const dummyHead = new ListNode();
  let current = dummyHead;

  for (const value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummyHead.next;
}

function listToArray(head: ListNode | null): number[] {
  const values: number[] = [];

  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  return values;
}

// Ejemplos
console.log(listToArray(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4])))); // [7, 0, 8]
console.log(listToArray(addTwoNumbers(arrayToList([0]), arrayToList([0]))));             // [0]
console.log(
  listToArray(addTwoNumbers(arrayToList([9, 9, 9, 9, 9, 9, 9]), arrayToList([9, 9, 9, 9])))
); // [8, 9, 9, 9, 0, 0, 0, 1]

export { ListNode, addTwoNumbers };
