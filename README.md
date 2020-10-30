# Reddit clone

Following a reddit clone tutorial https://www.youtube.com/watch?v=I6ypD7qv3Z8&t=199s&ab_channel=BenAwad

- creating migration: yarn create:migration, it compares sql to the entities

up to @1:15:32

- setup register and login resolver and entities, as well as adding in some validation and hashing for password

up to @1:41:45

- redis is an in memory database and very fast, good for storing user session
- use `touch` to reset TTL so to say that user has done something in the session
- adding ! at the end of parameter at the end is saying that its defined
- so when logging in or registering, set a cookie in the browser so that the browser know user is logged in
- req.session.userId = user.id // storing session to redis
  - { userId: 1} => send this to redis
  - session:'randomstring' -> {userId: 1}
  - express-session will set a cookie on the browser (signed version) 'randomstringafdsfjaf'
  - when user makes a request 'randomstringafdsfjaf' will get send to the server
  - unsign/decrypt cooie to get from randomstringafdsfjaf' to session:'randomstring' so it can get {userId: 1}

up to @2:08:40
