### Quote

Returns a single random anime quote

#### Path

```HTTP
GET /quote
```

#### Response

```ts
{
  _id: number;
  // The quote
  quote: string;
  // The anime name of the quote
  anime: string;
  // The person who said the quote
  name: string;
}
```
