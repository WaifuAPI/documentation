### Gif

Returns a random anime gif

#### Path

```HTTP
GET /<category>
```

#### Headers

> - Set your API Key as the `Auth` header on every request.
> - Example: `Auth`: token

#### Path parameters

| param    | type   | Description                                                                                       |
| :------- | :----- | :------------------------------------------------------------------------------------------------ |
| category | `Enum` | The category of the gif you want to get. You can see al available options [here](#gif-categories) |

##### Gif categories

| Category  | Value       | Description                    |
| :-------- | :---------- | :----------------------------- |
| Angry     | `angry`     | Returns a random angry gif     |
| Baka      | `baka`      | Returns a random baka gif      |
| Bite      | `bite`      | Returns a random bite gif      |
| Blush     | `blush`     | Returns a random blush gif     |
| Bonk      | `bonk`      | Returns a random bonk gif      |
| Bored     | `bored`     | Returns a random bored gif     |
| Bully     | `bully`     | Returns a random bully gif     |
| Bye       | `bye`       | Returns a random bye gif       |
| Chase     | `chase`     | Returns a random chase gif     |
| Cheer     | `cheer`     | Returns a random cheer gif     |
| Cringe    | `cringe`    | Returns a random cringe gif    |
| Cry       | `cry`       | Returns a random cry gif       |
| Cuddle    | `cuddle`    | Returns a random cuddle gif    |
| Dab       | `dab`       | Returns a random dab gif       |
| Dance     | `dance`     | Returns a random dance gif     |
| Die       | `die`       | Returns a random die gif       |
| Disgust   | `disgust`   | Returns a random disgust gif   |
| Facepalm  | `facepalm`  | Returns a random facepalm gif  |
| Feed      | `feed`      | Returns a random feed gif      |
| Glomp     | `glomp`     | Returns a random glomp gif     |
| Happy     | `happy`     | Returns a random happy gif     |
| Hi        | `hi`        | Returns a random hi gif        |
| Highfive  | `highfive`  | Returns a random highfive gif  |
| Hold      | `hold`      | Returns a random hold gif      |
| Hug       | `hug`       | Returns a random hug gif       |
| Kick      | `kick`      | Returns a random kick gif      |
| Kill      | `kill`      | Returns a random kill gif      |
| Kiss      | `kiss`      | Returns a random kiss gif      |
| Laugh     | `laugh`     | Returns a random laugh gif     |
| Lick      | `lick`      | Returns a random lick gif      |
| Love      | `love`      | Returns a random love gif      |
| Lurk      | `lurk`      | Returns a random lurk gif      |
| Midfing   | `midfing`   | Returns a random midfing gif   |
| Nervous   | `nervous`   | Returns a random nervous gif   |
| Nom       | `nom`       | Returns a random nom gif       |
| Nope      | `nope`      | Returns a random nope gif      |
| Nuzzle    | `nuzzle`    | Returns a random nuzzle gif    |
| Panic     | `panic`     | Returns a random panic gif     |
| Pat       | `pat`       | Returns a random pat gif       |
| Peck      | `peck`      | Returns a random peck gif      |
| Poke      | `poke`      | Returns a random poke gif      |
| Pout      | `pout`      | Returns a random pout gif      |
| Punch     | `punch`     | Returns a random punch gif     |
| Run       | `run`       | Returns a random run gif       |
| Sad       | `sad`       | Returns a random sad gif       |
| Shoot     | `shoot`     | Returns a random shoot gif     |
| Shrug     | `shrug`     | Returns a random shrug gif     |
| Sip       | `sip`       | Returns a random sip gif       |
| Slap      | `slap`      | Returns a random slap gif      |
| Sleepy    | `sleepy`    | Returns a random sleepy gif    |
| Smile     | `smile`     | Returns a random smile gif     |
| Smug      | `smug`      | Returns a random smug gif      |
| Stab      | `stab`      | Returns a random stab gif      |
| Stare     | `stare`     | Returns a random stare gif     |
| Suicide   | `suicide`   | Returns a random suicide gif   |
| Tease     | `tease`     | Returns a random tease gif     |
| Think     | `think`     | Returns a random think gif     |
| Thumbs up | `thumbsup`  | Returns a random thumbs up gif |
| Tickle    | `tickle`    | Returns a random tickle gif    |
| Triggered | `triggered` | Returns a random triggered gif |
| Wag       | `wag`       | Returns a random wag gif       |
| Wave      | `wave`      | Returns a random wave gif      |
| Wink      | `wink`      | Returns a random wink gif      |
| Yes       | `yes`       | Returns a random yes gif       |

#### Response

```ts
{
  // The url of the gif
  url: string;
}
```
