type Push<T extends readonly any[], U> = {
  [i in keyof T]: T[i]
}

type a = Push<[], 1>
type b = Push<[1, 2], '3'>
