type MyExclude<T, U> = U extends T ? never : U

type a = MyExclude<'a' | 'b' | 'c', 'a'>
