### API Endpoints:
```
GET https://herald-plants-api.herokuapp.com/            -> Redirects to /plants
```
```
GET https://herald-plants-api.herokuapp.com/plants      -> Get all plants
```
```
GET https://herald-plants-api.herokuapp.com/orders      -> Get all orders
```
```
GET https://herald-plants-api.herokuapp.com/orders/:id  -> Get order by id
```
```
POST https://herald-plants-api.herokuapp.com/orders     -> Create new order
```
Expected POST body:
```
Content-Type: application/json

{
  "username": string (username of purchaser),
  "address":  string (delivery address),
  "plantId":  int    (id of plant to be purchased),
  "qty":      int    (quantity of plant to be purchased)
}
```

### Returned JSON objects:

Plants :
```
{
  id:             int    (id used for creating orders)
  name:           string (name of plant)
  scientificName: string (scientific name of plant)
  price:          float  (purchase price
  qty:            int    (quantity in stock)
}
```
Orders:
```
{
  id:        int    (order number)
  username:  string (username of purchaser)
  address:   string (delivery address)
  qty:       int    (quantity of plant ordered)
  totalCost: float  (total price of purchase)
  plant: {
    name:    string (name of plant purchased)
  }
}
```
