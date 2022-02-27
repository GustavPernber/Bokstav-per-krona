# Bokstav-per-krona 

**Absolut aldrig någonsin i livet alkohol per krona!**

## API documentation
**No CORS**

*Example*
`http://localhost:4567/api/drinksLimited??page=2&priceMax=100&priceMin=10&alcMax=20&alcMin=9`

---

### GET /api/drinksLimited 
 
Returns limited amount of products. For example 30 products:

### Params:

* #### Pagenumber
    `page={PAGENUMBER}`  
    Pagenumber=1 will return 30 products and pagenumber=2 will return the next 30 products after that.

* #### Price
    `priceMin={MIN PRICE}`
    `priceMax={MAX PRICE}`

* #### Alcohol
    `alcMin={MIN ALC PERCENTAGE}`
    `alcMax={MAX ALC PERCENTAGE}`

  
---


