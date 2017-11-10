export default {
  selector: '.menu',
  elements: {
    home: {
      selector: 'div#menu ul > li:nth-child(1) > a'
    },
    provide_feedback: {
      selector: 'div#menu li:nth-child(2) > a'
    } 
  }
}