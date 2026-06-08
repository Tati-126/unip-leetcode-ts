# unip-leetcode-ts

Soluciones a ejercicios de [LeetCode](https://leetcode.com/problemset/) resueltos en **TypeScript**.

Trabajo en pareja: cada integrante resuelve **5 ejercicios** (nivel Easy/Medium) en archivos individuales, integrados mediante **Pull Requests** con revisión cruzada.

## 👥 Integrantes

| Integrante | Ejercicios | Rama |
| ---------- | ---------- | ---- |
| Estudiante A | 01 – 05 | `feat/estudiante-a` |
| Estudiante B | 06 – 10 | `feat/estudiante-b` |

> Reemplacen "Estudiante A/B" por sus nombres reales.

## ✅ Ejercicios

| # | Ejercicio | Dificultad | Archivo |
| - | --------- | ---------- | ------- |
| 01 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | [`01-two-sum.ts`](01-two-sum.ts) |
| 02 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | [`02-valid-parentheses.ts`](02-valid-parentheses.ts) |
| 03 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | [`03-group-anagrams.ts`](03-group-anagrams.ts) |
| 04 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | Medium | [`04-maximum-subarray.ts`](04-maximum-subarray.ts) |
| 05 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | [`05-merge-intervals.ts`](05-merge-intervals.ts) |
| 06 | _(pendiente — Estudiante B)_ | — | — |
| 07 | _(pendiente — Estudiante B)_ | — | — |
| 08 | _(pendiente — Estudiante B)_ | — | — |
| 09 | _(pendiente — Estudiante B)_ | — | — |
| 10 | _(pendiente — Estudiante B)_ | — | — |

## ▶️ Cómo ejecutar

Requiere [Node.js](https://nodejs.org/). Para correr un archivo directamente:

```bash
npx ts-node 01-two-sum.ts
```

O compilando con TypeScript:

```bash
npx tsc 01-two-sum.ts && node 01-two-sum.js
```

## 🔀 Flujo colaborativo (Pull Requests)

Un estudiante **no** puede subir todo. El flujo obligatorio es:

1. **Estudiante A** crea su rama y sube sus ejercicios:
   ```bash
   git checkout -b feat/estudiante-a
   git add 01-*.ts 02-*.ts 03-*.ts 04-*.ts 05-*.ts
   git commit -m "feat: ejercicios 01-05 (Estudiante A)"
   git push -u origin feat/estudiante-a
   ```
2. Abre un **Pull Request** hacia `main` en GitHub.
3. **Estudiante B** revisa el código, deja un **comentario técnico** y da **Approve**.
4. Se hace **Merge** a `main`.
5. Se repite el proceso a la inversa para los ejercicios 06–10 del Estudiante B.
