let self;
class HomeController {
    /*@ngInject*/
    constructor($http, config) {
        this.backendServiceUrl = config.backendUrl + '/rest/1.0/shortlink/create?dest=';
        this.backendVanityServiceUrl = config.backendUrl + '/rest/1.0/shortlink/createVanityUrl?';
        this.baseDeleteUrl = config.backendUrl + '/rest/1.0/shortlink/delete?id=';
        this.baseRedirectUrl = config.backendUrl + '/';

        this.url = '';
        this.txtIdForUrl = '';
        this.urlId = '';
        this.showVanity = false;

        this.title = 'URL Shortener Service';
        this.labelCreateButton = 'Generiere Shortlink';
        this.descriptionOfAction =
            'Fügen Sie hier die Adresse ein und klicken Sie anschliessend unten auf den gewünschten Knopf.';
        this.descriptionOfVanityAction =
            'Fügen Sie hier Ihren Text ein, um die Vanity URL mit Ihrem Text zu erstellen.';

        this.http = $http;
        self = this;
    }

    createUrl() {
        this.deleted = false;

        if (this.url === undefined || this.url === '') return;

        this.http.post(this.backendServiceUrl + this.url)
            .success(function (data) {
                self.urlId = data.id;
            });
    }

    deleteShortlink() {
        this.urlId = '';

        if (this.url === undefined || this.url === '') return;

        var indexOfSlash = this.url.lastIndexOf('/');
        if (indexOfSlash == -1) return;

        var id = this.url.substr(indexOfSlash + 1);

        this.http.delete(this.baseDeleteUrl + id).success(() => {
            self.deleted = true;
        }).error(() => {
            self.deleted = false;
        });
    }

    createVanityUrl() {
        if (this.txtIdForUrl === '' || this.url === undefined || this.url === '') return;

        var params = 'text=' + this.txtIdForUrl + '&url=' + this.url;
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

    switchVanityValue() {
        this.showVanity = !this.showVanity;
        this.deleted = false;
        this.urlId = '';
    }
}

export default HomeController;