/**
 * 191. Number of 1 Bits (Easy)
 * https://leetcode.com/problems/number-of-1-bits/
 *
 * Dado un entero positivo `n`, retorna la cantidad de bits en 1 que tiene
 * su representación binaria.
 *
 * Estrategia: usamos la operación n & (n - 1), que elimina el bit en 1
 * menos significativo de `n`. Repetimos hasta que n sea 0 y contamos
 * cuántas eliminaciones hicimos.
 * Complejidad: O(k) en tiempo, donde k es la cantidad de bits en 1, y
 * O(1) en espacio.
 */
function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    n &= n - 1;
    count++;
  }

  return count;
}

// Ejemplos
console.log(hammingWeight(11));         // 3
console.log(hammingWeight(128));        // 1
console.log(hammingWeight(2147483645)); // 30

export { hammingWeight };
