// .prototype is a proprerty of the object constructor. It allows you to add new proprey to the Object constructor.


function twitterApplication(username, email, password) {
    this.username = username; // this cunku global scope da tutmak istiyoruz variablei
    this.email = email;
    this.password = password;
    this.timeline = [];
}

twitterApplication.prototype.avatar = "Avatar.jpg"


twitterApplication.prototype.showInfo = function (){
    console.log(`Username: ${this.username}\nEmail:${this.email}\nPassword:${this.password}\nAvatar:${this.avatar}\nTweet:${this.timeline}`)
}


 twitterApplication.prototype.updatePassword = function(newPassword) {
      return this.password = newPassword
  }

twitterApplication. prototype.sendTweet = function(tweet) {
    this.timeline.push(tweet)
}

twitterApplication.prototype.deleteTweet = function() {
    this.timeline.pop()
}

let user1 = new twitterApplication('Jack','jack@jack.com','12345');
user1.sendTweet("Lalalalala")
user1.sendTweet("Js is cool")
user1.sendTweet("Learning js")
console.log(typeof user1)
user1.updatePassword("Hello123")
user1.showInfo();
console.log(user1)


let user2 = new twitterApplication("Ersin", "ersin@ersin.com", "ersin123");
user2.sendTweet("I'm Ersin")
user2.sendTweet("I'm learning js")
user2.showInfo();


//user in tum tweetlerini globalde gormek icin
user2.timeline.forEach(function(tweet){
    console.log(tweet)
})