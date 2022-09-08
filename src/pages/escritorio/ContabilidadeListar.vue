<template>
     
    <form id="Contabilidade-form" method="POST" @submit="SalveCont">
        
        <div class="flex mb-4 col-12 md:col-2">
            <Button
            label="Salvar"            
            class="w-full bg-green-500 border-red-900"                    
            type="submit" 
            value="Salvar"
            id="btn"
            ></Button>  
        
            <Button
            label="Voltar"            
            class="w-full bg-green-500 border-red-900"                    
            type="submit" 
            value="Voltar"
            id="btn"
            ></Button>  
        </div>
          
    </form>         
</template>

<script>

import Contabilidade from '../../plugins/contabilidade'

export default {

    name: "ContabilidadeListar",

    mounted() {
        Contabilidade.listar().then(resposta => {
            console.log(resposta)
        })
    }
 }
</script>

