"use strict"
class APIResponse {
    constructor() {
        this.message = null
        this.error = null
        this.response = null
        this.data = null
    }
    static make() {
        return new APIResponse()
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