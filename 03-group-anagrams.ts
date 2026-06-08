/**
 * 49. Group Anagrams  (Medium)
 * https://leetcode.com/problems/group-anagrams/
 *
 * Dado un arreglo de cadenas `strs`, agrupa los anagramas. Un anagrama es
 * una palabra formada al reordenar las letras de otra usando todas las
 * letras originales exactamente una vez.
 *
 * Puedes devolver la respuesta en cualquier orden.
 *
 * Estrategia: dos cadenas son anagramas si al ordenar sus letras producen
 * la misma clave. Recorremos las palabras, generamos esa clave ordenada y
 * agrupamos en un Map clave -> lista de palabras.
 * Complejidad: O(n * k log k), donde n = nº de palabras y k = longitud
 * máxima de una palabra.
 */
function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of strs) {
    // Clave canónica: las letras de la palabra ordenadas alfabéticamente.
    const key = word.split("").sort().join("");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(word);
  }

  return Array.from(groups.values());
}

// Ejemplos
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""]));    // [[""]]
console.log(groupAnagrams(["a"]));   // [["a"]]

export { groupAnagrams };
