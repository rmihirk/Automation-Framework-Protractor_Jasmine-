var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./config/application.properties');


exports.config = {
    directConnect: true,
    plugins: [{
        package: require.resolve('protractor-screenshoter-plugin'),
        screenshotPath: 'Reports',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'failure+success',
        htmlOnExpect: 'failure+success',
        withLogs: true,
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
    }],

    params: {
        baseURL: properties.get("baseURL")
    },

    framework: 'jasmine2',
    capabilities:
    {
        'browserName': 'chrome',
        // shardTestFiles: false,
        // maxInstances: 2,
        chromeOptions:
        {
            args: getArgument(),
            prefs:
            {
                'browser.speechinput_tray_notification_shown_contexts': 1,
                'profile.managed_default_content_settings.popups': 1,
                'profile.managed_default_content_settings.notifications': 1,
                'profile.managed_default_content_settings.media_stream': 1,
                'profile.managed_default_content_settings.cookies': 1
            }
        },
        loggingPrefs: { browser: 'ALL' }
    },

    jasmineNodeOpts:
    {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 300000// Increase the default jasmine time interval.
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },
}

function getArgument() {
    if (properties.get("headless")) {
        return ['headless', 'disable-gpu', 'window-size=1600x1200'];
    }
    else {
        return ['start-maximized', 'incognito', 'disable-infobars', 'disableChecks'];
    }
}
