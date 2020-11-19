# Getting Started with Create React App

https://agitated-sinoussi-efbc73.netlify.app/

Johns Example:
https://todo-list-manager.netlify.app/
username: admin
password: ADMIN

## Setting Up:

```
npx create-react-app APP-NAME
cd APP-name
```

- Go to github
- Create a Repo

```
git remote add origin https://github.com/REPO
git remote -v
git push -f origin master
```

Testing api : https://davee-auth-api-server.herokuapp.com/api/v1/todo

The following routes are available:

```
/signup
/signin

api/v1/categories
api/v1/products
api/v1/todo

api/v2/categories
api/v2/products
api/v2/todo
```

```
const todo = mongoose.Schema({
  text: { type: String, required: true },
  assignee: { type: String },
  complete: { type: Boolean, default:false },
  difficulty: { type: Number, default: 1 },
});
```
