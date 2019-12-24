const axios = require("axios").default;

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  console.log("plugin enhance app");
  console.log("options plugin", options);
  console.log("options host:000", HOST);
  // console.log(Vue, options, router, siteData);
  axios
    .post(`${HOST}${IncrUrl}`, {
      user: User,
      tag: Tag,
    })
    .then(() => {
      axios
        .get(`${HOST}${FetchUrl}`, {
          params: {
            user: User,
            tag: Tag,
          },
        })
        .then(({ data }) => {
          // 访问用户次数
          let count = data.data;
          siteData.themeConfig.visit = count;
        });
    });
};
