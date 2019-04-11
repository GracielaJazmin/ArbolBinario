class ArbolBinario {
    constructor() {
        this.raiz = null
    }
    
a(n, r) {
    if (n.dato < r.dato) {
        if (r.hizq == null) 
            r.hizq = n;
         else
            this.a(n, r.hizq)
    } else{
        if (r.hder == null) 
            r.hder = n;
        else
        this.a(n, r.hder)
    }
}

 agregar(nuevo) {
    if (this.raiz == null) {
        this.raiz = nuevo
    } else 
    this.a(nuevo, this.raiz)
}


//izq - raiz - dere
 inO(r) {
    var c = " ";
    if (r.hizq != null) {
        c += this.inO(r.hizq) + " ";
    }
    c += r.dato;
    if (r.hder != null) {
        c += this.inO(r.hder) + " ";

    }
    return c
}

 inOrder() {
    if (this.raiz == null) {
        return " ";
    } else
        return this.inO(this.raiz)
}
 
//izq - der -raiz
 postO(r) {
     var c = " ";
     if (r.hizq != null) {
         c += this.postO(r.hizq)+ " "
     }
     if (r.hder != null) {
         c += this.postO(r.hder)+ " "
     }
     c += r.dato
     return c
    }
 
 postOrder() {
     if (this.raiz == null) {
         return " ";
     } else
         return this.postO(this.raiz)
    }


//raiz - der - izq
 preOrden(r) {
     var c = " ";
     c += r.dato
     if (r.hizq != null) {
         c += this.preOrden(r.hizq)+ " "
     }
     if (r.hder != null) {
         c += this.preOrden(r.hder)+ " "
     }
     return c;
    }
 
 preOrder() {
     if (this.raiz == null) {
         return " ";
     } else
         return this.preOrden(this.raiz)
 }

 buscar(dato){
    if (this.raiz = null) {
        return false
    }
    else
    return this.buscar(dato,this.raiz)
}

buscar(dato,raiz){
    if (this.raiz  = null) 
        return false
    else 
    if (this.dato == raiz.dato) 
        return true;
        else 
            if(dato<r.dato)
                return this.buscar(dato, raiz.hizq)
            else
                return this.buscar(dato,raiz.hder)

}

}

