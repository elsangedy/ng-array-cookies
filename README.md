# ngArrayCookies

Adds new features to ngCookies.

## Example
```javascript
var app = angular.module('myModule', ['ngArrayCookies']);

app.controller(['$cookies', function($cookies) {
  $cookies.putObject('example', [{name:'teste1'}]);
  $cookies.unshiftObject('example', [{name:'teste0'}, {name:'teste2'}]);
  $cookies.appendObject('example', {name:'teste3'});
  $cookies.spliceObject('example', 1);
  console.log($cookies.getObject('example'));
}]);
```

## Methods

### $cookies

- appendObject(key, value, config = {}, autoCreate = true)
- unshiftObject(key, value, config = {}, autoCreate = true)
- spliceObject(key, index, amount = 1, config = {})


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

English is the universal language nowadays, so please don't create or comment on issues using another language.


## License

- [MIT](LICENSE)