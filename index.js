Vue.component('phone-list',{
    template:
    `<ul>
        <li>Redmi</li>
        <li>Apple</li>
    </ul>`
});
Vue.component('note-list',{
    props:['flist'],
    template:
    `<ul>
    <li v-for="fruit in flist">{{fruit}}</li>
</ul>`
});
app=new Vue({
    el:'#txt',
    component:[
        'phone-list',
        'note-list'
    ],
    data:{
        message:'Hello Jinendra',
        email:'',
        name:'jinendra',
        fruits:[
            "Banana",
            "Apple",
            "Oranges",
            "Mango",
        ],
        flist:[
            {name:"Banana"},
            {name:"Apple"},
            {name:"Oranges"},
            {name:"Mango"},
        ],
        newFruit:''
       
        },
        methods:{
            addFruit:function(){
                // return this.flist.push({name:this.newFruit});
                this.flist.push({name:this.newFruit});
                this.newFruit='';
            }
    },
    filters:{
        capitalize:function(value){
            return value.toUpperCase();
        }
    },
    created:function(){
        console.log('Created');
    },
    mounted:function(){
        console.log('Mounted');
    },
    updated:function(){
        console.log('Updated');
    },
    destroyed:function(){
        console.log('Destroyed');
    },
});
setTimeout(function(){
    app.$destroy();
},5000);
new Vue({
    el:'#tf',
    data:{
        count:5,
        isShow:true,
    }
});