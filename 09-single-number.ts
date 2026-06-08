/**
 * 136. Single Number (Easy)
 * https://leetcode.com/problems/single-number/
 *
 * Dado un arreglo no vacío donde todos los elementos aparecen dos veces
 * excepto uno, retorna el elemento que aparece una sola vez.
 *
 * Estrategia: usamos XOR. Cuando un número se aplica con XOR contra sí
 * mismo, el resultado es 0. Además, 0 XOR x es x. Por eso, al recorrer
 * todo el arreglo, los números repetidos se cancelan y queda el único.
 * Complejidad: O(n) en tiempo y O(1) en espacio.
 */
function singleNumber(nums: number[]): number {
  let unique = 0;

  for (const num of nums) {
    unique ^= num;
  }

  return unique;
}

// Ejemplos
console.log(singleNumber([2, 2, 1]));       // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1]));             // 1

export { singleNumber };
