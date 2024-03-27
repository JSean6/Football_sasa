const apiKey = '7f48e8f7-682f-425a-948e-77d67ad827c0';

async function fetchGuardianData(apiKey) {
    try {
        const  url =`https://content.guardianapis.com/search?api-key=${apiKey}&section=football`;
        const response = await fetch(url);
        const data = await response.json();
        return data.response.results;
    } catch (error){
        console.error('Error fetching data:', error);
        return null;

    }
}

function renderApis(guardianData) {
    const apiContainer = document.getElementById('guardian');
    guardianData.forEach(result => {
        const apiElement = document.createElement('div');
        apiElement.innerHTML = `<div class="soccer"><strong style="color: fff">${result.sectionName}</strong>:  ${result.webTitle} <a href="${result.webUrl}">See More</a> <p>${result.webPublicationDate}</p></div>`;
        // result.classList.add("articles");
        apiContainer.appendChild(apiElement);
    })
    
}



fetchGuardianData(apiKey)
    .then(data =>{
        renderApis(data);
    })
    .catch(error =>{
        console.error(error);
    })