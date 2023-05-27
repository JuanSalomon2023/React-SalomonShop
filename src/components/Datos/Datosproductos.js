const productos = [
    {
        id:"1",
        nombre:"Iphone 11",
        categoria:"Celulares",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_796892-MLA46114829828_052021-F.webp",
        stock:10,
        descripcion:"......."
    },
    {
        id:"2",
        nombre:"Iphone 12",
        categoria:"Celulares",
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-select-202207-white_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662150114552",
        stock:5,
        descripcion:"......."
    },
    {
        id:"3",
        nombre:"Iphone 13",
        categoria:"Celulares",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_865499-MLA47781634015_102021-F.webp",
        stock:5,
        descripcion:"......."
    },


]

export const Datosproductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve (productos)
  }, 500)
  })
}

export default Datosproductos