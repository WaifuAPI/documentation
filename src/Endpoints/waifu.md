### Waifu

Returns a single random waifu from the database

#### Path

```HTTP
GET /waifu
```

#### Response

```ts
{
  _id: number
  // The images
  images: string[]
  // Object of names in japanese, english and alt
  names: Object
  // Object of anime names it belongs from
  from: Object
  // Object of stats
  statistics: Object
}
```
