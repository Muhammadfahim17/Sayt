let box = document.querySelector('.box')

export default function getData(data) {
    data.forEach((e) => {
        let div = document.createElement('div')

        let h1name = document.createElement('h1')
        h1name.innerHTML = e.name

        let pAge = document.createElement('p')
        pAge.innerHTML = e.age 

        let pStatus = document.createElement('p')
        pStatus.innerHTML = e.status ? 'Active' : 'Inactive'

        div.append(h1name,pAge,pStatus)
        box.append(div)
    })
}