const consumerKey = 'RpBPlOLCyEAdARIjqg3oJG2Hkqdp0Er8TCU5yt2wJr3GLqFp'
const consumersecret = 'm3grm0Tqi9A8lttsUD89IIfOljYywt050OwG8Ya2tvuCyFDqsNsZzsXdxMAqH76t'


let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer pVZdn8O2R6GoPnbuySiT8MVBEhih");
​
fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzI1MTAzNDI2",
    "Timestamp": "20240325103426",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254708374149,
    "PartyB": 174379,
    "PhoneNumber": 254745150121,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  })
})
