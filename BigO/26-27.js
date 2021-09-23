const everyone = [
  'fhfh',
  'fdsf',
  'fhfh',
  'fdsf',
  'fhfh',
  'fdsf',
  'fhfh',
  'fdsf',
  'fhfh',
  'fdsf',
  'fhfh',
  'fdsf',
  'fhfh',
  'nemo',
  'fhfh',
  'fdsf',
  'fhfh',
  'fdsf',
];

const nemo = ['nemo'];

const large = new Array(10000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'nemo') console.log('Found nemo!');
  }

  let t1 = performance.now();

  console.log('Call to find nemo took ' + (t1 - t0) + ' mls');
}

findNemo(large); // O(n)
