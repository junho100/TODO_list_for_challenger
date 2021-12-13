# Goals, Challenges API documentation

## Schema

TODO : goal, challenge 해당 이름만 가져오는 api 구현
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

response 200

```
{
    [...challenges]
}
```

## GET /challs/:targetMonth?username=:username

get my challenges in specific month

response 200

```
{
    [...challenges]
}
```

## GET /challs/:targetMonth/:targetWeek?username=:username

get my challenge in specific month, week

response 200

```
{
    challenge
}
```

## POST /challs/:targetMonth/:targetWeek?username=:username

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

## PUT /challs/:targetMonth/:targetWeek?username=:username

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

## PUT /challs/:targetMonth/:targetWeek?username=:username

update complete or not

response 200

```
{
    challenge
}
```

## DELETE /challs/:targetMonth/:targetWeek?username=:username

delete challenge <br>

response 204

---

# Authentication API documentation

## Schema

```
{
    username : string // ID 겸 이름
    password : string,
    name : string
}
```

## POST /auth/signup

signup user <br>

request

```
{
    username,
    password,
    name
}
```

response 201

```
{
    token,
    username
}
```

## POST /auth/login

login user <br>

request

```
{
    username,
    password
}
```

response 201

```
{
    token,
    username
}
```

## POST /auth/logout

logout user <br>

response 201

## GET /auth/me

check authentication

response 200

```
{
    token,
    username
}
```
