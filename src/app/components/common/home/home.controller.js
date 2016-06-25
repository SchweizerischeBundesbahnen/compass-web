let self;
class HomeController {
    /*@ngInject*/
    constructor($http, config) {
        this.backendServiceUrl = config.backendUrl + '/rest/1.0/shortlink/create?dest=';
        this.backendVanityServiceUrl = config.backendUrl + '/rest/1.0/shortlink/createVanityUrl?';
        this.baseDeleteUrl = config.backendUrl + '/rest/1.0/shortlink/delete?id=';
        this.baseRedirectUrl = config.backendUrl + '/x/';
        this.urlToCreate = '';
        this.urlToDelete = '';
        this.txtIdForUrl = '';
        this.urlId = '';

        this.title = 'URL Shortener Service';
        this.labelCreateButton = 'Generiere Shortlink';
        this.descriptionOfAction =
            'Fügen Sie hier die gewünschte Adresse ein und klicken Sie anschliessend unten auf den Knopf.';

        this.http = $http;
        self = this;
    }

    createUrl() {
        if (this.urlToCreate === undefined || this.urlToCreate === '') return;

        this.http.post(this.backendServiceUrl + this.urlToCreate)
            .success(function (data) {
                self.urlId = data.id;
            });
    }

    deleteShortlink() {
        if (this.urlToDelete === undefined || this.urlToDelete === '') return;

        var indexOfSlash = this.urlToDelete.indexOf('x/');
        if (indexOfSlash == -1) return;

        var id = this.urlToDelete.substr(indexOfSlash + 2);

        this.http.delete(this.baseDeleteUrl + id).success(() => {
            self.deleted = true;
        }).error(() => {
            self.deleted = false;
        });
    }

    createVanityUrl() {
        if (this.txtIdForUrl === '' || this.urlToCreate === undefined || this.urlToCreate === '') return;

        var params = 'text=' + this.txtIdForUrl + '&url=' + this.urlToCreate;
        this.http.post(this.backendVanityServiceUrl + params)
            .success(() => {
                self.vanityUrlCreated = true;
            })
            .error(function (data) {
                self.vanityUrlCreated = false;
                if (data.status == 409) {
                    self.vanityUrlErrorMessage = 'Der Text wird bereits gebraucht, bitte wählen ' +
                        'Sie einen anderen Text.';
                }
            });
    }
}

export default HomeController;