/*
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 */
let self;
class HomeController {
    constructor($http) {
        this.backendServiceUrl = 'http://localhost:8080/rest/1.0/shortlink/create?dest=';
        this.baseDeleteUrl = 'http://localhost:8080/rest/1.0/shortlink/delete?id=';
        this.baseRedirectUrl = 'http://localhost:8080/x/';
        this.urlToCreate = '';
        this.urlToDelete = '';

        this.title = 'URL Shortener Service';
        this.labelCreateButton = 'Generiere Shortlink';
        this.descriptionOfAction =
            'Fügen Sie hier die gewünschte Adresse ein und klicken Sie anschliessend unten auf den Knopf.';

        this.http = $http;
        self = this;
    }

    createUrl() {
        this.http.post(this.backendServiceUrl + this.urlToCreate)
            .success(function (data) {
                self.id = data.id;
            });
    }

    deleteShortlink() {
        var indexOfSlash = this.urlToDelete.indexOf('x/');
        var id = this.urlToDelete.substr(indexOfSlash + 2);

        this.http.delete(this.baseDeleteUrl + id).success(() => {
            self.deleted = true;
        }).error(() => {
            self.deleted = false;
        });
    }
}

export default HomeController;