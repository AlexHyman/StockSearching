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
        messageSH: '',

        gidSH: '',
        nameSH: '',
        dateSH: '',
        timeSH: '',
        increPerSH: '',
        increaseSH: '',
        todayStartPriSH: '',
        yestodEndPriSH: '',
        nowPriSH: '',
        todayMaxSH: '',
        todayMinSH: '',
        competitivePriSH: '',
        reservePriSH: '',
        traNumberSH: '',
        traAmountSH: '',

        gid1: '601318',
        gid2: '601857',
        gid3: '600028',
        gid4: '601398',
        gid5: '601288',
        gid6: '601939',
        gid7: '601328',
        gid8: '600030',
        gid9: '600048',

        increPer1: '',
        nowPri1: '',
        traAmount1: '',
        traNumber1: '',

        increPer2: '',
        nowPri2: '',
        traAmount2: '',
        traNumber2: '',

        increPer3: '',
        nowPri3: '',
        traAmount3: '',
        traNumber3: '',

        increPer4: '',
        nowPri4: '',
        traAmount4: '',
        traNumber4: '',

        increPer5: '',
        nowPri5: '',
        traAmount5: '',
        traNumber5: '',

        increPer6: '',
        nowPri6: '',
        traAmount6: '',
        traNumber6: '',

        increPer7: '',
        nowPri7: '',
        traAmount7: '',
        traNumber7: '',

        increPer8: '',
        nowPri8: '',
        traAmount8: '',
        traNumber8: '',

        increPer9: '',
        nowPri9: '',
        traAmount9: '',
        traNumber9: ''
    },
    watch: {
        gidSH: function () {
            if (this.gidSH.length == 6) {
                this.showSH()
            }
        }
    },
    methods: {
        showSH: _.debounce(function () {
            var app = this
            app.messageSH = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gidSH +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    var mainData = response.data.result[0].data
                    app.nameSH = mainData.name
                    app.dateSH = mainData.date
                    app.timeSH = mainData.time
                    if (mainData.increPer >= 0) {
                        app.increPerSH = mainData.increPer + ' ⇱'
                    } else {
                        app.increPerSH = mainData.increPer + ' ⇲'
                    }
                    app.increaseSH = Math.floor(mainData.increase * 100) / 100
                    app.todayStartPriSH = Math.floor(mainData.todayStartPri * 100) / 100
                    app.yestodEndPriSH = Math.floor(mainData.yestodEndPri * 100) / 100
                    app.nowPriSH = Math.floor(mainData.nowPri * 100) / 100
                    app.todayMaxSH = Math.floor(mainData.todayMax * 100) / 100
                    app.todayMinSH = Math.floor(mainData.todayMin * 100) / 100
                    app.competitivePriSH = Math.floor(mainData.competitivePri * 100) / 100
                    app.reservePriSH = Math.floor(mainData.reservePri * 100) / 100
                    app.traNumberSH = mainData.traNumber
                    app.traAmountSH = Math.floor(mainData.traAmount)
                    app.messageSH = ''
                })
                .catch(function (error) {
                    app.nameSH = "Invalid!"
                    app.dateSH = "Invalid!"
                    app.timeSH = "Invalid!"
                    app.increPerSH = "Invalid!"
                    app.increaseSH = "Invalid!"
                    app.todayStartPriSH = "Invalid!"
                    app.yestodEndPriSH = "Invalid!"
                    app.nowPriSH = "Invalid!"
                    app.todayMaxSH = "Invalid!"
                    app.todayMinSH = "Invalid!"
                    app.competitivePriSH = "Invalid!"
                    app.reservePriSH = "Invalid!"
                    app.traNumberSH = "Invalid!"
                    app.traAmountSH = "Invalid!"
                })
        }, 500),
        show1: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid1 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer1 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer1 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri1 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount1 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber1 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer1 = "Invalid!"
                    app.nowPri1 = "Invalid!"
                    app.traAmount1 = "Invalid!"
                    app.traNumber1 = "Invalid!"
                })
        }, 100),
        show2: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid2 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer2 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer2 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri2 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount2 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber2 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer2 = "Invalid!"
                    app.nowPri2 = "Invalid!"
                    app.traAmount2 = "Invalid!"
                    app.traNumber2 = "Invalid!"
                })
        }, 200),
        show3: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid3 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer3 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer3 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri3 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount3 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber3 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer3 = "Invalid!"
                    app.nowPri3 = "Invalid!"
                    app.traAmount3 = "Invalid!"
                    app.traNumber3 = "Invalid!"
                })
        }, 300),
        show4: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid4 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer4 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer4 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri4 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount4 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber4 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer4 = "Invalid!"
                    app.nowPri4 = "Invalid!"
                    app.traAmount4 = "Invalid!"
                    app.traNumber4 = "Invalid!"
                })
        }, 400),
        show5: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid5 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer5 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer5 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri5 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount5 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber5 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer5 = "Invalid!"
                    app.nowPri5 = "Invalid!"
                    app.traAmount5 = "Invalid!"
                    app.traNumber5 = "Invalid!"
                })
        }, 500),
        show6: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid6 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer6 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer6 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri6 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount6 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber6 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer6 = "Invalid!"
                    app.nowPri6 = "Invalid!"
                    app.traAmount6 = "Invalid!"
                    app.traNumber6 = "Invalid!"
                })
        }, 600),
        show7: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid7 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer7 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer7 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri7 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount7 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber7 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer7 = "Invalid!"
                    app.nowPri7 = "Invalid!"
                    app.traAmount7 = "Invalid!"
                    app.traNumber7 = "Invalid!"
                })
        }, 700),
        show8: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid8 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer8 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer8 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri8 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount8 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber8 = response.data.result[0].data.traNumber
                })
                .catch(function (error) {
                    app.increPer8 = "Invalid!"
                    app.nowPri8 = "Invalid!"
                    app.traAmount8 = "Invalid!"
                    app.traNumber8 = "Invalid!"
                })
        }, 800),
        show9: _.debounce(function () {
            var app = this
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gid9 +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    if (response.data.result[0].data.increPer >= 0) {
                        app.increPer9 = response.data.result[0].data.increPer + ' ⇱'
                    } else {
                        app.increPer9 = response.data.result[0].data.increPer + ' ⇲'
                    }
                    app.nowPri9 = Math.floor(response.data.result[0].data.nowPri * 100) /
                        100
                    app.traAmount9 = ((response.data.result[0].data.traAmount) / 1e8).toFixed(
                        2) + '亿(CNY)'
                    app.traNumber9 = response.data.result[0].data.traNumber
                    nav.message = ''
                })
                .catch(function (error) {
                    app.increPer9 = "Invalid!"
                    app.nowPri9 = "Invalid!"
                    app.traAmount9 = "Invalid!"
                    app.traNumber9 = "Invalid!"
                })
        }, 900)
    }
})