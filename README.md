# Social Netowrk APi

## Description

The goal of this project was to build an API for a social network so users can share their thoughts and react with friends.

## Installation

```
npm install
```

## Usage

```sh
node server.js
```

## [Demo](https://drive.google.com/file/d/1KVMLozG5ycgwRsjPhulStcOWlC-IG4zw/view)

## Code Snippets

This following snippet allows us to seacrh for the info of a specific user based on their id.

```JavaScript
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/alexis-zaragoza-5baa51242/)
[GitHub](https://github.com/turtle2001)
