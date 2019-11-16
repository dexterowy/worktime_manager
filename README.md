# System Ewidencji Czasu Pracy
Konkurs Bee2Code  
Wersja demo: [ link ](https://worktime-manager.netlify.com)

----


## Instalacja
Na początku należy zainstalowac wszystkie zależności:  
 `npm install`

## Uruchomienie
### Wersja deweloperska
Aby uruchomic wersje deweloperską należy uruchomic serwer komendą:  
`npm start`

### Wersja produkcyjna
Aby uruchomic zoptymalizowaną wersje produkcyjną należy stworzyc bundle:  
`npm run build`  
A następnie kiedy proces się zakończy uruchomic serwer lokalny np:  
`npx serve -s build`

## Informacje dodatkowe
Cały kod źródłowy znajduje się w folderze `src`.   
Po stworzeniu wersji produkcyjnej, znajduje się ona w folderze `build`.   
W projekcie zostały wykorzystane dodatkowe biblioteki:
 - Styled Components
 - PropTypes
 - @react-pdf/renderer

A także jako pomoc w utrzymaniu kodu:
- ESlint (airbnb rules)
- Prettier


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).