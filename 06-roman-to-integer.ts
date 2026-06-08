/**
 * 13. Roman to Integer (Easy)
 * https://leetcode.com/problems/roman-to-integer/
 *
 * Dado un número romano válido, retorna su valor entero.
 *
 * Estrategia: recorremos el string de izquierda a derecha. Si el valor
 * actual es menor que el siguiente, significa que forma parte de un caso
 * subtractivo como IV, IX, XL, XC, CD o CM, por lo que se resta. En caso
 * contrario, se suma normalmente.
 * Complejidad: O(n) en tiempo y O(1) en espacio.
 */
function romanToInt(s: string): number {
  const romanValues: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanValues[s[i]];
    const nextValue = romanValues[s[i + 1]] ?? 0;

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }

  return total;
}

// Ejemplos
console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994

export { romanToInt };
