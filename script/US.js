const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

var nav = new Vue({
    el: '#nav',
    data: {
        message: ''
    },
    methods: {
        showAll: _.debounce(function () {
            nav.message = 'Searching...'
            app.show1();
            app.show2();
            app.show3();
            app.show4();
            app.show5();
            app.show6();
            app.show7();
            app.show8();
            app.show9();
        }, 500)
    }
})

var app = new Vue({
    el: '#app',
    data: {
        messageUS: '',

        nameUS: '',
        gidUS: '',
        ustimeUS: '',
        chtimeUS: '',
        limitUS: '',
        uppicUS: '',
        openpriUS: '',
        formpriUS: '',
        lastestpriUS: '',
        maxpriUS: '',
        minpriUS: '',
        traAmountUS: '',
        avgTraNumberUS: '',
        markValueUS: '',
        priearnUS: '',
        RORUS: '',
        EPSUS: '',
        dividentUS: '',
        capitalUS: '',

        gid1: 'aapl',
        gid2: 'amzn',
        gid3: 'msft',
        gid4: 'baba',
        gid5: 'bidu',
        gid6: 'ntes',
        gid7: 'pdd',
        gid8: 'iq',
        gid9: 'jd',

        limit1: '',
        lastestpri1: '',
        markValue1: '',
        priearn1: '',

        limit2: '',
        lastestpri2: '',
        markValue2: '',
        priearn2: '',

        limit3: '',
        lastestpri3: '',
        markValue3: '',
        priearn3: '',

        limit4: '',
        lastestpri4: '',
        markValue4: '',
        priearn4: '',

        limit5: '',
        lastestpri5: '',
        markValue5: '',
        priearn5: '',

        limit6: '',
        lastestpri6: '',
        markValue6: '',
        priearn6: '',

        limit7: '',
        lastestpri7: '',
        markValue7: '',
        priearn7: '',

        limit8: '',
        lastestpri8: '',
        markValue8: '',
        priearn8: '',

        limit9: '',
        lastestpri9: '',
        markValue9: '',
        priearn9: ''
    },
    watch: {
        gidUS: function () {
            if (this.gidUS.length != 0) {
                this.showUS()
            }
        }
    },
    methods: {
        showUS: _.debounce(function () {
            var app = this
            app.messageUS = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gidUS +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    app.nameUS = response.data.result[0].data.name
                    app.gidUS = response.data.result[0].data.gid
                    app.ustimeUS = response.data.result[0].data.ustime
                    app.chtimeUS = response.data.result[0].data.chtime
                    app.limitUS = response.data.result[0].data.limit
                    app.uppicUS = response.data.result[0].data.uppic
                    app.openpriUS = Math.floor(response.data.result[0].data.openpri * 100) /
                        100
                    app.formpriUS = Math.floor(response.data.result[0].data.formpri * 100) /
                        100
                    app.lastestpriUS = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.maxpriUS = Math.floor(response.data.result[0].data.maxpri * 100) /
                        100
                    app.minpriUS = Math.floor(response.data.result[0].data.minpri * 100) /
                        100
                    app.traAmountUS = response.data.result[0].data.traAmount
                    app.avgTraNumberUS = response.data.result[0].data.avgTraNumber
                    app.markValueUS = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearnUS = response.data.result[0].data.priearn
                    app.RORUS = response.data.result[0].data.ROR
                    app.EPSUS = response.data.result[0].data.EPS
                    app.dividentUS = response.data.result[0].data.divident
                    app.capitalUS = response.data.result[0].data.capital
                    app.messageUS = ''
                })
                .catch(function (error) {
                    app.nameUS = "Incalid"
                    app.gidUS = "Invalid!"
                    app.ustimeUS = "Invalid!"
                    app.chtimeUS = "Invalid!"
                    app.limitUS = "Invalid!"
                    app.uppicUS = "Invalid!"
                    app.openpriUS = "Invalid!"
                    app.formpriUS = "Invalid!"
                    app.lastestpriUS = "Invalid!"
                    app.maxpriUS = "Invalid!"
                    app.minpriUS = "Invalid!"
                    app.traAmountUS = "Invalid!"
                    app.avgTraNumberUS = "Invalid!"
                    app.markValueUS = "Invalid!"
                    app.priearnUS = "Invalid!"
                    app.RORUS = "Invalid!"
                    app.EPSUS = "Invalid!"
                    app.dividentUS = "Invalid!"
                    app.capitalU = "Invalid!"
                })
        }, 500),
        show1: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid1 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit1 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit1 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri1 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue1 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn1 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit1 = "Invalid!"
                    app.lastestpri1 = "Invalid!"
                    app.markValue1 = "Invalid!"
                    app.priearn1 = "Invalid!"
                })
        }, 100),
        show2: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid2 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit2 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit2 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri2 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue2 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn2 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit2 = "Invalid!"
                    app.lastestpri2 = "Invalid!"
                    app.markValue2 = "Invalid!"
                    app.priearn2 = "Invalid!"
                })
        }, 200),
        show3: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid3 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit3 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit3 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri3 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue3 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn3 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit3 = "Invalid!"
                    app.lastestpri3 = "Invalid!"
                    app.markValue3 = "Invalid!"
                    app.priearn3 = "Invalid!"
                })
        }, 300),
        show4: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid4 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit4 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit4 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri4 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue4 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn4 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit4 = "Invalid!"
                    app.lastestpri4 = "Invalid!"
                    app.markValue4 = "Invalid!"
                    app.priearn4 = "Invalid!"
                })
        }, 400),
        show5: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid5 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit5 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit5 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri5 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue5 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn5 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit5 = "Invalid!"
                    app.lastestpri5 = "Invalid!"
                    app.markValue5 = "Invalid!"
                    app.priearn5 = "Invalid!"
                })
        }, 500),
        show6: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid6 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit6 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit6 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri6 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue6 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn6 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit6 = "Invalid!"
                    app.lastestpri6 = "Invalid!"
                    app.markValue6 = "Invalid!"
                    app.priearn6 = "Invalid!"
                })
        }, 600),
        show7: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid7 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit7 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit7 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri7 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue7 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn7 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit7 = "Invalid!"
                    app.lastestpri7 = "Invalid!"
                    app.markValue7 = "Invalid!"
                    app.priearn7 = "Invalid!"
                })
        }, 700),
        show8: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid8 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit8 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit8 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri8 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue8 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn8 = response.data.result[0].data.priearn
                })
                .catch(function (error) {
                    app.limit8 = "Invalid!"
                    app.lastestpri8 = "Invalid!"
                    app.markValue8 = "Invalid!"
                    app.priearn8 = "Invalid!"
                })
        }, 800),
        show9: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/usa?gid=' + app.gid9 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit9 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit9 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri9 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.markValue9 = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿(USD)'
                    app.priearn9 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit9 = "Invalid!"
                    app.lastestpri9 = "Invalid!"
                    app.markValue9 = "Invalid!"
                    app.priearn9 = "Invalid!"
                })
        }, 900)
    }
})