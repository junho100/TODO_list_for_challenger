# Challenges API documentation

## Schema

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

## GET /challs

get my challenges

response 200

```
{
    [...challenges]
}
```

## GET /challs/:targetMonth

get my challenges in specific month

response 200

```
{
    [...challenges]
}
```

## GET /challs/:targetMonth/:targetWeek

get my challenge in specific month, week

response 200

```
{
    challenge
}
```

## POST /challs/:targetMonth/:targetWeek

create challenge <br>
request

```
{
    content
}
```

response 201

```
{
    challenge
}
```

## PUT /challs/:targetMonth/:targetWeek

update challenge <br>
request

```
{
    content
}
```

response 200

```
{
    challenge
}
```

## PUT /challs/:targetMonth/:targetWeek

update complete or not

response 200

```
{
    challenge
}
```

## DELETE /challs/:targetMonth/:targetWeek

delete challenge <br>

response 204
