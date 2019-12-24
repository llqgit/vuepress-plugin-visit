# vuepress-plugin-visit

vuepress plugin for visit count api

## usage

```js
plugins: {
  "@vuepress/back-to-top": true, // 举例（for example）
  "vuepress-plugin-visit": {     // 当前插件（current plugin）
    host: "http://localhost:8066",
    fetchUrl: "/v1/count",
    incrUrl: "/v1/incr",
    user: "llqgit",
    tag: "blog",
  },
},
```

- host: api host (custom yourself)
- fetchUrl: GET api return a json data = Number (custom yourself)
- incrUrl: POST api count 1 to the db (custom yourself)
- user: who request the api (custom yourself)
- tag: which tag for your site (custom yourself)
