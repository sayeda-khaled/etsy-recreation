(function() {

  'use strict';

  // const source = document.querySelector('#student-template').innerHTML;
  // // console.log('source', source);
  // const template = Handlebars.compile(source);
  // // console.log(template);
  // const context = {
  //   name: 'Sayeda',
  // }
  // const html = template(context);
  // // console.log(html);
  //
  // document.querySelector('.container').innerHTML = html;

  const source = document.querySelector('#shoe-template').innerHTML;
  const template = Handlebars.compile(source);
  const context = {
    shoes: data.results,
  }
  const html = template(context);
  // console.log(html);
  document.querySelector('.container').innerHTML = html;

})();
