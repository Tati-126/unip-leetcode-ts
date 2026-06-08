/**
 * 56. Merge Intervals  (Medium)
 * https://leetcode.com/problems/merge-intervals/
 *
 * Dado un arreglo de intervalos donde intervals[i] = [start, end],
 * fusiona todos los intervalos que se solapan y devuelve un arreglo de
 * los intervalos no solapados que cubren todos los intervalos de entrada.
 *
 * Estrategia: ordenamos los intervalos por su inicio. Recorremos en orden
 * y, si el intervalo actual se solapa con el último fusionado (su inicio
 * es <= al fin del último), extendemos el fin; si no, lo agregamos como
 * un nuevo intervalo.
 * Complejidad: O(n log n) por el ordenamiento.
 */
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  // Ordenamos por el inicio de cada intervalo.
  intervals.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      // Se solapan: extendemos el fin del último intervalo.
      last[1] = Math.max(last[1], current[1]);
    } else {
      // No se solapan: agregamos un intervalo nuevo.
      merged.push(current);
    }
  }

  return merged;
}

// Ejemplos
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]]));                    // [[1,5]]

export { merge };
