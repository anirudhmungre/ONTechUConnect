"use strict"
class APIResponse {
    constructor() {
        this.message = ""
        this.error = ""
        this.response = 0
        this.data = {}
    }
    setMessage(message) {
        this.message = message
        return this
    }
    setError(error) {
        this.error = error
        return this
    }
    setResponseCode(code) {
        this.response = code
        return this
    }
    setData(data) {
        this.data = data
        return this
    }
}

exports.resp = APIResponse