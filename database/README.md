# Monthly goal API documentation

## Schema

monthly goal

```
{
    id : string,
    username : string,
    content : string, // 해당 월 목표 내용
    updateAt : datetime,
    targetMonth : datetime,
    isDone : boolean // 완료 여부
}
```

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
