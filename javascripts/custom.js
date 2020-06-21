'use strict';

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

console.log(ALL_DATA);

let filtered = ALL_DATA.slice();

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
    }, function(start, end, label) {
      filtered = ALL_DATA.filter(data => data.date > start && data.date < end);

      filtered.forEach((item) => {
        document.getElementById("from").innerHTML = item.sender;
        document.getElementById("to").innerHTML = item.receiver;
        document.getElementById("subject").innerHTML = item.subject;
        document.getElementById("date").innerHTML = item.date;
      })


      console.log(filtered)
      // console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
    // const emails = select * from email ALL_DATA between start and end;
  });

document.getElementById("total-email").innerHTML = filtered.length;


const num = filtered.length;
  for (let i = 0; i < num; i++ ) {
  const th = document.createElement('th');
  th.textContent = filtered[i].sender;
  th.textContent = filtered[i].receiver;
  th.textContent = filtered[i].subject;
  th.textContent = filtered[i].date;



  document.body.appendChild(th);

  }





