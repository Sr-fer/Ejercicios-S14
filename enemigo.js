class Enemigo extends Personaje{
    constructor(vida, ataque, nombre, nivel, defensa){
    super(vida, ataque, nombre, nivel, defensa)
}

recibirExperiencia(nivel) {
    var puntos_experiencia = this.nivel+(nivel*20/2)
    return puntos_experiencia
}
}
