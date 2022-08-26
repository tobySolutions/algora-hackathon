# AGORA HACKATHON

## This is the backend implementation for the Agora Backend


**Request** 

```
Request:
    Url: https://agora-hackathon.herokuapp.com/v1/api/meetings/tokens
    queryParameters: channelName
    method: POST
    
    Example:
    https://agora-hackathon.herokuapp.com/v1/api/meetings/tokens?channelName="test"
```


**Response**

* On success
```json
 {
  "status": 200,
  "token": "token"
}
```

**Response**

* On Failure

```json
{
  "error": "channel is required"
}
```