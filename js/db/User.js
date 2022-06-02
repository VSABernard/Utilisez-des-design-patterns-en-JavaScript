class User {
    constructor(data) {
        if (User.exists) {
            return User.instance
        } else if (data && data.firstName && data.lastName) {
            this._fisrtName = data.firstName
            this._lastName = data.lastName 

            this.saveLocalStorage ()
            User.instance = this
            User.exists = true

            return this
        }
    }

    get firstName() {
        return this._fisrtName
    }
    get lastName() {
        return this._lastName
    }
    get user () {
        const firstName = this._firstName || localStorage.getItem('firstName')
        const lastName = this._lastName || localStorage.getItem('lastName')

        if (firstName && lastName) {
            const user = new User({
                firstName,
                lastName
            })
        }

        if (!firstName && !lastName) {
            return null
        }
        return {
            firstName: firstName,
            lastName: lastName
        }
    }

    saveLocalStorage() {
        localStorage.setItem('firstName', this._fisrtName)
        localStorage.setItem('lastName', this._lastName)
    }
}
