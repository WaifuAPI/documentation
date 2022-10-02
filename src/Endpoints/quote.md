### Quote

Returns a single random anime quote

#### Path

```HTTP
GET /quote
```

#### Headers

> - Set your API Key as the `Auth` header on every request.
> - Example: `Auth`: token

#### Response

```ts
{
  _id: number;
  // The quote
  quote: string;
  // The anime name of the quote
  anime: string;
  // The person who said the quote
  said: string;
}
```
