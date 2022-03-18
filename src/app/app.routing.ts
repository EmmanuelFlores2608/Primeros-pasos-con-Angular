// Importar módulos del router de Angular
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

//Importar los componentes
import { HomeComponent } from './home/home.component'
import { tenisComponent } from './tenis/tenis.component'
import { VideojuegoComponent } from './videojuego/videojuego.component'
import { CursosComponent } from './cursos/cursos.component'
import { ExternoComponent } from './externo/externo.component'
import { ContactoComponent } from './contacto/contacto.component'

//Array de configuración de las rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'tenis', component: tenisComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    {path:'externo', component: ExternoComponent},
    {path:'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent}
];

//Exportar el módulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);