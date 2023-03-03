type MyAwaited<T extends PromiseLike<any>> =
  T extends PromiseLike<infer S>
    ? S extends PromiseLike<any>
      ? MyAwaited<S>
      : S
    : T
