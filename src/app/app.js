/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Angular-Modul der Hauptkomponente
 *
 * @author u220374 (Reto Lehmann)
 * @version: 0.0.1
 * @since 23.10.2015, 2015.
 */

// Vendor-Imports
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngTranslate from 'angular-translate';
import ngTranslateStaticFilesLoader from 'angular-translate-loader-static-files';
import uiBootstrap from 'angular-ui-bootstrap';
import environment from 'angular-environment';

// Style Imports
import 'esta-webjs-style/build/css/style.css';

// Interne Modul-Imports
import Components from './components/components';
import AppComponent from './app.component';

// Language file import
import langDe from './languages/lang-de.json';
import langEn from './languages/lang-en.json';

angular.module('app', [
        uiRouter, ngTranslate, ngTranslateStaticFilesLoader, ngResource,
        uiBootstrap, environment, Components.name
    ])
    .config(/*@ngInject*/($translateProvider, $httpProvider, envServiceProvider) => {

        // Translation settings
        $translateProvider.translations('de', langDe);
        $translateProvider.translations('en', langEn);
        $translateProvider.preferredLanguage('de').useSanitizeValueStrategy('escape');

        // Http service settings
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.interceptors.push('oAuthInterceptorService');

        // Environment variables: set the domains and variables for each environment
        // See the doc https://www.npmjs.com/package/angular-environment for further config
        envServiceProvider.config({
            domains: {
                develop: ['localhost', 'dev.local'],
                prod: ['masen.ch', 'compass.masen.ch', 'x.masen.ch']
            },
            vars: {
                develop: {
                    backendUrl: 'http://localhost:8080'
                },
                prod: {
                    backendUrl: 'http://compass.masen.ch'
                }
            }
        });

        // run the environment check, so the comprobation is made before controllers and services are built
        envServiceProvider.check();
    })

    // Globale Konfigurationeinstellungen
    .constant('config', {
        authServerUrl: 'http://localhost:9999/',
        authRedirectUrl: window.location.origin + '#/logincallback',
        authLoginUrl: 'oauth/authorize?response_type=token&client_id=acme&redirect_uri=',
        authClientId: 'acme',
        authClientSecret: 'acmesecret'
    })
    // Die App als Direktive exportieren
    .directive('app', AppComponent);


