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
