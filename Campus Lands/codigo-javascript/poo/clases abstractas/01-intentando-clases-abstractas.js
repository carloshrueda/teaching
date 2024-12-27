class C {
    constructor () {
      if (new.target === C) {
        console.log("Creando una clase C")
        throw new Error( 'this is an abstract class' );
      }
    }
  }
  class CC extends C {
  }
   
  try {
    const c = new C();
    console.assert( false );
  } catch (err) {
    console.assert(
      err.message === 'this is an abstract class'
    );
  }
  const cc = new CC();
  console.assert( cc instanceof C );
  