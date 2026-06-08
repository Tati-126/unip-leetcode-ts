/**
 * 20. Valid Parentheses  (Easy)
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Dada una cadena `s` que contiene solo los caracteres '(', ')', '{', '}',
 * '[' y ']', determina si la cadena es válida.
 *
 * Es válida si:
 *  - Cada paréntesis de apertura se cierra con el mismo tipo.
 *  - Los paréntesis se cierran en el orden correcto.
 *  - Cada cierre tiene su correspondiente apertura.
 *
 * Estrategia: usamos una pila. Al ver una apertura la apilamos; al ver
 * un cierre, la cima de la pila debe ser su apertura correspondiente.
 * Si no coincide o la pila está vacía, no es válida. Al final la pila
 * debe quedar vacía.
 * Complejidad: O(n) en tiempo y O(n) en espacio.
 */
function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      // Es un cierre: la cima debe ser su apertura correspondiente.
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Ejemplos
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([])"));     // true
console.log(isValid("(["));       // false

export { isValid };
