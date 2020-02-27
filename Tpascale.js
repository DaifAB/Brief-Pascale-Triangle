function trianglePascale(num){
        let triangle = [[1], [1,1]];
        
        if(num === 0){
            return []
        } else if(num == 1){
            return [[1]]       
        } else if(num == 2){
            return  [[1], [1,1]]
        } else {
            for(let i = 2; i < num; i++){
                addRow(triangle)
            }
        }
        return triangle;
        
    };
    function addRow(triangle){
        let previous = triangle[triangle.length - 1]
        let newRow = [1]
        for(let i = 0; i < previous.length - 1; i++){
            let current = previous[i]
            let next = previous[i+1] 
            newRow.push(current + next)
        }
        newRow.push(1)
        return triangle.push(newRow)
        
    }

    function generate(){

        let t = trianglePascale(document.getElementById("num").value);
        
        for(let i=0;i<t.length;i++){
            let span = document.createElement("span");
            let txt = document.createTextNode(t[i]);
            let br = document.createElement("br");
            span.appendChild(txt);
            span.appendChild(br);
            document.getElementById("result").appendChild(span);
        }
    }
