class WishlistSubject {
        constructor() {
          this._observers = []
        }
        
        subscribe(observer) {
          this._observers.push(observer)
        }
        
        unsubscribe(observer) {
          this._observers = this._observers.filter(obs => obs !== observer)
        }
        
        fire(action) {
          this._observers.forEach(obs => obs.addToWishList(action))
        }
      }
        

