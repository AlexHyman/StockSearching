const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

var app = new Vue({
    el: '#app',
    data: {
        messageSH: '',
        messageSZ: '',
        messageHK: '',
        messageUS: '',

        //SH
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

        //SZ
        gidSZ: '',
        nameSZ: '',
        dateSZ: '',
        timeSZ: '',
        increPerSZ: '',
        increaseSZ: '',
        todayStartPriSZ: '',
        yestodEndPriSZ: '',
        nowPriSZ: '',
        todayMaxSZ: '',
        todayMinSZ: '',
        competitivePriSZ: '',
        reservePriSZ: '',
        traNumberSZ: '',
        traAmountSZ: '',

        //HK
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

        //US
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
        capitalUS: ''
    },
    watch: {
        gidSH: function () {
            if (this.gidSH.length == 6) {
                this.showSH()
            }
        },
        gidSZ: function () {
            if (this.gidSZ.length == 6) {
                this.showSZ()
            }
        },
        gidHK: function () {
            if (this.gidHK.length == 5) {
                this.showHK()
            }
        },
        gidUS: function () {
            this.showUS()
        }
    },
    methods: {
        showSH: _.debounce(function () {
            var app = this
            app.messageSH = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sh' + app.gidSH +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    app.nameSH = response.data.result[0].data.name
                    app.dateSH = response.data.result[0].data.date
                    app.timeSH = response.data.result[0].data.time
                    app.increPerSH = response.data.result[0].data.increPer
                    app.increaseSH = response.data.result[0].data.increase
                    app.todayStartPriSH = response.data.result[0].data.todayStartPri
                    app.yestodEndPriSH = response.data.result[0].data.yestodEndPri
                    app.nowPriSH = response.data.result[0].data.nowPri
                    app.todayMaxSH = response.data.result[0].data.todayMax
                    app.todayMinSH = response.data.result[0].data.todayMin
                    app.competitivePriSH = response.data.result[0].data.competitivePri
                    app.reservePriSH = response.data.result[0].data.reservePri
                    app.traNumberSH = response.data.result[0].data.traNumber
                    app.traAmountSH = response.data.result[0].data.traAmount
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
        showSZ: _.debounce(function () {
            var app = this
            app.messageSZ = 'Searching...'
            axios.get(API_PROXY + 'http://web.juhe.cn:8080/finance/stock/hs?gid=sz' + app.gidSZ +
                    '&key=c95b13606a73270d34a65a3766e14d41')
                .then(function (response) {
                    app.nameSZ = response.data.result[0].data.name
                    app.dateSZ = response.data.result[0].data.date
                    app.timeSZ = response.data.result[0].data.time
                    app.increPerSZ = response.data.result[0].data.increPer
                    app.increaseSZ = response.data.result[0].data.increase
                    app.todayStartPriSZ = response.data.result[0].data.todayStartPri
                    app.yestodEndPriSZ = response.data.result[0].data.yestodEndPri
                    app.nowPriSZ = response.data.result[0].data.nowPri
                    app.todayMaxSZ = response.data.result[0].data.todayMax
                    app.todayMinSZ = response.data.result[0].data.todayMin
                    app.competitivePriSZ = response.data.result[0].data.competitivePri
                    app.reservePriSZ = response.data.result[0].data.reservePri
                    app.traNumberSZ = response.data.result[0].data.traNumber
                    app.traAmountSZ = response.data.result[0].data.traAmount
                    app.messageSZ = ''
                })
                .catch(function (error) {
                    app.nameSZ = "Invalid!"
                    app.dateSZ = "Invalid!"
                    app.timeSZ = "Invalid!"
                    app.increPerSZ = "Invalid!"
                    app.increaseSZ = "Invalid!"
                    app.todayStartPriSZ = "Invalid!"
                    app.yestodEndPriSZ = "Invalid!"
                    app.nowPriSZ = "Invalid!"
                    app.todayMaxSZ = "Invalid!"
                    app.todayMinSZ = "Invalid!"
                    app.competitivePriSZ = "Invalid!"
                    app.reservePriSZ = "Invalid!"
                    app.traNumberSZ = "Invalid!"
                    app.traAmountSZ = "Invalid!"
                })
        }, 500),
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
                    app.openpriHK = response.data.result[0].data.openpri
                    app.formpriHK = response.data.result[0].data.formpri
                    app.lastestpriHK = response.data.result[0].data.lastestpri
                    app.maxpriHK = response.data.result[0].data.maxpri
                    app.minpriHK = response.data.result[0].data.minpri
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
                    app.openpriUS = response.data.result[0].data.openpri
                    app.formpriUS = response.data.result[0].data.formpri
                    app.lastestpriUS = response.data.result[0].data.lastestpri
                    app.maxpriUS = response.data.result[0].data.maxpri
                    app.minpriUS = response.data.result[0].data.minpri
                    app.traAmountUS = response.data.result[0].data.traAmount
                    app.avgTraNumberUS = response.data.result[0].data.avgTraNumber
                    app.markValueUS = ((response.data.result[0].data.markValue) / 1e8).toFixed(
                        2) + '亿'
                    app.priearnUS = response.data.result[0].data.priearn
                    app.RORUS = response.data.result[0].data.ROR
                    app.EPSUS = response.data.result[0].data.EPS
                    app.dividentUS = response.data.result[0].data.divident
                    app.capitalUS = response.data.result[0].data.capital
                    app.messageUS = ''
                    console.log(response.data.result[0].data)
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
    }
})