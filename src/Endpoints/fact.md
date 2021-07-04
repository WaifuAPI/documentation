## Fact

### Generate random Anime facts

Returns a single random fact from the database

#### Path

```HTTP
GET /fact
```

### Headers:

> - Set your API Key as the `Auth` header on every request.
> - Example: `Auth`: token

#### Query parameters

| param     | type     | Description                                                                                                                                                                                                                                                                                                         |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| maxLength | `Int`    | The maximum Length in characters ( can be combined with `minLength` )                                                                                                                                                                                                                                               |
| minLength | `Int`    | The minimum Length in characters ( can be combined with `maxLength` )                                                                                                                                                                                                                                               |
| tags      | `String` | Filter random fact by tag(s). Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match facts that have **_all_** of the given tags. While a pipe (`\|`) separated list will match facts that have **_either_** of the provided tags. |

#### Response

```ts
{
  _id: string
  // The fact text value
  fact: string
  // An array of tag names for this fact
  tags: string[]
}
```

#### Examples

Random fact [try in browser](https://animu.ml/fact)

```HTTP
GET /fact
```

Random fact with tags "pokemon" **`AND`** "pikachu" [try in browser](https://animu.ml/fact?tags=pokemon,pikachu)

```HTTP
GET /fact?tags=pokemon,pikachu
```

Random fact with tags "AttackonTitan" **`OR`** "Levi" [try in browser](https://animu.ml/fact?tags=AttackonTitan|Levi)

```HTTP
GET /fact?tags=AttackonTitan|Levi
```

### List facts

Get a paginated list of all facts. This method supports several filter and sorting options.

#### Path

```HTTP
GET /facts
```

#### Query parameters

| param | type     | Description                                                                                                                                                                                                                                                                                                   |
| :---- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| limit | `Int`    | `Min: 1` `Max: 100` `Default: 20` <br> The number of facts to return per request. (for pagination).                                                                                                                                                                                                           |
| skip  | `Int`    | `Min: 0` `Default: 0` <br> The number of items to skip (for pagination).                                                                                                                                                                                                                                      |
| tags  | `String` | Filter facts by tag(s). Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match facts that have **_all_** of the given tags. While a pipe (`\|`) separated list will match facts that have **_either_** of the provided tags. |

#### Response

```ts
{
  // The index of the last fact returned. When paginating through results,
  // this value would be used as the `skip` parameter when requesting the next
  // "page" of results.
  lastIndex: number
  // The number of facts returned by this request
  resultsCount: number
  // The total number of facts matching this request
  totalCount: number
  // The array of facts
  results: Array<{
    _id: string
    // The fact value in text
    fact: string
    // An array of tag names for this fact
    tags: string[]
  }>
}
```

### Get fact By ID

Get a fact by its ID

#### Path

```HTTP
GET /facts/:id
```

#### Response

```ts
{
  _id: string
  // The quotation text
  fact: string
  // An array of tag names for this fact
  tags: string[]
}
```
