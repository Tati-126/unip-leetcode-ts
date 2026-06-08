/**
 * 67. Add Binary (Easy)
 * https://leetcode.com/problems/add-binary/
 *
 * Dadas dos cadenas binarias `a` y `b`, retorna su suma como una cadena
 * binaria.
 *
 * Estrategia: sumamos desde el final de ambas cadenas, como una suma
 * tradicional. En cada paso acumulamos los bits disponibles y el acarreo.
 * El bit resultante es sum % 2 y el nuevo acarreo es Math.floor(sum / 2).
 * Complejidad: O(n) en tiempo y O(n) en espacio.
 */
function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? Number(a[i]) : 0;
    const bitB = j >= 0 ? Number(b[j]) : 0;
    const sum = bitA + bitB + carry;

    result = String(sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
}

// Ejemplos
console.log(addBinary("11", "1"));       // "100"
console.log(addBinary("1010", "1011"));  // "10101"

export { addBinary };
