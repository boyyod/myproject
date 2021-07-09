<template>
    <div>
         <Nav />
        <router-view></router-view>
   
    </div>
</template>
<script>
import Nav from "../components/nav"
export default {
    name:"Layout",
    components:{Nav},
    data(){
        return{}
    }
    
}
</script>