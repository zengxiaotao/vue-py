#vue-py
## vue 汉字转拼音插件
### Usage

```html
<script src='path/to/vue.js'></script>
<script src='path/to/vue-py.js'></script>
<body>
    <div id='#app'>
        <p v-py='name'></p> <!--渲染成 <p>zhong guo</p>-->
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                name: '中国'
            }
        })
    </script>
</body>
```

### modifiers

1. capitalize
    
    ```html
    <div id='#app'>
        <p v-py.capitalize='name'></p> <!--渲染成 <p>ZHONG GUO</p>-->
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                name: '中国'
            }
        })
    </script>
    ```

2. upperfirst

    ```html
    <div id='#app'>
        <p v-py.upperfirst='name'></p> <!--渲染成 <p>Zhong Guo</p>-->
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                name: '中国'
            }
        })
    </script>
    ```

