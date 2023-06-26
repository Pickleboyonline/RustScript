Declare variable:
```
// Constant value
let x = 3;
```

Declare mutable variable:
```
let mut x = 3;
```

Declare struct (inline)
Pass by value, not reference
Immutable, with respect to X
But can change 
```
let x = {
    banana: 'string'
    x: 5
}

// Or
struct Container {
    banana = 'string'
    x = 5
}
let p = Container {}
```

// Should I impliment a borrow checker?
//


Most of it follows Rust like syntax but I dont want multithreading to be in the picture.

I like darts Isolate structure, which is like web workers but doesn't have the large memory overhead.

Underneath the hood, we can take care of this with coroutines