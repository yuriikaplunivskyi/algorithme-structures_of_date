# algorithme-structures_of_date

#### Solving the puzzles using javascript + algorithms


## [ua]
# Швидкість алгоритмів визначається через "О-велике".
__"O-велике" пояснює кількість операцій необхідних для виконання алгоритму і має вигляд O(n).__
Наприклад бінарний пошук має складність log2n, тоді як простий пошук(перевірка кожного елемента по черзі) - O(n), де n - це кількість елементів в масиві даних.


__Логарифм__ - _це операція, зворотня піднесенню в степені._
 ```
 Приклад:
  - $`10^2 = 100`$  <> $`log_10 100 = 2`$
  - $`10^3 = 1000`$ <> $`log_10 1000 = 3`$
  - $`2^3 = 8`$     <> $`log_2 8 = 3`$
  - $`2^4 = 16`$    <> $`log_2 16 = 4`$
  - $`2^3 = 32`$    <> $`log_2 32 = 5`$

```

Для списку з 8 елементів знадобиться не більше 8 перевірок.
Для бінарного пошуку знадобиться в найгіршому випадку не більше log n перевірок.
log 8 == 3, бо $`2^3`$ == 8
для списка з 8 чисел вам знадобиться перевірити не більше 3 чисел.
Для списка з 1024 елементів 
  $`log_1024`$ = 10, тому що $`log1024`$ = 10, бо $`2^10`$ == 1024
Відповідно, для списка з 1024 елементів знадобиться не більше 10 перевірок.

Лінійний час = О(n)
Логарифмічний час = O(log n)

Наприклад бінарний пошук має складність $`log_2n`$, тоді як простий пошук(перевірка кожного елемента по черзі) - O(n), де n - це кількість дійв масиві даних.



