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
