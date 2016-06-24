/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class HomeController {
    constructor($http) {
        this.backendServiceUrl = 'http://localhost:8080/rest/1.0/shortlink/create?dest=';
        this.baseRedirectUrl = 'http://localhost:8080/x/';

        this.title = 'URL Shortener Service';
        this.labelCreateButton = 'Generiere Shortlink';
        this.descriptionOfAction =
            'Fügen Sie hier die gewünschte Adresse ein und klicken Sie anschliessend unten auf den Knopf.';

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