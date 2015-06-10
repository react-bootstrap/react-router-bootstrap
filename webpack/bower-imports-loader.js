export default function bowerImportsLoader(source) {
  const rgx = /^import (.*) from 'react-bootstrap\/lib\/.*';/;

  return source.split('\n')
    .map(line => line.replace(rgx, "import {$1} from 'react-bootstrap';"))
    .join('\n');
}
