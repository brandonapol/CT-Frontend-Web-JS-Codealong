// Step one - Get the data from the source
const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data);
    return response.data;
}

// Step two - prepare constants to hold DOM elements
const DOM_Elements = {
    ranger_list : '.ranger-list'
}

// Step three - Create Ranger-List HTML
const create_list = ( id, name ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light id="${id}"> ${name} </a>`
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html);
}

// Step four - Load data and display the HTML
const load_data = async () => {
    const rangers = await getData();

    rangers.forEach( element => create_list(element.id, element.name));
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}