## react-proptypes
### Utility function for cutting back on repetitive code.

```
import rpt from 'react.proptypes';

static propTypes = rpt({
  username: 'string',
  age: 'number',
  handleChange: 'func',
  minor: 'bool',
});
```
