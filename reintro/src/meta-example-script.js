var list = document.createElement('ul');  //(u??) list ?? <ul></ul>
var info = document.createElement('p');   //para ??           <p></p>
var html = document.querySelector('html');//root element ??   <html></html>

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);                   //'view source' does NOT show the <p> and <ul> elements
document.body.appendChild(list);                   // but 'inspect element' in firefox DOES show them

html.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();          //??probly means doesn't need to be handled in containing elems??
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  };
}
