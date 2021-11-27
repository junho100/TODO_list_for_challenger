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

## GET /goals/:targetMonth?username=:username

get my goals in specific month <br>

response 200

```
{
    goal
}
```

## POST /goals/:targetMonth?username=:username

create goal <br>
request

```
{
    content
}
```

response 201

```
{
    goal
}
```

## PUT /goals/:targetMonth?username=:username

update goal <br>
request

```
{
    content
}
```

response 200

```
{
    goal
}
```

## PUT /goals/targetMonth?username=:username

update complete or not

response 200

```
{
    goal
}
```

## DELETE /goals/:targetMonth?username=:username

delete goal <br>

response 204

---

## GET /challs?username=:username

get my challenges

response

```
{
    [...challenges]
}
```

## GET /challs?username=:username

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

## GET /challs/:week?username=:username

get my challenge in specific month, week

request

```
{
    targetMonth
}
```

response

```
{
    challenge
}
```

## POST /challs?username=:username

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

## PUT /challs/:week?username=:username

update challenge <br>
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
    challenge
}
```

## DELETE /challs/:week?username=:username

delete challenge <br>
request

```
{
    targetMonth
}
```

response 204

## PUT /challs/:week?username=:username

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
    challenge
}
```
