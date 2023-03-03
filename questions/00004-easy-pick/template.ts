type MyPick<T, K extends keyof T> = {
  [k in K as k extends K ? k : never]: T[k]
}

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// You can filter out keys by producing never via a conditional type:
