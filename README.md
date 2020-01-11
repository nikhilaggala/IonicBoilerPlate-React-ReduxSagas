# setup for Ionic web

* yarn global add ionic

## for web

* ionic serve

## for ios (on MAC)

* sudo gem install cocoapods
* ionic build
* ionic capacitor copy ios
* ionic capacitor add ios
* ionic capacitor open ios
* ionic capacitor run ios -l --address=0.0.0.0

## for android

* ionic build
* ionic capacitor add android
* ionic capacitor copy android
* ionic capacitor open android
* ionic capacitor run android -l --address=0.0.0.0
