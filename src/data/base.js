const data = [
    {
      name: 'Motor',
      color: 'yellow',
      items: [
        {
          name: 'Revisión aceite',
          state: true,
          comment: 'Aceite super malo',
          photo: ''
        },
        {
          name: 'Revisión engranaje',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Revisión pistones',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Revisión vujías',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Revisión carburador',
          state: true,
          comment: '',
          photo: ''
        },
      ]
    },
    {
      name: 'Luces',
      color: 'blue',
      items: [
        {
          name: 'Luces traseras',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Luces delanteras',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Luces direccionales',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Luces placa',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Luces tablero',
          state: true,
          comment: '',
          photo: ''
        },
      ]
    },
    {
      name: 'Vidrios',
      color: 'green',
      items: [
        {
          name: 'Parabrisas',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Vidrios fijos',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Limpia parabrisas',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Elevadores vidrios',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Vidrios móviles',
          state: true,
          comment: '',
          photo: ''
        },
      ]
    },
    {
      name: 'Espejos',
      color: 'purple',
      items: [
        {
          name: 'Retrovisor',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Espejo izquierdo',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Espejo derecho',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Calibrador espejo izquierdo',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Calibrador espejo derecho',
          state: true,
          comment: '',
          photo: ''
        },
      ]
    },
    {
      name: 'Llantas',
      color: 'pink',
      items: [
        {
          name: 'Estado llantas delanteras',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Estado llantas traseras',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Estado llanta de repuesto',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Estado rines traseros',
          state: true,
          comment: '',
          photo: ''
        },
        {
          name: 'Estado rines delanteros',
          state: true,
          comment: '',
          photo: ''
        },
      ]
    }
  ]

function getAllData(){
  return data;
}

function getCategory(name){
  for (let i = 0; i < data.length; i++){
    if (data[i].name === name){
      return data[i];
    }
  }
}

export {
  getAllData,
  getCategory
};
