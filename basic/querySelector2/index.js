var sections = document.querySelectorAll("#sections, #sections .section");
console.log(sections.constructor.name);
for (var i = 0; i<sections.length; i++){
    var item = sections.item(i);
    item.style.border = "1px solid #ff0000";
}