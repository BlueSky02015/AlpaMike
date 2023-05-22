var myArray = [
    {
      rate: 0.001,
      data: { id: 1001, name: 'Gold Bar', price: '3.000' },
    },
    {
      rate: 0.9,
      data: { id: 1002, name: 'Iphone Pro Max', price: '1.500' },
    },
    {
      rate: 1.795,
      data: { id: 1003, name: 'Headphone', price: '29' },
    },
    {
      rate: 2.732,
      data: { id: 1004, name: 'Backpack', price: '25' },
    },
    {
      rate: 2.00,
      data: { id: 1007, name: 'CD', price: '5' },
    },
    {
      rate: 3.69,
      data: { id: 1008, name: 'Pen', price: '2' },
    },
    {
      rate: 1.025,
      data: { id: 1009, name: 'sneekers', price: '250' },
    },
    {
      rate: 2.697,
      data: { id: 10010, name: 'Notepad', price: '12' },
    },
    {
      rate: 2.77,
      data: { id: 1011, name: 'Blender', price: '26' },
    },
    {
      rate: 2.57,
      data: { id: 1012, name: 'PowerBank', price: '44' },
    },
    {
      rate: 2.697,
      data: { id: 1014, name: 'Compas', price: '69' },
    },
    {
      rate: 1.697,
      data: { id: 10015, name: 'Pillow', price: '99' },
    },
    {
      rate: 0.697,
      data: { id: 10018, name: 'VR Headset', price: '2.000' },
    },
    {
      rate: 1.69,
      data: { id: 10020, name: 'Solar-powered phone charger', price: '100' },
    },
    
  ];
  
  // table hasil
  function buildTable(data) {
    var table = document.getElementById('myTable');
    //const result = gacha(data);
    table.innerHTML += `<tr><th>${result.id}</th><th>${result.name}</th><th>${result.price}</th></tr>`;
  }
  
  $('#gachaBtn').click(function () {
    buildTable(myArray);
  });

