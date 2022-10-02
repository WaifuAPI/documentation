### Password

Generates a random password

#### Path

```HTTP
GET /password
```

#### Headers

> - Set your API Key as the `Auth` header on every request.
> - Example: `Auth`: token

#### Response

```ts
{
  _id: number;
  // The random password
  pass: string;
}
```
