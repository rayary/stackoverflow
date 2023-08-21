class DB {
    constructor(){
        this.questions = []
        this.currentID = 0
    }

    addQuestion(question) {
        this.currentID += 1
        this.questions.push({
            id: this.currentID,
            ...question
        })
        return this.currentID
    }

    getQuestions() {
        return this.questions
    }
}

module.exports = DB
