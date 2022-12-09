const model = [
    {
        title: 'Plants',
        children: [
            {
                title: 'Vegetables',
                children: [
                    {
                        title: 'Tomatos',
                        children: null
                    },                   
                    {
                        title: 'Cucumbers',
                        children: null
                    },
                    {
                        title: 'Potatoes',
                        children: null
                    }
                ]
            },
            {
                title: 'Fruits',
                children: [
                    {
                        title: 'Apples',
                        children: null
                    },
                    {
                        title: 'Pears',
                        children: null
                    }
                ]
            }
        ]
    },
    {
       title: 'Animals',
       children: [
            {
                title: 'Cats',
                children: null
            },
            {
                title: 'Dogs',
                children: null
            }
       ] 
    },
    {
        title: 'Something else',
        children: null
    },
    {
        title: 'Something else',
        children: null
    }    
]

const root = document.getElementById('root')
const ul = document.createElement('ul')

function makeTree(model) {
    let items = []

    if (Array.isArray(model)) {
        for (let obj of model) {                       
            let li = document.createElement('li')
            li.style = 'padding: 10px 0 0 10px';
            li.innerHTML = `<span>${obj.title}</span>` ;                      

            if (Array.isArray(obj.children)) {
                let ul = document.createElement('ul') 
                ul.append(...makeTree(obj.children))  
                li.append(ul)                
            }

            items.push(li)  
        }
    }
  
    return items
}

ul.append(...makeTree(model))
root.append(ul)






