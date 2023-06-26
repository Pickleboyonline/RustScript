# RustScript / FerrisScript 🦀

A cool idea would be to have a native like language that has interop, similar to AssemblyScript, but more feature fledge.

We could have ReasonML/Rescript, which could potentially compile to OCaml and bindings could be exposed to JS. In the browser,
an interface could be made available via WASM. For mobile binaries that don't support JIT, you could have part thats compiled
and another thats interpreted. Not sure if this is what ReasonML already did, but its worth looking into.

Essentially you can take ReScript and convert that to native Ocaml binaries while embedding JS values since the interop
is already enforced. Since the frontend is a variant of OCaml, this is technically possible.