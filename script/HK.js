const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

var nav = new Vue({
    el: '#nav',
    data: {
        message: ''
    },
    methods: {
        showAll: _.debounce(function () {
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
        messageHK: '',

        nameHK: '',
        gidHK: '',
        dateHK: '',
        timeHK: '',
        limitHK: '',
        uppicHK: '',
        openpriHK: '',
        formpriHK: '',
        lastestpriHK: '',
        maxpriHK: '',
        minpriHK: '',
        inpicHK: '',
        outpicHK: '',
        traNumberHK: '',
        traAmountHK: '',
        priearnHK: '',

        gid1: '00700',
        gid2: '01810',
        gid3: '03690',
        gid4: '01357',
        gid5: '01833',
        gid6: '00772',
        gid7: '00001',
        gid8: '00012',
        gid9: '03333',

        limit1: '',
        lastestpri1: '',
        traAmount1: '',
        priearn1: '',

        limit2: '',
        lastestpri2: '',
        traAmount2: '',
        priearn2: '',

        limit3: '',
        lastestpri3: '',
        traAmount3: '',
        priearn3: '',

        limit4: '',
        lastestpri4: '',
        traAmount4: '',
        priearn4: '',

        limit5: '',
        lastestpri5: '',
        traAmount5: '',
        priearn5: '',

        limit6: '',
        lastestpri6: '',
        traAmount6: '',
        priearn6: '',

        limit7: '',
        lastestpri7: '',
        traAmount7: '',
        priearn7: '',

        limit8: '',
        lastestpri8: '',
        traAmount8: '',
        priearn8: '',

        limit9: '',
        lastestpri9: '',
        traAmount9: '',
        priearn9: ''
    },
    watch: {
        gidHK: function () {
            if (this.gidHK.length == 5) {
                this.showHK()
            }
        }
    },
    methods: {
        showHK: _.debounce(function () {
            var app = this
            app.messageHK = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gidHK +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    app.nameHK = response.data.result[0].data.name
                    app.gidHK = response.data.result[0].data.gid
                    app.dateHK = response.data.result[0].data.date
                    app.timeHK = response.data.result[0].data.time
                    app.limitHK = response.data.result[0].data.limit
                    app.uppicHK = response.data.result[0].data.uppic
                    app.openpriHK = Math.floor(response.data.result[0].data.openpri * 100) / 100
                    app.formpriHK = Math.floor(response.data.result[0].data.formpri * 100) / 100
                    app.lastestpriHK = Math.floor(response.data.result[0].data.lastestpri * 100) / 100
                    app.maxpriHK = Math.floor(response.data.result[0].data.maxpri * 100) / 100
                    app.minpriHK = Math.floor(response.data.result[0].data.minpri * 100) / 100
                    app.inpicHK = response.data.result[0].data.inpic
                    app.outpicHK = response.data.result[0].data.outpic
                    app.traNumberHK = response.data.result[0].data.traNumber
                    app.traAmountHK = response.data.result[0].data.traAmount
                    app.priearnHK = response.data.result[0].data.priearn
                    app.messageHK = ''
                })
                .catch(function (error) {
                    app.nameHK = "Invalid!"
                    app.gidHK = "Invalid!"
                    app.dateHK = "Invalid!"
                    app.timeHK = "Invalid!"
                    app.limitHK = "Invalid!"
                    app.uppicHK = "Invalid!"
                    app.openpriHK = "Invalid!"
                    app.formpriHK = "Invalid!"
                    app.lastestpriHK = "Invalid!"
                    app.maxpriHK = "Invalid!"
                    app.minpriHK = "Invalid!"
                    app.inpicHK = "Invalid!"
                    app.outpicHK = "Invalid!"
                    app.traNumberHK = "Invalid!"
                    app.traAmountHK = "Invalid!"
                    app.priearnHK = "Invalid!"
                })
        }, 500),
        show1: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid1 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit1 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit1 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri1 = Math.floor(response.data.result[0].data.lastestpri * 100) / 100
                    app.traAmount1 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(2) + '亿(HKD)'
                    app.priearn1 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit1 = "Invalid!"
                    app.lastestpri1 = "Invalid!"
                    app.traAmount1 = "Invalid!"
                    app.priearn1 = "Invalid!"
                })
        }, 100),
        show2: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid2 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit2 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit2 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri2 = Math.floor(response.data.result[0].data.lastestpri * 100) / 100
                    app.traAmount2 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(2) + '亿(HKD)'
                    app.priearn2 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit2 = "Invalid!"
                    app.lastestpri2 = "Invalid!"
                    app.traAmount2 = "Invalid!"
                    app.priearn2 = "Invalid!"
                })
        }, 200),
        show3: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid3 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit3 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit3 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri3 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.traAmount3 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(HKD)'
                    app.priearn3 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit3 = "Invalid!"
                    app.lastestpri3 = "Invalid!"
                    app.traAmount3 = "Invalid!"
                    app.priearn3 = "Invalid!"
                })
        }, 300),
        show4: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid4 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit4 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit4 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri4 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.traAmount4 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(HKD)'
                    app.priearn4 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit4 = "Invalid!"
                    app.lastestpri4 = "Invalid!"
                    app.traAmount4 = "Invalid!"
                    app.priearn4 = "Invalid!"
                })
        }, 400),
        show5: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid5 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit5 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit5 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri5 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.traAmount5 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(HKD)'
                    app.priearn5 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit5 = "Invalid!"
                    app.lastestpri5 = "Invalid!"
                    app.traAmount5 = "Invalid!"
                    app.priearn5 = "Invalid!"
                })
        }, 500),
        show6: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid6 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit6 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit6 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri6 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.traAmount6 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(HKD)'
                    app.priearn6 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit6 = "Invalid!"
                    app.lastestpri6 = "Invalid!"
                    app.traAmount6 = "Invalid!"
                    app.priearn6 = "Invalid!"
                })
        }, 600),
        show7: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid7 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit7 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit7 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri7 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.traAmount7 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(HKD)'
                    app.priearn7 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit7 = "Invalid!"
                    app.lastestpri7 = "Invalid!"
                    app.traAmount7 = "Invalid!"
                    app.priearn7 = "Invalid!"
                })
        }, 700),
        show8: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid8 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit8 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit8 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri8 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.traAmount8 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(HKD)'
                    app.priearn8 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit8 = "Invalid!"
                    app.lastestpri8 = "Invalid!"
                    app.traAmount8 = "Invalid!"
                    app.priearn8 = "Invalid!"
                })
        }, 800),
        show9: _.debounce(function () {
            var app = this
            nav.message = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hk?num=' + app.gid9 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.limit >= 0) {
                        app.limit9 = response.data.result[0].data.limit + ' ⇱'
                    } else {
                        app.limit9 = response.data.result[0].data.limit + ' ⇲'
                    }
                    app.lastestpri9 = Math.floor(response.data.result[0].data.lastestpri * 100) /
                        100
                    app.traAmount9 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(HKD)'
                    app.priearn9 = response.data.result[0].data.priearn
                    nav.message = ''
                })
                .catch(function (error) {
                    app.limit9 = "Invalid!"
                    app.lastestpri9 = "Invalid!"
                    app.traAmount9 = "Invalid!"
                    app.priearn9 = "Invalid!"
                })
        }, 900)
    }
})