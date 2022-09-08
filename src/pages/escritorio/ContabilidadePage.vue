<template>
     <Message :msg="msg" v-show="msg" />
    <form id="Contabilidade-form" method="POST" @submit="createCont">
        <div class="px-2 py-4 md:px-4 lg:px-4">
            <div class="text-900 font-medium text-xl mb-3">Escritório</div>
            <div class="surface-card p-4 shadow-2 border-round p-fluid">
                <div class="grid formgrid p-fluid">
                    <div class="field mb-4 col-8 md:col-8">
                        <label for="cnpj" class="font-medium text-900">CNPJ</label>
                        <InputMask id="cnpj" type="text" 
                        placeholder="Digite o Cnpj"
                        autocomplete="off" 
                        v-model="cnpj_cont"
                        mask="99.999.999/9999-99"
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="razao_social" class="font-medium text-900">Razão Social</label>
                        <InputText id="razao_social" type="text"
                        placeholder="Digite a Razão Social"
                        autocomplete="off"  
                        v-model="razao_social_cont" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="nome_fantasia" class="font-medium text-900">Nome Fantasia</label>
                        <InputText id="nome_fantasia" type="text"
                        placeholder="Digite o Nome Fantasia"                       
                        autocomplete="off" 
                        v-model="nome_fantasia_cont" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="fone_contato" class="font-medium text-900">Fone</label>
                        <InputMask id="fone_contato" type="text" 
                        placeholder="Digite o Telefone"
                        autocomplete="off"
                        v-model="fone_cont" 
                        mask="(99) 9999-9999"
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="email" class="font-medium text-900">E-mail</label>
                        <InputText id="email" type="text"
                        placeholder="Digite o Email"
                        autocomplete="off"
                        v-model="email_cont" 
                        />
                    </div>                   
                </div>    
            </div>           
        </div>
        <div class="field mb-4 col-12 md:col-2">
            <Button
            label="Salvar"            
            class="w-full border-red-900"                    
            type="submit" 
            value="Criar_form_Contabilidade"
            id="btn"
            ></Button>  
        </div>
          
    </form>         
</template>

<script>

export default {
    name: "ContabilidadePage",
    data() {
        return {

            cnpj_cont: null,
            razao_social_cont: null,
            nome_fantasia_cont: null,
            fone_cont: null,
            email_cont: null,
            msg: null,

        }
    },

    methods: {
        async createCont(e) {
            e.preventDefault();

            const data = {
                cnpj_cont: this.cnpj_cont,
                razao_social_cont: this.razao_social_cont,
                nome_fantasia_cont: this.nome_fantasia_cont,
                fone_cont: this.fone_cont,
                email_cont: this.email_cont,
            }

            const dataJson = JSON.stringify(data) 
            

            
            const req = await fetch("http://localhost:3000/contabilidade", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });

            const res = await req.json()

            console.log(res)

            alert("Cadastro Salvo")

            // clear message
            setTimeout(() => this.msg = "", 3000)
            // limpar campos
            this.cnpj_cont = ''
            this.razao_social_cont = ''
            this.nome_fantasia_cont = ''
            this.fone_cont = ''
            this.email_cont = '' 
        }
    }
 }
</script>

<style>
    #btn {
        background-color: #bd153d;
    }
</style>

