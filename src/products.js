


const productos = [
  {
    "id": 1,
    "name": "Camiseta Roja",
    "description": "Una camiseta roja de algodón",
    "stock": 50,
    "price": 12,
    "categoria": "camisas"
  },
  {
    "id": 2,
    "name": "Camisa a Cuadros",
    "description": "Camisa de manga larga a cuadros",
    "stock": 20,
    "price": 12,
    "categoria": "camisas"
  },
  {
    "id": 3,
    "name": "Zapatillas Blancas",
    "description": "Zapatillas deportivas blancas",
    "stock": 25,
    "price": 35,
    "categoria": "calzado"
  },
  {
    "id": 4,
    "name": "Zapatillas Negras",
    "description": "Zapatillas deportivas negras",
    "stock": 25,
    "price": 35,
    "categoria": "calzado"
  },
  {
    "id": 5,
    "name": "Pantalones Vaqueros",
    "description": "Pantalones vaqueros de corte regular",
    "stock": 30,
    "price": 30,
    "categoria": "pantalones"
  },
  {
    "id": 6,
    "name": "Pantalones de Vestir",
    "description": "Pantalones formales de vestir",
    "stock": 30,
    "price": 60,
    "categoria": "pantalones"
  }
]
export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(productos)
  })
}



