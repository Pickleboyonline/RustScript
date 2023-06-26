// Variables

const x = 10;
let p = 10;

// Functions;
let foo = () => {}
function bar() {

}

/**
 * By default, these are moved by references.
 */
const map = {
    value: 3,
    position: () => {
        // Can do this.
        // value = 2; 
    },
}


/**
 * ! Need to figure out scoping an overloading
 * ! if in file, uses that over internal function
 * function (map: {value: number}).changePosition() {
 * 
 * }
 */

/**
 * Tells it the structure,
 * note, cannot use unions, but enums.
 */
interface Pizza {
    value: number
}

// C++ like struct for creating custom values
/**
 * struct Value {
 * Value()
 * }
 */

// Can also create with closures:
function createStruct() {

}

// Structs in this case are always by reference
// type, not copy.

/**
 * Prototype receiver functions.
 * Can essentially run the function at run time.
 * Auto unwraps
 * function Pizza.toString() {
 *  console.log(value)
 * }
 * 
 * Can also not unwrap and access with var:
 * function (p: Pizza).toString() {
 *  console.log(p.value)
 * }
 * 
 * Accessible within scope, however, there are
 * some global receiver functions for empty
 * interfaces.
 */

/**
 * Should enums be by shape, or type?
 */
enum Color {  
    Red,
    Green,
    Blue
}

enum Shrek {
    Red,
    Green,
    Blue
}


/**
 * Can function overload
 */
function isSame(value: Shrek): void {

}


/**
 * Can do receiver functions on enums too:
 * function (self: Color).isGreen(): boolean {
 *  return self === Color.Green
 * }
 */

/**
 * match statements (Rust)
 */

// No union types, use enums!

/**
 * enum Item {
 *  Foo(string)
 *  Bar(number)
 * }
 */


/**
 * Error Handling:
 * enum Option<T> {
 *  None,
 *  Some(T)
 * }
 * 
 * enum Result<V, E> {
 *  Err(E),
 *  Ok(V)
 * }
 * 
 */

/**
 * Deno like runtime.
 */

/**
 * Types:
 * Everything is an "object"
 * Generally speaking, its easier to rationalize this
 * from a pramming view.
 * 
 * Primitive types are copied but struct types are by reference
 * (may be able to copy)
 */
// TODO: Need to figure out scoping