/**
 * 53. Maximum Subarray  (Medium)
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Dado un arreglo de enteros `nums`, encuentra el subarreglo contiguo
 * (con al menos un elemento) que tenga la suma más grande y devuelve
 * esa suma.
 *
 * Estrategia (algoritmo de Kadane): recorremos el arreglo manteniendo la
 * mejor suma que termina en la posición actual. En cada paso decidimos si
 * extendemos el subarreglo previo o empezamos uno nuevo desde el elemento
 * actual. Guardamos el máximo global encontrado.
 * Complejidad: O(n) en tiempo y O(1) en espacio.
 */
function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // O extendemos la suma previa, o reiniciamos en el elemento actual.
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Ejemplos
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6  ([4,-1,2,1])
console.log(maxSubArray([1]));                              // 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                 // 23

export { maxSubArray };
