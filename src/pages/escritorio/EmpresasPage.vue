<template>     
    <form id="Empresas-form" method="POST" @submit="createEmpresas">
        <div class="surface-ground px-2 py-4 md:px-4 lg:px-4">
            <div class="text-900 font-medium text-xl mb-3">Cadastro Empresas</div>
            <div class="surface-card p-4 shadow-2 border-round p-fluid">
                <div class="grid formgrid p-fluid">
                    <div class="field mb-4 col-8 md:col-6">
                        <label for="cnpj" class="font-medium text-900">CNPJ Empresa</label>
                        <InputMask id="cnpj" type="text" 
                        placeholder="Digite o Cnpj da Empresa"
                        autocomplete="off" 
                        v-model="cnpj_empresa"
                        mask="99.999.999/9999-99"
                        />
                    </div>
                    <div class="field mb-4 col-8 md:col-6">
                        <label for="cnpj" class="font-medium text-900">Codigo ERP</label>
                        <InputText id="cnpj" type="text" 
                        placeholder="Digite o Codigo ERP"
                        autocomplete="off" 
                        v-model="erp_empresa"
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="razao_social" class="font-medium text-900">Razão Social</label>
                        <InputText id="razao_social" type="text"
                        placeholder="Digite a Razão Social"
                        autocomplete="off"  
                        v-model="razao_social_empresa" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="nome_fantasia" class="font-medium text-900">Nome Fantasia</label>
                        <InputText id="nome_fantasia" type="text"
                        placeholder="Digite o Nome Fantasia"                       
                        autocomplete="off" 
                        v-model="nome_fantasia_empresa" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="fone_contato" class="font-medium text-900">Fone</label>
                        <InputMask id="fone_contato" type="text" 
                        placeholder="Digite o Telefone"
                        autocomplete="off"
                        v-model="fone_empresa"
                        mask="(99) 9999-9999" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label for="email" class="font-medium text-900">E-mail</label>
                        <InputText id="email" type="text"
                        placeholder="Digite o Email"
                        autocomplete="off"
                        v-model="email_empresa" 
                        />
                    </div>
                    <div class="field mb-4 col-12 md:col-6">
                        <label class="field mb-2 col-12 md:col-6" for="tipoEmpresa">Tipo de Empresa:</label>
                        <Dropdown v-model="tipoEmpresa" :options="Tipo" optionLabel="name" placeholder="Selecione Matriz ou Filial" />
                    </div>                    
                </div>
            </div>
        </div>
        <div class="field mb-4 col-12 md:col-2">
            <Button
            label="Salvar"            
            class="w-full border-red-900"                    
            type="submit" 
            value="Criar_form_empresa"
            id="btn"
            ></Button>  
        </div>
    </form>
       
</template>

<script>

export default {
    name: "EmpresasPage",
    data() {
        return {

            cnpj_empresa: null,
            razao_social_empresa: null,
            nome_fantasia_empresa: null,
            fone_empresa: null,
            email_empresa: null,
            tipoEmpresa: null,
            
            erp_empresa: null,
            msg: null,
            
            Tipo: [
                {name: 'Matriz'},
                {name: 'Filial'},
                
            ]

        }
    },

    

    methods: {

         async getTipoEmpresas() {
            const req = await fetch('http://localhost:3000/Filial_Matriz')
            const data = await req.json()

            this.tipoEmpresas = data.tipoEmpresas
            
            },
        async createEmpresas(e) {
            e.preventDefault();

            const data = {
                cnpj_empresa: this.cnpj_empresa,
                razao_social_empresa: this.razao_social_empresa,
                nome_fantasia_empresa: this.nome_fantasia_empresa,
                fone_empresa: this.fone_empresa,
                email_empresa: this.email_empresa,
                tipoEmpresa: this.tipoEmpresa,              
                erp_empresa: this.erp_empresa,
            }

            const dataJson = JSON.stringify(data) 

            
            const req = await fetch("http://localhost:3000/empresas", {
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
            this.cnpj_empresa = ''
            this.razao_social_empresa = ''
            this.nome_fantasia_empresa = ''
            this.fone_empresa = ''
            this.email_empresa = ''
            this.tipoEmpresa = ''
            this.erp_empresa = '' 
        }
    }
 }
</script>

<style>
    #btn {
       background-color: #bd153d;
   }
</style>