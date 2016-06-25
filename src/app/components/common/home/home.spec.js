/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Unit-Tests Home
 *
 * @author u220374 (Reto Lehmann)
 * @version: 0.0.1
 * @since 23.10.2015, 2015.
 */
import HomeModule from './home';
import HomeController from './home.controller';
import HomeTemplate from './home.html';

describe('Home', () => {
    let $rootScope, makeController, configMock;

    beforeEach(window.module(HomeModule.name));
    beforeEach(inject((_$rootScope_,_$http_) => {
        $rootScope = _$rootScope_;

        configMock = {
            backendUrl: 'http://localhost:8080'
        };

        makeController = () => {
            return new HomeController(_$http_,configMock);
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        it('has a name property [backendServiceUrl]', () => {
            let controller = makeController();
            expect(controller.backendServiceUrl).toBe(
                'http://localhost:8080/rest/1.0/shortlink/create?dest=');
        });
        it('has a name property [backendVanityServiceUrl]', () => {
            let controller = makeController();
            expect(controller.backendVanityServiceUrl).toBe(
                'http://localhost:8080/rest/1.0/shortlink/createVanityUrl?');
        });
        it('has a name property [baseDeleteUrl]', () => {
            let controller = makeController();
            expect(controller.baseDeleteUrl).toBe('http://localhost:8080/rest/1.0/shortlink/delete?id=');
        });
        it('has a name property [baseRedirectUrl]', () => {
            let controller = makeController();
            expect(controller.baseRedirectUrl).toBeDefined();
        });
        it('has a name property [url]', () => {
            let controller = makeController();
            expect(controller.url).toBeDefined();
        });
        it('has a name property [txtIdForUrl]', () => {
            let controller = makeController();
            expect(controller.txtIdForUrl).toBeDefined();
        });
        it('has a name property [urlId]', () => {
            let controller = makeController();
            expect(controller.urlId).toBeDefined();
        });
        it('has a name property [title]', () => {
            let controller = makeController();
            expect(controller.title).toBe('URL Shortener Service');
        });
        it('has a name property [labelCreateButton]', () => {
            let controller = makeController();
            expect(controller.labelCreateButton).toBeDefined();
        });
        it('has a name property [descriptionOfAction]', () => {
            let controller = makeController();
            expect(controller.descriptionOfAction).toBeDefined();
        });
        it('has a name property [descriptionOfVanityAction]', () => {
            let controller = makeController();
            expect(controller.descriptionOfVanityAction).toBeDefined();
        });
    });

    describe('Template', () => {
        // Use regex to ensure correct bindings are used e.g., {{  }}
        it('has name in template [title]', () => {
            expect(HomeTemplate).toMatch(/{{\s?\$ctrl\.title\s?}}/g);
        });
        it('has name in template [labelCreateButton]', () => {
            expect(HomeTemplate).toMatch(/{{\s?\$ctrl\.labelCreateButton\s?}}/g);
        });
        it('has name in template [descriptionOfAction]', () => {
            expect(HomeTemplate).toMatch(/{{\s?\$ctrl\.descriptionOfAction\s?}}/g);
        });
        it('has name in template [descriptionOfVanityAction]', () => {
            expect(HomeTemplate).toMatch(/{{\s?\$ctrl\.descriptionOfVanityAction\s?}}/g);
        });
        it('has name in template [baseRedirectUrl]', () => {
            expect(HomeTemplate).toMatch(/{{\s?\$ctrl\.baseRedirectUrl\s?}}/g);
        });
        it('has name in template [txtIdForUrl]', () => {
            expect(HomeTemplate).toMatch(/\s?\$ctrl\.txtIdForUrl\s?/g);
        });
        it('has name in template [url]', () => {
            expect(HomeTemplate).toMatch(/\s?\$ctrl\.url\s?/g);
        });
    });

});