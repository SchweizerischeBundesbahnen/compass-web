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
    let $rootScope, makeController;

    beforeEach(window.module(HomeModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new HomeController();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
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
        it('has a name property [baseRedirectUrl]', () => {
            let controller = makeController();
            expect(controller.baseRedirectUrl).toBeDefined();
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
        it('has name in template [baseRedirectUrl]', () => {
            expect(HomeTemplate).toMatch(/{{\s?\$ctrl\.baseRedirectUrl\s?}}/g);
        });
    });

});