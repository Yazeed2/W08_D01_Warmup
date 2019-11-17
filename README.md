### Pizzeria
![](https://media.giphy.com/media/l2QZYPfMQ90gyJAWI/giphy.gif)


In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: 
if you already made at least 5 orders of at least 20 dollars => you get a free 12 inch pizza with 3 toppings of your choice!
However, the rewards system may change in the future.
Your manager wants you to implement a *function* that, given : 
1. a dictionary of customers, 
1. a minimum number of orders
1. a minimum order price,
1. returns a set of the customers who are eligible for a reward.

Try and use the [.Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method!


Example: 

```bash

Make at least 3 orders of at least 15$ each and get a free pizza!'''
min_orders = 3
min_price = 15
customers = {
'Ahmad' : [15, 15, 14], # Only has two orders of 15$ or more, so no pizza
'Yasser' : [15, 15, 15], # Has three orders of 15$ or more, which means FREE PIZZA!
'Ebere' : [120, 240], # Only has two orders of 15$ or more, so no pizza
}

```
