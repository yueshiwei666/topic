window.onload = function() {
    let table = document.createElement('table');
        for(let i=0;i<10;i++){
            let row = document.createElement('tr');
            for(let j=0;i<10;j++){
                let list = document.createElement('td');
                row.appendChild(list);
            }
            table.appendChild(row);
        }
        document.body.appendChild(table);
        
        /* let el = document.createElement('div');
        let text = document.createTextNode('111111111');
        el.appendChild(text);
        document.body.appendChild(el) */
}
