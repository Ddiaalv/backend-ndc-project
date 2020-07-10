export type MonstersProps = [
  {
    id_monstruo: number;
    orden_menu: number;
    nombre: string;
    ruta: string;
    tipo: string;
    especie: string;
    fuego: number;
    agua: number;
    rayo: number;
    hielo: number;
    draco: number;
  }
];

export type MonsterProps = [
  {
    id_monstruo: number;
    orden_menu: number;
    nombre: string;
    ruta: string;
    especie: string;
    tipo: string;
    rango: string;
    caracteristicas: string;
    notas: string;
    tamano_min: number;
    tamano_max: number;
    fuego: number;
    agua: number;
    rayo: number;
    hielo: number;
    draco: number;
    veneno: number;
    sueno: number;
    paralisis: number;
    nitro: number;
    aturdimiento: number;
    elemento01: string;
    elemento02?: string;
    resistencia01: string;
    resistencia02?: string;
    resistencia03?: string;
    estado01: string;
    estado02?: string;
    estado03?: string;
  }
];
