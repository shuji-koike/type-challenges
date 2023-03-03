type TupleToObject<T extends readonly (string | number)[]> = {
  [i in T[number]]: i
}
