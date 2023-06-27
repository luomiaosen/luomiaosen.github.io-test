
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 向给定ID的用户发起请求
// axios.
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // 处理成功情况
    console.log(response.data);
    document.getElementById("demo").innerHTML=response.data.title;
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });

