let randomNumber = Date.now() / 1000 | 0;

let locale = document.getElementsByTagName("html")[0].getAttribute("lang");
let url = document.getElementById('cookieSettings').getAttribute("data-cookie-uri");
let toggleOnStartup = parseInt(document.getElementById('cookieSettings').getAttribute("data-toggleStartup"));

window.CookieSettingsManager = new CookieSettingsManager({
    toggleOnStartup: toggleOnStartup,
    server: {url: url + "&version=" + randomNumber + "&locale=" + locale},
    settings: {
        dialog: {
            template: 'cookie-dialog-template',
            parent: {
                openClass: null
            },
            formClass: ['ph-form'],
            class: 'm-cookie-notification',
            customCheckboxTemplate: {
                checkbox: '<div class="ph-checkbox">{{input}}{{description}}</div>',
                description: '<p class="ph-checkbox__description">{{descriptionText}}</p>',
                groupWrapper: '<fieldset class="ph-checkbox-group"><div class="ph-checkbox-group__checkbox-wrap">{{checkboxes}}</div></fieldset>'
            },

            customButtonTemplate: {
                groupWrapper: '<div class="m-cookie-notification__button-wrapper__buttons">{{buttons}}</div>'
            },

            buttons: {
                selectRequired: null,
                confirm: {
                    label: 'Auswahl akzeptieren',
                    buttonClass: [
                        'ph-button',
                        'ph-button--cta',
                        'm-cookie-notification__button'
                    ]
                },
                selectAll: {
                    label: 'Alle akzeptieren',
                    buttonClass: [
                        'ph-button',
                        'm-cookie-notification__button'
                    ]
                }
            },
            animation: {
                duration: 1000
            }
        }
    }

});
