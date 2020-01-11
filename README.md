## Environment
* meteor 1.8.2
* Node.js 12.13.0
* NPM 6.12.0
* Vue 2.6.11

## install meteor

```

curl https://install.meteor.com/ | sh
```

## create app

```
meteor create meteor-mysite-web
```

## run meteor app

```
meteor
http://localhost:3000/

or

NO_HMR=1 meteor --settings=settings.json
```

## remove package for security

```
meteor remove insecure
meteor remove autopublish
```

## TODO
* convert docker


## DOCS
* [Tutorial](https://www.meteor.com/try)
* [Guide](http://guide.meteor.com)
* [Docs](https://docs.meteor.com)
