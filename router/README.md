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

/_
goal
content -> not empty
targetMonth : length 6
_/

/_
auth
username -> length min 1 max 10
name -> first word -> uppercase
_/

/_
challenge
content -> not empty
targetMonth -> length 6
targetWeek -> value min 1 max 5, lenght 1
_/

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

---

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
