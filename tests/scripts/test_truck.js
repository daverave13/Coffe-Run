console.log(myTruck.createOrder({email: 'me@goldfinger.com', coffee: 'double mocha'}));
console.log(myTruck.createOrder({email: 'dr@no.com', coffee: "decaf"}));
console.log(myTruck.createOrder({email: 'm@bond.com', coffee: "earl grey"}));
console.log(myTruck.printOrders());
console.log(myTruck.deliverOrder('dr@no.com'));
console.log(myTruck.deliverOrder('m@bond.com'));
console.log(myTruck.printOrders());
