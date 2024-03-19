function insert_Row() {
    //SGN Write your code here
	
	  let elem = document.getElementById("sampleTable");
    let firstRow = elem.getElementsByTagName('tr')[0];
    let newRow = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    elem.insertBefore(newRow, elem.children[0]);
}