var myArray = [
    {'id':'1021','name':'Black Earphones', 'price':'250.000'},
    {'id':'1025','name':'Autumn Light Stand', 'price':'350.000'},
    {'id':'1069','name':'Bed Head Light', 'price':'215.000'},
    {'id':'1055','name':'Cooling AC', 'price':'7.500.000'},
    {'id':'1354','name':'Modern Microwave', 'price':'850.000'},
    {'id':'1876','name':'Standing Fan', 'price':'653.000'},
]

// table hasil
buildTable(myArray)
	function buildTable(data){
		var table = document.getElementById('myTable')
        table.innerHTML = ''
		for (var i = 0; i < data.length; i++){
			var row = `<tr>
                            <td>${data[i].id}</td>
							<td>${data[i].name}</td>
							<td>${data[i].price}</td>
					  </tr>`
			table.innerHTML += row
    }
}