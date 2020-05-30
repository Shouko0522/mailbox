const ALL_DATA = [];

// Fake an Email 100 times
for(var i = 0; i < 100; i++){
  ALL_DATA.push({
    'sender': faker.internet.email(),
    'receiver': faker.internet.email(),
    'subject': faker.lorem.sentence(),
    'date': faker.date.past(),
  })
}

console.log(ALL_DATA)

// $(function() {
//   $('input[name="daterange"]').daterangepicker({
//     opens: 'left'
//     }, function(start, end, label) {
//       console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//     });
//   });


// document.getElementById("totalemails").innerHTML; = email;
