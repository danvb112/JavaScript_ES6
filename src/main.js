import api from './api.js'


class App {
    constructor () {
        this.repositories = [];

        this.formElm = document.getElementById("repo_form");
        this.listElm = document.getElementById('repo_list')
        this.inputElm = document.querySelector('input[name=repository]')

        this.registerHendlers();
    }

    registerHendlers() {
        this.formElm.onsubmit = event => this.addReposiroty(event);
    }


    setLoading(loading = true) {
        if (loading === true) {
            let loadingElm = document.createElement('span');
            loadingElm.appendChild(document.createTextNode("Carregando"));
            loadingElm.setAttribute('id', 'loading');

            this.formElm.appendChild(loadingElm);
        } else{
            document.getElementById('loading').remove();

        }
    }

    async addReposiroty(event) {
        event.preventDefault()

        const repoInput = this.inputElm.value;

        if (repoInput === 0) {
            return;
        };

        this.setLoading();

        try {
            
            const response = await api.get(`/repos/${repoInput}`);
            
            const { name, description, html_url, owner: {avatar_url}} = response.data;
            
            
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
                
            });
            
            this.inputElm.value = '';
            
            this.render();
        } catch (error) {
            alert("O repositório não existe!")   
        }

        this.setLoading(false);
    }

    render() {
        this.listElm.innerHTML = '';

        this.repositories.forEach( repo => {

            let imgEL = document.createElement("img");
            imgEL.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement("a");
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute("href", repo.html_url);
            linkEl.appendChild(document.createTextNode("Acessar"));

            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEL);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listElm.appendChild(listItemEl);


        })

    }
}

new App();