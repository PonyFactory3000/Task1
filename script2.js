let arrStock=[
  [0,"name1",3,200],
  [1,"name2",2,150],
  [2,"name3",5,250],
  [3,"name4",6,100]
];
let sum=0;
let arrBask=[
  [0,"name1",0,200],
  [1,"name2",0,150],
  [2,"name3",0,250],
  [3,"name4",0,100]
];
addTableS();
addTableB();

function addTableS()
{
  delTableS();
  let table=document.getElementById('tableStock');
 
  for (i=0; i<arrStock.length;i++)
  {
   var tr = document.createElement('tr');
   if (arrStock[i][2]!=0)
   {
      for (j=1; j<arrStock[i].length; j++)
      {
        var td = document.createElement('td');
        var item = arrStock[i][j];
        td.innerHTML='<td>'+item +'</td>';
        tr.appendChild(td);
      }
      var td1 = document.createElement('td');
      td1.innerHTML='<input id="'+arrStock[i][0] +'" type="button" value="+">';
      td1.addEventListener('click', addProduct);
      tr.appendChild(td1);
      table.appendChild(tr);
    }
  }
}
function delTableS()
{
  let table=document.getElementById('tableStock');
  let tableRows = table.getElementsByTagName('tr');

  for  (i=tableRows.length-1; i>0; i--)
  {
    table.removeChild(tableRows[i]);
  }
}
function addTableB()
{
  delTableB();
  let table=document.getElementById('tableBasket');
 
  for (i=0; i<arrBask.length;i++)
  {
   var tr = document.createElement('tr');
   if (arrBask[i][2]!=0)
   {
      for (j=1; j<arrBask[i].length; j++)
      {
        var td = document.createElement('td');
        var item = arrBask[i][j];
        td.innerHTML='<td>'+item +'</td>';
        tr.appendChild(td);
      }
      var td1 = document.createElement('td');
      td1.innerHTML='<input id="'+arrBask[i][0] +'" type="button" value="-">';
      td1.addEventListener('click', delProduct);
      tr.appendChild(td1);
      table.appendChild(tr);
    }
  }
}
function delTableB()
{
  let table=document.getElementById('tableBasket');
  let tableRows = table.getElementsByTagName('tr');

  for  (i=tableRows.length-1; i>0; i--)
  {
    table.removeChild(tableRows[i]);
  }
}
function addProduct(e)
{
  let i= e.target.getAttribute('id');
  arrBask[i][2]=arrBask[i][2]+1;
  arrStock[i][2]=arrStock[i][2]-1; 
  addTableS();
  addTableB();
  addSum(arrStock[i][3]);
}
function delProduct(e)
{
  let i= e.target.getAttribute('id');
  arrBask[i][2]=arrBask[i][2]-1;
  arrStock[i][2]=arrStock[i][2]+1; 
  addTableS();
  addTableB();
  addSum(-arrStock[i][3]);
}
function addSum(price)
{
  sum=sum+price;
  document.getElementById('sum').innerHTML='Сумма: '+sum+'';
}