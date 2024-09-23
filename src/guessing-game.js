class GuessingGame {
    constructor() {
        this.candidate = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.candidate = Math.round((this.min + this.max) / 2);
        return this.candidate;
    }

    lower() {
        this.max = this.candidate
    }

    greater() {
        this.min = this.candidate
    }
}

module.exports = GuessingGame;
