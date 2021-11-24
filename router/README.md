# API documentation

## Schema

monthly goal

```
{
    id : string,
    username : string,
    content : string, // 해당 월 목표 내용
    updateAt : datetime,
    targetMonth : string,
    isDone : boolean // 완료 여부
}
```

weekly challenge

```
{
    id : string,
    username : string,
    content : string, // 해당 주 목표 내용
    updateAt : datetime,
    targetMonth : string,
    targetWeek : string,
    isDone : boolean // 완료 여부
}
```

---

## GET /goals?username=:username

get my goals <br>
response 200

```
{
    [...goals]
}
```

## GET /goals?username=:username

get my goals in specific month <br>
request

```
{
    targetMonth
}
```

response 200

```
{
    goal
}
```

## POST /goals?username=:username

create goal <br>
request

```
{
    content,
    targetMonth
}
```

response 201

```
{
    goal
}
```

## PUT /goals?username=:username

update goal <br>
request

```
{
    targetMonth,
    content
}
```

response 200

```
{
    goal
}
```

## DELETE /goals?username=:username

delete goal <br>
request

```
{
    targetMonth
}
```

response 204

## PUT /goals?username=:username

update complete or not
request

```
{
    targetMonth
}
```

response 200

```
{
    goal
}
```

---

## GET /chall?username=:username

get my challenges

response

```
{
    [...challenges]
}
```

## GET /chall?username=:username

get my challenges in specific month

request

```
{
    targetMonth
}
```

response

```
{
    [...challenges]
}
```

## GET /chall?username=:username

get my challenge in specific month, week

request

```
{
    targetMonth,
    targetWeek
}
```

response

```
{
    challenge
}
```

## POST /chall?username=:username

create challenge <br>
request

```
{
    content,
    targetMonth,
    targetWeek
}
```

response 201

```
{
    challenge
}
```

## PUT /chall?username=:username

update challenge <br>
request

```
{
    targetMonth,
    targetWeek,
    content
}
```

response 200

```
{
    challenge
}
```

## DELETE /chall?username=:username

delete challenge <br>
request

```
{
    targetMonth,
    targetWeek
}
```

response 204

## PUT /chall?username=:username

update complete or not
request

```
{
    targetMonth,
    targetWeek
}
```

response 200

```
{
    challenge
}
```
