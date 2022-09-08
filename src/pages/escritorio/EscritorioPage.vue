<template>    	
		<TabView>    
		<TabPanel >
			<template #header>
				<i class="pi pi-fw eva eva-home"></i>
				<span>Contabilidade</span>
			</template>
			<ContabilidadePage />
		</TabPanel>
		<TabPanel>
			<template #header>
				<i class="pi pi-fw eva eva-layers"></i>
				<span>Departamentos</span>
			</template>
				<DepartamentosPage />	
		</TabPanel>
		<TabPanel>
			<template #header>
				<i class="pi pi-fw eva eva-shield"></i>
				<span>Permissões</span>
			</template>
			<PermissoesPage />		
		</TabPanel>
		<TabPanel>
			<template #header>
				<i class="pi pi-fw eva eva-people"></i>
				<span>Usuários</span>
			</template>
			<UsuariosPage />		
		</TabPanel>
		<TabPanel>
			<template #header>
				<i class="pi pi-fw pi-sitemap"></i>
				<span>Empresas</span>				
			</template>
			<EmpresasPage />		
		</TabPanel>
	</TabView>
  
</template>

<script>
import ContabilidadePage from './ContabilidadePage.vue'
import DepartamentosPage from './DepartamentosPage.vue'
import EmpresasPage from './EmpresasPage.vue'
import UsuariosPage from './UsuariosPage.vue'
import PermissoesPage from './PermissoesPage.vue'



export default {
    components: { 
		ContabilidadePage,
		DepartamentosPage,
		EmpresasPage,
		PermissoesPage,
		UsuariosPage
		},    
    name: "EscritorioPage",   
}


</script>

<style>
	#btn {
	background-color: #bd153d;
   }
</style>