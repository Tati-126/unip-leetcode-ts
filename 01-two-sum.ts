/**
 * Two Sum
 *
 * Dada una matriz de números enteros `nums` y un número entero `target`,
 * retorna los índices de los dos números tales que suman `target`.
 *
 * Cada entrada tiene exactamente una solución y no se puede usar el
 * mismo elemento dos veces.
 *
 * Estrategia: recorremos el arreglo una sola vez guardando en un Map
 * cada número visto junto con su índice. Para cada número calculamos su
 * complemento (target - num); si ya lo vimos, encontramos la respuesta.
 * Complejidad: O(n) en tiempo y O(n) en espacio.
 */
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    seen.set(nums[i], i);
  }

  // Según las restricciones, siempre existe una respuesta válida,
  // por lo que esta línea no debería alcanzarse.
  return [];
}

// Ejemplos
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6));         // [0, 1]

export { twoSum };
