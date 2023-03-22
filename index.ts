document.addEventListener('DOMContentLoaded', () => {
    // Define a class to represent your portfolio
    class Portfolio {
        private name: string;
        private profession: string;

        constructor(name: string, profession: string) {
            this.name = name;
            this.profession = profession;
        }

        // Add a method to display your name and profession on the page
        displayHeader() {
            const headerEl = document.createElement('h1');
            const nameEl = document.createElement('span');
            const professionEl = document.createElement('span');

            nameEl.innerText = this.name;
            professionEl.innerText = this.profession;

            nameEl.classList.add('name');
            professionEl.classList.add('profession');

            headerEl.appendChild(nameEl);
            headerEl.appendChild(document.createElement('br'));
            headerEl.appendChild(professionEl);

            document.body.appendChild(headerEl);
        }
    }

    // Create a new instance of the Portfolio class
    const myPortfolio = new Portfolio('Amy Y.Q. Lin', 'Writer, Scholar, Rabbit');

    // Call the displayHeader method to add your name and profession to the page
    myPortfolio.displayHeader();
});