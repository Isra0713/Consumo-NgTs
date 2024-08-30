import { Routes } from '@angular/router';





export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component'),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component')
                    
            },
            {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component')
                    
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/contact/contact.component')
                    
            },
            {
                path: '**',
                redirectTo: 'home',
            }
        ]
    }
];
            
        
    



