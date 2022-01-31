Vue.createApp({
    data() {
        return {
            score: {
                tinjun: 0,
                juntin: 0,
                chiatzu: 0,
                weitzu: 0
            },
            temp_score: {
                tinjun: 0,
                juntin: 0,
                chiatzu: 0,
                weitzu: 0
            },
            history_score: [
                {
                    tinjun: 0,
                    juntin: 0,
                    chiatzu: 0,
                    weitzu: 0
                }
            ]
            
            }
            
    },
    methods: {
        Submit() {
            this.history_score.push(
                {
                    tinjun:  this.temp_score.tinjun,
                    juntin:  this.temp_score.juntin,
                    chiatzu: this.temp_score.chiatzu,
                    weitzu:  this.temp_score.weitzu
                }
            )
            this.score.tinjun = this.score.tinjun +   this.temp_score.tinjun;
            this.score.juntin = this.score.juntin +   this.temp_score.juntin;
            this.score.chiatzu = this.score.chiatzu + this.temp_score.chiatzu;
            this.score.weitzu = this.score.weitzu +   this.temp_score.weitzu;
            this.temp_score = {
                tinjun: 0,
                juntin: 0,
                chiatzu: 0,
                weitzu: 0
            };

        }
    }
}).mount('#app');