/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class HomeController {
    constructor($http) {
        this.backendServiceUrl = 'http://localhost:8080/rest/1.0/shortlink/create?dest=';

        this.title = 'URL Shortener Service';
        this.welcomeMessage = 'Herzlich Willkommen zum SBB-Service \'URL Shortener\'';
        this.labelCreateButton = 'Generiere Short-URL';
        this.descriptionOfAction =
            'Um eine Short-URL zu erstellen, fügen Sie bitte im Textfeld die gewünschte Endadresse ein.';

        this.http = $http;
        self = this;
    }

    createUrl() {
        var url = document.getElementById('urlAddress').value;
        this.http.post(this.backendServiceUrl + url)
            .success(function (data) {
                self.id = data.id;
            });
    }
}

export default HomeController;