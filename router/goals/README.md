# Goals API documentation

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

## GET /goals

get my goals <br>
response 200

```
{
    [...goals]
}
```

## GET /goals/:targetMonth

get my goals in specific month <br>

response 200

```
{
    goal
}
```

## POST /goals/:targetMonth

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

## PUT /goals/:targetMonth

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

## PUT /goals/targetMonth

update complete or not

response 200

```
{
    goal
}
```

## DELETE /goals/:targetMonth

delete goal <br>

response 204
