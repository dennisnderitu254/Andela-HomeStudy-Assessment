class ShoppingCart(object):

  def __init__(self):
      self.total = 0 
      self.items = {}

  def add_item(self,item_name,quantity,price):
      self.items[item_name] = quantity
      self.total += price*quantity
  def remove_item(self, item_name, quantity, price):
    if quantity >= self.items[item_name]:
        self.total -= (self.items[item_name] * price)
        del self.items[item_name]
    else:
        self.total -= (quantity * price)
        self.items[item_name] -= quantity

  def checkout(self,cash_paid):
      if cash_paid >= self.total:
          return cash_paid - self.total
      else:
          return "Cash paid not enough"

class Shop(ShoppingCart):
  def __init__(self):
      self.quantity = 100

  def remove_item(self):
      self.quantity -= 1