<p align="center">
  <a href="" rel="noopener">
 <img src="https://www.luby.com.br/wp-content/uploads/2020/11/nodejs-luby.png" alt="Project logo"></a>
</p>

<h3 align="center">NodeJS Users API - Without Frameworks And Packages</h3>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div> 

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#author)

<br>

## 🧐 About <a name = "about"></a>

Purpose of this project was build a simple users API in a different way we see all time in nodeJS ecosystem, usually using Express, Adonis, Hapi...
I used just the native modules of nodeJS and a JSON file as DataBank, that is managed using node fs
<br>
<br>

<hr>
<br>

## 🏁 Getting Started <a name = "getting_started"></a>
<br>

### Installing

```
git clone https://github.com/NathanCotrim/NodeJS-API.git
```

or - (GitHub CLI)

```
gh repo clone NathanCotrim/NodeJS-API 
```
<br>

### Running

```
node src/server.js
```
<br>

## 🎈 Usage <a name="usage"></a> 
<br>

## Main API Routes

<br>

#### http://localhost:3000/users
<h3><strong>GET | List all users</strong></h3>

<hr>

#### http://localhost:3000/user/:id
<h3><strong>GET | Get user by Id</strong></h3>

<hr>

#### http://localhost:3000/new/user
<h3><strong>POST | Create User</strong></h3>

<h3>Receives a JSON:</h3>

```
{
  "name": "Tester",
  "email": "tester.test@domain.com"
}
```

<hr>

#### http://localhost:3000/update/user/:id
<h3><strong>PATCH | Update User</strong></h3>

<h3>Receives a JSON with new Information:</h3>

```
{
  "name": "TesterUpdated", (?)
  "email": "testerUpdated.test@domain.com" (?)
}
```

<hr>

#### http://localhost:3000/delete/user/:id
<h3><strong>DELETE | Delete User</strong></h3>


<hr>
<br>

### To request any route without an app use:
```
curl ${url} -X ${method}
```

<br>

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment 

<br>

## ✍️ Author - <a name = "author">Nathan Cotrim - MIT License</a>

