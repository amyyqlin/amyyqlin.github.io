document.addEventListener('DOMContentLoaded', function () {
    // Define a class to represent your portfolio
    var Portfolio = /** @class */ (function () {
        function Portfolio(name, profession) {
            this.name = name;
            this.profession = profession;
        }
        // Add a method to display your name and profession on the page
        Portfolio.prototype.displayHeader = function () {
            var headerEl = document.createElement('h1');
            var nameEl = document.createElement('span');
            var professionEl = document.createElement('span');
            nameEl.innerText = this.name;
            professionEl.innerText = this.profession;
            nameEl.classList.add('name');
            professionEl.classList.add('profession');
            headerEl.appendChild(nameEl);
            headerEl.appendChild(document.createElement('br'));
            headerEl.appendChild(professionEl);
            document.body.appendChild(headerEl);
        };
        return Portfolio;
    }());
    // Create a new instance of the Portfolio class
    var myPortfolio = new Portfolio('Amy Y.Q. Lin', 'Writer, Scholar, Rabbit');
    // Call the displayHeader method to add your name and profession to the page
    myPortfolio.displayHeader();
});
